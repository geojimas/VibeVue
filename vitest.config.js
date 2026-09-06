import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config.js'

export default mergeConfig(
  viteConfig({
    mode: 'test',
    command: 'serve',
    isSsrBuild: false,
    isPreview: false,
  }),
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
    },
  }),
)
