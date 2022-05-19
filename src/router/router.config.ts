import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "inputDemo" */ "/@/views/BasicLayout/layout.vue"
      ),
    meta: {
      transition: "slide-right",
    },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "level2" */ "/@/views/Menus/Dashboard/Dashboard.vue"
          ),
        meta: {
          transition: "slide-right",
        },
      },
      {
        path: "/list",
        name: "List",
        component: () =>
          import(
            /* webpackChunkName: "level2" */ "/@/views/Menus/List/List.vue"
          ),
        meta: {
          transition: "slide-right",
        },
      },
    ],
  },
];

export default routes;
