import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgdark: "#05050a",
        card: "#0d0d17",
        border: "#1f1f2e",
        primary: "#7c3aed",
        secondary: "#3b82f6",
        muted: "#94a3b8",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #7c3aed, #3b82f6)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(59,130,246,0.15))",
        "radial-fade": "radial-gradient(circle at center, rgba(124,58,237,0.25), transparent 70%)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        blob: "blob 12s infinite ease-in-out",
        "pulse-glow": "pulse-glow 3s infinite ease-in-out",
        shimmer: "shimmer 3s infinite linear",
      },
    },
  },
  plugins: [],
};
export default config;