import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    alias: {
      '@workshop/epic-sdk': './@workshop/epic-sdk',
    },
  },
})
