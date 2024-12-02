<template>
  <div v-for="product in productStore.products" :key="product.categoryId"
    class="card w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700 pb-4"
  >
    <div>
      <!-- <div class="discount rounded bg-green-400 text-white px-2 py-1 ">-17%</div> -->
      <img
      class="p-4 rounded-t-lg"
      :src="product.image"
      alt="product image"
    />
    </div>
    <div class="px-8 pb-4">
      <small class="text-gray-500 text-sm">Hodo Foods</small>

      <h5
        class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        {{product.name}}
      </h5>

      <div class="flex items-center">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
          <svg
            class="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
        </div>
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
          >{{ product.rating }}</span
        >
      </div>
      <small class="text-gray-500">{{ product.size }}</small>
      <div class="flex items-center justify-between">
        <div>
          <span class="text-2xl font-bold text-gray-900 dark:text-white"
            >${{ product.price }}</span
          >
          <small class="text-decoration-line-through pl-1">${{product.promotionAsPercentage}}</small>
        </div>
        <a
          href="#"
          class="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-300 dark:hover:bg-blue-500 dark:focus:ring-blue-500 link-offset-2 link-underline link-underline-opacity-0"
          >Add +</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, computed } from "vue"; // Import onMounted
import { useProductStore } from "@/stores/counter";
    export default{
        name:'product',
        setup() {
    const productStore = useProductStore();

    onMounted(() => {
      productStore.fetchProducts();
    });
    return { productStore };
  },
    }
</script>
<style>
  .card{
    width: 16rem;
    height: 22rem;
    margin: auto;
    margin-bottom: 2rem;
  }
  .card img{
    height: 10rem;
    margin: auto;
  }
  .discount{
    width: 4rem;
  }
</style>
