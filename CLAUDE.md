# CLAUDE.md — Vietnam Ultimate Bucket List 2026

_Cập nhật lần cuối: 2026-05-06_

## Mục đích dự án
Interactive full-stack travel checklist — 41 bucket list items Vietnam 2026. Người dùng check-off địa điểm / món ăn / trải nghiệm, theo dõi progress, xem chi tiết từng item. Dữ liệu sync lên PostgreSQL khi đăng nhập Google.

---

## Tech Stack

| Layer | Công nghệ |
|-------|-----------|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS 3 + custom CSS keyframes |
| UI primitives | Radix UI (`@radix-ui/react-dialog`) |
| Client state | Zustand 5 + `persist` middleware (localStorage) |
| ORM | Prisma 5 + PostgreSQL |
| Auth | NextAuth.js v4 + Google OAuth + PrismaAdapter |
| Icons | lucide-react |
| Deploy | Railway (Nixpacks build) |

---

## Cấu trúc file quan trọng

```
data/bucketlist.ts          ← nguồn dữ liệu duy nhất (41 items, routes, tips, categoryConfig)
hooks/useBucketList.ts      ← Zustand store + useToggle + useProgress + useIsChecked
components/Providers.tsx    ← SessionProvider + SyncManager (server sync khi login)
app/api/checks/route.ts     ← GET trả danh sách checked, POST toggle 1 item
lib/auth.ts                 ← NextAuth authOptions (PrismaAdapter + GoogleProvider)
prisma/schema.prisma        ← User, Account, Session, VerificationToken, Check
```

---

## Data flow

```
Page load
  └─ Zustand rehydrates từ localStorage

User login (Google OAuth)
  └─ SyncManager (Providers.tsx) fetch GET /api/checks
      └─ setChecked() ghi đè toàn bộ local state

User toggle item
  └─ toggle() — cập nhật Zustand ngay (optimistic)
  └─ if session → POST /api/checks { itemId } — fire & forget

Offline / chưa login
  └─ localStorage vẫn hoạt động bình thường
```

---

## Animations đã implement

| Tên | File | CSS class / keyframe | Mô tả |
|-----|------|---------------------|-------|
| Checkbox bounce | `BucketItem.tsx` + `globals.css` | `.check-icon-enter` | SVG checkmark scale 0→1.4→1 khi check |
| Ripple xanh | `BucketItem.tsx` + `globals.css` | `.ripple-green` | box-shadow ripple khi check |
| Hover lift | `BucketItem.tsx` | `hover:scale-[1.015] hover:-translate-y-0.5 hover:shadow-md` | Card nhấc lên khi hover |
| Hover chevron | `BucketItem.tsx` | `group-hover:translate-x-0.5` | Arrow nhích phải khi hover |
| Dialog open/close | `DetailModal.tsx` + `globals.css` | `.dialog-overlay`, `.dialog-content` | Radix data-state + CSS keyframes |
| Progress shimmer | `ProgressBar.tsx` + `globals.css` | `.progress-shimmer` | Ánh sáng quét ngang thanh progress |
| Float emoji | `Header.tsx` | `animate-float` | 🇻🇳 và stars bay lên xuống nhẹ |
| Route card hover | `RouteCard.tsx` | `hover:shadow-md hover:-translate-y-0.5` | Card nhấc nhẹ |
| Tip card hover | `InsiderTips.tsx` | `hover:shadow-sm hover:-translate-y-0.5` | Card nhấc nhẹ |

---

## Progress achievements

| % | Label |
|---|-------|
| 0 | Curious Traveler |
| 1–25 | Vietnam Wanderer |
| 26–50 | True Explorer |
| 51–75 | Vietnam Enthusiast |
| 76–99 | Vietnam Legend |
| 100 | Vietnam Master 🏆 |

---

## Environment variables

```env
DATABASE_URL            # PostgreSQL (Railway auto-inject)
NEXTAUTH_URL            # URL đầy đủ (http://localhost:3000 local)
NEXTAUTH_SECRET         # openssl rand -base64 32
GOOGLE_CLIENT_ID        # Google Cloud Console
GOOGLE_CLIENT_SECRET    # Google Cloud Console
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY   # tuỳ chọn
```

---

## Câu lệnh thường dùng

```bash
npm install             # cài dependencies
cp .env.example .env    # tạo file env (điền values)
npm run db:push         # tạo/sync tables từ schema.prisma
npm run dev             # chạy dev server → http://localhost:3000
npm run build           # build production (chạy prisma generate trước)
npm run db:studio       # mở Prisma Studio để xem DB
```

---

## Các thao tác thường gặp

**Thêm bucket item mới:**
→ Chỉnh `data/bucketlist.ts`, thêm object vào đúng category array. TOTAL_ITEMS tự cập nhật.

**Đổi màu category:**
→ Sửa `categoryConfig` trong `data/bucketlist.ts` (headerBg, sectionBg, badgeBg, badgeText).

**Thêm category mới:**
1. Thêm vào `Category` type
2. Thêm vào `categoryConfig`
3. Thêm vào `bucketData`
4. Thêm vào `CATEGORY_ORDER`

**Đổi achievement thresholds:**
→ Sửa `ACHIEVEMENTS` array trong `components/progress/ProgressBar.tsx`.

**Thêm animation mới:**
1. Định nghĩa `@keyframes` trong `app/globals.css`
2. Đăng ký trong `tailwind.config.ts` → `theme.extend.keyframes` và `animation`
3. Dùng class `animate-{name}` trong component

---

## Deploy Railway

1. `git init && git add . && git commit -m "init"`
2. Push lên GitHub
3. Railway → New Project → Deploy from GitHub
4. Add **PostgreSQL** service (DATABASE_URL tự inject)
5. Set env vars: `NEXTAUTH_SECRET`, `NEXTAUTH_URL` (Railway URL), `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
6. Google Cloud Console → OAuth → thêm Railway URL vào **Authorized redirect URIs**: `https://your-app.railway.app/api/auth/callback/google`
7. Railway tự build với `npm run build` (bao gồm `prisma generate`)
