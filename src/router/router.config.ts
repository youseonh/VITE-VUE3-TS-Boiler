import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/basicLayout",
  },
  {
    path: "/basicLayout",
    name: "BasicLayout",
    component: () =>
      import(
        /* webpackChunkName: "inputDemo" */ "/@/views/BasicLayout/layout.vue"
      ),
    meta: {
      breadCrumb: [
        {
          path: "/basicLayout",
          text: "Home",
        },
      ],
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
          breadCrumb: [
            {
              path: "/list",
              text: "List",
            },
          ],
        },
      },
    ],
  },
];

export default routes;
