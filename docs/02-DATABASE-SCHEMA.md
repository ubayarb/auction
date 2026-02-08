# 🗄️ ELAND — ӨГӨГДЛИЙН САНГИЙН БҮТЭЦ
## Database Schema Design v1.0

---

## 1. ER DIAGRAM ТОЙМ

```
┌──────────┐     ┌──────────────┐     ┌──────────────┐
│  users   │────→│ user_profiles│     │    roles     │
│          │     │              │     │              │
└────┬─────┘     └──────────────┘     └──────┬───────┘
     │                                        │
     │  ┌─────────────────────────────────────┘
     │  │
     ▼  ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ user_roles   │     │  properties  │────→│prop_media    │
│              │     │              │     │              │
└──────────────┘     └──────┬───────┘     └──────────────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
     ┌──────────────┐ ┌──────────┐ ┌──────────────┐
     │  contracts   │ │ auctions │ │  listings    │
     │              │ │          │ │              │
     └──────┬───────┘ └────┬─────┘ └──────────────┘
            │              │
            ▼              ▼
     ┌──────────────┐ ┌──────────────┐
     │  payments    │ │    bids      │
     │              │ │              │
     └──────────────┘ └──────────────┘
```

---

## 2. ХҮСНЭГТИЙН ДЭЛГЭРЭНГҮЙ БҮТЭЦ

### 2.1 Users & Authentication

```sql
-- =============================================
-- ХЭРЭГЛЭГЧИЙН ХҮСНЭГТҮҮД
-- =============================================

-- Хэрэглэгчийн үндсэн мэдээлэл
CREATE TABLE users (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email               VARCHAR(255) UNIQUE NOT NULL,
    phone               VARCHAR(20) UNIQUE,
    password_hash       VARCHAR(255) NOT NULL,
    status              VARCHAR(20) DEFAULT 'pending',  -- pending, active, suspended, banned
    email_verified      BOOLEAN DEFAULT FALSE,
    phone_verified      BOOLEAN DEFAULT FALSE,
    kyc_status          VARCHAR(20) DEFAULT 'not_started', -- not_started, pending, verified, rejected
    kyc_verified_at     TIMESTAMPTZ,
    last_login_at       TIMESTAMPTZ,
    login_count         INTEGER DEFAULT 0,
    failed_login_count  INTEGER DEFAULT 0,
    locked_until        TIMESTAMPTZ,
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW(),
    deleted_at          TIMESTAMPTZ  -- Soft delete
);

-- Хэрэглэгчийн профайл
CREATE TABLE user_profiles (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    first_name          VARCHAR(100) NOT NULL,
    last_name           VARCHAR(100) NOT NULL,
    display_name        VARCHAR(100),
    avatar_url          TEXT,
    register_number     VARCHAR(20),  -- Регистрийн дугаар (encrypted)
    date_of_birth       DATE,
    gender              VARCHAR(10),
    address             TEXT,
    city                VARCHAR(50),
    district            VARCHAR(50),
    bio                 TEXT,
    company_name        VARCHAR(255),
    company_register    VARCHAR(50),
    license_number      VARCHAR(50),  -- Агентын тусгай зөвшөөрөл
    metadata            JSONB DEFAULT '{}',
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Үүрэг (Role)
CREATE TABLE roles (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name                VARCHAR(50) UNIQUE NOT NULL,  -- buyer, owner, agent, company, bank, notary, gov, admin
    display_name        VARCHAR(100) NOT NULL,
    description         TEXT,
    is_system           BOOLEAN DEFAULT FALSE,
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Хэрэглэгч-Үүрэг холбоос
CREATE TABLE user_roles (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_id             UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    granted_by          UUID REFERENCES users(id),
    granted_at          TIMESTAMPTZ DEFAULT NOW(),
    expires_at          TIMESTAMPTZ,
    UNIQUE(user_id, role_id)
);

-- Зөвшөөрөл (Permission)
CREATE TABLE permissions (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name                VARCHAR(100) UNIQUE NOT NULL,  -- property.create, bid.place, etc.
    resource            VARCHAR(50) NOT NULL,
    action              VARCHAR(50) NOT NULL,
    description         TEXT,
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Үүрэг-Зөвшөөрөл холбоос
CREATE TABLE role_permissions (
    role_id             UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    permission_id       UUID NOT NULL REFERENCES permissions(id) ON DELETE CASCADE,
    PRIMARY KEY (role_id, permission_id)
);

-- Refresh Token
CREATE TABLE refresh_tokens (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token_hash          VARCHAR(255) NOT NULL,
    device_info         JSONB,
    ip_address          INET,
    expires_at          TIMESTAMPTZ NOT NULL,
    revoked_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- KYC баталгаажуулалт
CREATE TABLE kyc_verifications (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID NOT NULL REFERENCES users(id),
    verification_type   VARCHAR(50) NOT NULL,  -- e_mongolia, manual, document
    document_type       VARCHAR(50),           -- passport, national_id, driver_license
    document_number     VARCHAR(100),          -- encrypted
    document_front_url  TEXT,
    document_back_url   TEXT,
    selfie_url          TEXT,
    status              VARCHAR(20) DEFAULT 'pending',  -- pending, approved, rejected
    reviewed_by         UUID REFERENCES users(id),
    reviewed_at         TIMESTAMPTZ,
    rejection_reason    TEXT,
    external_ref        VARCHAR(255),  -- e-Mongolia reference
    metadata            JSONB DEFAULT '{}',
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);
```

