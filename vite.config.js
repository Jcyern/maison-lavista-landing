import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configuración de Vite para el proyecto Maison Lavista (React)
// El entry point es index.html (comportamiento por defecto de Vite),
// que a su vez carga /src/main.jsx
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
