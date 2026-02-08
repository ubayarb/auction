# ⚖️ ELAND — БИЗНЕС ДҮРЭМ, АРГАЧЛАЛ
## Business Rules & Policy Engine v1.0

---

## 1. БИЗНЕС ДҮРМИЙН ЕРӨНХИЙ БҮТЭЦ

```
┌─────────────────────────────────────────────────────────┐
│                  RULES ENGINE                            │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Property    │  │  Auction     │  │  Payment     │  │
│  │  Rules       │  │  Rules       │  │  Rules       │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Contract    │  │  Fraud       │  │  Compliance  │  │
│  │  Rules       │  │  Prevention  │  │  Rules       │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 2. ОБЪЕКТ БҮРТГЭЛИЙН ДҮРЭМ (Property Rules)

### PR-001: Объект бүртгэх эрх
```
RULE PR-001: Property Registration Authorization
WHEN   user.wants_to_register_property
THEN   CHECK user.kyc_status == 'verified'
  AND  CHECK user.role IN ('owner', 'agent', 'company')
  AND  CHECK user.status == 'active'
IF     FAIL → REJECT with "KYC баталгаажуулалт шаардлагатай"
```

### PR-002: Давхар зар хяналт
```
RULE PR-002: Duplicate Listing Prevention
WHEN   new_property.is_submitted
THEN   CHECK NOT EXISTS property WHERE
         cadastre_number == new_property.cadastre_number
         AND status IN ('active', 'pending', 'reserved')
IF     DUPLICATE_FOUND → REJECT with "Энэ объект аль хэдийн бүртгэгдсэн байна"
```

### PR-003: 1 объект = 1 идэвхтэй өмчлөгч
```
RULE PR-003: Single Active Owner Per Property
WHEN   property.ownership_change
THEN   DEACTIVATE all_other_listings FOR property.cadastre_number
  AND  TRANSFER ownership TO new_owner
  AND  LOG audit_trail
```

### PR-004: Үнэ өөрчлөх хязгаарлалт
```
RULE PR-004: Price Change Limitation
WHEN   owner.changes_price
THEN   CHECK price_change_percentage <= 30%
  AND  CHECK time_since_last_change >= 24_hours
  AND  LOG to property_price_history
  AND  NOTIFY interested_users
IF     price_change > 30% → REQUIRE admin_approval
IF     changes_in_24h > 3 → BLOCK with "Үнэ хэт олон удаа өөрчлөгдсөн"
```

### PR-005: Объектын баталгаажуулалт
```
RULE PR-005: Property Verification Flow
WHEN   property.submitted
THEN   
  STEP 1: AUTO_CHECK media_count >= 3
  STEP 2: AUTO_CHECK required_fields_filled
  STEP 3: AUTO_CHECK cadastre_number.format_valid
  STEP 4: QUEUE for_manual_review IF auto_checks_pass
  STEP 5: ADMIN reviews within 48_hours
  STEP 6: 
    IF APPROVED → status = 'active', NOTIFY owner
    IF REJECTED → status = 'rejected', NOTIFY owner with reason
```

### PR-006: Зургийн шаардлага
```
RULE PR-006: Media Requirements
WHEN   property.media_upload
THEN   CHECK images.count >= 3
  AND  CHECK images.count <= 30
  AND  CHECK each_image.size <= 10MB
  AND  CHECK each_image.format IN ('jpg', 'jpeg', 'png', 'webp')
  AND  CHECK each_image.resolution >= 800x600
  AND  CHECK videos.count <= 3
  AND  CHECK each_video.size <= 100MB
  AND  CHECK no_watermarks (AI detection)
  AND  CHECK no_inappropriate_content (AI moderation)
```

---

## 3. ДУУДЛАГА ХУДАЛДААНЫ ДҮРЭМ (Auction Rules)

### AR-001: Дуудлага худалдаа үүсгэх
```
RULE AR-001: Auction Creation Requirements
WHEN   user.creates_auction
THEN   CHECK user.kyc_status == 'verified'
  AND  CHECK property.status == 'active'
  AND  CHECK property.is_verified == true
  AND  CHECK property.owner_id == user.id OR user.role == 'admin'
  AND  CHECK starting_price > 0
  AND  CHECK min_bid_increment >= starting_price * 0.005  # min 0.5% of starting
  AND  CHECK starts_at > NOW() + 24_hours  # Хамгийн багадаа 24 цагийн дараа
  AND  CHECK ends_at > starts_at + 1_hour  # Хамгийн багадаа 1 цаг
  AND  CHECK ends_at <= starts_at + 30_days  # Хамгийн ихдээ 30 хоног
