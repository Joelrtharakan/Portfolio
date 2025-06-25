import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // 👈 this is the fix
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});