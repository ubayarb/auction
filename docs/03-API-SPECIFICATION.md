# 🔌 ELAND — API ТОДОРХОЙЛОЛТ
## API Specification v1.0

---

## 1. API ЕРӨНХИЙ БҮТЭЦ

### 1.1 Base URL
```
Production:  https://api.eland.mn/v1
Staging:     https://api-staging.eland.mn/v1
Development: http://localhost:3000/api/v1
```

### 1.2 Authentication
```
Authorization: Bearer <access_token>
X-Refresh-Token: <refresh_token>  (for token refresh)
```

### 1.3 Response Format
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  },
  "timestamp": "2026-02-07T10:30:00Z"
}
```

### 1.4 Error Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Талбарын утга буруу байна",
    "details": [
      {
        "field": "price",
        "message": "Үнэ 0-ээс их байх ёстой"
      }
    ]
  },
  "timestamp": "2026-02-07T10:30:00Z"
}
```

### 1.5 HTTP Status Codes

| Code | Тайлбар |
|------|---------|
| 200 | Амжилттай |
| 201 | Шинээр үүсгэсэн |
| 204 | Амжилттай (агуулгагүй) |
| 400 | Буруу хүсэлт |
| 401 | Нэвтрээгүй |
| 403 | Эрх хүрэлцэхгүй |
| 404 | Олдсонгүй |
| 409 | Давхардсан мэдээлэл |
| 422 | Validation алдаа |
| 429 | Rate limit хэтэрсэн |
| 500 | Серверийн алдаа |

---

## 2. AUTH SERVICE API

### 2.1 Бүртгэл & Нэвтрэлт

```yaml
# ─────────────────────────────────────────
# POST /auth/register
# Шинэ хэрэглэгч бүртгэх
# ─────────────────────────────────────────
Request:
  body:
    email: string (required)
    phone: string (required)      # "+976XXXXXXXX"
    password: string (required)   # min 8, uppercase, lowercase, number
    first_name: string (required)
    last_name: string (required)
    role: string                  # "buyer" | "owner" | "agent"

Response 201:
  {
    "success": true,
    "data": {
      "user": {
        "id": "uuid",
        "email": "user@example.com",
        "status": "pending"
      },
      "message": "Баталгаажуулах код имэйл рүү илгээлээ"
    }
  }

# ─────────────────────────────────────────
# POST /auth/login
# Нэвтрэх
# ─────────────────────────────────────────
Request:
  body:
    email: string (required)
    password: string (required)
    device_info: object           # {platform, os, browser}

Response 200:
  {
    "success": true,
    "data": {
      "access_token": "eyJhbGci...",
      "refresh_token": "eyJhbGci...",
      "expires_in": 3600,
      "user": {
        "id": "uuid",
        "email": "user@example.com",
        "roles": ["buyer", "owner"],
        "kyc_status": "verified",
        "profile": {
          "first_name": "Бат",
          "last_name": "Дорж",
          "avatar_url": "https://..."
        }
      }
    }
  }

# ─────────────────────────────────────────
# POST /auth/refresh
# Token шинэчлэх
# ─────────────────────────────────────────
Request:
  body:
    refresh_token: string (required)

Response 200:
  {
    "access_token": "new_token...",
    "refresh_token": "new_refresh...",
    "expires_in": 3600
  }

# ─────────────────────────────────────────
# POST /auth/logout
# Гарах
# ─────────────────────────────────────────
Headers: Authorization: Bearer <token>
Response 204: No Content

# ─────────────────────────────────────────
# POST /auth/verify-email
# Имэйл баталгаажуулах
# ─────────────────────────────────────────
Request:
  body:
    code: string (required)       # 6 digit code

# ─────────────────────────────────────────
# POST /auth/forgot-password
# Нууц үг сэргээх
# ─────────────────────────────────────────
Request:
  body:
    email: string (required)

# ─────────────────────────────────────────
# POST /auth/reset-password
# Нууц үг шинэчлэх
# ─────────────────────────────────────────
Request:
  body:
    token: string (required)
    new_password: string (required)

# ─────────────────────────────────────────
# POST /auth/kyc/verify
# KYC баталгаажуулалт эхлүүлэх
# ─────────────────────────────────────────
Headers: Authorization: Bearer <token>
Request:
  body:
    verification_type: "e_mongolia" | "document"
    register_number: string       # Регистрийн дугаар (for e-Mongolia)
    document_type: string         # passport, national_id
    document_front: file          # Upload
    document_back: file           # Upload
    selfie: file                  # Upload

Response 200:
  {
    "success": true,
    "data": {
      "verification_id": "uuid",
      "status": "pending",
      "message": "KYC баталгаажуулалт хүлээгдэж байна"
    }
  }
```

