# Git Branching Strategy

## Branch Structure

### Main Branches
- **main** - Production-ready code only
- **develop** - Staging and integration branch

### Supporting Branches
- **feature/*** - New features (e.g., `feature/admin-dashboard`)
- **fix/*** - Bug fixes (e.g., `fix/mobile-layout-overflow`)

---

## Workflow

### 1. Starting New Feature
```bash
# Ensure you're on develop
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/feature-name
```

### 2. Working on Feature
```bash
# Make changes
git add .
git commit -m "feat: add feature description"

# Push to remote
git push origin feature/feature-name
```

### 3. Creating Pull Request
- Create PR from `feature/feature-name` → `develop`
- Ensure all checks pass:
  - TypeScript compilation
  - Linting
  - Production build
- Request code review
- Merge after approval

### 4. Bug Fixes
```bash
# Create fix branch from develop
git checkout develop
git checkout -b fix/bug-description

# Make changes
git commit -m "fix: resolve bug description"

# Create PR to develop
git push origin fix/bug-description
```

### 5. Release to Production
```bash
# Create PR from develop → main
# After approval and testing
git checkout main
git merge develop
git push origin main
```

---

## Commit Message Convention

### Format
```
<type>: <description>

[optional body]
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting)
- **refactor**: Code refactoring
- **test**: Adding tests
- **chore**: Build process or tooling changes

### Examples
```bash
git commit -m "feat: add admin property editor"
git commit -m "fix: resolve mobile layout overflow"
git commit -m "docs: update API documentation"
git commit -m "refactor: extract validation logic to helper"
```

---

## Rules

### ❌ Prohibited
- Direct commits to `main`
- Direct commits to `develop` (use PRs)
- Force pushing to shared branches
- Merging without PR approval

### ✅ Required
- All changes via pull requests
- Code must pass all checks:
  - `pnpm tsc --noEmit` (TypeScript)
  - `pnpm lint` (ESLint)
  - `pnpm build` (Production build)
- Clear, descriptive commit messages
- Code review before merging

---

## Branch Protection

### Main Branch
- Require pull request reviews
- Require status checks to pass
- No force pushes
- No deletions

### Develop Branch
- Require pull request reviews
- Require status checks to pass
- No force pushes

---

## Quick Reference

```bash
# Check current branch
git branch

# Switch to develop
git checkout develop

# Create new feature
git checkout -b feature/my-feature

# Create new fix
git checkout -b fix/my-fix

# View changes
git status

# Stage all changes
git add .

# Commit with message
git commit -m "feat: description"

# Push to remote
git push origin branch-name

# Pull latest changes
git pull origin develop
```
