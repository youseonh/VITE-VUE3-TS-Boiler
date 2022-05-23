import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/styles/quasar-variables.sass',
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: [
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
      },
      { find: '/@', replacement: path.resolve(__dirname, 'src') },
      { find: '/#', replacement: path.resolve(__dirname, 'types') },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        prependData: `@import "${__dirname}/src/styles/variables.scss";`,
      },
    },
  },
});
