import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/basicLayout",
  },
  {
    path: "/basicLayout",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "inputDemo" */ "/@/views/BasicLayout/layout.vue"
      ),
    meta: {
      transition: "slide-right",
      breadCrumb: {
        path: "/basicLayout",
        text: "Home",
      },
    },
    children: [
      {
        path: "/list",
        name: "List",
        component: () =>
          import(
            /* webpackChunkName: "level2" */ "/@/views/Menus/List/List.vue"
          ),
        meta: {
          breadCrumb: {
            path: "/list",
            text: "List",
          },
        },
      },
    ],
  },
];

export default routes;
