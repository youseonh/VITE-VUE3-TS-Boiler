import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import { router } from "/@/router";
import { store } from "/@/store";

import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";

import { createI18n } from "vue-i18n";
import { numberFormats } from "/@/locales/index";
import { messages, defaultLocale } from "/@/locales";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  messages,
  numberFormats,
  fallbackLocale: defaultLocale,
});

const app = createApp(App); // vue devtools 확장앱 설정
app.config.performance = true;
app.config.globalProperties.$router = router;

app
  .use(store)
  .use(router)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .use(i18n)
  .mount("#app");
