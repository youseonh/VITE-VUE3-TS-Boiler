import type { RouteRecordRaw } from "vue-router";

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("/@/views/BasicLayout/layout.vue"),
    name: "login",
    meta: { title: " 로그인" },
  },
];

// export const publicRoutes = [
//   {
//     path: "/redirect",
//     component: BlankLayout,
//     children: [
//       {
//         path: "/redirect/:path(.*)",
//         component: () => import("/@/views/BasicLayout/layout.vue"),
//       },
//     ],
//   },
//   {
//     path: "/:pathMatch(.*)",
//     redirect: "/404",
//   },
//   {
//     path: "/404",
//     component: () => import("/@/views/BasicLayout/layout.vue"),
//   },
// ];

export const constantRouterMap = [];

export default constantRoutes;
