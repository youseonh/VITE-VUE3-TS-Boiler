import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";

import { router } from "/@/router";
import { store } from "/@/store";

import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

// vue devtools 확장앱 설정
app.config.performance = true;

app.mount("#app");
