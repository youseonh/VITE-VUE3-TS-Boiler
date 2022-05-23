import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(
        /* webpackChunkName: "inputDemo" */ '/@/views/basicLayout/BasicLayout.vue'
      ),
    meta: {},
    children: [
      {
        path: '/',
        name: 'DashBoard',
        component: () =>
          import(
            /* webpackChunkName: "level2" */ '/@/views/menus/dashboard/MainDashboard.vue'
          ),
        meta: {
          transition: 'slide-right',
        },
      },
      {
        path: '/menu1',
        name: 'MainMenu1',
        component: () =>
          import(
            /* webpackChunkName: "level2" */ '/@/views/menus/main1/MainMenu1.vue'
          ),
        meta: {
          transition: 'slide-right',
        },
      },
      {
        path: '/menu2',
        name: 'MainMenu2',
        component: () =>
          import(
            /* webpackChunkName: "level2" */ '../views/menus/main2/MainMenu2.vue'
          ),
        meta: {
          transition: 'slide-right',
        },
      },
      {
        path: '/menu3',
        name: 'MainMenu3',
        component: () =>
          import(
            /* webpackChunkName: "level2" */ '../views/menus/main3/MainMenu3.vue'
          ),
        meta: {
          transition: 'slide-right',
        },
        children: [
          {
            path: '/menu3/submenu1',
            name: 'SubMenu1',
            component: () =>
              import(
                /* webpackChunkName: "level2" */ '/@/views/menus/main3/submenus/SubMenu1.vue'
              ),
            meta: {
              transition: 'slide-right',
            },
          },
          {
            path: '/menu3/submenu2',
            name: 'SubMenu2',
            component: () =>
              import(
                /* webpackChunkName: "level2" */ '../views/menus/main3/submenus/SubMenu2.vue'
              ),
            meta: {
              transition: 'slide-right',
            },
          },
          {
            path: '/menu3/submenu3',
            name: 'SubMenu3',
            component: () =>
              import(
                /* webpackChunkName: "level2" */ '../views/menus/main3/submenus/SubMenu3.vue'
              ),
            meta: {
              transition: 'slide-right',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
