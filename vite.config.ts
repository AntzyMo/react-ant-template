import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  /* 可以删除 只是用来配置git pages */
  base: '/react-ant-template/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true // 支持内联css
      }
    }
  }

  // server: {
  //   host: true,
  //   proxy: {
  //     "/api": {
  //       // target:'https://test.jobcn.com', // 测试
  //       target:'/mock', // 测试
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
})
