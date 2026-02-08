#!/bin/bash
# =====================================================
# ELAND Platform — Production Deployment Script
# =====================================================
# Ажиллуулах: bash scripts/deploy.sh
# =====================================================

set -e

echo "============================================="
echo "  ELAND Platform — Production Deploy"
echo "============================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check .env.production exists
if [ ! -f .env.production ]; then
    echo -e "${RED}ERROR: .env.production файл олдсонгүй!${NC}"
    echo "  cp .env.production.example .env.production"
    echo "  nano .env.production"
    exit 1
fi

# Load env
export $(grep -v '^#' .env.production | xargs)

echo -e "${YELLOW}1. Docker images build хийж байна...${NC}"
docker compose -f docker-compose.prod.yml --env-file .env.production build --no-cache

echo -e "${YELLOW}2. Services эхлүүлж байна...${NC}"
docker compose -f docker-compose.prod.yml --env-file .env.production up -d

echo -e "${YELLOW}3. PostgreSQL бэлэн болохыг хүлээж байна...${NC}"
sleep 10

echo -e "${YELLOW}4. Database migration ажиллуулж байна...${NC}"
services=("auth-service" "property-service" "contract-service" "auction-service" "payment-service" "notification-service")
containers=("eland-auth" "eland-property" "eland-contract" "eland-auction" "eland-payment" "eland-notification")

for i in "${!services[@]}"; do
    echo "  → ${services[$i]} prisma db push..."
    docker exec ${containers[$i]} npx prisma db push --skip-generate 2>/dev/null || true
done

echo -e "${YELLOW}5. Auth service seed (admin user)...${NC}"
docker exec eland-auth npx prisma db seed 2>/dev/null || echo "  Seed already exists or not configured"

echo ""
echo -e "${GREEN}=============================================${NC}"
echo -e "${GREEN}  ✓ ELAND Platform амжилттай deploy хийгдлээ!${NC}"
echo -e "${GREEN}=============================================${NC}"
echo ""
echo "  Сервисүүдийн статус:"
docker compose -f docker-compose.prod.yml ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"
echo ""
echo "  Логоор хянах:"
echo "    docker compose -f docker-compose.prod.yml logs -f"
echo ""

if [ -n "$PUBLIC_URL" ]; then
    echo -e "  Веб хуудас: ${GREEN}${PUBLIC_URL}${NC}"
fi
