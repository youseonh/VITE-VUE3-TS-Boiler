import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/router"; // 추가
import store from "./store"; // 추가

createApp(App).use(router, store).mount("#app");
