module.exports = {
  "*.{json,js,jsx,ts,tsx}": "npx prettier --write",
  "*.{json,js,jsx,ts,tsx,astro}": "npm run check",
  "*.{js,jsx,ts,tsx}": "npm run eslint",
  "*.{ts,tsx}": () => {
    return "tsc --noEmit";
  },
};
