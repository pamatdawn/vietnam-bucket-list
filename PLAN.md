# PLAN.md — Vietnam Ultimate Bucket List 2026

> **Trạng thái:** ✅ Đã duyệt — sẵn sàng code

---

## 1. Dữ liệu trích xuất từ hình ảnh

### 1.1 MUST SEE — Iconic Destinations (11 địa điểm)

| ID | Tên | Mô tả ngắn |
|----|-----|------------|
| `ha-long-bay` | Ha Long Bay | Karsts in emerald waves, boat |
| `ninh-binh` | Ninh Binh | Trang An, temples, rivers |
| `hanoi` | Hanoi | Chaotic street with motorbikes |
| `hoi-an` | Hoi An | Lanterns over a river, traditional houses |
| `hue` | Hue | Imperial city, historic architecture |
| `phong-nha` | Phong Nha | Large cave entrance, Son Doong |
| `ha-giang` | Ha Giang | Winding epic mountain loop |
| `sapa` | Sapa | Rice terraces, ethnic people in colorful clothes |
| `da-nang` | Da Nang | Dragon Bridge, city skyline, beach |
| `ho-chi-minh-city` | Ho Chi Minh City | Fast-paced, modern skyscrapers, nightlife |
| `phu-quoc-dest` | Phu Quoc | Tropical beach, clear water, palm trees |

### 1.2 MUST DO — Real Vietnamese Experiences (10 trải nghiệm)

| ID | Tên | Mô tả ngắn |
|----|-----|------------|
| `cruise-ha-long` | Overnight Ha Long Cruise | Cruise overnight in Ha Long Bay |
| `ha-giang-loop` | Ha Giang Loop by Motorbike | Ride the legendary loop by motorbike |
| `sapa-trek` | Trek Ethnic Villages in Sapa | Trek through ethnic villages in Sapa |
| `egg-coffee` | Egg Coffee in Hanoi | Drink egg coffee in a hidden café in Hanoi |
| `water-puppet` | Water Puppet Show | Watch a traditional water puppet show |
| `golden-bridge` | Walk the Golden Bridge | Cross the iconic Golden Bridge in Da Nang |
| `phong-nha-caves` | Explore Phong Nha Caves | Explore caves in Phong Nha |
| `trang-an-boat` | Boat Through Trang An | Take a boat through Trang An rivers |
| `mekong-market` | Mekong Floating Markets | Experience floating markets in Mekong Delta |
| `hai-van-pass` | Ride the Hai Van Pass | One of the world's best coastal roads, motorbike |

### 1.3 MUST TRY — Experiences + Shopping (5 hoạt động)

| ID | Tên | Mô tả ngắn |
|----|-----|------------|
| `hoi-an-tailor` | Custom Outfit in Hoi An | Tailor your custom outfit in Hoi An |
| `cooking-class` | Vietnamese Cooking Class | Join a Vietnamese cooking class |
| `coffee-tour` | Coffee Tasting Tour | Coffee tasting tour |
| `lantern-pottery` | Make Lanterns or Pottery | Make lanterns or pottery by hand |
| `cyclo-ride` | Cyclo Ride — Old Quarter | Ride a cyclo through the Old Quarter |

### 1.4 MUST EAT — From Street to Soul (6 món)

| ID | Tên | Mô tả ngắn |
|----|-----|------------|
| `pho` | Phở | Vietnam's national comfort bowl, beef noodles |
| `banh-mi` | Bánh Mì | World-famous Vietnamese sandwich |
| `bun-cha` | Bún Chả | Grilled pork + noodles in Hanoi |
| `mi-quang` | Mì Quảng | Spicy central flavor bomb, beef soup |
| `com-tam` | Cơm Tấm | Saigon's signature broken rice |
| `che` | Chè | Sweet Vietnamese desserts |

> Tagline: *"Don't just eat — sit on tiny plastic stools and eat like a local."*

### 1.5 BEST ISLAND & BEACH LIFE (4 đảo)

| ID | Tên | Mô tả ngắn |
|----|-----|------------|
| `phu-quoc` | Phu Quoc | Chill & luxury |
| `nha-trang` | Nha Trang | Diving & nightlife |
| `con-dao` | Con Dao | Untouched & peaceful |
| `quy-nhon` | Quy Nhon | Hidden gem vibes |

### 1.6 PERFECT TRAVEL ROUTES (3 lộ trình — chỉ tham khảo, không check-off)

| ID | Tên | Lộ trình | Thời gian |
|----|-----|----------|-----------|
| `north-route` | North Vietnam | Hanoi → Ninh Binh → Ha Long → Sapa / Ha Giang | 7–10 ngày |
| `central-route` | North + Central | Hue → Da Nang → Hoi An | 14 ngày |
| `full-route` | Full Vietnam | Ho Chi Minh City → Mekong Delta → Phu Quoc | 20+ ngày |

### 1.7 INSIDER TIPS (5 mẹo — chỉ tham khảo, không check-off)

