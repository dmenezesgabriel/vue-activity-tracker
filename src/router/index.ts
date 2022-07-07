import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import Tasks from "../views/Tasks.vue";
import Projects from "../views/Projects.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Tasks", component: Tasks },
  { path: "/projects", name: "Projects", component: Projects },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
