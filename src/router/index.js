import Vue from 'vue';
import VueRouter from 'vue-router';
import Projects from '../views/Projects.vue';
import ProjectDetails from '../views/ProjectDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/project/:id',
    name: 'ProjectDetails',
    component: ProjectDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
