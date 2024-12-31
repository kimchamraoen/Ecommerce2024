<template>
  <div
    class="border border-black-50 p-3"
    style="width: 90rem;height: 5rem;"
  >
    <div >
      <div style="display: flex;align-items: center;justify-content: space-between;">
        <h2>Header</h2>
        <ul
          class="nav nav-pills"
          style="display: flex;"
        >
          <li class="nav-item">
            <router-link
              to="/page/1"
              class="px-4 link-offset-2 link-underline link-underline-opacity-0"
              >page1</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/page/2"
              class="link-offset-2 link-underline link-underline-opacity-0"
              >page2</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/page/3"
              class="px-4 link-offset-2 link-underline link-underline-opacity-0"
              >page3</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style></style>
