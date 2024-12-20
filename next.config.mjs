/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['rophpbjjvrpiuagfewbu.supabase.co'],
  },
}

export default nextConfig;
