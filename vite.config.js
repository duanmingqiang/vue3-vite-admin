import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import styleImport from 'vite-plugin-style-import'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      // mockPath: 'mock',
      //  localEnabled: command === 'serve',
      // watchFiles: true,
      supportTs: false
    })
  ],
  // server: {},
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})