import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "/@/router/router.config";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export { router };
