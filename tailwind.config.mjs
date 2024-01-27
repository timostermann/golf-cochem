/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
    },
  },
  plugins: [],
};
