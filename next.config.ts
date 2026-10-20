import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // O CSS do site é pequeno: embutido no HTML, ele deixa de ser uma
    // requisição que bloqueia a primeira pintura.
    inlineCss: true,
  },
  images: {
    // AVIF é bem menor que WebP nas fotos; WebP fica como alternativa.
    formats: ['image/avif', 'image/webp'],
    // As imagens de /public não mudam sem trocar de nome, então o cache
    // otimizado pode durar 31 dias em vez dos 4 h padrão.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'behold.pictures',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.behold.pictures',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;