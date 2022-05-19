import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      // 아래 코드처럼 작성할 시 별도의 chunk 파일을 생성하여 실제 이 라우트를 방문했을 때 리소스를 로드하게 됨
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
