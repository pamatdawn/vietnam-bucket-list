# 🇻🇳 Vietnam Ultimate Bucket List 2026

> Interactive full-stack travel checklist — track your Vietnam journey across 41 must-see, must-do, must-eat experiences.

## Features

- **Interactive checklist** — check off destinations, experiences, foods, islands
- **Progress tracker** — sticky progress bar with 6 achievement levels (Curious Traveler → Vietnam Master 🏆)
- **Detail view** — click any item for a full description, region info, and tags
- **Google login** — save your progress to the cloud, sync across devices
- **Offline-first** — works without login via localStorage
- **Responsive** — 1/2/3 column grid on mobile/tablet/desktop

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** + custom CSS animations
- **Radix UI** (accessible Dialog)
- **Zustand** (client state + localStorage persist)
- **Prisma** + **PostgreSQL** (Railway)
- **NextAuth.js v4** + Google OAuth

## Local Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
```bash
cp .env.example .env
```

Fill in `.env`:
- `DATABASE_URL` — your PostgreSQL connection string
- `NEXTAUTH_URL` — `http://localhost:3000`
- `NEXTAUTH_SECRET` — run `openssl rand -base64 32`
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — from [Google Cloud Console](https://console.cloud.google.com/)

> **Google OAuth setup:** Create a project → Enable Google+ API → OAuth 2.0 Credentials → Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

### 3. Create database tables
```bash
npm run db:push
```

### 4. Run dev server
```bash
npm run dev
# → http://localhost:3000
```

## Deploy to Railway

1. Push code to a GitHub repository
2. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub**
3. Select your repo
4. Add a **PostgreSQL** service — Railway injects `DATABASE_URL` automatically
5. Set environment variables in Railway dashboard:
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` = `https://your-app.railway.app`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
6. Update Google OAuth redirect URI to: `https://your-app.railway.app/api/auth/callback/google`
7. Railway builds with `npm run build` and starts with `npm start`

## Data

All 41 bucket items live in `data/bucketlist.ts`. To add a new item:

```typescript
// Add to the correct category array in bucketData
{
  id: 'unique-kebab-id',
  category: 'destinations',  // or experiences / musttry / food / islands
  name: 'Place Name',
  description: '2–3 sentence description shown in the detail modal.',
  region: 'north',           // north | central | south | all
  tags: ['tag1', 'tag2'],
  emoji: '🏔️',
  imageKeyword: 'search term for unsplash',
}
```

## Project Structure

```
app/                    Next.js App Router pages & API routes
components/             React components
  auth/                 AuthButton (Google sign-in/out)
  bucket/               CategorySection, BucketItem, DetailModal
  layout/               Header, Footer
  progress/             ProgressBar (sticky, animated)
  routes/               RouteCard (travel itineraries)
  tips/                 InsiderTips
data/bucketlist.ts      All static data (single source of truth)
hooks/useBucketList.ts  Zustand store + server sync hooks
lib/                    auth.ts, prisma.ts, utils.ts
prisma/schema.prisma    Database schema
```

## License

MIT
