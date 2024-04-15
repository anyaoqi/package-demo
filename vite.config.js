import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [ vue() ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.js'),
      name: 'hello-text',
      fileName: (format) => `hello-text.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
})