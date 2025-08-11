
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
    allowedDevOrigins: [
      'https://9000-firebase-studio-1754065355666.cluster-fbfjltn375c6wqxlhoehbz44sk.cloudworkstations.dev',
    ]
  },
  serverExternalPackages: ['resend'],
};

export default nextConfig;