---

## 3. PROPERTY SERVICE API

### 3.1 Объект CRUD

```yaml
# ─────────────────────────────────────────
# GET /properties
# Объектуудын жагсаалт (хайлт, шүүлт)
# ─────────────────────────────────────────
Query Parameters:
  # Pagination
  page: number (default: 1)
  limit: number (default: 20, max: 100)
  
  # Шүүлт
  type: string                    # apartment, house, office, land
  transaction: string             # sale, rent, auction
  category_id: uuid
  city: string
  district: string
  
  # Үнэ
  price_min: number
  price_max: number
  
  # Хэмжээ
  area_min: number
  area_max: number
  rooms_min: number
  rooms_max: number
  
  # Байршил
  lat: number                     # Төвийн цэг
  lng: number
  radius: number                  # Метрээр (default: 5000)
  bounds: string                  # "lat1,lng1,lat2,lng2" (bounding box)
  
  # Бусад
  has_parking: boolean
  has_elevator: boolean
  floor_min: number
  floor_max: number
  year_built_min: number
  condition: string
  furniture: string
  
  # Эрэмбэ
  sort: string                    # price_asc, price_desc, newest, popular, nearest
  
  # Хайлт
  q: string                      # Full-text search

Response 200:
  {
    "success": true,
    "data": [
      {
        "id": "uuid",
        "title": "3 өрөө байр, Баянзүрх",
        "slug": "3-uruu-bair-bayanzurkh-uuid",
        "property_type": "apartment",
        "transaction_type": "sale",
        "price": 250000000,
        "price_per_sqm": 3125000,
        "area_total": 80,
        "rooms": 3,
        "bedrooms": 2,
        "bathrooms": 1,
        "floor": 5,
        "total_floors": 16,
        "address": "БЗД, 3-р хороо",
        "district": "Баянзүрх",
        "location": { "lat": 47.9184, "lng": 106.9177 },
        "status": "active",
        "is_verified": true,
        "thumbnail": "https://cdn.eland.mn/props/xxx/thumb.jpg",
        "media_count": { "images": 12, "videos": 1 },
        "owner": {
          "id": "uuid",
          "display_name": "Бат Д.",
          "avatar_url": "https://..."
        },
        "view_count": 234,
        "favorite_count": 15,
        "published_at": "2026-02-01T10:00:00Z",
        "is_favorited": false
      }
    ],
    "meta": {
      "page": 1,
      "limit": 20,
      "total": 1523,
      "totalPages": 77
    }
  }

# ─────────────────────────────────────────
# GET /properties/:id
# Объектын дэлгэрэнгүй
# ─────────────────────────────────────────
Response 200:
  {
    "success": true,
    "data": {
      "id": "uuid",
      "title": "3 өрөө байр, Баянзүрх",
      "description": "Шинэ засвартай, тохилог...",
      "property_type": "apartment",
      "transaction_type": "sale",
      "price": 250000000,
      "price_currency": "MNT",
      "price_per_sqm": 3125000,
      "price_negotiable": true,
      "area_total": 80,
      "area_living": 65,
      "rooms": 3,
      "bedrooms": 2,
      "bathrooms": 1,
      "floor": 5,
      "total_floors": 16,
      "year_built": 2020,
      "parking_spaces": 1,
      "has_elevator": true,
      "has_balcony": true,
      "heating_type": "central",
      "condition": "renovated",
      "furniture": "furnished",
      "address": "БЗД, 3-р хороо, Нарны зам 45",
      "city": "Улаанбаатар",
      "district": "Баянзүрх",
      "khoroo": "3-р хороо",
      "location": { "lat": 47.9184, "lng": 106.9177 },
      "cadastre_number": "01-0123-4567",
      "cadastre_verified": true,
      "features": ["garage", "security", "playground", "gym"],
      "media": [
        {
          "id": "uuid",
          "type": "image",
          "url": "https://cdn.eland.mn/props/xxx/1.jpg",
          "thumbnail_url": "https://cdn.eland.mn/props/xxx/1_thumb.jpg",
          "is_primary": true,
          "sort_order": 0
        }
      ],
      "price_history": [
        { "date": "2026-01-15", "price": 260000000 },
        { "date": "2026-02-01", "price": 250000000 }
      ],
      "owner": {
        "id": "uuid",
        "display_name": "Бат Д.",
        "avatar_url": "https://...",
        "phone": "+976****1234",
        "verified": true
      },
      "agent": null,
      "stats": {
        "view_count": 234,
        "favorite_count": 15,
        "inquiry_count": 5
      },
      "similar_properties": [ ... ],
      "is_favorited": false,
      "published_at": "2026-02-01T10:00:00Z"
    }
  }

# ─────────────────────────────────────────
# POST /properties
# Объект шинээр бүртгэх
# Auth: owner, agent, company
# ─────────────────────────────────────────
Request:
  Content-Type: multipart/form-data
  body:
    title: string (required)
    description: string
    property_type: string (required)
    transaction_type: string (required)
    category_id: uuid (required)
    price: number (required)
    price_negotiable: boolean
    area_total: number (required)
    area_living: number
    address: string (required)
    city: string (required)
    district: string (required)
    khoroo: string
    lat: number (required)
    lng: number (required)
    rooms: number
    bedrooms: number
    bathrooms: number
    floor: number
    total_floors: number
    year_built: number
    parking_spaces: number
    has_elevator: boolean
    has_balcony: boolean
    heating_type: string
    condition: string
    furniture: string
    cadastre_number: string
    features: string[]
    images: File[] (max 30, max 10MB each)
    videos: File[] (max 3, max 100MB each)

Response 201:
  {
    "success": true,
    "data": {
      "id": "uuid",
      "status": "pending",
      "message": "Объект амжилттай бүртгэгдлээ. Баталгаажуулалт хүлээгдэж байна."
    }
  }

# ─────────────────────────────────────────
# PUT /properties/:id
# Объект засах
# ─────────────────────────────────────────

# ─────────────────────────────────────────
# DELETE /properties/:id 
# Объект устгах (soft delete)
# ─────────────────────────────────────────

# ─────────────────────────────────────────
# POST /properties/:id/favorite
# Дуртай зарт нэмэх
# ─────────────────────────────────────────

# ─────────────────────────────────────────
# DELETE /properties/:id/favorite
# Дуртай зараас хасах
# ─────────────────────────────────────────

# ─────────────────────────────────────────
# GET /properties/:id/similar
# Ижил төстэй объектууд
# ─────────────────────────────────────────

# ─────────────────────────────────────────
# POST /properties/:id/inquire
# Лавлагаа илгээх
# ─────────────────────────────────────────
Request:
  body:
    message: string (required)

# ─────────────────────────────────────────
# GET /properties/map
# Газрын зураг дээрх объектууд
# ─────────────────────────────────────────
Query Parameters:
  bounds: string (required)       # "lat1,lng1,lat2,lng2"
  zoom: number
  type: string
  transaction: string
  price_min: number
  price_max: number

Response 200:
  {
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": { "type": "Point", "coordinates": [106.9177, 47.9184] },
          "properties": {
            "id": "uuid",
            "title": "3 өрөө байр",
            "price": 250000000,
            "thumbnail": "https://...",
            "property_type": "apartment"
          }
        }
      ]
    }
  }
```

