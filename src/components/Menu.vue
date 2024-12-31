<template>
    <div>
      <ul class="nav nav-pills flex-column text-center" style="width: 10rem;">
        <li class="border p-3">Menu</li>
          <li class="p-3 border">
          <router-link :to="'/page/' + pageId + '/section/1'"
             class="link-offset-2 link-underline link-underline-opacity-0">Section 1</router-link
          >
        </li>
        <li class="p-3 border">
          <router-link :to="'/page/' + pageId + '/section/2'"
          class="link-offset-2 link-underline link-underline-opacity-0">Section 2</router-link
          >
        </li>
        <li class="p-3 border">
          <router-link :to="'/page/' + pageId + '/section/3'"
          class="link-offset-2 link-underline link-underline-opacity-0">Section 3</router-link
          >
        </li>
        <li class="p-3 border">
          <router-link :to="'/page/' + pageId + '/section/4'"
          class="link-offset-2 link-underline link-underline-opacity-0">Section 4</router-link
          >
        </li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    name: "Menu",
    computed: {
      pageId() {
        return this.$route.params.id; // Access the dynamic 'id' parameter from the route
      },
    },
  };
  </script>
  