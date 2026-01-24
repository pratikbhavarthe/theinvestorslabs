# Antigravity Agent Ruleset – Design System, Color Palette, Typography & Spacing  
**Project:** theinvestorlabs  
**Domain:** Real Estate Marketplace (Trusted, Clear, Conversion-Focused)

This ruleset defines the visual foundation of the product.  
All frontend UI decisions MUST strictly follow these rules.

---

## 1. Design Philosophy

- **Trusted Realty Blue**: The brand communicates trust, clarity, and professionalism.
- **Balanced & Approachable**: Unlike the previous "Royal" theme, this is designed for high readability and familiarity (similar to Zillow/99acres but cleaner).
- **Functionality First**: Colors are used to guide users, not just for decoration.
- **Visual Hierarchy**: White/Off-White backgrounds allow listings to pop. Blue actions guide the eye.

---

## 2. Brand Color Palette (MANDATORY)

### 2.1 Core Color Reference Table

| Role | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | Realty Blue | `#1F5EFF` | Primary Buttons, Search, Active Tabs, Links |
| **Secondary/Depth** | Deep Estate Blue | `#1B2B55` | Headers, Footer, Section Titles |
| **Soft UI/Accent** | Skyline Blue | `#EAF0FF` | Light Backgrounds, Hover States, Selected Filters |
| **Premium Accent** | Muted Amber | `#F4B740` | "Featured" Badges, "Verified" Icons (Use Sparingly) |
| **Background** | Off-White | `#F8F9FB` | Main Page Background |
| **Borders** | Cool Gray | `#E1E5EE` | Dividers, Card Borders, Inputs |
| **Text Primary** | Ink Navy | `#1A1F36` | Headings, Body Text |
| **Text Secondary** | Slate Gray | `#6B7280` | Meta info, Subtitles, Placeholders |

### 2.2 Semantic Color Mapping

- **Primary Action**: `Realty Blue` (#1F5EFF)
- **Primary Surface**: `White` (#FFFFFF) or `Off-White` (#F8F9FB)
- **Secondary Surface**: `Skyline Blue` (#EAF0FF)
- **Text**: `Ink Navy` (#1A1F36) on light; `White` on dark.
- **Borders**: `Cool Gray` (#E1E5EE)

---

## 3. UI Usage Rules

### 3.1 Buttons
- **Primary (Search/View)**: `bg-realty-blue text-white hover:bg-[#1749C9]`
- **Secondary (Contact)**: `border-realty-blue text-realty-blue hover:bg-skyline-blue`
- **Tertiary (Save/Share)**: `text-slate-gray hover:text-realty-blue`

### 3.2 Layout Colors
- **Top Nav**: `White`
- **Hero/Search Section**: `Skyline Blue` (#EAF0FF)
- **Cards**: `White` with `Cool Gray` border.
- **Results Section**: `Off-White` (#F8F9FB)

---

## 4. Typography System

- **Font Family**: **Plus Jakarta Sans** (Primary), `Inter` (Fallback).
- **Weights**: Regular (400), Medium (500), Bold (700).

---

## 5. Spacing & Radius
- **Radius**: `rounded-xl` (12px) for cards, `rounded-lg` (8px) for buttons.
- **Spacing**: Use standard 4/8/16/24/32px grid.

---

## 6. Antigravity Agent Enforcement

- **NO GENERIC GRAYS**: Use `Cool Gray` (#E1E5EE) for borders and `Slate Gray` (#6B7280) for secondary text.
- **NO RANDOM BLUES**: Use ONLY `Realty Blue` (#1F5EFF) or `Deep Estate Blue` (#1B2B55).
- **NO NEON COLORS**: The Amber (#F4B740) is muted, not neon yellow.

</DESIGN_SYSTEM>
