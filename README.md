# The Investor Labs

A high-conversion real estate marketplace platform for Noida and Gurgaon.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Authentication**: Clerk
- **Database**: Neon PostgreSQL + Drizzle ORM
- **File Upload**: UploadThing
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (required)

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Add your credentials to .env

# Generate database schema
pnpm db:generate

# Run migrations
pnpm db:migrate

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm db:generate  # Generate Drizzle migrations
pnpm db:migrate   # Run database migrations
pnpm db:studio    # Open Drizzle Studio
```

## Git Branching Strategy

### Branches
- **main** - Production-ready code
- **develop** - Staging and integration
- **feature/*** - New features
- **fix/*** - Bug fixes

### Workflow
```bash
# Start new feature
git checkout develop
git checkout -b feature/my-feature

# Commit changes
git commit -m "feat: add feature description"

# Create PR to develop
git push origin feature/my-feature
```

See [.agent/workflows/git-branching.md](.agent/workflows/git-branching.md) for details.

## Project Structure

```
src/
├── app/              # Next.js app router
│   ├── (auth)/      # Auth routes
│   ├── admin/       # Admin dashboard
│   ├── properties/  # Property pages
│   └── api/         # API routes
├── components/       # React components
├── lib/             # Utilities
│   ├── db/          # Database
│   ├── auth/        # Authentication
│   ├── upload/      # File upload
│   └── seo/         # SEO utilities
├── hooks/           # Custom hooks
└── types/           # TypeScript types
```

## Environment Variables

Required environment variables:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# UploadThing
UPLOADTHING_TOKEN=

# Database
DATABASE_URL=
```

## Features

- Property listings (Noida & Greater Noida)
- Admin dashboard
- Lead management
- File uploads (images & videos)
- SEO optimization
- Role-based access control

## Commit Convention

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: code formatting
refactor: code restructuring
test: add tests
chore: build/tooling changes
```

## Code Quality

All PRs must pass:
- TypeScript compilation
- ESLint checks
- Production build

## License

Private - All rights reserved
