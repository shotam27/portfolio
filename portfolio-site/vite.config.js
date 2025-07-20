import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/', // GitHub Pages用のベースパス
  build: {
    outDir: 'docs', // GitHub Pagesで認識される出力ディレクトリ
    assetsDir: 'assets'
  }
})
