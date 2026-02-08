# 🚀 ELAND — ХЭРЭГЖҮҮЛЭХ, БАЙРШУУЛАХ ЗААВАР
## Deployment & Operations Guide v1.0

---

## 1. ТӨСЛИЙН БҮТЭЦ (Project Structure)

```
eland/
├── apps/
│   ├── web/                          # Next.js Web Application
│   │   ├── src/
│   │   │   ├── app/                  # App Router pages
│   │   │   │   ├── (auth)/           # Auth pages group
│   │   │   │   │   ├── login/
│   │   │   │   │   ├── register/
│   │   │   │   │   └── verify/
│   │   │   │   ├── (main)/           # Main pages group
│   │   │   │   │   ├── properties/
│   │   │   │   │   │   ├── [id]/
│   │   │   │   │   │   ├── new/
│   │   │   │   │   │   └── map/
│   │   │   │   │   ├── auctions/
│   │   │   │   │   │   ├── [id]/
│   │   │   │   │   │   └── new/
│   │   │   │   │   ├── contracts/
│   │   │   │   │   ├── payments/
│   │   │   │   │   ├── messages/
│   │   │   │   │   └── profile/
│   │   │   │   ├── dashboard/        # User dashboard
│   │   │   │   ├── admin/            # Admin panel
│   │   │   │   └── layout.tsx
│   │   │   ├── components/
│   │   │   │   ├── ui/               # shadcn/ui components
│   │   │   │   ├── property/         # Property-specific components
│   │   │   │   ├── auction/          # Auction components
│   │   │   │   ├── contract/         # Contract components
│   │   │   │   ├── map/              # Map components
│   │   │   │   └── layout/           # Layout components
│   │   │   ├── hooks/                # Custom React hooks
│   │   │   ├── lib/                  # Utilities
│   │   │   ├── services/             # API service layer
│   │   │   ├── stores/               # Zustand stores
│   │   │   ├── types/                # TypeScript types
│   │   │   └── i18n/                 # Internationalization
│   │   ├── public/
│   │   ├── next.config.js
│   │   ├── tailwind.config.ts
│   │   └── package.json
│   │
│   ├── mobile/                       # React Native App
│   │   ├── src/
│   │   │   ├── screens/
│   │   │   ├── components/
│   │   │   ├── navigation/
│   │   │   ├── services/
│   │   │   └── stores/
│   │   └── package.json
│   │
│   └── admin/                        # Admin Dashboard (Next.js)
│       └── ...
│
├── services/                         # Backend Microservices
│   ├── auth-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── auth/
│   │   │   │   │   ├── auth.controller.ts
│   │   │   │   │   ├── auth.service.ts
│   │   │   │   │   ├── auth.module.ts
│   │   │   │   │   ├── dto/
│   │   │   │   │   ├── guards/
│   │   │   │   │   └── strategies/
│   │   │   │   ├── users/
│   │   │   │   ├── kyc/
│   │   │   │   └── roles/
│   │   │   ├── common/
│   │   │   │   ├── decorators/
│   │   │   │   ├── filters/
│   │   │   │   ├── interceptors/
│   │   │   │   └── pipes/
│   │   │   ├── config/
│   │   │   ├── prisma/
│   │   │   └── main.ts
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   ├── test/
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── property-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── properties/
│   │   │   │   ├── media/
│   │   │   │   ├── search/
│   │   │   │   ├── favorites/
│   │   │   │   └── cadastre/
│   │   │   └── ...
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── contract-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── contracts/
│   │   │   │   ├── templates/
│   │   │   │   ├── signatures/
│   │   │   │   └── pdf/
│   │   │   └── ...
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── auction-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── auctions/
│   │   │   │   ├── bids/
│   │   │   │   ├── rules/
│   │   │   │   └── websocket/
│   │   │   └── ...
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── payment-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── payments/
│   │   │   │   ├── escrow/
│   │   │   │   ├── ledger/
│   │   │   │   ├── providers/       # QPay, Banks
│   │   │   │   └── schedules/
│   │   │   └── ...
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── notification-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── email/
│   │   │   │   ├── sms/
│   │   │   │   ├── push/
│   │   │   │   └── in-app/
│   │   │   └── ...
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── analytics-service/            # Python FastAPI
│   │   ├── app/
│   │   │   ├── routers/
│   │   │   ├── models/
│   │   │   ├── ml/
│   │   │   └── main.py
│   │   ├── Dockerfile
│   │   └── requirements.txt
│   │
│   └── workflow-service/             # Temporal Workers
│       └── ...
│
├── packages/                         # Shared packages (monorepo)
│   ├── shared-types/                 # TypeScript types
│   ├── shared-utils/                 # Common utilities
│   ├── eslint-config/                # ESLint config
│   └── tsconfig/                     # TypeScript config
│
├── infrastructure/                   # IaC & DevOps
│   ├── terraform/
│   │   ├── environments/
│   │   │   ├── dev/
│   │   │   ├── staging/
│   │   │   └── production/
│   │   ├── modules/
│   │   │   ├── networking/
│   │   │   ├── kubernetes/
│   │   │   ├── database/
│   │   │   ├── redis/
│   │   │   ├── elasticsearch/
│   │   │   └── monitoring/
│   │   └── main.tf
│   │
│   ├── kubernetes/
│   │   ├── base/
│   │   │   ├── auth-service/
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── service.yaml
│   │   │   │   └── hpa.yaml
│   │   │   ├── property-service/
│   │   │   ├── auction-service/
│   │   │   ├── payment-service/
│   │   │   ├── ingress.yaml
│   │   │   └── namespace.yaml
│   │   ├── overlays/
│   │   │   ├── dev/
│   │   │   ├── staging/
│   │   │   └── production/
│   │   └── kustomization.yaml
│   │
│   ├── docker/
│   │   ├── docker-compose.yml        # Local development
│   │   ├── docker-compose.test.yml
│   │   └── .env.example
│   │
│   └── monitoring/
│       ├── prometheus/
│       │   └── prometheus.yml
│       ├── grafana/
│       │   └── dashboards/
│       └── alertmanager/
│           └── alertmanager.yml
│
├── scripts/                          # Helper scripts
│   ├── setup.sh
│   ├── seed-db.ts
│   ├── migrate.sh
│   └── deploy.sh
│
├── docs/                             # Documentation
│   ├── 00-SOLUTION-BLUEPRINT.md
│   ├── 01-ARCHITECTURE.md
│   ├── 02-DATABASE-SCHEMA.md
│   ├── 03-API-SPECIFICATION.md
│   ├── 04-BUSINESS-RULES.md
│   └── 05-DEPLOYMENT-GUIDE.md
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── cd-staging.yml
│       └── cd-production.yml
│
├── turbo.json                        # Turborepo config
├── package.json                      # Root package.json
├── pnpm-workspace.yaml
├── .env.example
├── .gitignore
└── README.md
```

