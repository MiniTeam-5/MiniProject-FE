import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://13.209.163.225:5000/',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
        secure: false
      }
    }
  }
});
