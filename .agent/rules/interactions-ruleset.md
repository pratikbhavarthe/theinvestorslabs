---
trigger: always_on
---

# Cursor Agent Ruleset – Micro-Interactions, Motion & UX Feedback  
**Project:** theinvestorlabs  
**Domain:** Real Estate Marketplace (Premium, Trust-Focused, Conversion-Driven)

This ruleset defines how motion, hover states, scroll behavior, and subtle feedback must be implemented. Micro-interactions must feel intentional, restrained, and professional. Motion should reinforce clarity and confidence, never distraction.

---

## 1. Motion Philosophy

- Motion exists to:
  - Provide feedback
  - Guide attention
  - Reinforce hierarchy
  - Increase perceived quality
- Motion must feel:
  - Calm
  - Smooth
  - Predictable
  - Premium
- Avoid playful, bouncy, or exaggerated animations.
- Every animation must have a purpose.

---

## 2. Framer Motion Usage Rules

- Use **Framer Motion** as the single animation library.
- Keep animations lightweight.
- Prefer:
  - `opacity`
  - `transform` (translate, scale)
- Avoid animating:
  - Height (use scale/opacity instead)
  - Width where layout shift may occur
- Respect `prefers-reduced-motion`.

---

## 3. Global Motion Tokens

### 3.1 Duration
- Fast interactions (hover, focus): `120–160ms`
- Standard transitions: `200–240ms`
- Page or section entry: `300–400ms`

---

### 3.2 Easing
- Default easing:
  - `easeOut`
- Entry animations:
  - `easeOut`
- Exit animations:
  - `easeIn`

Avoid spring animations unless explicitly justified.

---

## 4. Hover Interactions

### 4.1 Navigation Items

- On hover:
  - Text color transitions to **Indigo Velvet (#573280)**
  - Subtle underline or bottom border appears using Indigo Velvet
- Animation:
  - Opacity or translateY: `2–4px`
  - Duration: `150ms`
- No scale beyond `1.02`.

---

### 4.2 Buttons

- Primary button hover:
  - Slight background darkening or shift to **Dark Amethyst (#23022E)**
  - Optional subtle shadow increase
- Secondary button hover:
  - Border color transition to Indigo Velvet
- No aggressive scaling.
- Disabled state:
  - Reduced opacity
  - No hover effect

---

### 4.3 Cards (Property Cards)

- On hover:
  - Elevation increase (shadow)
  - Subtle upward movement (`-4px`)
- Image:
  - Optional very slight scale (`1.03`)
- Animation must not cause layout shift.

---

## 5. Focus & Active States

- Focus must be visible and accessible.
- Use:
  - Outline or ring with **Indigo Velvet (#573280)**
- Active states:
  - Slight scale down (`0.98`)
  - Short duration (`100ms`)

---

## 6. Scroll-Based Interactions

### 6.1 Page Entry Animations

- Sections may fade in on scroll:
  - Initial: `opacity: 0`, `y: 20`
  - Animate to: `opacity: 1`, `y: 0`
- Trigger once per session.
- Delay children with small stagger.

---

### 6.2 Sticky Navigation

- Header behavior:
  - Static at top initially
  - On scroll:
    - Reduce height slightly
    - Add subtle shadow
- No sudden jumps.

---

## 7. Page Transitions

- Route transitions should:
  - Fade content
  - Maintain layout stability
- Avoid full-page motion unless justified.
- Navigation should feel instant, not animated heavily.

---

## 8. Loading & Feedback States

### 8.1 Buttons

- Show loading spinner inside button.
- Disable button during loading.
- Preserve button width to avoid layout shift.

---

### 8.2 Data Loading

- Use skeleton loaders instead of spinners for content.
- Skeletons must:
  - Match final layout
  - Use neutral gray tones
- Fade real content in smoothly.

---

## 9. Micro-Feedback Interactions

- Form submission:
  - Success confirmation
  - Clear error message on failure
- Validation:
  - Inline, real-time where appropriate
- Use subtle shake or color change only for errors.

---

## 10. Framer Motion Patterns (Preferred)

- `AnimatePresence` for:
  - Modals
  - Dropdowns
  - Toasts
- `motion.div` for:
  - Cards
  - Sections
- Variants for consistency:
  - Centralize animation variants
  - Reuse across components

---

## 11. Performance & UX Safety

- No animation should:
  - Block interaction
  - Cause layout shift
  - Affect Core Web Vitals negatively
- Avoid animations on large lists.
- Disable animations on low-end devices if necessary.

---

## 12. Accessibility & Reduced Motion

- Respect system reduced-motion settings.
- Provide non-animated fallbacks.
- Motion must never be the only feedback mechanism.

---

## 13. Consistency Rules

- Do not invent new animation styles per component.
- Reuse motion tokens and variants.
- All animations must feel part of the same system.

---

## 14. Cursor Agent Enforcement

- Treat motion as part of the design system.
- Reject flashy or unnecessary animations.
- Prefer subtlety over novelty.
- Always ask:
  - Does this improve clarity?
  - Does this increase perceived trust?
  - Does this help conversion?
