import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base must match the GitHub repo name (Pages URL: https://<user>.github.io/<repo>/)
export default defineConfig({
  base: '/timbre-app/',
  plugins: [react(), tailwindcss()],
})
