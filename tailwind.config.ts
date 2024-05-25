import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F8FBFF",
          100: "#F0F9FF",
          200: "#B9E6FE",
          500: "#0086C9",
          600: "#026AA2",
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
