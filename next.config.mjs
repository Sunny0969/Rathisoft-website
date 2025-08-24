/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a static export in the ./out folder on build
  output: 'export',
  // Ensure static hosts can serve directory indexes (e.g., /about/ -> /about/index.html)
  trailingSlash: true,
  // Disable Next.js image optimizer for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