```

### AR-002: Санал өгөх дүрэм (Bidding Rules)
```
RULE AR-002: Bid Placement Rules
WHEN   user.places_bid(amount)
THEN   CHECK auction.status == 'active'
  AND  CHECK NOW() >= auction.starts_at
  AND  CHECK NOW() < auction.ends_at
  AND  CHECK user.kyc_status == 'verified'
  AND  CHECK user.id != auction.property.owner_id  # Өмчлөгч bid тавьж болохгүй
  AND  CHECK amount >= auction.current_price + auction.min_bid_increment
  AND  CHECK user.has_deposit(auction.deposit_required)
  AND  CHECK user.bid_count_in_minute <= 5  # Rate limit
  AND  CHECK NOT fraud_detected(user, bid)
IF     ALL_PASS → ACCEPT bid, UPDATE current_price, NOTIFY all_bidders
IF     FAIL → REJECT with specific_reason
```

### AR-003: Anti-Sniping дүрэм
```
RULE AR-003: Anti-Sniping Extension
WHEN   bid.placed AND auction.time_remaining <= auction.auto_extend_minutes
THEN   IF auction.extensions_used < auction.max_extensions
         EXTEND auction.ends_at BY auto_extend_minutes
         INCREMENT auction.extensions_used
         NOTIFY all_bidders "Дуудлага худалдаа сунгагдлаа"
       ELSE
         NO_EXTENSION → auction ends at current ends_at
```

### AR-004: Дуудлага худалдаа дуусах
```
RULE AR-004: Auction Completion
WHEN   NOW() >= auction.ends_at AND auction.status == 'active'
THEN   
  IF   auction.total_bids > 0 AND highest_bid >= reserve_price
    SET  auction.status = 'completed'
    SET  auction.winner_id = highest_bidder.id
    SET  auction.final_price = highest_bid.amount
    CREATE contract(seller, winner, property, final_price)
    INIT  escrow_account(contract)
    NOTIFY winner "Та дуудлага худалдааг хожлоо!"
    NOTIFY seller "Дуудлага худалдаа дууслаа"
    RELEASE deposits for non_winners
    HOLD deposit for winner (applied to payment)
  ELSE
    SET  auction.status = 'failed'
    RELEASE all_deposits
    NOTIFY seller "Дуудлага худалдаа амжилтгүй боллоо"
```

### AR-005: Buy Now дүрэм
```
RULE AR-005: Buy Now (Шууд Худалдан Авах)
WHEN   user.buy_now(auction)
THEN   CHECK auction.buy_now_price IS NOT NULL
  AND  CHECK auction.status == 'active'
  AND  CHECK user.kyc_verified
THEN   
  SET  auction.status = 'completed'
  SET  auction.winner_id = user.id
  SET  auction.final_price = auction.buy_now_price
  CANCEL all_other_bids
  CREATE contract, INIT escrow
  NOTIFY all_participants
```

### AR-006: Shill Bidding Detection
```
RULE AR-006: Shill Bidding Prevention
WHEN   bid.placed
THEN   CHECK bidder.ip_address != seller.ip_address
  AND  CHECK bidder.device_fingerprint != seller.device_fingerprint
  AND  CHECK bidder.account_age >= 7_days
  AND  CHECK bidder.ip NOT IN known_vpn_list
  AND  CHECK bidder NOT IN seller.related_accounts
  AND  ML_MODEL.check_bid_pattern(auction_bids)
IF     SUSPICIOUS → FLAG for_review, ALLOW bid with_warning
IF     CONFIRMED_FRAUD → BLOCK bid, SUSPEND accounts, NOTIFY admin
```

---

## 4. ГЭРЭЭНИЙ ДҮРЭМ (Contract Rules)

### CR-001: Гэрээ үүсгэх
```
RULE CR-001: Contract Creation
WHEN   contract.create
THEN   CHECK property.status IN ('active', 'reserved')
  AND  CHECK seller.kyc_verified AND buyer.kyc_verified
  AND  CHECK agreed_price > 0
  AND  GENERATE unique contract_number (ELAND-YYYY-NNNNNN)
  AND  RENDER template with variables
  AND  SET status = 'draft'
  AND  NOTIFY both parties
