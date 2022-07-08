import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import Tasks from "../views/Tasks.vue";
import Projects from "@/views/Projects.vue";
import Form from "@/views/projects/Form.vue";
import List from "@/views/projects/List.vue";
const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Tasks", component: Tasks },
  {
    path: "/projects",
    component: Projects,
    children: [
      { path: "", name: "Projects", component: List },
      { path: "add", name: "New Project", component: Form },
      {
        path: ":id",
        name: "Edit Project",
        component: Form,
        props: true,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
