<template>
    <Navbar/>
    <Section/>
    <Footer/>
    <RouterView/>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/navbar.vue";
import Footer from  './components/Footer.vue';
import Section from "./views/Section.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Footer,
    Section
  },
}
</script>
<style></style>