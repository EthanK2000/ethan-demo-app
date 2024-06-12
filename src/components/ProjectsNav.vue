<template>
  <v-skeleton-loader v-if="!projects" type="heading, paragraph"></v-skeleton-loader>
  <v-expansion-panels v-else>
    <v-expansion-panel>
      <v-expansion-panel-title>My Projects</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list-item v-for="project in projects" :key="project.id" :to="`/projects/${project.id}`">
          <v-list-item-content>
            <v-list-item-title>{{ project.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ project.description }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel title="Shared Projects">
    </v-expansion-panel>
  </v-expansion-panels>

</template>

<script>
import apiService from '../apiService';

export default {
  name: "ProjectsNav",
  data() {
    return {
      projects: null,
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
