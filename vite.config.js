import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { analyzer } from 'vite-bundle-analyzer'

import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    tailwindcss(),
    analyzer(),
    VitePWA({
      registerType: 'autoUpdate',
      mode: 'production',
      injectRegister: 'auto',
      workbox: {
        cleanupOutdatedCaches: false,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true
      },
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'Vibe Vue',
        short_name: 'VibeVue',
        description: 'vue 3 Template',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon.svg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon.svg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
    }),
    Sitemap({ hostname: 'https://vibe-vue.vercel.app' }),
  ],
})
