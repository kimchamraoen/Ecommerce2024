<template>
  <div class="wrapper">
    <div>
      <div
        class="img1"
        :style="{ backgroundImage: `url(${promotion.image})` }"
      >
        <p class="text">{{ promotion.title }}</p>
        <ButtonComponent
          @click="shopNow(promotion)"
          :style="{ backgroundColor: isHovered ? hoverColor : promotion.buttonColor }"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
        />
      </div>
    </div>
  </div>
</template>
<script>
// import { text } from '@fortawesome/fontawesome-svg-core';
import ButtonComponent from "./ButtonComponent.vue";
export default {
  name: "promotion",
  // props: ["promotion"],
  data() {
    return {
      isHovered: false,
      hoverColor: '#FFD700', // Hover color
    };
  },
  props: {
    promotion: {
      type: Object,
      required: true,
    },
  },
  components: {
    ButtonComponent,
  },
  methods:{
    shopNow(promotion){
      alert("Let's shop: "+promotion.title);
    }
  }
};
</script>
<style>
.img1 {
  width: 28rem;
  height: auto;
  border: 0px solid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0.5rem;
  padding: 3rem 1rem;
  border-radius: 0.5rem;
}
.text {
  width: 18rem;
  font-size: 24px;
}
.Hover:hover {
  background-color: #ff7700;
}
</style>