```

### CR-002: Гарын үсэг зурах дараалал
```
RULE CR-002: Signing Workflow
WHEN   contract.sign_request
THEN   
  STEP 1: SELLER signs first
    CHECK 2FA_verified
    RECORD signature + timestamp + IP
    SET seller_signed_at
    NOTIFY buyer "Худалдагч гарын үсэг зурлаа"
    
  STEP 2: BUYER signs
    CHECK 2FA_verified
    RECORD signature + timestamp + IP
    SET buyer_signed_at
    SET status = 'signed'
    
  STEP 3: NOTARY (optional)
    CHECK notary.role == 'notary'
    RECORD notary signature + cert_number
    SET status = 'notarized'
    
  FINAL: GENERATE signed_pdf
         STORE immutably
         NOTIFY all parties
```

### CR-003: Гэрээний хүчинтэй хугацаа
```
RULE CR-003: Contract Expiry
WHEN   contract.status == 'draft' AND days_since_creation > 14
THEN   SET status = 'expired'
  AND  NOTIFY parties "Гэрээ хүчингүй боллоо"
  AND  RELEASE any_holds on property

WHEN   contract.status == 'pending_signatures' AND days_since_creation > 30
THEN   SET status = 'expired'
  AND  REFUND any_deposits
```

---

## 5. ТӨЛБӨРИЙН ДҮРЭМ (Payment Rules)

### PM-001: Escrow дүрэм
```
RULE PM-001: Escrow Flow
WHEN   escrow.created
THEN   
  STEP 1: Buyer deposits funds → status = 'funded'
  STEP 2: ALL release_conditions must be met
    - contract_signed ✓
    - inspection_passed ✓ (if applicable)
    - ownership_transferred ✓
  STEP 3: AUTO_RELEASE when all conditions met
    DEDUCT platform_fee (commission)
    TRANSFER remainder to seller
    SET status = 'released'
    
  TIMEOUT: If not funded within 7 days → CANCEL escrow
  DISPUTE: If dispute opened → FREEZE funds until resolved
```

### PM-002: Комиссийн хувь
```
RULE PM-002: Platform Commission
TYPE                  | RATE    | MIN FEE    | MAX FEE
─────────────────────────────────────────────────────
Property Sale         | 1.5%    | 50,000₮    | 5,000,000₮
Property Rental       | 5% (1mo)| 20,000₮    | 1,000,000₮
Auction Sale          | 2.0%    | 100,000₮   | 10,000,000₮
Listing Fee (Basic)   | Fixed   | 10,000₮    | -
Listing Fee (Premium) | Fixed   | 50,000₮    | -
Listing Fee (VIP)     | Fixed   | 150,000₮   | -
```

### PM-003: Түрээсийн төлбөрийн хуваарь
```
RULE PM-003: Rent Payment Schedule
WHEN   rental_contract.active
THEN   
  GENERATE monthly payment_schedule
  SEND reminder 3_days before due_date
  SEND reminder on due_date
  IF payment.overdue > 3_days → SEND warning to_tenant
  IF payment.overdue > 7_days → NOTIFY landlord
  IF payment.overdue > 30_days → FLAG for_action
  CALCULATE late_fee = rent_monthly * 0.1% * overdue_days (max 10%)
```

---

## 6. ЗАЛИЛАН ИЛРҮҮЛЭЛТ (Fraud Prevention)

### FD-001: Хэрэглэгчийн эрсдэл
```
RULE FD-001: User Risk Scoring
FACTORS:
  account_age           → score (new accounts = high risk)
  kyc_status            → score (verified = low risk)
  transaction_history   → score (more clean transactions = lower risk)
  ip_reputation         → score (VPN, proxy = higher risk)
  device_fingerprint    → score (new device = medium risk)
  behavior_pattern      → score (unusual hours, rapid actions = higher risk)
  
RISK_LEVELS:
  0-30:   LOW    → Normal operations
  31-60:  MEDIUM → Additional verification for large transactions
  61-80:  HIGH   → Manual review required
  81-100: CRITICAL → Account suspended, admin review
```

### FD-002: Зарын залилан
```
RULE FD-002: Listing Fraud Detection
WHEN   property.submitted
THEN   CHECK image_reverse_search (stolen photos)
  AND  CHECK price_anomaly (too low/high for area)
  AND  CHECK contact_info_mismatch
  AND  CHECK description_spam_patterns
  AND  CHECK duplicate_across_platforms
  AND  ML_MODEL.classify(property) → fraud_probability
IF     fraud_probability > 0.7 → AUTO_REJECT
IF     fraud_probability > 0.4 → FLAG for_manual_review
```

### FD-003: Bid Manipulation
```
RULE FD-003: Bid Manipulation Detection
MONITOR:
  - Rapid sequential bids from same IP subnet
  - Bid patterns matching known manipulation schemes
  - Accounts created shortly before auction
  - Unusual bid increment patterns (always exactly min_increment)
  - Bidders who always bid on same seller's auctions
  
