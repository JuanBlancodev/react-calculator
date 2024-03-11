import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true
  },
  base: "http://JuanBlancodev.github.io/react-calculator",
  server: {
    cors: true
  }
})