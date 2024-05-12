/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  i18n: {
    locales: ["de", "en", "nl"],
    defaultLocale: "de",
    localeDetection: false,
  },
};

export default nextConfig;
