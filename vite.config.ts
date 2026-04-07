import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import { sitemapRoutes } from './src/app/sitemap-routes'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    sitemap({
      hostname: process.env.VITE_PUBLIC_URL || 'https://hexagoncx.com',
      dynamicRoutes: sitemapRoutes,
      priority: {
        '/': 1.0,
        '/features': 0.8,
        '/pricing': 0.8,
        '/use-cases': 0.8,
        '/integrations': 0.8,
        '/documentation': 0.8,
        '/api-reference': 0.8,
        '/blog': 0.8,
        '/support': 0.8,
        '/about': 0.7,
        '/careers': 0.7,
        '/contact': 0.7,
        '/partners': 0.7,
        '/demo': 0.7,
        '/privacy-policy': 0.5,
        '/terms-of-service': 0.5,
      },
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // During `npm run dev`, Vite doesn't run Vercel serverless functions.
  // This proxies `/api/*` to the local Express server (`node api-server.js`).
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
