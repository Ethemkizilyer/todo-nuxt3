import { createRouter, createWebHistory } from "vue-router";
import Selam from "~/views/selam.vue"
const routes = [
  {
    path: "/selam",
    name: "selam",

    component: Selam,
    // props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
