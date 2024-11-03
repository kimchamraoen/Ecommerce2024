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
          :key="promotion.text"
          :promotion="promotion"
        />
      </div>
    </div>
    <!-- <div>
      <div class="flex justify-content-between">
        <h3 class="flex">Popular Product</h3>
        <div class="">
          <a href="#">All</a>
          <a href="#">Milks & Dairies</a>
          <a href="#">Coffee & Tea</a>
          <a href="#">Pet Food</a>
          <a href="#">Meat</a>
          <a href="#">Vegetable</a>
          <a href="#">fruits</a>
        </div>
      </div>
    </div> -->
    <!-- <Productcomponent /> -->
  </main>
  <RouterView />
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
          // src:require('./assets/images/humbeger.png'),
          imageSrc: humbeger,
          title: "Cake & Milk",
          item: "14 items",
          color: "#feefe9",
        },
        {
          // src:require('./assets/images/fruit.png'),
          imageSrc: fruit,
          title: "Peach",
          item: "17 items",
          color: "#fef3e9",
        },
        {
          // src:require('./assets/images/kiwi.png'),
          imageSrc: kiwi,
          title: "Oganic Kiwi",
          item: "21 items",
          color: "#f5fee9",
        },
        {
          // src:require('./assets/images/apple.png'),
          imageSrc: apple,
          title: "Red Apple",
          item: "68 items",
          color: "#feeae9",
        },
        {
          // src:require('./assets/images/snach.png'),
          imageSrc: Snack,
          title: "Snack",
          item: "34 items",
          color: "#fdfee9",
        },
        {
          // src:require('./assets/images/blackplum.png'),
          imageSrc: blackplum,
          title: "Black Plum",
          item: "25 items",
          color: "#f4f4f4",
        },
        {
          // src:require('./assets/images/vegetable.png'),
          imageSrc: vegetable,
          title: "Vegetables",
          item: "65 items",
          color: "#f0fef1",
        },
        {
          // src:require('./assets/images/headphone.png'),
          imageSrc: headphone,
          title: "Headphone",
          item: "33 items",
          color: "#fdfef0",
        },
        {
          // src:require('./assets/images/cock.png'),
          imageSrc: cock,
          title: "Cake & Milk",
          item: "54 items",
          color: "#fef7f0",
        },
        {
          // src:require('./assets/images/orange.png'),
          imageSrc: orange,
          title: "Orange",
          item: "63 items",
          color: "#fefaf0",
        },
      ],
      promotions: [
        {
          imageSrc: frencholine,
          text: "Everyday Fresh & clean with our products.",
          buttonColor: "#25ee18",
          url:"#fcc744"
        },
        {
          imageSrc: red,
          text: "Make your Breakfast Hearthy and Easy.",
          buttonColor: "#25ee18",
          url:"#fcc744"
        },
        {
          imageSrc: mixvegetable,
          text: "The best Organic product Online .",
          buttonColor: "#25ee18",
          url:"#fcc744"
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
