<template>
    <v-card v-if="!reveal" class="mx-auto" max-width="450"
        text="Design and simulate your next hardware project using the latest bench_ AI assisstant."
        title="Start a new Project">
        <v-card-actions>
            <v-btn text="Begin" variant="tonal" @click="reveal = true"></v-btn>
        </v-card-actions>
    </v-card>
    <v-card v-else class="mx-auto" max-width="450" title="Start a new Project">
        <v-text-field label="Project Name" v-model="newProject.name"></v-text-field>
        <v-textarea label="Project Description" v-model="newProject.description"></v-textarea>
        <v-card-actions>
            <v-btn text="Create Project" variant="tonal" @click="createProject"></v-btn>
            <v-btn text="Back" variant="text" @click="reveal = false"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import apiService from '../apiService.js';

export default {
    name: "HomePage",
    data: () => ({
        reveal: false,
        newProject: {
        name: '',
        description: '',
      },
    }),
    methods: {
        async createProject() {
            try {
                const response = await apiService.postProject(this.newProject);
                console.log('Project created:', response.data);
                const newProjectId = response.data.id;
                this.$router.push(`/projects/${newProjectId}`);
            } catch (error) {
                console.error('Error creating project:', error);
            }
        },
    }
};
</script>

<style scoped>
.v-card {
    margin-top: 10em;
    padding: 1em;
    text-align: center;
}
</style>