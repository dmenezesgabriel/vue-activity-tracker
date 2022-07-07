import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import Tasks from "../views/Tasks.vue";
import Projects from "../views/Projects.vue";
import Form from "@/views/projects/Form.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Tasks", component: Tasks },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/projects/add", name: "New Project", component: Form },
  { path: "/projects/:id", name: "Edit Project", component: Form, props: true },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
