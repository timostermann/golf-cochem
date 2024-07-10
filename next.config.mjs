/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  i18n: {
    locales: ["de", "en", "nl"],
    defaultLocale: "de",
    localeDetection: false,
  },
  compiler: {
    removeConsole: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "https",
        hostname: "golf-cochem.fra1.digitaloceanspaces.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
