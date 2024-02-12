/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        black: {
          default: "#000000",
          dark: "#292F36",
          light: "#4D5053",
        },
        orange: {
          bright: "#C76904",
          light: "#CDA274",
          ligher: "D8A876",
        },
      },
      fontFamily: {
        "DM-serif-Display": ["DM Serif Display", "serif"],
        Inter: ["Inter", "serif"],
        Jost: ["Jost", "sans-serif"],
      },
      fontSize: {
        "xlp": ["1.375rem", "2.0625rem"],
        "2xlp": ["1.75rem", "2.625rem"],
        "3xlp": ["2.5rem", "3.125rem"],
        "5xlp": ["3.438rem", "4.3125rem"],
        "6xlp": ["4.063rem", "5.0625rem"],
        "7xlp": ["5.313rem", "6.625rem"],
      },
      backgroundImage: {
        "hero-image": "url('/assets/images/backgrounds/Rectangle 1.png')",
        "workFrame1": "url('assets/images/backgrounds/Frame 2.png')",
      },
    },
  },
  plugins: [],
};