---

## 2. LOCAL DEVELOPMENT SETUP

### 2.1 Шаардлага
```
- Node.js 22 LTS
- pnpm 9+
- Docker Desktop
- PostgreSQL 17 (via Docker)
- Redis 7 (via Docker)
```

### 2.2 Docker Compose (Local Development)

```yaml
# infrastructure/docker/docker-compose.yml

version: '3.9'

services:
  # ─────────────────────────────────────
  # PostgreSQL + PostGIS
  # ─────────────────────────────────────
  postgres:
    image: postgis/postgis:17-3.5
    container_name: eland-postgres
    environment:
      POSTGRES_DB: eland_dev
      POSTGRES_USER: eland
      POSTGRES_PASSWORD: eland_dev_2026
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init-db.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U eland"]
      interval: 10s
      timeout: 5s
      retries: 5

  # ─────────────────────────────────────
  # Redis
  # ─────────────────────────────────────
  redis:
    image: redis:7-alpine
    container_name: eland-redis
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes --maxmemory 256mb
    volumes:
      - redis_data:/data

  # ─────────────────────────────────────
  # Elasticsearch
  # ─────────────────────────────────────
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.15.0
    container_name: eland-elasticsearch
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ports:
      - "9200:9200"
    volumes:
      - elastic_data:/usr/share/elasticsearch/data

  # ─────────────────────────────────────
  # MinIO (S3-compatible)
  # ─────────────────────────────────────
  minio:
    image: minio/minio:latest
    container_name: eland-minio
    environment:
      MINIO_ROOT_USER: eland_minio
      MINIO_ROOT_PASSWORD: eland_minio_2026
    command: server /data --console-address ":9001"
    ports:
      - "9000:9000"
      - "9001:9001"
    volumes:
      - minio_data:/data

  # ─────────────────────────────────────
  # Kafka (for event streaming)
  # ─────────────────────────────────────
  kafka:
    image: confluentinc/cp-kafka:7.7.0
    container_name: eland-kafka
    environment:
      KAFKA_NODE_ID: 1
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092,CONTROLLER://0.0.0.0:9093
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_PROCESS_ROLES: broker,controller
      KAFKA_CONTROLLER_QUORUM_VOTERS: 1@localhost:9093
      KAFKA_CONTROLLER_LISTENER_NAMES: CONTROLLER
      CLUSTER_ID: 'eland-kafka-cluster-001'
    ports:
      - "9092:9092"

  # ─────────────────────────────────────
  # Kafka UI
  # ─────────────────────────────────────
  kafka-ui:
    image: provectuslabs/kafka-ui:latest
    container_name: eland-kafka-ui
    environment:
      KAFKA_CLUSTERS_0_NAME: local
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka:9092
    ports:
      - "8080:8080"
    depends_on:
      - kafka

  # ─────────────────────────────────────
  # Mailhog (Email testing)
  # ─────────────────────────────────────
  mailhog:
    image: mailhog/mailhog
    container_name: eland-mailhog
    ports:
      - "1025:1025"   # SMTP
      - "8025:8025"   # Web UI

volumes:
  postgres_data:
  redis_data:
  elastic_data:
  minio_data:
```

