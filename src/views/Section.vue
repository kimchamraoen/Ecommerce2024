<template>
    <div>
      <h2 style="position: absolute;bottom: 27rem;left: 38rem;">This is section {{ sectionId }} from Page {{ pageId }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: "Section",
    computed: {
      sectionId() {
        return this.$route.params.sectionId;  // Get dynamic section ID
      },
      pageId() {
        return this.$route.params.id;  // Get dynamic page ID
      },
    },
  };
  </script>
  