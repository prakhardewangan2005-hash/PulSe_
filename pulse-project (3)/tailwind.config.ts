import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace"],
      },
      colors: {
        ink: "#0b0b0b",
        bone: "#eaeaea",
        silver: {
          50: "#f4f4f5",
          100: "#e4e4e7",
          300: "#b6b6bb",
          500: "#8a8a90",
          700: "#3f3f46",
          900: "#18181b",
        },
        signal: "#7cc3ff",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.06), 0 30px 60px -30px rgba(0,0,0,0.9)",
        pill: "0 0 0 1px rgba(255,255,255,0.08) inset, 0 10px 30px -10px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
