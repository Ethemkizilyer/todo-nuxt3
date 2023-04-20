import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "home",

    pages: () => import("../pages"),
    props: true,
  },
  {
    path: "/selam",
    name: "selam",

    component: () => import("../views/Selam.vue"),
    // props: true,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