### 2.2 Property (Үл хөдлөх хөрөнгө)

```sql
-- =============================================
-- ҮЛ ХӨДЛӨХ ХӨРӨНГИЙН ХҮСНЭГТҮҮД
-- =============================================

-- Объектын категори
CREATE TABLE property_categories (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name                VARCHAR(100) NOT NULL,
    slug                VARCHAR(100) UNIQUE NOT NULL,
    parent_id           UUID REFERENCES property_categories(id),
    icon                VARCHAR(50),
    sort_order          INTEGER DEFAULT 0,
    is_active           BOOLEAN DEFAULT TRUE,
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Объектын үндсэн мэдээлэл
CREATE TABLE properties (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id            UUID NOT NULL REFERENCES users(id),
    agent_id            UUID REFERENCES users(id),
    category_id         UUID NOT NULL REFERENCES property_categories(id),
    
    -- Үндсэн мэдээлэл
    title               VARCHAR(255) NOT NULL,
    slug                VARCHAR(300) UNIQUE,
    description         TEXT,
    property_type       VARCHAR(50) NOT NULL,  -- apartment, house, office, land, warehouse, etc.
    transaction_type    VARCHAR(20) NOT NULL,   -- sale, rent, auction
    
    -- Үнэ
    price               DECIMAL(18,2),
    price_currency      VARCHAR(3) DEFAULT 'MNT',
    price_per_sqm       DECIMAL(18,2),
    price_negotiable    BOOLEAN DEFAULT FALSE,
    
    -- Хэмжээ
    area_total          DECIMAL(10,2),          -- Нийт талбай (м²)
    area_living         DECIMAL(10,2),          -- Амьдрах талбай
    area_land           DECIMAL(10,2),          -- Газрын талбай
    
    -- Байршил
    address             TEXT NOT NULL,
    city                VARCHAR(50) DEFAULT 'Улаанбаатар',
    district            VARCHAR(50),
    khoroo              VARCHAR(50),
    zip_code            VARCHAR(10),
    location            GEOMETRY(Point, 4326),  -- PostGIS point
    location_lat        DECIMAL(10,8),
    location_lng        DECIMAL(11,8),
    
    -- Технйк үзүүлэлт
    rooms               INTEGER,
    bedrooms            INTEGER,
    bathrooms           INTEGER,
    floor               INTEGER,
    total_floors        INTEGER,
    year_built          INTEGER,
    parking_spaces      INTEGER DEFAULT 0,
    has_elevator        BOOLEAN DEFAULT FALSE,
    has_balcony         BOOLEAN DEFAULT FALSE,
    heating_type        VARCHAR(50),           -- central, individual, none
    condition           VARCHAR(50),           -- new, renovated, good, needs_repair
    furniture           VARCHAR(50),           -- furnished, semi_furnished, unfurnished
    
    -- Кадастр
    cadastre_number     VARCHAR(50),
    cadastre_verified   BOOLEAN DEFAULT FALSE,
    cadastre_verified_at TIMESTAMPTZ,
    ownership_cert_number VARCHAR(50),
    
    -- Статус
    status              VARCHAR(20) DEFAULT 'draft', -- draft, pending, active, reserved, sold, rented, expired, rejected
    is_featured         BOOLEAN DEFAULT FALSE,
    is_verified         BOOLEAN DEFAULT FALSE,
    verified_by         UUID REFERENCES users(id),
    verified_at         TIMESTAMPTZ,
    rejection_reason    TEXT,
    
    -- Тоолуур
    view_count          INTEGER DEFAULT 0,
    favorite_count      INTEGER DEFAULT 0,
    inquiry_count       INTEGER DEFAULT 0,
    
    -- Хугацаа
    available_from      DATE,
    listing_expires_at  TIMESTAMPTZ,
    published_at        TIMESTAMPTZ,
    
    -- Meta
    features            JSONB DEFAULT '[]',    -- ["garage", "garden", "security"]
    metadata            JSONB DEFAULT '{}',
    
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW(),
    deleted_at          TIMESTAMPTZ
);

-- Spatial index
CREATE INDEX idx_properties_location ON properties USING GIST(location);
CREATE INDEX idx_properties_status ON properties(status);
CREATE INDEX idx_properties_type ON properties(property_type, transaction_type);
CREATE INDEX idx_properties_price ON properties(price);
CREATE INDEX idx_properties_owner ON properties(owner_id);
CREATE INDEX idx_properties_search ON properties USING GIN(to_tsvector('simple', title || ' ' || COALESCE(description, '')));

-- Объектын зураг, видео
CREATE TABLE property_media (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id         UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    media_type          VARCHAR(20) NOT NULL,  -- image, video, virtual_tour, floor_plan, document
    url                 TEXT NOT NULL,
    thumbnail_url       TEXT,
    title               VARCHAR(255),
    description         TEXT,
    sort_order          INTEGER DEFAULT 0,
    is_primary          BOOLEAN DEFAULT FALSE,
    file_size           BIGINT,
    mime_type           VARCHAR(100),
    width               INTEGER,
    height              INTEGER,
    metadata            JSONB DEFAULT '{}',
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Үнийн түүх
CREATE TABLE property_price_history (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id         UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    old_price           DECIMAL(18,2),
    new_price           DECIMAL(18,2) NOT NULL,
    changed_by          UUID NOT NULL REFERENCES users(id),
    reason              TEXT,
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Дуртай зарууд
CREATE TABLE favorites (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    property_id         UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, property_id)
);

-- Зар үзсэн түүх
CREATE TABLE property_views (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id         UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    user_id             UUID REFERENCES users(id),
    session_id          VARCHAR(100),
    ip_address          INET,
    user_agent          TEXT,
    referrer            TEXT,
    viewed_at           TIMESTAMPTZ DEFAULT NOW()
);

-- Лавлагаа, асуулт
CREATE TABLE inquiries (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id         UUID NOT NULL REFERENCES properties(id),
    sender_id           UUID NOT NULL REFERENCES users(id),
    receiver_id         UUID NOT NULL REFERENCES users(id),
    message             TEXT NOT NULL,
    status              VARCHAR(20) DEFAULT 'new',  -- new, read, replied, closed
    parent_id           UUID REFERENCES inquiries(id),  -- Thread support
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    read_at             TIMESTAMPTZ
);
```

