// Animation variants for Framer Motion
// Following interactions ruleset

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardHover = {
  rest: { y: 0, boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)" },
  hover: {
    y: -4,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.15 } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
};
