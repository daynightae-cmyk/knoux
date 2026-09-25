import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        host: '0.0.0.0',
        port: 3000,
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@/lib': path.resolve(__dirname, './src/lib'),
          '@/components': path.resolve(__dirname, './src/components'),
          '@/hooks': path.resolve(__dirname, './src/hooks'),
          '@/src': path.resolve(__dirname, './src'),
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
