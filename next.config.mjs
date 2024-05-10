/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/de",
      permanent: true,
    },
  ],
};

export default nextConfig;