---

## 4. CONTRACT SERVICE API

```yaml
# ─────────────────────────────────────────
# GET /contracts
# Миний гэрээнүүд
# ─────────────────────────────────────────
Query: status, type, page, limit

# ─────────────────────────────────────────
# POST /contracts
# Гэрээ үүсгэх
# ─────────────────────────────────────────
Request:
  body:
    template_id: uuid
    property_id: uuid (required)
    buyer_id: uuid (required)
    type: "sale" | "rent" | "auction_sale"
    agreed_price: number (required)
    deposit_amount: number
    deposit_deadline: datetime
    payment_terms: object
    # Түрээсийн нэмэлт
    rent_start_date: date
    rent_end_date: date
    rent_monthly: number
    rent_deposit_months: number
    special_conditions: string[]

Response 201:
  {
    "data": {
      "id": "uuid",
      "contract_number": "ELAND-2026-000042",
      "status": "draft",
      "pdf_preview_url": "https://...",
      "signing_url": "https://sign.eland.mn/contract/uuid"
    }
  }

# ─────────────────────────────────────────
# POST /contracts/:id/sign
# Гэрээнд гарын үсэг зурах
# ─────────────────────────────────────────
Request:
  body:
    signature_data: string        # Base64 signature image
    otp_code: string              # 2FA verification

# ─────────────────────────────────────────
# GET /contracts/:id/pdf
# Гэрээний PDF татах
# ─────────────────────────────────────────
Response: application/pdf

# ─────────────────────────────────────────
# GET /contract-templates
# Гэрээний загварууд
# ─────────────────────────────────────────
Query: type
```

