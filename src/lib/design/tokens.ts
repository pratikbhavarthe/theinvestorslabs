// Design Tokens for The Investor Labs - Real Estate Marketplace
// Following UI/Typography Ruleset

export const colors = {
  // Primary - Deep Navy Blue (Trust, Authority, Stability)
  primary: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#334155",
    600: "#1e293b",
    700: "#0f172a", // Primary brand color
    800: "#0a0f1a",
    900: "#020617",
  },

  // Secondary - Emerald Green (Growth, Wealth, Investment)
  secondary: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857", // Secondary brand color
    800: "#065f46",
    900: "#064e3b",
  },

  // Accent - Gold (Premium, Featured)
  accent: {
    DEFAULT: "#C9A227",
    light: "#E5C158",
    dark: "#A68519",
  },

  // Neutral Colors
  neutral: {
    charcoal: "#111827", // Text primary
    slate: "#6B7280", // Secondary text, labels
    coolGray: "#E5E7EB", // Borders, dividers
    offWhite: "#F9FAFB", // Backgrounds
  },

  // Semantic Colors
  success: "#047857",
  warning: "#f59e0b",
  error: "#DC2626",
  info: "#0f172a",
};

export const typography = {
  fontFamily: {
    sans: [
      "Plus Jakarta Sans",
      "Inter",
      "system-ui",
      "-apple-system",
      "sans-serif",
    ],
  },

  fontSize: {
    // Small text / Labels (13-14px)
    xs: ["0.8125rem", { lineHeight: "1.5" }], // 13px
    sm: ["0.875rem", { lineHeight: "1.5" }], // 14px

    // Body text (15-16px)
    base: ["0.9375rem", { lineHeight: "1.6" }], // 15px
    md: ["1rem", { lineHeight: "1.6" }], // 16px

    // H4 (20-22px)
    lg: ["1.25rem", { lineHeight: "1.4" }], // 20px
    xl: ["1.375rem", { lineHeight: "1.4" }], // 22px

    // H3 (24-28px)
    "2xl": ["1.5rem", { lineHeight: "1.35" }], // 24px
    "3xl": ["1.75rem", { lineHeight: "1.35" }], // 28px

    // H2 (32-36px)
    "4xl": ["2rem", { lineHeight: "1.3" }], // 32px
    "5xl": ["2.25rem", { lineHeight: "1.3" }], // 36px

    // H1 (40-48px)
    "6xl": ["2.5rem", { lineHeight: "1.2" }], // 40px
    "7xl": ["3rem", { lineHeight: "1.2" }], // 48px
  },

  fontWeight: {
    light: "300", // Rare use
    normal: "400", // Body text
    medium: "500", // Labels
    semibold: "600", // Headings
    bold: "700", // Primary headings only
  },
};

export const spacing = {
  // 8px base unit system
  0: "0",
  1: "0.5rem", // 8px
  2: "1rem", // 16px
  3: "1.5rem", // 24px
  4: "2rem", // 32px
  5: "2.5rem", // 40px
  6: "3rem", // 48px
  8: "4rem", // 64px
  10: "5rem", // 80px
  12: "6rem", // 96px
  15: "7.5rem", // 120px
};

export const borderRadius = {
  sm: "0.5rem", // 8px - Forms
  md: "0.625rem", // 10px - Buttons
  lg: "0.75rem", // 12px - Cards
  xl: "1rem", // 16px - Cards
  full: "9999px",
};

export const shadows = {
  soft: "0 2px 8px rgba(0, 0, 0, 0.08)",
  card: "0 4px 12px rgba(0, 0, 0, 0.1)",
  none: "none",
};

export const components = {
  button: {
    height: "2.75rem", // 44px
    heightLg: "3rem", // 48px
    borderRadius: "0.75rem", // 12px
  },

  input: {
    height: "2.75rem", // 44px
    heightLg: "3rem", // 48px
    borderRadius: "0.625rem", // 10px
  },

  card: {
    padding: "1.25rem", // 20px
    paddingLg: "1.5rem", // 24px
    borderRadius: "0.75rem", // 12px
    borderRadiusLg: "1rem", // 16px
  },
};

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