### 2.3 Listings (Зарын менежмент)

```sql
-- =============================================
-- ЗАРЫН ХҮСНЭГТҮҮД
-- =============================================

-- Зарын багц (Subscription/Listing Package)
CREATE TABLE listing_packages (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name                VARCHAR(100) NOT NULL,
    description         TEXT,
    duration_days       INTEGER NOT NULL,
    max_photos          INTEGER DEFAULT 10,
    max_videos          INTEGER DEFAULT 2,
    is_featured         BOOLEAN DEFAULT FALSE,
    has_analytics       BOOLEAN DEFAULT FALSE,
    price               DECIMAL(18,2) NOT NULL,
    currency            VARCHAR(3) DEFAULT 'MNT',
    is_active           BOOLEAN DEFAULT TRUE,
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Идэвхтэй зар
CREATE TABLE listings (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id         UUID NOT NULL REFERENCES properties(id),
    package_id          UUID REFERENCES listing_packages(id),
    user_id             UUID NOT NULL REFERENCES users(id),
    status              VARCHAR(20) DEFAULT 'active',  -- active, paused, expired, completed
    starts_at           TIMESTAMPTZ DEFAULT NOW(),
    expires_at          TIMESTAMPTZ NOT NULL,
    boost_level         INTEGER DEFAULT 0,  -- 0=normal, 1=promoted, 2=premium, 3=VIP
    boost_expires_at    TIMESTAMPTZ,
    auto_renew          BOOLEAN DEFAULT FALSE,
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);
```