### 2.3 Эхлүүлэх алхам

```bash
# 1. Repo clone
git clone https://github.com/eland/eland-platform.git
cd eland-platform

# 2. Dependencies суулгах
pnpm install

# 3. Environment variables
cp .env.example .env
# Edit .env with your settings

# 4. Docker services эхлүүлэх
cd infrastructure/docker
docker compose up -d

# 5. Database migration
pnpm --filter auth-service prisma:migrate
pnpm --filter property-service prisma:migrate
pnpm --filter contract-service prisma:migrate
pnpm --filter auction-service prisma:migrate
pnpm --filter payment-service prisma:migrate

# 6. Seed data
pnpm run seed

# 7. Services эхлүүлэх
pnpm run dev    # All services + web app

# 8. Тусдаа эхлүүлэх
pnpm --filter web dev          # Web app: http://localhost:3000
pnpm --filter auth-service dev  # Auth:    http://localhost:3001
pnpm --filter property-service dev  # Property: http://localhost:3002
```

---

## 3. CI/CD PIPELINE

### 3.1 GitHub Actions — CI

```yaml
# .github/workflows/ci.yml

name: CI Pipeline

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [develop]

jobs:
  # ─────────────────────────────────────
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint
      - run: pnpm run type-check

  # ─────────────────────────────────────
  test:
    runs-on: ubuntu-latest
    needs: lint
    services:
      postgres:
        image: postgis/postgis:17-3.5
        env:
          POSTGRES_DB: eland_test
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
        ports: ['5432:5432']
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
      redis:
        image: redis:7-alpine
        ports: ['6379:6379']
    
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm run test
      - run: pnpm run test:e2e
      
      - name: Upload coverage
        uses: codecov/codecov-action@v4

  # ─────────────────────────────────────
  security:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4
      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          ignore-unfixed: true
          severity: 'CRITICAL,HIGH'

  # ─────────────────────────────────────
  build:
    runs-on: ubuntu-latest
    needs: [test, security]
    strategy:
      matrix:
        service: [auth, property, contract, auction, payment, notification, analytics]
    steps:
      - uses: actions/checkout@v4
      - name: Build Docker image
        run: |
          docker build -t eland/${{ matrix.service }}-service:${{ github.sha }} \
            -f services/${{ matrix.service }}-service/Dockerfile .
      - name: Push to ECR
        if: github.ref == 'refs/heads/develop'
        run: |
          aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_REGISTRY
          docker push eland/${{ matrix.service }}-service:${{ github.sha }}
```

