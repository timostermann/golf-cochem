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
        primary: {
          100: "#F0F9FF",
          200: "#B9E6FE",
          500: "#0086C9",
          700: "#065986",
          800: "#0B4A6F",
        },
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};
export default config;
