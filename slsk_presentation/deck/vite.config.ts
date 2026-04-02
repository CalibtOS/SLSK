import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset URLs so the build works at any host path (e.g. github.io/repo/).
  base: './',
})
