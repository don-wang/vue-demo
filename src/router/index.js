import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Responsive from "../views/hands-on/Responsive.vue";
import BasicComponent from "../views/demo/BasicComponent.vue";
import Counter from "../views/hands-on/Counter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/demo/component",
      name: "component",
      component: BasicComponent,
    },
    {
      path: "/hands-on/counter",
      name: "counter",
      component: Counter,
    },
    {
      path: "/hands-on/responsive",
      name: "responsive",
      component: Responsive,
    },
  ],
});

export default router;
