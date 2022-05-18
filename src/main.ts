import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";

import { setupRouter } from "/@/router";
import { setupStore } from "/@/store";

import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";

async function create() {
  const app = createApp(App);

  setupStore(app);
  setupRouter(app);

  app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  });

  // vue devtools 확장앱 설정
  app.config.performance = true;

  app.mount("#app");
}

create();