### 3.2 GitHub Actions — CD (Staging)

```yaml
# .github/workflows/cd-staging.yml

name: Deploy to Staging

on:
  push:
    branches: [develop]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - uses: actions/checkout@v4
      
      - name: Configure kubectl
        uses: azure/k8s-set-context@v4
        with:
          kubeconfig: ${{ secrets.KUBE_CONFIG_STAGING }}
      
      - name: Update Kubernetes deployments
        run: |
          for service in auth property contract auction payment notification analytics; do
            kubectl set image deployment/${service}-service \
              ${service}-service=eland/${service}-service:${{ github.sha }} \
              -n eland-staging
          done
      
      - name: Wait for rollout
        run: |
          for service in auth property contract auction payment notification analytics; do
            kubectl rollout status deployment/${service}-service -n eland-staging --timeout=300s
          done
      
      - name: Run smoke tests
        run: pnpm run test:smoke --env staging
      
      - name: Notify on Slack
        if: always()
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          fields: repo,message,commit,author
```

### 3.3 GitHub Actions — CD (Production)

```yaml
# .github/workflows/cd-production.yml

name: Deploy to Production

on:
  push:
    tags: ['v*']

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production   # Requires manual approval
    steps:
      - uses: actions/checkout@v4
      
      # Canary deployment (10% → 50% → 100%)
      - name: Canary - 10%
        run: |
          kubectl apply -f infrastructure/kubernetes/overlays/production/canary-10.yaml
      
      - name: Health check - Canary
        run: |
          sleep 60
          pnpm run test:smoke --env production
      
      - name: Full rollout
        run: |
          kubectl apply -f infrastructure/kubernetes/overlays/production/
          
      - name: Verify deployment
        run: |
          kubectl rollout status deployment --all -n eland-production --timeout=600s
```

---

## 4. KUBERNETES DEPLOYMENT

### 4.1 Service Deployment бүдүүвч

```yaml
# infrastructure/kubernetes/base/auth-service/deployment.yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-service
  namespace: eland
  labels:
    app: auth-service
    version: v1
spec:
  replicas: 3
  selector:
    matchLabels:
      app: auth-service
  template:
    metadata:
      labels:
        app: auth-service
        version: v1
    spec:
      containers:
        - name: auth-service
          image: eland/auth-service:latest
          ports:
            - containerPort: 3001
          resources:
            requests:
              cpu: 250m
              memory: 256Mi
            limits:
              cpu: 500m
              memory: 512Mi
          env:
            - name: NODE_ENV
              value: production
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: eland-secrets
                  key: database-url
            - name: REDIS_URL
              valueFrom:
                secretKeyRef:
                  name: eland-secrets
                  key: redis-url
            - name: JWT_SECRET
              valueFrom:
                secretKeyRef:
                  name: eland-secrets
                  key: jwt-secret
          livenessProbe:
            httpGet:
              path: /health
              port: 3001
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 3001
            initialDelaySeconds: 5
            periodSeconds: 5
          startupProbe:
            httpGet:
              path: /health
              port: 3001
            failureThreshold: 30
            periodSeconds: 10
      imagePullSecrets:
        - name: ecr-credentials
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: auth-service-hpa
  namespace: eland
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: auth-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80
```