---

## 5. AUCTION SERVICE API

```yaml
# ─────────────────────────────────────────
# GET /auctions
# Дуудлага худалдааны жагсаалт
# ─────────────────────────────────────────
Query:
  status: "upcoming" | "active" | "ended"
  type: "open" | "sealed"
  sort: "ending_soon" | "newest" | "price_asc" | "price_desc"
  page, limit

Response 200:
  {
    "data": [
      {
        "id": "uuid",
        "property": { 
          "id": "uuid", 
          "title": "...", 
          "thumbnail": "...",
          "property_type": "apartment"
        },
        "auction_type": "open",
        "starting_price": 200000000,
        "current_price": 245000000,
        "buy_now_price": 300000000,
        "total_bids": 12,
        "unique_bidders": 5,
        "starts_at": "2026-02-10T10:00:00Z",
        "ends_at": "2026-02-15T18:00:00Z",
        "status": "active",
        "time_remaining": 86400
      }
    ]
  }

# ─────────────────────────────────────────
# GET /auctions/:id
# Дуудлага худалдааны дэлгэрэнгүй
# ─────────────────────────────────────────
Response 200:
  {
    "data": {
      "id": "uuid",
      "property": { ... },           # Full property details
      "auction_type": "open",
      "starting_price": 200000000,
      "reserve_price": null,          # Hidden
      "current_price": 245000000,
      "min_bid_increment": 1000000,
      "buy_now_price": 300000000,
      "deposit_required": 5000000,
      "starts_at": "2026-02-10T10:00:00Z",
      "ends_at": "2026-02-15T18:00:00Z",
      "auto_extend_minutes": 5,
      "status": "active",
      "total_bids": 12,
      "unique_bidders": 5,
      "bid_history": [
        {
          "id": "uuid",
          "amount": 245000000,
          "bidder": { "display_name": "B***Д." },
          "created_at": "2026-02-12T14:30:00Z"
        }
      ],
      "my_bid": {
        "amount": 240000000,
        "status": "outbid",
        "deposit_status": "held"
      },
      "terms": "...",
      "created_by": { ... }
    }
  }

# ─────────────────────────────────────────
# POST /auctions
# Дуудлага худалдаа үүсгэх
# Auth: owner, company, admin
# ─────────────────────────────────────────
Request:
  body:
    property_id: uuid (required)
    auction_type: "open" | "sealed" (required)
    starting_price: number (required)
    reserve_price: number
    min_bid_increment: number (required)
    buy_now_price: number
    deposit_required: number
    starts_at: datetime (required)
    ends_at: datetime (required)
    auto_extend_minutes: number (default: 5)
    terms: string

# ─────────────────────────────────────────
# POST /auctions/:id/bid
# Санал өгөх (Bid)
# Auth: buyer, agent, company (KYC required)
# ─────────────────────────────────────────
Request:
  body:
    amount: number (required)
    is_auto_bid: boolean (default: false)
    max_auto_amount: number          # Auto-bid дээд хэмжээ

Response 200:
  {
    "data": {
      "bid_id": "uuid",
      "amount": 250000000,
      "status": "winning",
      "current_price": 250000000,
      "message": "Таны санал амжилттай бүртгэгдлээ"
    }
  }

Error 400:
  {
    "error": {
      "code": "BID_TOO_LOW",
      "message": "Санал хамгийн багадаа 246,000,000₮ байх ёстой"
    }
  }

# ─────────────────────────────────────────
# WebSocket: /ws/auctions/:id
# Бодит цагийн мэдээлэл
# ─────────────────────────────────────────
Events (Server → Client):
  {
    "event": "new_bid",
    "data": {
      "current_price": 250000000,
      "total_bids": 13,
      "bidder": "B***Д.",
      "time_remaining": 85800
    }
  }
  
  {
    "event": "auction_extended",
    "data": {
      "new_ends_at": "2026-02-15T18:05:00Z",
      "reason": "anti_sniping"
    }
  }
  
  {
    "event": "auction_ended",
    "data": {
      "winner": "B***Д.",
      "final_price": 260000000,
      "total_bids": 18
    }
  }
```

