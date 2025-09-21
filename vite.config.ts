import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    

  ],
  define: {
        'process.env': {
          "REACT_APP_GOOGLE_API":"AIzaSyDdy97kaTzH2HOakQn9H23HHwLcc1jpWPE"
        }, // Or define specific process.env variables as needed
      },
})
