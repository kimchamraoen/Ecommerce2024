<template>
  <ul class="flex mx-auto">
    <li v-for="(item, index) in productStore.groups" :key="index">
      <a
        href="#"
        class="link-offset-2 link-underline link-underline-opacity-0 mx-3 my-5"
        >{{ item }}</a
      >
    </li>
  </ul>
</template>
<script>
import { onMounted, computed } from "vue"; // Import onMounted
import { useProductStore } from "../stores/counter";
export default {
  name: "Menu",
  setup() {
    const productStore = useProductStore();

    onMounted(() => {
      productStore.fetchGroups();
    });
    return { productStore };
  },
};
</script>
<style>
a {
  color: black;
}
</style>
