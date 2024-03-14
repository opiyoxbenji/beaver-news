import { defineConfig } from 'vite'// Importing defineConfig function from Vite
import react from '@vitejs/plugin-react' // Importing the Vite plugin for React

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Using the Vite React plugin
})
