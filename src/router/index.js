import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Responsive from "../views/hands-on/Responsive.vue";
import BasicComponent from "../views/demo/BasicComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/hands-on/responsive",
      name: "responsive",
      component: Responsive,
    },
    {
      path: "/demo/component",
      name: "component",
      component: BasicComponent,
    },
  ],
});

export default router;
