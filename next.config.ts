
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
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
  },
  serverExternalPackages: ['resend'],
  devIndicators: {
    allowedDevOrigins: [
        'https://6000-firebase-studio-1754065355666.cluster-fbfjltn375c6wqxlhoehbz44sk.cloudworkstations.dev',
    ],
  }
};

export default nextConfig;
