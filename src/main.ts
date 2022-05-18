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
  // await setupI18n(app);
  app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  });
  app.mount("#app");
}

create();
