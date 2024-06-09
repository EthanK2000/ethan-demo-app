import { createMemoryHistory, createRouter } from 'vue-router'

import ProjectsPool from '../views/ProjectsPool.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const routes = [
  { path: '/projects', component: ProjectsPool },
  { path: '/projects/:id', component: ProjectDetails },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;