
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    allowedDevOrigins: [
      'https://6000-firebase-studio-1754065355666.cluster-fbfjltn375c6wqxlhoehbz44sk.cloudworkstations.dev',
    ]
  },
  serverExternalPackages: ['resend'],
};

export default nextConfig;