### 2.4 Contracts (Гэрээ)

```sql
-- =============================================
-- ГЭРЭЭНИЙ ХҮСНЭГТҮҮД
-- =============================================

-- Гэрээний загвар
CREATE TABLE contract_templates (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name                VARCHAR(255) NOT NULL,
    type                VARCHAR(50) NOT NULL,  -- sale, rent, auction, agent_agreement
    version             INTEGER DEFAULT 1,
    content             TEXT NOT NULL,          -- HTML/Markdown template with {{variables}}
    variables           JSONB DEFAULT '[]',     -- [{name: "buyer_name", type: "string", required: true}]
    is_active           BOOLEAN DEFAULT TRUE,
    is_default          BOOLEAN DEFAULT FALSE,
    created_by          UUID REFERENCES users(id),
    approved_by         UUID REFERENCES users(id),
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Гэрээ
CREATE TABLE contracts (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_number     VARCHAR(50) UNIQUE NOT NULL,  -- AUTO: ELAND-2026-000001
    template_id         UUID REFERENCES contract_templates(id),
    property_id         UUID NOT NULL REFERENCES properties(id),
    
    -- Талууд
    seller_id           UUID NOT NULL REFERENCES users(id),
    buyer_id            UUID NOT NULL REFERENCES users(id),
    agent_id            UUID REFERENCES users(id),
    
    -- Гэрээний төрөл
    type                VARCHAR(50) NOT NULL,  -- sale, rent, auction_sale
    
    -- Нөхцөл
    agreed_price        DECIMAL(18,2) NOT NULL,
    currency            VARCHAR(3) DEFAULT 'MNT',
    deposit_amount      DECIMAL(18,2),
    deposit_deadline    TIMESTAMPTZ,
    payment_terms       JSONB DEFAULT '{}',
    
    -- Түрээсийн нөхцөл
    rent_start_date     DATE,
    rent_end_date       DATE,
    rent_monthly        DECIMAL(18,2),
    rent_deposit_months INTEGER DEFAULT 1,
    
    -- Гэрээний агуулга
    content             TEXT NOT NULL,          -- Final rendered contract
    terms_conditions    TEXT,
    special_conditions  JSONB DEFAULT '[]',
    
    -- Статус
    status              VARCHAR(20) DEFAULT 'draft',
    -- draft → pending_signatures → partially_signed → signed → 
    -- notarized → active → completed → terminated → disputed
    
    -- Гарын үсэг
    seller_signed_at    TIMESTAMPTZ,
    seller_signature    TEXT,                   -- Digital signature hash
    buyer_signed_at     TIMESTAMPTZ,
    buyer_signature     TEXT,
    notary_signed_at    TIMESTAMPTZ,
    notary_id           UUID REFERENCES users(id),
    notary_cert_number  VARCHAR(100),
    
    -- Хугацаа
    effective_date      DATE,
    expiry_date         DATE,
    
    -- PDF
    pdf_url             TEXT,
    
    -- Meta
    version             INTEGER DEFAULT 1,
    parent_contract_id  UUID REFERENCES contracts(id),  -- Amendment chain
    metadata            JSONB DEFAULT '{}',
    
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Гэрээний хувилбарын түүх
CREATE TABLE contract_versions (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_id         UUID NOT NULL REFERENCES contracts(id),
    version             INTEGER NOT NULL,
    content             TEXT NOT NULL,
    changes_summary     TEXT,
    changed_by          UUID NOT NULL REFERENCES users(id),
    created_at          TIMESTAMPTZ DEFAULT NOW()
);
```

