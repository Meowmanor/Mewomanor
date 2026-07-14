import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative for GoDaddy shared hosting
export default defineConfig({
  plugins: [react()],
  base: './',
})
