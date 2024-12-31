<template>
  <div class="border" style="width: 90rem; height: 40rem; margin-left: -7rem">
    <navbar />
    <Menu />
    <Footer />
    <RouterView />
  </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "app",
  components: {
    navbar,
    Footer,
    Menu,
  },
};
</script>
<style></style>
