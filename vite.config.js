import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { VitePluginRadar } from 'vite-plugin-radar'
import { analyzer } from 'vite-bundle-analyzer'

import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    analyzer(),
    VitePWA(),
    Sitemap({ hostname: 'https://vibe-vue.vercel.app' }),
    VitePluginRadar({
      analytics: {
        id: 'G-ET8C46E6YZ',
      },
    })
  ],
})
