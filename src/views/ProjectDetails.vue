<template>
  <div>
    <h1>Project Details</h1>
    <!-- Work item details form -->
    <p>Project ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectDetails",
  props: {
    id: {
      type: String    
    }
  }
};
</script>
