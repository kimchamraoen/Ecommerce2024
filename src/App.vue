<template>
    <Navbar/>
  <RouterView />

</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  },
}
</script>

<style></style>
