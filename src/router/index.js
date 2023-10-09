import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("app_remote/AboutView"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
