// Design Tokens for The Investor Labs - Real Estate Marketplace
// Following UI/Typography Ruleset - STRICT BRAND ENFORCEMENT

export const colors = {
  // Brand Color Palette (PRIMARY - ENFORCED)
  brand: {
    white: "#FFFFFF", // Pure White foundation
    honeydew: "#EFF8E2", // Supporting surface
    indigoVelvet: "#573280", // Primary Action
    darkAmethyst: "#23022E", // Secondary Surface / Deep
    lilacAsh: "#ADA8B6", // Supporting Accent
    dustGrey: "#CECFC7", // Architectural Accent
  },

  // Semantic Mappings (Replaced Legacy Colors)
  primary: {
    DEFAULT: "#573280", // Indigo Velvet
    foreground: "#ffffff",
    dark: "#23022E", // Dark Amethyst
  },
  secondary: {
    DEFAULT: "#23022E", // Dark Amethyst
    foreground: "#ffffff",
    accent: "#ADA8B6", // Lilac Ash
  },
  accent: {
    DEFAULT: "#ADA8B6", // Lilac Ash
    dark: "#CECFC7", // Dust Grey
  },
  neutral: {
    DEFAULT: "#ADA8B6", // Lilac Ash
    deep: "#23022E", // Dark Amethyst
    surface: "#ffffff",
    muted: "#EFF8E2", // Honeydew
  },

  // Semantic Colors
  success: "#006466",
  warning: "#4D194D",
  error: "#1B3A4B",
  info: "#006466",
};

export const typography = {
  fontFamily: {
    sans: [
      "Plus Jakarta Sans",
      "var(--font-plus-jakarta)",
      "system-ui",
      "-apple-system",
      "sans-serif",
    ],
  },

  fontSize: {
    xs: ["0.8125rem", { lineHeight: "1.5" }], // 13px
    sm: ["0.875rem", { lineHeight: "1.5" }], // 14px
    base: ["0.9375rem", { lineHeight: "1.6" }], // 15px
    md: ["1rem", { lineHeight: "1.6" }], // 16px
    lg: ["1.25rem", { lineHeight: "1.4" }], // 20px
    xl: ["1.375rem", { lineHeight: "1.4" }], // 22px
    "2xl": ["1.5rem", { lineHeight: "1.35" }], // 24px
    "3xl": ["1.75rem", { lineHeight: "1.35" }], // 28px
    "4xl": ["2rem", { lineHeight: "1.3" }], // 32px
    "5xl": ["2.25rem", { lineHeight: "1.3" }], // 36px
    "6xl": ["2.5rem", { lineHeight: "1.2" }], // 40px
    "7xl": ["3rem", { lineHeight: "1.2" }], // 48px
  },

  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
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
  sm: "0.5rem", // 8px
  md: "0.75rem", // 12px (Updated to match Ruleset 6.UI Components)
  lg: "1rem", // 16px
  full: "9999px",
};

export const shadows = {
  soft: "0 4px 20px rgba(35, 2, 46, 0.05)", // Updated to Dark Amethyst for subtle shadow
  card: "0 8px 30px rgba(35, 2, 46, 0.08)",
  none: "none",
};

export const components = {
  button: {
    primary: {
      bg: "#573280",
      text: "#FFFFFF",
      hover: "#23022E",
    },
    secondary: {
      border: "#CECFC7",
      text: "#23022E",
      hover: "#ADA8B6",
    },
  },
  input: {
    border: "#ADA8B6",
    focus: "#573280",
    bg: "#FFFFFF",
  },
  card: {
    bg: "#FFFFFF",
    border: "#CECFC7",
    muted: "#EFF8E2",
  },
};

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