### 2.5 Auctions (Дуудлага Худалдаа)

```sql
-- =============================================
-- ДУУДЛАГА ХУДАЛДААНЫ ХҮСНЭГТҮҮД
-- =============================================

-- Дуудлага худалдаа
CREATE TABLE auctions (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id         UUID NOT NULL REFERENCES properties(id),
    created_by          UUID NOT NULL REFERENCES users(id),
    
    -- Төрөл
    auction_type        VARCHAR(20) NOT NULL,   -- open, sealed, dutch, reserve
    
    -- Үнэ
    starting_price      DECIMAL(18,2) NOT NULL,
    reserve_price       DECIMAL(18,2),          -- Хамгийн бага зөвшөөрөх үнэ (нууц)
    min_bid_increment   DECIMAL(18,2) NOT NULL, -- Хамгийн бага нэмэгдэл
    current_price       DECIMAL(18,2),
    buy_now_price       DECIMAL(18,2),          -- Шууд худалдан авах үнэ
    
    -- Хугацаа
    starts_at           TIMESTAMPTZ NOT NULL,
    ends_at             TIMESTAMPTZ NOT NULL,
    extended_until      TIMESTAMPTZ,            -- Anti-sniping extension
    
    -- Дүрэм
    deposit_required    DECIMAL(18,2),          -- Барьцаа
    auto_extend_minutes INTEGER DEFAULT 5,      -- Anti-sniping: сүүлийн bid дараа сунгах
    max_extensions      INTEGER DEFAULT 3,
    extensions_used     INTEGER DEFAULT 0,
    
    -- Статус
    status              VARCHAR(20) DEFAULT 'draft',
    -- draft → scheduled → active → extended → ended → completed → cancelled → failed
    
    -- Үр дүн
    winner_id           UUID REFERENCES users(id),
    winning_bid_id      UUID,                   -- References bids(id), added after bids table
    final_price         DECIMAL(18,2),
    
    -- Тоолуур
    total_bids          INTEGER DEFAULT 0,
    unique_bidders      INTEGER DEFAULT 0,
    
    -- Meta
    terms               TEXT,
    rules               JSONB DEFAULT '{}',
    metadata            JSONB DEFAULT '{}',
    
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Санал (Bid)
CREATE TABLE bids (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auction_id          UUID NOT NULL REFERENCES auctions(id),
    bidder_id           UUID NOT NULL REFERENCES users(id),
    
    amount              DECIMAL(18,2) NOT NULL,
    
    -- Auto-bid (proxy bidding)
    is_auto_bid         BOOLEAN DEFAULT FALSE,
    max_auto_amount     DECIMAL(18,2),
    
    -- Статус
    status              VARCHAR(20) DEFAULT 'active', -- active, outbid, winning, won, cancelled, invalid
    
    -- Anti-fraud
    ip_address          INET,
    user_agent          TEXT,
    device_fingerprint  VARCHAR(255),
    
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Foreign key for winning bid
ALTER TABLE auctions ADD CONSTRAINT fk_winning_bid 
    FOREIGN KEY (winning_bid_id) REFERENCES bids(id);

CREATE INDEX idx_bids_auction ON bids(auction_id, amount DESC);
CREATE INDEX idx_bids_bidder ON bids(bidder_id);

-- Дуудлага худалдааны барьцаа
CREATE TABLE auction_deposits (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auction_id          UUID NOT NULL REFERENCES auctions(id),
    user_id             UUID NOT NULL REFERENCES users(id),
    amount              DECIMAL(18,2) NOT NULL,
    status              VARCHAR(20) DEFAULT 'held',  -- held, released, forfeited
    payment_id          UUID,  -- References payments(id)
    deposited_at        TIMESTAMPTZ DEFAULT NOW(),
    released_at         TIMESTAMPTZ,
    UNIQUE(auction_id, user_id)
);
```

### 2.6 Payments & Escrow (Төлбөр)