---

## 6. PAYMENT SERVICE API

```yaml
# ─────────────────────────────────────────
# POST /payments/escrow
# Escrow данс үүсгэх
# ─────────────────────────────────────────
Request:
  body:
    contract_id: uuid (required)
    total_amount: number (required)
    release_conditions: [
      { "condition": "contract_signed" },
      { "condition": "ownership_transferred" },
      { "condition": "inspection_passed" }
    ]

# ─────────────────────────────────────────
# POST /payments/escrow/:id/fund
# Escrow-д мөнгө оруулах
# ─────────────────────────────────────────
Request:
  body:
    amount: number (required)
    payment_method: "qpay" | "bank_transfer" | "card"

Response 200:
  {
    "data": {
      "payment_id": "uuid",
      "qpay_url": "https://qpay.mn/...",     # QPay payment link
      "qr_code": "data:image/png;base64,...", # QR code
      "expires_at": "2026-02-07T11:00:00Z"
    }
  }

# ─────────────────────────────────────────
# POST /payments/escrow/:id/release
# Escrow-с мөнгө чөлөөлөх
# Auth: admin, system (all conditions met)
# ─────────────────────────────────────────

# ─────────────────────────────────────────
# GET /payments
# Миний төлбөрүүд
# ─────────────────────────────────────────
Query: status, type, date_from, date_to, page, limit

# ─────────────────────────────────────────
# GET /payments/schedules
# Төлбөрийн хуваарь (Түрээс)
# ─────────────────────────────────────────

# ─────────────────────────────────────────
# POST /payments/callback/:provider
# Төлбөрийн провайдерын callback
# ─────────────────────────────────────────
# QPay, SocialPay, банкны callback-ууд
```

---

## 7. ANALYTICS SERVICE API

