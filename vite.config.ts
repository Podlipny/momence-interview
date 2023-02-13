import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@lib', replacement: path.resolve(__dirname, 'src/lib') },
    ],
  },
  server: {
    port: 4000,
    host: true,
    proxy: {
      '/api': {
        target: 'https://www.cnb.cz/en',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  preview: {
    port: 4200,
    host: true,
  },
})