```sql
-- =============================================
-- ТӨЛБӨРИЙН ХҮСНЭГТҮҮД
-- =============================================

-- Escrow данс
CREATE TABLE escrow_accounts (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_number      VARCHAR(50) UNIQUE NOT NULL,  -- AUTO generated
    contract_id         UUID REFERENCES contracts(id),
    auction_id          UUID REFERENCES auctions(id),
    
    -- Талууд
    buyer_id            UUID NOT NULL REFERENCES users(id),
    seller_id           UUID NOT NULL REFERENCES users(id),
    
    -- Дүн
    total_amount        DECIMAL(18,2) NOT NULL,
    deposited_amount    DECIMAL(18,2) DEFAULT 0,
    released_amount     DECIMAL(18,2) DEFAULT 0,
    currency            VARCHAR(3) DEFAULT 'MNT',
    
    -- Статус
    status              VARCHAR(20) DEFAULT 'created',
    -- created → funded → partially_released → released → cancelled → disputed
    
    -- Нөхцөл
    release_conditions  JSONB DEFAULT '[]',
    -- [{condition: "contract_signed", met: false}, {condition: "ownership_transferred", met: false}]
    
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Төлбөр
CREATE TABLE payments (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payment_number      VARCHAR(50) UNIQUE NOT NULL,
    
    -- Холбоосууд
    user_id             UUID NOT NULL REFERENCES users(id),
    contract_id         UUID REFERENCES contracts(id),
    escrow_id           UUID REFERENCES escrow_accounts(id),
    listing_id          UUID REFERENCES listings(id),
    auction_id          UUID REFERENCES auctions(id),
    
    -- Төлбөрийн мэдээлэл
    type                VARCHAR(50) NOT NULL,
    -- property_purchase, rent_payment, deposit, escrow_fund, 
    -- listing_fee, auction_deposit, platform_fee, refund
    
    amount              DECIMAL(18,2) NOT NULL,
    currency            VARCHAR(3) DEFAULT 'MNT',
    
    -- Төлбөрийн арга
    payment_method      VARCHAR(50),  -- qpay, socialpay, bank_transfer, card
    payment_provider    VARCHAR(50),  -- qpay, golomt, khan, tdb
    
    -- Гадаад reference
    provider_ref        VARCHAR(255),
    provider_response   JSONB,
    
    -- Статус
    status              VARCHAR(20) DEFAULT 'pending',
    -- pending → processing → completed → failed → refunded → cancelled
    
    -- Хугацаа
    paid_at             TIMESTAMPTZ,
    failed_at           TIMESTAMPTZ,
    refunded_at         TIMESTAMPTZ,
    failure_reason      TEXT,
    
    -- Комисс
    platform_fee        DECIMAL(18,2) DEFAULT 0,
    platform_fee_rate   DECIMAL(5,4),
    
    metadata            JSONB DEFAULT '{}',
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Төлбөрийн хуваарь (Түрээс)
CREATE TABLE payment_schedules (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_id         UUID NOT NULL REFERENCES contracts(id),
    user_id             UUID NOT NULL REFERENCES users(id),
    
    amount              DECIMAL(18,2) NOT NULL,
    due_date            DATE NOT NULL,
    status              VARCHAR(20) DEFAULT 'upcoming',  -- upcoming, due, paid, overdue, cancelled
    payment_id          UUID REFERENCES payments(id),
    paid_at             TIMESTAMPTZ,
    reminder_sent       BOOLEAN DEFAULT FALSE,
    
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Дансны хөдөлгөөн (Ledger)
CREATE TABLE ledger_entries (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payment_id          UUID REFERENCES payments(id),
    escrow_id           UUID REFERENCES escrow_accounts(id),
    
    entry_type          VARCHAR(20) NOT NULL,  -- debit, credit
    account_type        VARCHAR(50) NOT NULL,  -- user_wallet, escrow, platform_revenue, tax
    account_ref         VARCHAR(255) NOT NULL,
    
    amount              DECIMAL(18,2) NOT NULL,
    balance_after       DECIMAL(18,2),
    currency            VARCHAR(3) DEFAULT 'MNT',
    
    description         TEXT,
    metadata            JSONB DEFAULT '{}',
    
    created_at          TIMESTAMPTZ DEFAULT NOW()
);
```

