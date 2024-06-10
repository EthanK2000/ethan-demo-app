<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <div v-for="project in projects" :key="project.id">
        <router-link :to="{ name: 'ProjectDetails', params: { id: project.id }}">{{ project.name }}</router-link>
        <div>{{ project.description }}</div>
      </div>
    </ul>
  </div>
</template>

<script>
import apiService from '../apiService';

export default {
  name: "ProjectsPool",
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await apiService.getProjects();
        this.projects = response.data.Projects;
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    },
  },
};
</script>
