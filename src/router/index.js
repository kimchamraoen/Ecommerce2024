import { createRouter, createWebHistory } from "vue-router";
import home from '../views/Home.vue' 
import page1 from '../views/Page1.vue' 
import page2 from '../views/Page2.vue'
import page3 from '../views/Page3.vue'
import Section1 from '../views/section1.vue'
import Section2 from '../views/section2.vue'
import Section3 from '../views/section3.vue'
import Section4 from '../views/section4.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
          path: "/page1",
          name: "page",
          component: page1,
          children: [
            {
              path: "/section1",
              name: "section1",
              component: Section1,
            },
            {
              path: "/section2",
              name: "section2",
              component: Section2,
            },
            {
              path: "/section3",
              name: "section3",
              component: Section3,
            },
            {
              path: "/section4",
              name: "section4",
              component: Section4,
            },
          ],
        },
        {
          path: "/page2",
          name: "page2",
          component: page2,
          children: [
            {
              path: "/section1",
              name: "section1",
              component: Section1,
            },
            {
              path: "/section2",
              name: "section2",
              component: Section2,
            },
            {
              path: "/section3",
              name: "section3",
              component: Section3,
            },
            {
              path: "/section4",
              name: "section4",
              component: Section4,
            },
          ],
        },
        {
          path: "/page3",
          name: "page3",
          component: page3,
          children: [
            {
              path: "/section1",
              name: "section1",
              component: Section1,
            },
            {
              path: "/section2",
              name: "section2",
              component: Section2,
            },
            {
              path: "/section3",
              name: "section3",
              component: Section3,
            },
            {
              path: "/section4",
              name: "section4",
              component: Section4,
            },
          ],
        }
      ],
    
});

export default router;
