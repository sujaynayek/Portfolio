import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Keep using the existing Express + MySQL endpoint during development.
      '/submit-query': 'http://localhost:8080',
    },
  },
})