| ID | Mẹo |
|----|-----|
| `use-grab` | Use Grab instead of taxis |
| `carry-cash` | Carry cash (many places don't accept cards) |
| `bargain` | Bargain at market — it's part of the culture |
| `weather-varies` | Weather varies a lot: North & South |
| `wake-early` | Wake up early — Vietnam is most alive at sunrise |

### 1.8 Final Quote

> *"Vietnam isn't just a destination – it's the smell of street food, the sound of motorbikes, and the feeling of getting lost… and loving it."*

**Tổng số mục check-off:** 41 items (5 categories)

---

## 2. Quyết định đã confirm ✅

| # | Câu hỏi | Quyết định |
|---|---------|------------|
| 1 | Hình ảnh | Unsplash API (free tier) + fallback gradient màu theo category |
| 2 | Persistence | **PostgreSQL + Prisma + NextAuth.js** (có backend) |
| 3 | Auth | Google OAuth (NextAuth v4) |
| 4 | Ngôn ngữ UI | Tiếng Anh (như ảnh gốc) |
| 5 | Analytics | Bỏ qua cho v1 |
| 6 | Tên thư mục | `vietnam-bucket-list` |

---

## 3. Tech Stack (đã confirm)

```
Next.js 14 (App Router) + TypeScript   — framework chính, SSR/SSG cho SEO
Tailwind CSS                            — styling, responsive
Radix UI (Dialog)                       — accessible components
Zustand + persist                       — client state + offline fallback
Prisma ORM                              — type-safe DB access
PostgreSQL (Railway add-on)             — database
NextAuth.js v4 + Google OAuth           — authentication
```

**Lý do không dùng shadcn/ui CLI:** Inline Radix components thủ công để tránh setup phức tạp trong môi trường Windows.

---

## 4. Kiến trúc Dữ liệu

### 4.1 Schema dữ liệu tĩnh (`data/bucketlist.ts`)

```typescript
type Category = 'destinations' | 'experiences' | 'musttry' | 'food' | 'islands';
type Region   = 'north' | 'central' | 'south' | 'all';

interface BucketItem {
  id:           string;
  category:     Category;
  name:         string;
  description:  string;   // ~2 câu, hiện trong DetailModal
  region:       Region;
  tags:         string[];
  emoji:        string;
  imageKeyword: string;   // cho Unsplash query
}
```

### 4.2 Prisma Schema (`prisma/schema.prisma`)

```prisma
model User {
  id        String   @id @default(cuid())
  name      String?
  email     String?  @unique
  image     String?
  accounts  Account[]
  sessions  Session[]
  checks    Check[]
  createdAt DateTime @default(now())
}

// NextAuth standard tables: Account, Session, VerificationToken

model Check {
  id        String   @id @default(cuid())
  itemId    String
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())

  @@unique([userId, itemId])
}
```

### 4.3 Client State — Zustand Store

```typescript
interface BucketListState {
  checked:    Record<string, boolean>;
  isLoaded:   boolean;
  toggle:     (id: string) => void;
  setChecked: (ids: string[]) => void;  // ghi đè từ server khi login
  reset:      () => void;
}
```

**Flow đồng bộ:**
1. User chưa login → Zustand persist vào `localStorage`
2. User login (Google) → fetch `/api/checks` → `setChecked()` ghi đè local
3. User toggle → update local ngay (optimistic) + `POST /api/checks` async
4. Offline → localStorage vẫn hoạt động, sync lại khi có mạng

### 4.4 API Routes

```
GET  /api/checks          — trả về mảng itemId[] của user hiện tại
POST /api/checks          — toggle 1 item { itemId: string } → { checked: boolean }
```

---

## 5. Cấu trúc File

```
vietnam-bucket-list/
├── app/
│   ├── layout.tsx                        # Root layout + SEO metadata
│   ├── page.tsx                          # Home page (server component)
│   ├── globals.css                       # Tailwind base
│   └── api/
│       ├── auth/[...nextauth]/route.ts   # NextAuth handler
│       └── checks/route.ts              # GET / POST checks
│
├── components/
│   ├── Providers.tsx                     # SessionProvider + server sync
│   ├── auth/
│   │   └── AuthButton.tsx                # Login/logout Google button
│   ├── layout/
│   │   ├── Header.tsx                    # Title + tagline + auth button
│   │   └── Footer.tsx                    # Final quote
│   ├── progress/
│   │   └── ProgressBar.tsx              # Sticky progress bar + achievement
│   ├── bucket/
│   │   ├── CategorySection.tsx           # Container 1 category
│   │   ├── BucketItem.tsx               # 1 item: checkbox + name + click
│   │   └── DetailModal.tsx             # Radix Dialog: thông tin chi tiết
│   ├── routes/
│   │   └── RouteCard.tsx               # Timeline card cho lộ trình
│   └── tips/
│       └── InsiderTips.tsx             # Grid 5 mẹo du lịch
│
├── data/
│   └── bucketlist.ts                   # 41 items + routes + tips
│
├── hooks/
│   └── useBucketList.ts               # Zustand store + useToggle + useProgress
│
├── lib/
│   ├── prisma.ts                       # Prisma client singleton
│   ├── auth.ts                         # NextAuth config (authOptions)
│   └── utils.ts                        # cn() helper
│
├── prisma/
│   └── schema.prisma                   # DB schema
│
├── public/
│   └── og-image.png                    # Open Graph image
│
├── .env.example                        # Template biến môi trường
├── .gitignore
├── PLAN.md                             # File này
├── CLAUDE.md
├── README.md
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── railway.toml
```

---

## 6. UI Components chi tiết

### 6.1 Header
- Background: gradient đỏ `#c8102e → #7a0a1c`
- Logo 🇻🇳 + title "VIETNAM ULTIMATE BUCKET LIST 2026"
- Tagline italic
- Stat bar: "11 Destinations • 10 Experiences • 6 Foods • 4 Islands"
- AuthButton góc phải: "Sign in with Google" / avatar + "Sign out"

### 6.2 ProgressBar (sticky, xuất hiện sau khi scroll qua Header)
```
[Curious Traveler]  ████████░░░░░░░░  42%   17 / 41
```
- 6 cấp độ achievement theo % hoàn thành:
  - 0%: Curious Traveler
  - 1–25%: Vietnam Wanderer
  - 26–50%: True Explorer
  - 51–75%: Vietnam Enthusiast
  - 76–99%: Vietnam Legend
  - 100%: Vietnam Master 🏆
- Màu thanh progress thay đổi theo cấp độ

### 6.3 CategorySection
- Header màu riêng mỗi category + emoji + tên + số item
- Grid: 1 col (mobile) → 2 col (sm) → 3 col (lg)
- Màu sắc:
  - `destinations`: blue-600
  - `experiences`: red-600
  - `musttry`: pink-600
  - `food`: orange-500
  - `islands`: teal-600

### 6.4 BucketItem
- Custom checkbox (xanh khi checked)
- Emoji + tên item
- Mô tả ngắn truncated 1 dòng
- Chevron → click mở DetailModal
- Khi checked: text gạch ngang + opacity 70%

### 6.5 DetailModal (Radix Dialog)
- Header: gradient màu category + emoji lớn
- Body: tên, region badge, mô tả đầy đủ, tags
- Button: "Mark as Done ✓" / "Remove from completed"
- Unsplash image nếu có API key, fallback gradient

### 6.6 RouteCard
- 3 card theo màu route (blue/orange/red)
- Duration badge + timeline dots với connecting line
- Tên các điểm dừng

### 6.7 InsiderTips
- 5 card màu vàng, icon emoji + text mẹo

---

## 7. Design System

| Token | Giá trị | Dùng cho |
|-------|---------|---------|
| `primary` | `#c8102e` | Header, nút chính |
| `secondary` | `#f5a623` | Tips section, accents |
| `accent` | `#16a34a` | Checkbox checked, progress bar |
| Font | Be Vietnam Pro | Toàn bộ UI |

Breakpoints: mobile (<640px) → tablet (640–1024px) → desktop (>1024px)

---

## 8. Biến Môi Trường (`.env.example`)

```env
# Database (Railway PostgreSQL)
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"

# Google OAuth (Google Cloud Console)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# Unsplash (tùy chọn)
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY="..."
```

---

## 9. Quy trình Deploy lên Railway

### 9.1 `railway.toml`
```toml
[build]
builder = "NIXPACKS"
buildCommand = "npm run build"

[deploy]
startCommand = "npm run start"
healthcheckPath = "/"
restartPolicyType = "ON_FAILURE"
```

### 9.2 Các bước
1. `git init && git add . && git commit -m "init: Vietnam Bucket List 2026"`
2. Tạo repo GitHub, push code lên
3. Railway → New Project → Deploy from GitHub repo
4. Railway → Add PostgreSQL service (tự inject `DATABASE_URL`)
5. Railway → Variables: điền `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
6. Build command `prisma generate && next build` — Prisma tự migrate
7. Sau deploy: cập nhật `NEXTAUTH_URL` = URL Railway thật
8. Google Cloud Console: thêm Railway URL vào Authorized redirect URIs

**Lưu ý:** `DATABASE_URL` Railway inject tự động khi add PostgreSQL service.

---

## 10. Thứ tự xây dựng

| Bước | Nội dung | File |
|------|----------|------|
| 1 | Config project | `package.json`, `tsconfig.json`, `tailwind.config.ts`, etc. |
| 2 | Prisma schema + DB | `prisma/schema.prisma`, `lib/prisma.ts`, `lib/auth.ts` |
| 3 | Dữ liệu tĩnh | `data/bucketlist.ts` |
| 4 | Zustand store | `hooks/useBucketList.ts` |
| 5 | API routes | `app/api/auth/[...nextauth]/route.ts`, `app/api/checks/route.ts` |
| 6 | App shell | `app/layout.tsx`, `app/page.tsx`, `app/globals.css` |
| 7 | Core components | Header, Footer, ProgressBar, AuthButton, Providers |
| 8 | Bucket components | CategorySection, BucketItem, DetailModal |
| 9 | Phụ trợ | RouteCard, InsiderTips |
| 10 | Docs | CLAUDE.md, README.md |
