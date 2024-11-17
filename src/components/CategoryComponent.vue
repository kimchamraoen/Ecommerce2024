
<template>
    <div class="">
      <div class="">
      <div class="category-inner col-3" :style="{backgroundColor: category.color}">
        <div class="category-image-wrap">
          <img :src="category.image" alt="image">
        </div>
        <div class="category-text-wrap">
          <h6 class="bg-text text-center">{{ category.name }}</h6>
        </div>
        <div class="category-item-wrap">
          <p class="text-center">{{ category.productCount }} items</p>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  export default{
    name: 'category',
    props: ['category']
  }
</script>

<style>

.category-inner {
  width: 8rem;
  padding: 1rem;
  border-radius: 0.5rem;
}
.bg-text {
  margin: auto;
  color: #333;
  font-weight: bold;
  font-size: 14px;
}
p{
  font-size: 10px;
}
</style>