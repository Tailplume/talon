import type { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
];
export default router;
