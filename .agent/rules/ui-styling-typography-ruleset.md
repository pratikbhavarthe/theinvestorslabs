---
trigger: always_on
---

# Antigravity Agent Ruleset – Design System, Color Palette, Typography & Spacing  
**Project:** theinvestorlabs  
**Domain:** Real Estate Marketplace (Premium, Trust-Driven, Conversion-Focused)

This ruleset defines the visual foundation of the product. All frontend UI decisions must strictly follow these guidelines to ensure a cohesive, premium, and business-aligned experience.

---

## 1. Design Philosophy

- Visual tone must communicate:
  - Trust
  - Stability
  - Premium value
  - Professionalism
- Avoid flashy, playful, or experimental UI patterns.
- Design must feel:
  - Clean
  - Calm
  - Confident
  - Enterprise-grade
- UI should guide users toward conversion without visual clutter.

---

## 2. Color Palette (Real Estate Focused)

### 2.1 Primary Brand Colors

#### Primary
- **Deep Navy Blue**
  - Usage: Primary CTAs, headers, navigation
  - Emotion: Trust, authority, stability
  - Example: `#0F172A`

#### Secondary
- **Emerald Green**
  - Usage: Success states, highlights, growth indicators, featured tags
  - Emotion: Growth, wealth, investment
  - Example: `#047857`

---

### 2.2 Neutral Colors

- **Charcoal Black**
  - Text primary
  - `#111827`

- **Slate Gray**
  - Secondary text, labels
  - `#6B7280`

- **Cool Gray**
  - Borders, dividers
  - `#E5E7EB`

- **Off White**
  - Backgrounds
  - `#F9FAFB`

---

### 2.3 Accent Colors

- **Gold Accent**
  - Usage: Premium listings, featured badges
  - `#C9A227`
  - Use sparingly

- **Alert Red**
  - Errors, destructive actions
  - `#DC2626`

---

### 2.4 Color Usage Rules

- Never use more than:
  - 1 primary color per screen
  - 1 accent color per component
- Avoid gradients unless explicitly designed.
- Maintain WCAG AA contrast ratios.
- No neon or overly saturated colors.

---

## 3. Typography System

### 3.1 Font Family

- **Primary Font:** Plus Jakarta Sans
- Use system fallback:
  - `font-sans`

---

### 3.2 Font Weights

- Light: 300 (rare)
- Regular: 400 (body text)
- Medium: 500 (labels)
- Semibold: 600 (headings)
- Bold: 700 (primary headings only)

Avoid ultra-bold or extra-light styles.

---

### 3.3 Heading Scale

#### H1
- Size: 40–48px (desktop)
- Weight: 700
- Line-height: 1.2
- Usage:
  - Page hero titles
  - Primary value proposition

#### H2
- Size: 32–36px
- Weight: 600
- Line-height: 1.3
- Usage:
  - Section headers

#### H3
- Size: 24–28px
- Weight: 600
- Line-height: 1.35
- Usage:
  - Card titles
  - Sub-sections

#### H4
- Size: 20–22px
- Weight: 600
- Line-height: 1.4

---

### 3.4 Body Text

- Size: 15–16px
- Weight: 400
- Line-height: 1.6
- Color: Slate Gray or Charcoal

---

### 3.5 Small Text / Labels

- Size: 13–14px
- Weight: 500
- Line-height: 1.5
- Usage:
  - Metadata
  - Form labels
  - Captions

---

## 4. Spacing System

### 4.1 Base Unit

- Use an **8px spacing system** exclusively.

---

### 4.2 Padding Guidelines

#### Containers
- Desktop: 80–96px horizontal
- Tablet: 48–64px
- Mobile: 16–24px

#### Cards
- Padding: 20–24px
- Border-radius: 12–16px

---

### 4.3 Vertical Spacing

- Between sections: 80–120px
- Between headings and content: 16–24px
- Between paragraphs: 12–16px

---

### 4.4 Component Gaps

- Form fields gap: 16–20px
- Button groups gap: 12–16px
- Icon + text gap: 8–12px
- Grid gap:
  - Desktop: 24–32px
  - Mobile: 16px

---

## 5. Line Height & Text Rhythm

- Headings: Tight but readable
- Body text: Comfortable, airy
- Avoid cramped text blocks.
- Maximum text width:
  - 60–72 characters per line

---

## 6. UI Elements Styling

### 6.1 Buttons

- Height: 44–48px
- Border-radius: 10–12px
- Primary button:
  - Navy background
  - White text
- Secondary button:
  - Outline style
- Hover states must be subtle.

---

### 6.2 Cards

- Soft shadow only
- White background
- Clear visual hierarchy
- Avoid heavy borders

---

### 6.3 Forms

- Input height: 44–48px
- Rounded corners: 8–10px
- Focus state:
  - Primary color outline
- Error states:
  - Red border
  - Clear helper text

---

## 7. Accessibility Rules

- Maintain WCAG AA contrast.
- Text must be readable on all devices.
- Avoid color-only indicators.
- Ensure keyboard navigation support.

---

## 8. Design Consistency Enforcement

- No ad-hoc spacing or font sizes.
- No custom colors outside palette.
- All new UI must reuse existing tokens.
- If a new token is needed, define it globally.

---

## 9. Antigravity Agent Enforcement

- Treat this as a design system, not suggestions.
- Reject UI changes that violate spacing, typography, or color rules.
- Prioritize clarity, trust, and conversion over visual novelty.
- Always evaluate UI decisions from a real estate business perspective.
