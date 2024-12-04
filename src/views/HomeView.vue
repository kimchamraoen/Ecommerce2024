<template>
  <main class="container">
    <div class="flex justify-between my-4">
      <div class="text-xl font-semibold textProduct">Featured Categories</div>
      <div class="hidden w-full md:block md:w-auto">
        <MenuComponent />
      </div>
    </div>
    <div class="wrapper">
      <div class="categorys">
        <category
          v-for="category in productStore.categories"
          :key="category.id"
          :category="category"
          :backgroundColor="category.color"
        />
      </div>
    </div>
    <div class="">
      <div class="promotions">
        <PromotionComponent
          v-for="promotion in productStore.promotions"
          :key="promotion.title"
          :promotion="promotion"
        />
      </div>
    </div>
    <div class="flex justify-between my-4">
      <div class="text-xl font-semibold textProduct">Popular Products</div>
      <div class="hidden w-full md:block md:w-auto">
        <MenuComponent />
      </div>
    </div>
    <div class="">
      <div class="product">
        <ProductComponent
          
        />
      </div>
    </div>
    <RouterView />
  </main>
</template>

<script>
import PromotionComponent from "../components/PromotionComponent.vue";
import category from "../components/CategoryComponent.vue";
import ProductComponent from "../components/ProductComponent.vue";
import MenuComponent from "../components/MenuComponent.vue";
import { onMounted, computed } from "vue"; // Import onMounted
import { useProductStore } from "../stores/counter";
import { mapState } from "pinia";

export default {
  name: "app",
  components: {
    category,
    PromotionComponent,
    ProductComponent,
    MenuComponent,
  },
  setup() {
    const productStore = useProductStore();

    onMounted(() => {
      productStore.fetchCategoried();
      productStore.fetchPromotions();
      // productStore.fetchProducts();
      // productStore.fetchGroups();
    });
    return { productStore };
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
  /* width: 100%; */
  flex-wrap: wrap;
  height: auto;
}
.wrapper {
  margin: auto;
}
.categorys {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto-fit, 1fr));
  gap: 0.3rem;
  margin-bottom: 1rem;
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
  .product{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-left: -7rem;
  }
  .textProduct{
    margin-left: -6rem;
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
