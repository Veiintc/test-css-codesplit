const { resolve } = require('path')
import vue from '@vitejs/plugin-vue'
import {defineConfig} from "vite"

module.exports = defineConfig({
  build: {
    outDir:'./dist',
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        other: resolve(__dirname, './other.js')
      },
      treeshake: false,
      output: {
        // file:"./[name]-[hash].[ext]",
        format: 'cjs',
        freeze: false,
        externalLiveBindings: false,
      },
    }
  },
  plugins: [
    vue(),
  ]
})
