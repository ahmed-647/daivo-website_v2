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
        primary: "#7c3aed",   // purple
        secondary: "#3b82f6", // blue
        muted: "#94a3b8",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #7c3aed, #3b82f6)",
      },
    },
  },
  plugins: [],
};
export default config;