---
trigger: always_on
---

# Antigravity Agent Ruleset – Frontend, Backend, Database & System Integration  
**Project:** theinvestorlabs  

This ruleset defines strict engineering standards for frontend, backend, database integrations, responsiveness, and overall system behavior. All rules are mandatory unless explicitly overridden.

---

## 1. Frontend Rules

### 1.1 Framework & Rendering
- Use Next.js App Router exclusively.
- Prefer React Server Components by default.
- Use Client Components only when required (forms, interactivity, Clerk, UploadThing).
- Avoid unnecessary hydration.
- Split large components into smaller, reusable units.

---

### 1.2 UI Architecture
- Use Tailwind CSS with a consistent design system.
- Use shadcn/ui components as the base layer and extend when required.
- Centralize design tokens:
  - Colors
  - Spacing
  - Typography
- Avoid inline styles.
- Avoid duplicated UI logic.

---

### 1.3 State Management
- Prefer server state over client state.
- Use URL params and search params for filters.
- Use React Context only for global UI state (theme, modals).
- Avoid heavy state libraries unless justified.

---

### 1.4 Forms & Validation
- All forms must:
  - Use Zod schemas
  - Have client-side and server-side validation
- Display clear error and success states.
- Prevent duplicate submissions.
- Use accessible labels and placeholders.

---

### 1.5 SEO in Frontend
- Every page must implement `generateMetadata`.
- Use semantic HTML.
- Property pages must:
  - Have unique titles and descriptions
  - Include structured data
- No indexable pages without meaningful content.

---

## 2. Responsiveness Rules

### 2.1 Breakpoints
- Mobile-first approach.
- Mandatory support:
  - Mobile: < 768px
  - Tablet: 768px – 1279px
  - Desktop: ≥ 1280px

---

### 2.2 Layout Guidelines
- No horizontal overflow on any screen size.
- Touch targets must be at least 44px.
- Navigation must be:
  - Sticky on mobile
  - Clearly accessible
- Images and videos must scale proportionally.

---

### 2.3 Testing
- Test all pages on:
  - Small mobile devices
  - Large desktop screens
- Ensure forms and CTAs remain accessible at all sizes.

---

## 3. Backend Rules

### 3.1 API Architecture
- Use Next.js Route Handlers (`app/api`).
- Separate concerns:
  - Validation
  - Business logic
  - Database access
- Do not mix UI logic with API logic.

---

### 3.2 Authentication & Authorization
- Use Clerk middleware for route protection.
- Admin routes and APIs must:
  - Validate user role
  - Reject unauthorized access
- Never trust client-side role checks.

---

### 3.3 Validation & Error Handling
- All API inputs must be validated using Zod.
- Use consistent error responses.
- Do not expose internal errors to clients.
- Log errors where appropriate.

---

### 3.4 Performance
- Use caching and revalidation where applicable.
- Avoid N+1 database queries.
- Paginate all property listings.
- Rate-limit sensitive endpoints.

---

## 4. Database Rules (Neon + Drizzle)

### 4.1 Schema Design
- Normalize data where appropriate.
- Use enums for:
  - Property status
  - Property type
  - User roles
- Enforce foreign keys and indexes.
- Avoid nullable fields unless necessary.

---

### 4.2 Migrations
- All schema changes require migrations.
- Migrations must be committed to version control.
- No schema drift between environments.

---

### 4.3 Queries
- Use Drizzle ORM exclusively.
- Avoid raw SQL unless performance-critical.
- Use transactions for multi-step operations.
- Validate database outputs before returning to UI.

---

## 5. Media & File Handling

### 5.1 UploadThing Rules
- Restrict file types and sizes.
- Separate buckets/paths for:
  - Property images
  - Property videos
- Handle upload failures gracefully.
- Ensure media URLs are stored securely.

---

### 5.2 Media Optimization
- Images must be optimized and responsive.
- Videos must be lazy-loaded.
- Avoid auto-playing media.

---

## 6. Integration Rules

### 6.1 Frontend ↔ Backend
- Use typed APIs or shared schemas.
- No hardcoded API URLs.
- Handle loading, error, and empty states.

---

### 6.2 Backend ↔ Database
- Database access only through a dedicated data layer.
- No database queries inside UI components.
- Reuse query functions where possible.

---

## 7. Overall System Functionality

### 7.1 Property Flow
- Properties can only be created or modified by admin.
- Users can:
  - Browse listings
  - Filter by city, price, type
  - Submit leads
- Leads must be stored and visible to admin.

---

### 7.2 Reliability
- App must not crash on missing or partial data.
- Use graceful fallbacks.
- Implement proper loading states.

---

### 7.3 Observability
- Structure code to support future:
  - Logging
  - Monitoring
  - Analytics
- Avoid tightly coupling logic to external services.

---

## 8. Codebase Discipline

- Follow single-responsibility principle.
- Prefer clarity over cleverness.
- Avoid premature optimization.
- Every feature must be:
  - Testable
  - Maintainable
  - Scalable

---

## 9. Quality Gates

- Code must:
  - Type-check successfully
  - Pass lint rules
  - Build without warnings
- No feature is considered complete without:
  - Responsive verification
  - Role-based access validation
  - SEO checks

---

## 10. Antigravity Agent Enforcement

- Always think in terms of production readiness.
- Reject shortcuts that reduce security, performance, or maintainability.
- When in doubt, prefer explicit and predictable solutions.
