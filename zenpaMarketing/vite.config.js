import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false, // Ensure this is false if not using HTTPS
      },
    },
  },
  plugins: [react()],
})
