---
trigger: always_on
---

# Antigravity Agent Ruleset – Design System, Color Palette, Typography & Spacing  
Project: theinvestorlabs  
Domain: Real Estate Marketplace (Premium, Trust-Driven, Conversion-Focused, India)

This ruleset defines the complete visual foundation of the product.  
All frontend UI decisions MUST strictly follow these rules.

---

## 1. Design Philosophy

- The brand must communicate:
  - Royalty & Exclusivity
  - Modern Sophistication
  - High Performance
  - Architectural Excellence
- Visual language should feel:
  - Regal
  - Structured
  - High-Contrast
  - Premium
- Avoid:
  - Playful or casual color schemes
  - Overly vibrant "startup neon" (except for specific accent hits)
  - Generic corporate blue
- The UI must feel like a **luxury gallery**, highlighting the exclusivity of the properties.

---

## 2. Brand Color Palette (PRIMARY – ENFORCED)

### 2.1 Core Color Reference Table

| Role | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Action** | Indigo Velvet | `#573280` | CTAs, Primary Buttons, Active States |
| **Primary Text / Deep** | Dark Amethyst | `#23022E` | Headlines, Hero Overlays, Body Text |
| **Foundational (Light)** | Honeydew | `#EFF8E2` | Supporting Backgrounds, Muted Sections |
| **Foundational (Pure)** | Pure White | `#FFFFFF` | Primary Background, High Contrast |
| **Supporting Accent** | Lilac Ash | `#ADA8B6` | Secondary Tags, Inactive Tabs |
| **Architectural Accent** | Dust Grey | `#CECFC7` | Borders, Dividers, Subtle Icons |

### 2.2 Core Brand Colors

#### Foundational Surface (Light)
- **Honeydew White**
- Hex: `#EFF8E2`
- Usage: Supporting background sections to provide a fresh, organic architectural feel.

#### Foundational Surface (Dark)
- **Pure White**
- Hex: `#FFFFFF`
- Usage: Primary background foundation for high-contrast clarity.

---

#### Primary Action (Accent)
- **Indigo Velvet**
- Hex: `#573280`
- Usage: CTAs, primary buttons, high-intent highlights, active states.
- Emotion: High performance, energy, conversion.

---

#### Primary Surface / Deep
- **Dark Amethyst**
- Hex: `#23022E`
- Usage: Hero overlays, primary headers, bold text foundation, cinematic backgrounds.
- Emotion: Regal trust, deep luxury, stability.

---

#### Supporting Accent
- **Lilac Ash**
- Hex: `#ADA8B6`
- Usage: Secondary tags, muted surface separation, inactive tabs.
- Emotion: Elegance, architectural calm.

---

#### Architectural Accent
- **Dust Grey**
- Hex: `#CECFC7`
- Usage: Dividers, borders, subtle icons, secondary buttons.

---

## 3. Color Usage Rules (STRICT)

- The primary background MUST be Pure White (#FFFFFF) or Honeydew White (#EFF8E2).
- Use **Indigo Velvet (#573280)** as the "Best Accent" for all primary call-to-actions.
- Text must always be:
  - `#23022E` for primary content (Dark Amethyst)
  - White (#FFFFFF) only on dark backgrounds (Dark Amethyst)
- Maintain WCAG AA contrast at all times.
- Decorative elements must never overpower the property imagery.

---

## 4. Typography System

### 4.1 Font Family
- Primary: **Plus Jakarta Sans**
- Fallback: `font-sans`

---

### 4.2 Font Weights
- Light: 300 (accent words only)
- Regular: 400 (body)
- Medium: 500 (labels)
- Semibold: 600 (sub-headings)
- Bold: 700 (H1 only)

Avoid extra-bold or ultra-light styles.

---

### 4.3 Heading Scale

#### H1
- Size: 44–52px (desktop)
- Weight: 700
- Line-height: 1.15
- Color: `#23022E`
- Usage:
  - Hero headlines
  - Primary value statements

#### H2
- Size: 32–36px
- Weight: 600
- Line-height: 1.25
- Color: `#23022E`

#### H3
- Size: 24–28px
- Weight: 600
- Line-height: 1.35
- Color: `#23022E`

---

### 4.4 Body Text
- Size: 15–16px
- Weight: 400
- Line-height: 1.6
- Color: `#23022E`

---

## 5. Spacing System (NON-NEGOTIABLE)

### 5.1 Base Unit
- Use **8px system only**

---

### 5.2 Section Spacing
- Desktop:
  - Padding top/bottom: `96–120px`
- Tablet:
  - `64–80px`
- Mobile:
  - `40–56px`

---

### 5.3 Content Rhythm
- Heading → content: `20–24px`
- Paragraph → paragraph: `12–16px`
- CTA below text: `24–32px`

---

### 5.4 Containers
- Desktop padding: `80–96px`
- Tablet padding: `48–64px`
- Mobile padding: `16–24px`
- Max readable width:
  - `60–72ch`

---

## 6. UI Components

### Buttons
- Height: `44–48px`
- Border-radius: `12px`
- Primary:
  - Background: `#573280`
  - Text: White
- Secondary:
  - Outline using `#573280`

Hover states must be subtle only.

---

### Cards
- Background: `#FFFFFF`
- Radius: `14–16px`
- Shadow: soft, diffused
- No hard borders

---

### Forms
- Input height: `44–48px`
- Radius: `10px`
- Border: `#CECFC7`
- Focus:
  - Outline with `#573280`

---

## 7. Accessibility

- WCAG AA contrast mandatory
- No color-only indicators
- Keyboard navigation required
- Motion must respect reduced-motion settings

---

## 8. Design Consistency Enforcement

- No custom colors outside this palette
- No arbitrary spacing values
- No mixing of other design systems
- All UI must reuse defined tokens

---

## 9. Antigravity Agent Enforcement

- Treat this as a hard contract
- Reject UI that:
  - Feels SaaS-like
  - Feels startup-generic
  - Breaks spacing rhythm
- Prioritize:
  - Calm confidence
  - Real estate seriousness
  - Indian premium sensibility