---

## 5. MONITORING & ALERTING

### 5.1 Prometheus Alerting Rules

```yaml
# infrastructure/monitoring/prometheus/alerts.yml

groups:
  - name: eland-critical
    rules:
      - alert: ServiceDown
        expr: up{job=~"eland-.*"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "{{ $labels.job }} service is down"

      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: "High error rate on {{ $labels.service }}"

      - alert: HighLatency
        expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 2
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "P95 latency > 2s on {{ $labels.service }}"

      - alert: DatabaseConnectionPoolExhausted
        expr: pg_stat_activity_count > pg_settings_max_connections * 0.8
        for: 2m
        labels:
          severity: critical

      - alert: AuctionServiceLatency
        expr: histogram_quantile(0.95, rate(bid_processing_duration_seconds_bucket[1m])) > 0.5
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Bid processing time exceeding 500ms"

      - alert: EscrowFundsMismatch
        expr: escrow_balance_check_failed > 0
        for: 0m
        labels:
          severity: critical
        annotations:
          summary: "Escrow balance mismatch detected!"
```

### 5.2 Grafana Dashboards

```
Dashboards:
├── Platform Overview
│   ├── Active users
│   ├── Requests per second
│   ├── Error rate
│   ├── Response time (p50, p95, p99)
│   └── Active auctions
│
├── Auction Dashboard
│   ├── Active auctions count
│   ├── Bids per minute
│   ├── Bid processing time
│   ├── WebSocket connections
│   └── Anti-sniping extensions
│
├── Payment Dashboard
│   ├── Daily transaction volume
│   ├── Escrow balance
│   ├── Payment success rate
│   ├── Provider response times
│   └── Revenue breakdown
│
├── Infrastructure
│   ├── CPU / Memory usage
│   ├── Pod count / HPA status
│   ├── Database connections
│   ├── Redis memory
│   ├── Kafka lag
│   └── Disk usage
│
└── Business Metrics
    ├── New registrations
    ├── Active listings
    ├── Conversion rate
    ├── Avg time to sell
    └── Revenue trend
```

---

## 6. ENVIRONMENT VARIABLES

```bash
# .env.example

# ─── App ───
NODE_ENV=development
APP_PORT=3000
APP_URL=http://localhost:3000
API_URL=http://localhost:3001

# ─── Database ───
DATABASE_URL=postgresql://eland:password@localhost:5432/eland_dev
DATABASE_REPLICA_URL=

# ─── Redis ───
REDIS_URL=redis://localhost:6379

# ─── Elasticsearch ───
ELASTICSEARCH_URL=http://localhost:9200

# ─── Auth ───
JWT_SECRET=your-super-secret-key-min-32-chars
JWT_ACCESS_EXPIRY=1h
JWT_REFRESH_EXPIRY=30d
BCRYPT_ROUNDS=12

# ─── OAuth ───
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=

# ─── e-Mongolia ───
E_MONGOLIA_API_URL=
E_MONGOLIA_API_KEY=
E_MONGOLIA_SECRET=

# ─── Storage (S3/MinIO) ───
S3_ENDPOINT=http://localhost:9000
S3_ACCESS_KEY=eland_minio
S3_SECRET_KEY=eland_minio_2026
S3_BUCKET=eland-media
S3_REGION=us-east-1

# ─── Kafka ───
KAFKA_BROKERS=localhost:9092
KAFKA_GROUP_ID=eland-services

# ─── Payment Providers ───
QPAY_API_URL=
QPAY_USERNAME=
QPAY_PASSWORD=
QPAY_INVOICE_CODE=

SOCIALPAY_API_URL=
SOCIALPAY_KEY=

# ─── Notifications ───
SMTP_HOST=localhost
SMTP_PORT=1025
SMTP_USER=
SMTP_PASS=

FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=

TWILIO_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE=

# ─── Maps ───
MAPBOX_ACCESS_TOKEN=

# ─── Cadastre ───
CADASTRE_API_URL=
CADASTRE_API_KEY=

# ─── Monitoring ───
SENTRY_DSN=
```

