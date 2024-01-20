module.exports = {
  "*.{json,js,jsx,ts,tsx}": "npx prettier --write",
  "*.{json,js,jsx,ts,tsx,astro}": () => "npm run check",
  "*.{ts,tsx}": () => "tsc --noEmit",
};