ACTION:
  IF detected → 
    FLAG auction for review
    PAUSE auto_extensions
    NOTIFY admin
    LOG all evidence
```

---

## 7. НИЙЦЛИЙН ДҮРЭМ (Compliance Rules)

### CL-001: Мэдээлэл хадгалах
```
RULE CL-001: Data Retention Policy
TYPE                    | RETENTION    | AFTER
────────────────────────────────────────────────
Active user data        | Indefinite   | -
Deleted user PII        | 30 days      | Anonymize
Transaction records     | 10 years     | Archive
Audit logs              | 7 years      | Cold storage
Chat messages           | 2 years      | Archive
Session logs            | 90 days      | Delete
Temp files/uploads      | 24 hours     | Delete
KYC documents           | 5 years      | Secure archive
Contract PDFs           | 10 years     | Immutable archive
```

### CL-002: Хувийн мэдээлэл хамгаалах
```
RULE CL-002: Privacy & Data Protection
ENCRYPT:
  - Register numbers (AES-256)
  - Phone numbers (partial masking in display)
  - KYC documents
  - Bank account details
  - Passwords (bcrypt, min 12 rounds)

MASK in API responses:
  - Phone: "+976****1234"
  - Register: "**88****"
  - Email: "b***@example.com" (for other users)
  - Bank account: "****4567"

USER RIGHTS:
  - Right to access own data (GDPR Article 15)
  - Right to rectification (GDPR Article 16)
  - Right to erasure (GDPR Article 17)
  - Right to data portability (GDPR Article 20)
  
CONSENT:
  - Marketing communications → explicit opt-in
  - Data sharing with partners → explicit consent
  - Analytics cookies → consent banner
```

### CL-003: Аудит лог
```
RULE CL-003: Mandatory Audit Logging
LOG all of:
  - User authentication events (login, logout, failed)
  - Property CRUD operations
  - Price changes
  - Contract lifecycle events
  - Payment transactions
  - Escrow state changes
  - Bid placements
  - Admin actions
  - Permission changes
  - Data export requests
  
AUDIT LOG MUST BE:
  - Immutable (append-only, no delete/update)
  - Tamper-evident (hash chain)
  - Partitioned by time (monthly)
  - Indexed for search
  - Retained for 7 years minimum
```

---

## 8. SLA & PERFORMANCE ДҮРЭМ

### SLA-001: Үйлчилгээний түвшин
```
RULE SLA-001: Service Level Agreement
METRIC                  | TARGET     | CRITICAL
───────────────────────────────────────────────
Uptime                  | 99.9%      | < 99.5%
API Response Time (p95) | < 500ms    | > 2000ms
API Response Time (p99) | < 1000ms   | > 5000ms
Page Load Time          | < 3s       | > 8s
Search Query Time       | < 200ms    | > 1000ms
Bid Processing Time     | < 100ms    | > 500ms
File Upload             | < 10s      | > 30s
Notification Delivery   | < 30s      | > 5min

ESCALATION:
  Level 1: Auto-alert to on-call engineer
  Level 2: Team lead notification (15 min no response)
  Level 3: CTO notification (30 min no resolution)
```

---

## 9. МЭДЭГДЛИЙН ДҮРЭМ (Notification Rules)

```
TRIGGER                         | CHANNELS         | PRIORITY
────────────────────────────────────────────────────────────
Шинэ санал (bid)                | Push, InApp       | High
Саналаас давсан (outbid)        | Push, InApp, SMS  | High
Дуудлага худалдаа хожсон        | Push, InApp, Email| Critical
Дуудлага худалдаа дуусах гэж байна (5 мин) | Push  | High
Гэрээ үүссэн                   | Email, InApp      | Medium
Гарын үсэг шаардлагатай        | Email, Push       | High
Төлбөр амжилттай               | Push, InApp       | Medium
Төлбөр амжилтгүй               | Push, Email       | High
Түрээсийн төлбөр дөхөж байна   | Push, Email       | Medium
Түрээсийн төлбөр хоцорсон      | Push, Email, SMS  | High
Шинэ лавлагаа ирсэн            | Push, InApp       | Medium
Зар баталгаажсан                | Push, InApp       | Low
Зар татгалзсан                  | Email, InApp      | Medium
Системийн мэдэгдэл             | InApp             | Low
Аюулгүй байдлын анхааруулга    | Email, SMS, Push  | Critical
```

---

*Дараагийн баримт бичиг: `05-DEPLOYMENT-GUIDE.md` — Хэрэгжүүлэх, байршуулах заавар*
