# =====================================================
# ELAND - Үл хөдлөх хөрөнгийн нэгдсэн платформ
# =====================================================

## 🏗️ Архитектур

```
ELAND Platform (Monorepo)
├── apps/
│   └── web/                    # Next.js 15 Web App
├── services/
│   ├── auth-service/           # Нэвтрэлт & RBAC (port 3001)
│   ├── property-service/       # Зар & PostGIS (port 3002)
│   ├── contract-service/       # Гэрээ & Гарын үсэг (port 3003)
│   ├── auction-service/        # Дуудлага худалдаа & WebSocket (port 3004)
│   ├── payment-service/        # Төлбөр & Эскро (port 3005)
│   └── notification-service/   # Мэдэгдэл & И-мэйл (port 3006)
├── packages/
│   └── shared-types/           # Нийтлэг TypeScript type-ууд
├── docs/                       # Solution Blueprint баримт бичгүүд
└── infra/                      # Docker & CI/CD тохиргоо
```

## 🚀 Хурдан эхлүүлэх

### Урьдчилсан нөхцөл

- **Node.js** 22 LTS
- **pnpm** 9+
- **Docker** & **Docker Compose**

### 1. Dependency суулгах

```bash
pnpm install
```

### 2. Infrastructure ажиллуулах

```bash
docker compose up -d postgres redis minio mailhog
```

### 3. Database migration

```bash
# Сервис бүрд
cd services/auth-service && npx prisma migrate dev --name init
cd services/property-service && npx prisma migrate dev --name init
cd services/auction-service && npx prisma migrate dev --name init
cd services/contract-service && npx prisma migrate dev --name init
cd services/payment-service && npx prisma migrate dev --name init
cd services/notification-service && npx prisma migrate dev --name init
```

### 4. Seed data

```bash
cd services/auth-service && npx ts-node prisma/seed.ts
```

### 5. Хөгжүүлэлт ажиллуулах

```bash
# Бүгдийг нэг дор (Turborepo)
pnpm dev

# Эсвэл тус тусад нь
cd services/auth-service && pnpm dev
cd services/property-service && pnpm dev
cd apps/web && pnpm dev
```

### 6. Docker-оор бүх зүйлийг ажиллуулах

```bash
docker compose up -d
```

## 📋 Хүснэгт

| Үйлчилгээ | Порт | Тайлбар |
|------------|------|---------|
| Web App | 3000 | Next.js frontend |
| Auth Service | 3001 | Нэвтрэлт, RBAC |
| Property Service | 3002 | Зар, PostGIS хайлт |
| Contract Service | 3003 | Гэрээ, гарын үсэг |
| Auction Service | 3004 | Дуудлага худалдаа, WS |
| Payment Service | 3005 | Төлбөр, эскро |
| Notification Service | 3006 | Мэдэгдэл, и-мэйл |
| PostgreSQL | 5432 | Өгөгдлийн сан |
| Redis | 6379 | Cache, session |
| MinIO | 9000/9001 | Зураг хадгалалт |
| MailHog | 8025 | И-мэйл тест UI |

## 👤 Тест хэрэглэгч

- **И-мэйл:** admin@eland.mn
- **Нууц үг:** Admin@123
- **Роль:** ADMIN

## 🛡️ Хэрэглэгчийн роль

| Роль | Тайлбар |
|------|---------|
| BUYER | Худалдан авагч |
| OWNER | Эзэмшигч |
| AGENT | Зуучлагч |
| COMPANY | Компани |
| BANK | Банк |
| NOTARY | Нотариат |
| GOVERNMENT | Засгийн газар |
| ADMIN | Администратор |

## 📚 Баримт бичиг

- [Solution Blueprint](docs/00-SOLUTION-BLUEPRINT.md)
- [Архитектур](docs/01-ARCHITECTURE.md)
- [Өгөгдлийн бүтэц](docs/02-DATABASE-SCHEMA.md)
- [API Specification](docs/03-API-SPECIFICATION.md)
- [Бизнес дүрэм](docs/04-BUSINESS-RULES.md)
- [Deployment Guide](docs/05-DEPLOYMENT-GUIDE.md)

## 📄 Лиценз

MIT License © 2024 ELAND
