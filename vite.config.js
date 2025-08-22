import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/', // Important for custom domain
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        certificates: resolve(__dirname, 'certificates.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
