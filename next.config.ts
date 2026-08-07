import type { NextConfig } from 'next';

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

const nextConfig: NextConfig = {
  
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.wtrue.ir',
      },
      {
        protocol:'http',
        hostname:'files.wtrue.ir'
      },
      {
        protocol:'https',
        hostname:'files.epyc.ir'
      },{
        protocol:'https',
        hostname:'amgplus.ir'
      }
    ],
  },
  experimental: {
    serverComponentsHmrCache: false,
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  compiler:{
        removeConsole: process.env.NODE_ENV === 'production',
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  output: 'standalone',
};

export default nextConfig;
