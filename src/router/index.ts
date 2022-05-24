import type { App } from 'vue';
import { createRouter, createWebHistory, RouteParams } from 'vue-router';
import routes from '@router/router.config';

export type AppRouteNames =
  | 'tag'
  | 'login'
  | 'register'
  | 'profile'
  | 'settings';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
}

export function routerPush(
  name: AppRouteNames,
  params?: RouteParams
): ReturnType<typeof router.push> {
  if (params !== undefined) {
    return router.push({
      name,
      params,
    });
  } else {
    return router.push({ name });
  }
}
