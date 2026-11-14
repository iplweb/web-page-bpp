/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Next.js Image Optimization działa na Vercel / serwerze Node.
  // W razie przejścia na statyczny eksport (`output: 'export'`) trzeba
  // przywrócić `images: { unoptimized: true }`.
}

export default nextConfig
