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
  redirects: async () => [
    {
      source: "/category/:slug*",
      destination: "/clubleben/news",
      permanent: true,
    },
    {
      source: "/tag/:slug*",
      destination: "/clubleben/news",
      permanent: true,
    },
    {
      source: "/events/:slug*",
      destination: "/",
      permanent: true,
    },
    {
      source: "/mec-category/:slug*",
      destination: "/",
      permanent: true,
    },
    {
      source: "/shop(-2)?/:slug*",
      destination: "/",
      permanent: true,
    },
  ],
};

export default nextConfig;