---

## 7. BACKUP & DISASTER RECOVERY

```
┌────────────────────────────────────────────────┐
│              BACKUP STRATEGY                    │
│                                                 │
│  Database:                                      │
│  ├── Full backup: Daily (02:00 UTC+8)          │
│  ├── Incremental: Every 6 hours                │
│  ├── WAL archiving: Continuous                 │
│  ├── Retention: 30 days (daily), 12mo (weekly) │
│  └── Storage: S3 cross-region                  │
│                                                 │
│  Files (S3):                                    │
│  ├── Cross-region replication                  │
│  └── Versioning enabled                        │
│                                                 │
│  Redis:                                         │
│  ├── RDB: Every 15 minutes                     │
│  └── AOF: Enabled (every second)               │
│                                                 │
│  RPO: < 1 hour                                 │
│  RTO: < 4 hours                                │
│                                                 │
│  DR Site: Secondary region (hot standby)       │
└────────────────────────────────────────────────┘
```

---

## 8. ХАМТРАН АЖИЛЛАХ ЗААВАР

### 8.1 Git Workflow

```
main ────────────────────────────────────────── Production
  │
  └── develop ──────────────────────────────── Staging
        │
        ├── feature/ELAND-123-user-auth ────── Feature branches
        ├── feature/ELAND-456-auction-bid
        ├── bugfix/ELAND-789-bid-error
        └── hotfix/ELAND-999-security-patch ── Direct to main
```

### 8.2 Commit Convention

```
feat(auction): add anti-sniping extension logic
fix(payment): resolve escrow release timing issue  
docs(api): update auction endpoint documentation
refactor(property): optimize search query performance
test(contract): add e-signature flow tests
chore(deps): upgrade NestJS to v11.2
ci(deploy): add canary deployment step
```

### 8.3 Code Review Checklist

```
□ Business logic нь spec-д нийцэж байна уу?
□ Security vulnerability байхгүй юу?
□ Unit test бичсэн үү? (coverage >= 80%)
□ API endpoint document хийсэн үү?
□ Error handling зөв хийсэн үү?
□ Input validation бүрэн хийсэн үү?
□ Audit log бичигдэж байна уу?
□ Performance impact шалгасан уу?
□ Migration script бэлэн үү?
□ Environment variable нэмсэн бол .env.example шинэчилсэн үү?
```

---

## 9. ХАРИУЦЛАГЫН МАТРИЦ (RACI)

```
Task                       | PM  | Dev Lead | Dev | DevOps | QA  | Designer
───────────────────────────────────────────────────────────────────────────
Requirements               | R   | A        | C   | I      | C   | C
Architecture               | I   | R/A      | C   | C      | I   | I
UI/UX Design               | C   | I        | C   | I      | I   | R/A
Development                | I   | A        | R   | C      | I   | I
Code Review                | I   | R        | R   | C      | I   | I
Testing                    | I   | A        | C   | I      | R   | I
Deployment                 | I   | A        | C   | R      | C   | I
Monitoring                 | I   | C        | I   | R/A    | I   | I
Incident Response          | I   | R        | C   | R      | I   | I

R=Responsible  A=Accountable  C=Consulted  I=Informed
```

---

*Энэ нь ELAND Платформын бүрэн Solution Blueprint юм.*  
*Бүх 6 баримт бичиг нь бодит хэрэгжилтэд шууд ашиглагдах боломжтой.*
