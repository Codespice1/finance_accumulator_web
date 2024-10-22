/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverComponentsExternalPackages: ["pino", "pino-pretty", "bcryptjs"],
  },
};

export default nextConfig;
