import LoginLayout from "../layouts/LoginLayout.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";

export const routes = [
  {
    path: "/LoginLayout",
    name: "LoginLayout",
    component: LoginLayout,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
        meta: {
          title: "Login",
        },
      },
    ],
  },
  {
    path: "/DashboardLayout",
    name: "DashboardLayout",
    component: DashboardLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("../views/DashboardView.vue"),
        meta: {
          title: "Dashboard",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/NotFoundView.vue"),
    meta: {
      requiresAuth: false,
      title: "404",
    },
  },
];
