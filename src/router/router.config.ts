import type { RouteRecordRaw } from "vue-router";
import BasicLayout from "/@/views/BasicLayout/layout.vue";

export const accessRoutes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    component: BasicLayout,
    redirect: "/home",
    meta: { title: "home" },
    // children: [
    //   {
    //     path: "/menu1",
    //     component: () => import("/@/views/BasicLayout/layout.vue"),
    //     name: "menu1",
    //     meta: {
    //       title: "메뉴1",
    //       icon: "icon",
    //       //   auth: ['home'],
    //     },
    //   },
    //   {
    //     path: "/menu2",
    //     name: "메뉴2",
    //     component: () => import("/@/views/BasicLayout/layout.vue"),
    //     meta: { title: "메뉴2", keepAlive: true, breadcrumb: true },
    //   },
    // ],
  },
];

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
