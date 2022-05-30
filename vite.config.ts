import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import visualizer from 'rollup-plugin-visualizer';

import { aliasObj } from './aliases';

// console.log(aliasObj.vite);
// const additionalAlias = Object.entries(aliasObj.vite).map(
//   (key: string, value: string) => {
//     return { [key]: value };
//   }
// );

// console.log(additionalAlias);
import { configManualChunk } from './config/optimizer';
// import proxy from './config/proxy';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const aliasConfig = aliasObj.vite;
  console.log(process.cwd());
  return {
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      quasar({
        sassVariables: 'src/styles/quasar-variables.sass',
      }),
      visualizer({
        filename: 'bundleVisaulizer.html',
        template: 'treemap', // ( default treemap) - Which diagram type to use: sunburst, treemap, network.
        open: true,
        // gzipSize: true,
        // brotliSize: true,
      }),
    ],
    server: {
      host: '0.0.0.0',
      // hmr: { overlay: false }, // HMR 연결을 끊거나 설정합니다. server.hmr.overlay를 false로 설정합니다. 서버 오류 커버레이를 사용할 수 없습니다.
      // port: VITE_PORT, // 형식: number 지정 서버 포트
      // open: false, // 종류: boolean | string은 서버가 시작되면 자동으로 브라우저에서 프로그램을 엽니다.
      // cors: false, // 종류: boolean | CorsOptions 서버 개발을 위한 CORS 설정.기본 소스 사용 및 허용
      // proxy,
    },
    build: {
      // 정적 자원 패키지 dist아래의 디렉토리?
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: configManualChunk,
        },
        // plugins: [visualizer()()],
        // input: glob.sync(path.resolve(__dirname, 'src', '*.html')),
      },
      brotliSize: false,
      // 500kb초과시 경고
      chunkSizeWarningLimit: 2000,
    },
    resolve: {
      alias: aliasConfig,
    },
    css: {
      preprocessorOptions: {
        scss: {
          prependData: `@import "${__dirname}/src/styles/variables.scss";`,
        },
      },
    },
  };
});