### 2.7 Notifications & Communication

```sql
-- =============================================
-- МЭДЭГДЭЛ, ХАРИЛЦААНЫ ХҮСНЭГТҮҮД
-- =============================================

-- Мэдэгдэл
CREATE TABLE notifications (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID NOT NULL REFERENCES users(id),
    
    type                VARCHAR(50) NOT NULL,
    -- bid_placed, bid_outbid, auction_won, auction_ended,
    -- contract_created, contract_signed, payment_received,
    -- property_approved, inquiry_received, system_alert
    
    title               VARCHAR(255) NOT NULL,
    body                TEXT,
    data                JSONB DEFAULT '{}',  -- {property_id: "...", auction_id: "..."}
    
    channel             VARCHAR(20) NOT NULL,  -- in_app, email, sms, push
    status              VARCHAR(20) DEFAULT 'pending',  -- pending, sent, delivered, read, failed
    
    read_at             TIMESTAMPTZ,
    sent_at             TIMESTAMPTZ,
    
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Мэдэгдлийн тохиргоо
CREATE TABLE notification_preferences (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID NOT NULL REFERENCES users(id),
    notification_type   VARCHAR(50) NOT NULL,
    channel_email       BOOLEAN DEFAULT TRUE,
    channel_sms         BOOLEAN DEFAULT FALSE,
    channel_push        BOOLEAN DEFAULT TRUE,
    channel_in_app      BOOLEAN DEFAULT TRUE,
    UNIQUE(user_id, notification_type)
);

-- Чат
CREATE TABLE chat_rooms (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id         UUID REFERENCES properties(id),
    contract_id         UUID REFERENCES contracts(id),
    type                VARCHAR(20) DEFAULT 'direct',  -- direct, group, support
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE chat_participants (
    chat_room_id        UUID NOT NULL REFERENCES chat_rooms(id),
    user_id             UUID NOT NULL REFERENCES users(id),
    joined_at           TIMESTAMPTZ DEFAULT NOW(),
    last_read_at        TIMESTAMPTZ,
    PRIMARY KEY (chat_room_id, user_id)
);

CREATE TABLE chat_messages (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chat_room_id        UUID NOT NULL REFERENCES chat_rooms(id),
    sender_id           UUID NOT NULL REFERENCES users(id),
    message             TEXT NOT NULL,
    message_type        VARCHAR(20) DEFAULT 'text',  -- text, image, file, system
    attachment_url      TEXT,
    is_edited           BOOLEAN DEFAULT FALSE,
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW(),
    deleted_at          TIMESTAMPTZ
);
```

### 2.8 Dispute & Audit

