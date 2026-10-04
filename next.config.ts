import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep the same URLs as before: /tjanster/el/, /en/gallery/ …
  trailingSlash: true,
  experimental: {
    // Two root layouts (sv + en) need a global 404 page.
    globalNotFound: true,
  },
};

export default nextConfig;
