import { defineConfig } from 'vite'
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base: process.env.NODE_ENV === 'production' ? '/' : './',
  build: {
    cssCodeSplit: true,
    sourcemap: true,
  },
  server: {
    proxy: {
      '^/api': {
        target: 'https://woaixiaoqianqian.cn/api',
        changeOrigin: true,
      }
    },
  },
  resolve: {
    alias: [
      {
        find: /@\//, // import alias to handle @src/ file easily
        replacement: resolve('./src') + '/',
      },
      {
        find: /^~(.+)/, // handle css import from scss
        replacement: '$1',
      },
    ],
  },
  plugins: [react(), tsconfigPaths()]
})
