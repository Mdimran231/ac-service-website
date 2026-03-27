import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
   // Agar 5173 busy hai, toh ye dusra port nahi lega balki error dega
  }
})