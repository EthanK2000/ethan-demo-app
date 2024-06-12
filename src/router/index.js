import { createWebHistory, createRouter } from "vue-router";

import ProjectDetails from "../views/ProjectDetails.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    props: true,
  },{
    path: "/projects/:id",
    name: "ProjectDetails",
    component: ProjectDetails,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