```sql
-- =============================================
-- МАРГААН, АУДИТЫН ХҮСНЭГТҮҮД
-- =============================================

-- Маргаан
CREATE TABLE disputes (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dispute_number      VARCHAR(50) UNIQUE NOT NULL,
    
    -- Холбоосууд
    contract_id         UUID REFERENCES contracts(id),
    auction_id          UUID REFERENCES auctions(id),
    property_id         UUID REFERENCES properties(id),
    
    -- Талууд
    filed_by            UUID NOT NULL REFERENCES users(id),
    filed_against       UUID NOT NULL REFERENCES users(id),
    assigned_to         UUID REFERENCES users(id),   -- Arbitrator
    
    -- Мэдээлэл
    category            VARCHAR(50) NOT NULL,
    -- payment, property_condition, contract_breach, fraud, other
    
    title               VARCHAR(255) NOT NULL,
    description         TEXT NOT NULL,
    evidence_urls       JSONB DEFAULT '[]',
    
    -- Статус
    status              VARCHAR(20) DEFAULT 'open',
    -- open → under_review → mediation → arbitration → resolved → closed → escalated
    
    priority            VARCHAR(10) DEFAULT 'medium',  -- low, medium, high, critical
    
    -- Шийдвэр
    resolution          TEXT,
    resolution_type     VARCHAR(50),  -- refund, partial_refund, dismissed, mutual_agreement
    resolved_at         TIMESTAMPTZ,
    
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Маргааны коммент
CREATE TABLE dispute_comments (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dispute_id          UUID NOT NULL REFERENCES disputes(id),
    user_id             UUID NOT NULL REFERENCES users(id),
    comment             TEXT NOT NULL,
    is_internal         BOOLEAN DEFAULT FALSE,  -- Admin-only comment
    attachments         JSONB DEFAULT '[]',
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Аудит лог (Immutable)
CREATE TABLE audit_logs (
    id                  BIGSERIAL PRIMARY KEY,
    user_id             UUID REFERENCES users(id),
    action              VARCHAR(100) NOT NULL,
    resource_type       VARCHAR(50) NOT NULL,
    resource_id         UUID,
    old_values          JSONB,
    new_values          JSONB,
    ip_address          INET,
    user_agent          TEXT,
    session_id          VARCHAR(100),
    metadata            JSONB DEFAULT '{}',
    created_at          TIMESTAMPTZ DEFAULT NOW()
) PARTITION BY RANGE (created_at);

-- Partition by month
CREATE TABLE audit_logs_2026_01 PARTITION OF audit_logs
    FOR VALUES FROM ('2026-01-01') TO ('2026-02-01');
CREATE TABLE audit_logs_2026_02 PARTITION OF audit_logs
    FOR VALUES FROM ('2026-02-01') TO ('2026-03-01');
-- ... more partitions

CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_audit_resource ON audit_logs(resource_type, resource_id);
CREATE INDEX idx_audit_action ON audit_logs(action);
CREATE INDEX idx_audit_created ON audit_logs(created_at);
```

### 2.9 Analytics & Reporting

```sql
-- =============================================
-- АНАЛИТИК ХҮСНЭГТҮҮД
-- =============================================

-- Зах зээлийн үнийн мэдээлэл (Materialized View)
CREATE MATERIALIZED VIEW mv_market_prices AS
SELECT 
    district,
    property_type,
    DATE_TRUNC('month', published_at) as month,
    COUNT(*) as listing_count,
    AVG(price) as avg_price,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY price) as median_price,
    MIN(price) as min_price,
    MAX(price) as max_price,
    AVG(price_per_sqm) as avg_price_per_sqm,
    AVG(area_total) as avg_area
FROM properties
WHERE status IN ('active', 'sold', 'rented') 
  AND price IS NOT NULL
GROUP BY district, property_type, DATE_TRUNC('month', published_at);

-- Даатгааны индекс шинэчлэлт
CREATE UNIQUE INDEX idx_mv_market_prices 
ON mv_market_prices(district, property_type, month);

-- Платформ статистик
CREATE TABLE platform_stats (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    stat_date           DATE NOT NULL,
    metric_name         VARCHAR(100) NOT NULL,
    metric_value        DECIMAL(18,2) NOT NULL,
    dimension           VARCHAR(50),
    dimension_value     VARCHAR(100),
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(stat_date, metric_name, dimension, dimension_value)
);
```

---

## 3. ИНДЕКСИЙН СТРАТЕГИ

```sql
-- =============================================
-- PERFORMANCE INDEXES
-- =============================================

-- Composite indexes for common queries
CREATE INDEX idx_properties_listing ON properties(status, transaction_type, property_type, city);
CREATE INDEX idx_properties_price_range ON properties(price, status) WHERE status = 'active';
CREATE INDEX idx_properties_geo_active ON properties USING GIST(location) WHERE status = 'active';

-- Auction performance
CREATE INDEX idx_auctions_active ON auctions(status, ends_at) WHERE status = 'active';
CREATE INDEX idx_bids_auction_latest ON bids(auction_id, created_at DESC);

-- Contract lookups
CREATE INDEX idx_contracts_parties ON contracts(seller_id, buyer_id, status);

-- Payment lookups
CREATE INDEX idx_payments_user ON payments(user_id, status, created_at DESC);
CREATE INDEX idx_payment_schedules_due ON payment_schedules(due_date, status) WHERE status IN ('upcoming', 'due');
```

---

*Дараагийн баримт бичиг: `03-API-SPECIFICATION.md` — API-ийн тодорхойлолт*
