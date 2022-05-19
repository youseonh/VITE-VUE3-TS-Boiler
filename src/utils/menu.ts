import type { RouteRecordRaw } from "vue-router";
import routeConfigs from "/@/router/router.config";

export function mapMenuToRoutes(menuList: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = routeConfigs.find((route) => route.path === menu.url);
        if (route) routes.push(route);
      } else {
        _recurseGetRoute(menu.children ?? []);
      }
    }
  };
  _recurseGetRoute(menuList);

  return routes;
}
