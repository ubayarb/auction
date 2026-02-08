# =====================================================
# ELAND - NestJS Service Dockerfile (Multi-stage)
# =====================================================

FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@9 --activate
WORKDIR /app

# -------- Dependencies --------
FROM base AS deps
COPY pnpm-workspace.yaml pnpm-lock.yaml* package.json ./
COPY packages/shared-types/package.json ./packages/shared-types/

ARG SERVICE_NAME
COPY services/${SERVICE_NAME}/package.json ./services/${SERVICE_NAME}/

RUN pnpm install --frozen-lockfile 2>/dev/null || pnpm install

# -------- Build --------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/packages/shared-types/node_modules/ ./packages/shared-types/node_modules/
COPY --from=deps /app/services/${SERVICE_NAME}/node_modules/ ./services/${SERVICE_NAME}/node_modules/

COPY packages/shared-types ./packages/shared-types
ARG SERVICE_NAME
COPY services/${SERVICE_NAME} ./services/${SERVICE_NAME}

WORKDIR /app/services/${SERVICE_NAME}
RUN npx prisma generate 2>/dev/null || true
RUN npx nest build 2>/dev/null || npx tsc

# -------- Production --------
FROM base AS production
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
ARG SERVICE_NAME
COPY --from=build /app/services/${SERVICE_NAME}/dist ./dist
COPY --from=build /app/services/${SERVICE_NAME}/prisma ./prisma
COPY --from=build /app/services/${SERVICE_NAME}/node_modules/.prisma/ ./node_modules/.prisma/

EXPOSE 3000

CMD ["node", "dist/main.js"]
