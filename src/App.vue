<template>
  <main class="">
    <div class="wrapper">
      <div class="categorys">
        <category
          v-for="category in categories"
          :key="category.color"
          :category="category"
          :backgroundColor="category.color"
        />
      </div>
    </div>
    <div class="">
      <div class="promotions">
        <PromotionComponent
          v-for="promotion in promotions"
          :key="promotion.title"
          :promotion="promotion"
        />
      </div>
    </div>
  </main>
  <RouterView />
</template>

<script>
import PromotionComponent from "./components/PromotionComponent.vue";
import category from "./components/CategoryComponent.vue";

import axios from "axios";
export default {
  name: "app",
  components: {
    category,
    // buttonComponent,
    PromotionComponent,
    // Productcomponent,
  },
  data() {
    return {
      categories: [],
      promotions: [],
    };
  },
  mounted() {
    // fetch data category, promotion from backent
    this.fetchCategoried();
    this.fetchPromotions();
  },
  methods: {
    fetchCategoried() {
      axios.get("http://localhost:3000/api/categories").then((result) => {
        // console.log(result.data);
        this.categories = result.data;
      });
    },
    fetchPromotions() {
      axios.get("http://localhost:3000/api/promotions").then((result) => {
        // console.log(result.data);
        this.promotions = result.data;
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
  width: 100%;
  flex-wrap: wrap;
  height: auto;
}
.wrapper {
  margin: auto;
}
.categorys {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto-fit, 1fr));
  gap: 1rem;
  padding: 1rem;
}
.promotions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.Button {
  display: flex;
  flex-direction: row;
}

/* Responsive Media Queries */
@media (max-width: 2000px) {
  .categorys {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    margin-left: -7rem;
  }
  .promotions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    margin-left: -7rem;
  }
}

@media (max-width: 1199.98px) {
  .categorys {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin: auto;
  }
  .promotions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
  }
}
@media (max-width: 991.98px) {
  .categorys {
    grid-template-columns: repeat(5, 1fr);
  }
  .promotions {
    grid-template-columns: repeat(1, 1fr);
    margin-left: -35px;
  }
}
@media (max-width: 767.98px) {
  .categorys {
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
  }
  .promotions {
    grid-template-columns: 1fr;
    margin: auto;
  }
}

@media (max-width: 575.98px) {
  .categorys {
    grid-template-columns: repeat(2, 1fr);
  }
  .promotions {
    width: 13rem;
    margin-left: -2.5rem;

    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
