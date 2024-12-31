import { createRouter, createWebHistory } from "vue-router";
import Page from "../views/Page.vue";
import Section from "@/views/Section.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/page/:id",
      name: "page",
      component: Page,
      children: [
        {
          path: "section/:sectionId",
          name: "section",
          component: Section,
        },
      ],
    },
  ],
});

export default router;
