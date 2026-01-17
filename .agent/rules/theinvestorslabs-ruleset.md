---
trigger: always_on
---

# Antigravity Agent Ruleset  
**Project:** theinvestorlabs  
**Domain:** Real Estate Marketplace (Buy / Sell / Partner)

---

## 1. Product Vision & Scope

- Build a high-conversion real estate marketplace similar to 99acres, Magicbricks, and OpenHouse.
- Phase 1 cities: Noida and Gurgaon.
- Core user goals:
  - Buy properties
  - Sell properties
  - Partner with investors, builders, and agents
- Property listings are managed and published by admin only.
- Platform must be revenue-oriented through:
  - Lead generation
  - Featured listings
  - Partner onboarding
- UI must be simple, trust-driven, emotionally engaging, and easy for non-technical users.

---

## 2. Tech Stack (Strict)

### Framework & Tooling
- Next.js (App Router only)
- TypeScript (strict mode enabled)
- pnpm as the only package manager
- Tailwind CSS
- shadcn/ui for base components

### Authentication
- Clerk authentication
- Role-based access:
  - admin
  - agent
  - user
- Middleware-protected admin routes

### Database
- Neon (PostgreSQL)
- Drizzle ORM
- Strong typing and migrations required
- No raw SQL unless unavoidable

### File & Media Management
- UploadThing
- Supports property images and videos
- Enforce:
  - File size limits
  - Format validation
  - CDN delivery

---

## 3. Core Features

### Authentication & Authorization
- Clerk-based authentication
- Admin-only access for:
  - Property creation, update, and deletion
  - Featured property management

### Property Listings
Each property must support:
- Title
- Description (SEO-optimized)
- City (Noida or Gurgaon)
- Sector or locality
- Price
- Property type (Flat, Villa, Plot, Commercial)
- Multiple images
- Optional video walkthrough
- Status (Available, Sold, Coming Soon)
- Featured flag

### Admin Dashboard
- Property CRUD
- Media uploads
- Lead management
- Analytics-ready architecture

---

## 4. Responsive Design Requirements

- Fully responsive across:
  - Desktop (1280px and above)
  - Tablet (768px to 1279px)
  - Mobile (below 768px)
- Mobile-first approach
- No horizontal overflow issues
- Touch-friendly components

---

## 5. SEO & Performance

### SEO
- Dynamic metadata using `generateMetadata`
- SEO-friendly URLs (e.g., /properties/noida/sector-62)
- Open Graph and Twitter meta tags
- Image alt text required
- RealEstateListing schema markup
- XML sitemap
- Robots.txt

### Performance
- Server Components by default
- Client Components only when necessary
- next/image optimization
- Lazy loading for media
- Cache data using revalidation
- Lighthouse targets:
  - Performance: 90+
  - SEO: 95+

---

## 6. Security Rules

- No secrets in frontend code
- Environment variables managed via `.env`
- Clerk middleware for protected routes
- Input validation using Zod
- Admin API route protection
- Rate limiting for sensitive endpoints
- Input sanitization

---

## 7. Code Quality Standards

- Modular and scalable folder structure
- Reusable components
- Strong typing throughout
- No usage of `any`
- Zod schemas for:
  - Forms
  - API routes
- Error boundaries
- Loading and empty states implemented

---

## 8. Folder Structure
src/
├─ app/
│  ├─ (auth)/
│  ├─ admin/
│  ├─ properties/
│  ├─ api/
│  └─ layout.tsx
├─ components/
├─ lib/
│  ├─ db/
│  ├─ auth/
│  ├─ upload/
│  └─ seo/
├─ hooks/
├─ types/
└─ styles/

## 9. Git & Branching Strategy

### Branches
- main: production only
- develop: staging and integration
- feature/*: new features
- fix/*: bug fixes

### Rules
- No direct commits to main
- Pull requests required for merging
- Clear commit messages:
  - feat: add admin property editor
  - fix: resolve mobile layout overflow
- Code must pass:
  - Type checks
  - Linting
  - Production build

---

## 10. UX & Conversion Guidelines

- Homepage must:
  - Clearly communicate value proposition
  - Display trust signals
  - Highlight featured properties
- Clear CTAs:
  - Talk to Expert
  - Explore Properties
- Lead capture forms:
  - Minimal fields
  - High visibility
  - Admin notification on submission

---

## 11. Antigravity Agent Behavior Rules

- Act as a senior engineer and product owner
- Prioritize scalability and maintainability
- Avoid over-engineering
- Write clean, readable, production-ready code
- Always evaluate decisions based on:
  - Conversion impact
  - Performance
  - Long-term maintainability
