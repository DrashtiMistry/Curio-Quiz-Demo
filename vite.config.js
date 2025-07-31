import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  server: {
    port: 3000,
    host: true,
  }, 
=======
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
})
