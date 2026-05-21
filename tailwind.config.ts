import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#41b883",
          dark: "#2d9768",
          darker: "#1a6e4a",
          light: "#3dd68c",
        },
        dark: {
          bg: "#0a0f0d",
          surface: "#111a15",
          card: "#162119",
          border: "rgba(65,184,131,0.15)",
        },
        light: {
          bg: "#f0faf5",
          surface: "#ffffff",
          card: "#ffffff",
          border: "rgba(65,184,131,0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "spin-slow": "spin 8s linear infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #41b883 0%, #2d9768 50%, #1a6e4a 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #41b883 0%, #3dd68c 50%, #00c9ff 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "neon-sm": "0 0 8px rgba(65,184,131,0.4)",
        neon: "0 0 12px rgba(65,184,131,0.5), 0 0 24px rgba(65,184,131,0.2)",
        "neon-lg":
          "0 0 20px rgba(65,184,131,0.6), 0 0 40px rgba(65,184,131,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
