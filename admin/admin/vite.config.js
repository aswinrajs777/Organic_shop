import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: 'esnext', // Ensure that the target supports top-level await
  },
  optimizeDeps: {
    include: ['firebase/storage'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      external: ['firebase/storage'],
    },
  },
});
