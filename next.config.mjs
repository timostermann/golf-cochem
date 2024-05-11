/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  redirects: async () => [
    {
      source: "/",
      destination: "/de",
      permanent: true,
    },
  ],
};

export default nextConfig;