```yaml
# ─────────────────────────────────────────
# GET /analytics/market
# Зах зээлийн аналитик
# ─────────────────────────────────────────
Query:
  district: string
  property_type: string
  period: "1m" | "3m" | "6m" | "1y" | "all"

Response 200:
  {
    "data": {
      "average_price": 280000000,
      "median_price": 250000000,
      "avg_price_per_sqm": 3500000,
      "total_listings": 1523,
      "price_trend": [
        { "month": "2025-09", "avg_price": 260000000, "listings": 120 },
        { "month": "2025-10", "avg_price": 265000000, "listings": 135 },
        ...
      ],
      "supply_demand": {
        "supply": 1523,
        "demand_score": 78,
        "avg_days_on_market": 45
      },
      "district_comparison": [
        { "district": "Баянзүрх", "avg_price": 250000000, "listings": 450 },
        { "district": "Сүхбаатар", "avg_price": 350000000, "listings": 200 }
      ]
    }
  }

# ─────────────────────────────────────────
# GET /analytics/property/:id/valuation
# AI үнэлгээ
# ─────────────────────────────────────────
Response 200:
  {
    "data": {
      "estimated_price": 255000000,
      "confidence": 0.85,
      "price_range": {
        "low": 235000000,
        "high": 275000000
      },
      "factors": [
        { "name": "Байршил", "impact": "+15%", "score": 85 },
        { "name": "Талбай", "impact": "+5%", "score": 70 },
        { "name": "Давхар", "impact": "-3%", "score": 60 },
        { "name": "Засвар", "impact": "+10%", "score": 90 }
      ],
      "comparable_sales": [ ... ]
    }
  }

# ─────────────────────────────────────────
# GET /analytics/dashboard
# Админ dashboard
# Auth: admin
# ─────────────────────────────────────────
Response 200:
  {
    "data": {
      "overview": {
        "total_users": 15000,
        "active_listings": 5200,
        "transactions_this_month": 120,
        "revenue_this_month": 45000000,
        "active_auctions": 15
      },
      "charts": {
        "user_growth": [...],
        "listing_trend": [...],
        "revenue_trend": [...],
        "transaction_types": [...]
      }
    }
  }
```

---

## 8. NOTIFICATION SERVICE API

```yaml
# ─────────────────────────────────────────
# GET /notifications
# Миний мэдэгдлүүд
# ─────────────────────────────────────────
Query:
  status: "unread" | "read" | "all"
  type: string
  page, limit

# ─────────────────────────────────────────
# PUT /notifications/:id/read
# Мэдэгдэл уншсан гэж тэмдэглэх
# ─────────────────────────────────────────

# ─────────────────────────────────────────
# PUT /notifications/read-all
# Бүх мэдэгдлийг уншсан болгох
# ─────────────────────────────────────────

# ─────────────────────────────────────────
# GET /notifications/preferences
# Мэдэгдлийн тохиргоо авах
# ─────────────────────────────────────────

# ─────────────────────────────────────────
# PUT /notifications/preferences
# Мэдэгдлийн тохиргоо хадгалах
# ─────────────────────────────────────────
```

---

## 9. RATE LIMITING

| Endpoint Group | Limit | Window |
|----------------|-------|--------|
| Auth (login, register) | 10 req | 1 min |
| Auth (password reset) | 3 req | 15 min |
| Property search | 60 req | 1 min |
| Property create | 10 req | 1 hour |
| Bid place | 30 req | 1 min |
| File upload | 20 req | 10 min |
| General API | 100 req | 1 min |
| Admin API | 300 req | 1 min |

---

## 10. WEBHOOK EVENTS

```yaml
# Гадаад системүүдэд илгээх events
Events:
  property.created
  property.verified
  property.sold
  property.rented
  auction.started
  auction.bid_placed
  auction.ended
  contract.created
  contract.signed
  contract.completed
  payment.completed
  payment.failed
  escrow.funded
  escrow.released
  user.verified
  dispute.opened
  dispute.resolved
```

---

*Дараагийн баримт бичиг: `04-BUSINESS-RULES.md` — Бизнес дүрэм, аргачлал*
