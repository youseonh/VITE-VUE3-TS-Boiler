import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import { setupRouter, router } from "/@/router";
import { setupStore } from "/@/store";

import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";

import { createI18n } from "vue-i18n";
import { numberFormats } from "/@/locales/index";
import { messages, defaultLocale } from "/@/locales";
import { setupGlobDirectives } from "/@/directives";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  messages,
  numberFormats,
  fallbackLocale: defaultLocale,
});

const app = createApp(App);

// vue devtools 확장앱 설정
app.config.performance = true;
// app.config.globalProperties.$router = router;

// Configure directives
setupGlobDirectives(app);
setupStore(app);
setupRouter(app);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.use(i18n);
app.mount("#app");
