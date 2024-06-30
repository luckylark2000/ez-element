import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EzElement',
      fileName: 'ez-element',
    },
    rollupOptions: {
      external: ['vue'], // 排除项
      output: {
        exports: 'named', // 导出类型
        globals: {
          // 全局变量
          vue: 'Vue',
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'index.css';
          }
          return chunkInfo.name as string;
        },
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
