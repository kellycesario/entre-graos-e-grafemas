/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'pt-BR',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/about-me',
        destination: '/sobre-mim',
      },
      {
        source: '/research',
        destination: '/pesquisas',
      },
      {
        source: '/partnerships',
        destination: '/parcerias',
      },
      {
        source: '/contact-me',
        destination: '/contato',
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, '.src/styles')],
    prependData: `@import "./src/styles/index.scss";`,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'videos.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
