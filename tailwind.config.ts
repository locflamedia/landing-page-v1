import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "max-2xl": { max: "1439px" },
      "max-xl": { max: "1279px" },
      "max-lg": { max: "1023px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "639px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2C4F3E",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5E6E0",
          foreground: "#2C4F3E",
        },
        accent: {
          DEFAULT: "#D4A373",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#FAF6F3",
          foreground: "#6B7280",
        },
        destructive: {
          DEFAULT: "#F8F5F1",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["BeVietnamPro", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "4rem",
          "2xl": "7rem",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
