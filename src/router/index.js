import { createWebHistory, createRouter } from "vue-router";

import ProjectsPool from "../views/ProjectsPool.vue";
import ProjectDetails from "../views/ProjectDetails.vue";

const routes = [
  { path: "/projects", name: "ProjectsPool", component: ProjectsPool },
  {
    path: "/projects/:id",
    name: "ProjectDetails",
    component: ProjectDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
