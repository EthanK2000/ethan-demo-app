<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer>
      <v-list-item :prepend-avatar="require(`@/assets/_bench.avif`)" title="bench_"
        subtitle="Ethan Kraus" to="/"></v-list-item>
      <ProjectsNav />
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
import ProjectsNav from './components/ProjectsNav.vue'

export default {
  components: {
    ProjectsNav
  }
}
</script>