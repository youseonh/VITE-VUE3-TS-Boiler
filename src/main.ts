import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import { setupRouter } from '@router/';
import { setupStore } from '@store/';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import '@styles/index.scss';

import { createI18n } from 'vue-i18n';
import { messages, defaultLocale, numberFormats } from '@locales/';
import { setupGlobDirectives } from '@directives/';

const i18n = createI18n({
  locale: defaultLocale, // 나라 변경시 이 부분 바꾸기
  legacy: false,
  globalInjection: true,
  messages,
  numberFormats,
  fallbackLocale: defaultLocale,
});

const app = createApp(App);

// vue devtools 확장앱 설정
app.config.performance = true;
// 라우터 전역 변수 설정
// app.config.globalProperties.$router = router;

// Configure directives
setupGlobDirectives(app);
setupStore(app);
setupRouter(app);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.use(i18n);
app.mount('#app');
