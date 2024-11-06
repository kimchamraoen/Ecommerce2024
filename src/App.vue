<template>
  <main class="">
    <div class="wrapper">
      <div class="categorys">
        <category
          v-for="category in categorys"
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
  <!-- <RouterView /> -->
</template>

<script>
import buttonComponent from "./components/ButtonComponent.vue";
// import Productcomponent from "./components/Product.vue";
import PromotionComponent from "./components/PromotionComponent.vue";
import category from "./components/CategoryComponent.vue";

import humbeger from "./assets/images/humbeger.png";
import fruit from "./assets/images/fruit.png";
import kiwi from "./assets/images/kiwi.png";
import Snack from "./assets/images/snach.png";
import blackplum from "./assets/images/blackplum.png";
import vegetable from "./assets/images/vegetable.png";
import headphone from "./assets/images/headphone.png";
import cock from "./assets/images/cock.png";
import apple from "./assets/images/apple.png";
import orange from "./assets/images/orange.png";
import mixvegetable from "./assets/images/mixvegetable.jpg";
import frencholine from "./assets/images/frencholine.jpg";
import red from "./assets/images/red.jpg";
// import Product from "./components/Product.vue";

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
      categorys: [
        {
          image: humbeger,
          title: "Cake & Milk",
          productCount: 14,
          color: "#feefe9",
        },
        {
          // src:require('./assets/images/fruit.png'),
          image: fruit,
          title: "Peach",
          productCount: 17,
          color: "#fef3e9",
        },
        {
          // src:require('./assets/images/kiwi.png'),
          image: kiwi,
          title: "Oganic Kiwi",
          productCount: 21,
          color: "#f5fee9",
        },
        {
          // src:require('./assets/images/apple.png'),
          image: apple,
          title: "Red Apple",
          productCount: 68,
          color: "#feeae9",
        },
        {
          // src:require('./assets/images/snach.png'),
          image: Snack,
          title: "Snack",
          productCount: 34,
          color: "#fdfee9",
        },
        {
          // src:require('./assets/images/blackplum.png'),
          image: blackplum,
          title: "Black Plum",
          productCount: 25,
          color: "#f4f4f4",
        },
        {
          // src:require('./assets/images/vegetable.png'),
          image: vegetable,
          title: "Vegetables",
          productCount: 65,
          color: "#f0fef1",
        },
        {
          // src:require('./assets/images/headphone.png'),
          image: headphone,
          title: "Headphone",
          productCount: 33,
          color: "#fdfef0",
        },
        {
          // src:require('./assets/images/cock.png'),
          image: cock,
          title: "Cake & Milk",
          productCount: 54,
          color: "#fef7f0",
        },
        {
          // src:require('./assets/images/orange.png'),
          image: orange,
          title: "Orange",
          productCount: 63,
          color: "#fefaf0",
        },
      ],
      promotions: [
        {
          image: frencholine,
          title: "Everyday Fresh & clean with our products.",
          buttonColor: "#25ee18",
          color:"#fcc744"
        },
        {
          image: red,
          title: "Make your Breakfast Hearthy and Easy.",
          buttonColor: "#25ee18",
          color:"#fcc744"
        },
        {
          image: mixvegetable,
          title: "The best Organic product Online .",
          buttonColor: "#25ee18",
          color:"#fcc744"
        },
      ],
    };
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
    margin-left:-2.5rem ;

    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
