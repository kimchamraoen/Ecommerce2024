<template>
  <div class="wrapper">
    <small>type</small>
    <div class="flex gap-3">
      <div class="col-md-6 d-flex align-items-center">
        <div class="product-image">
          <img
            :src="images[currentIndex]"
            class="img-fluid"
            alt="Product Image"
          />
        </div>
      </div>

      <div
        class="p-4 bg-white border border-gray-200 rounded-lg shadow float-end"
      >
        <h5
          class="detail text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Noteworthy technology acquisitions 2021
        </h5>
        <!-- </a> -->
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
            >5.0</span
          >
        </div>
        <div class="flex items-center gap-5 my-3">
          <span class="text-3xl font-bold text-gray-800 dark:text-white"
            >$38</span
          >
          <span
            class="text-xl font-bold text-gray-500 dark:text-white text-decoration-line-through"
            >$42</span
          >
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.Here are the biggest enterprise
          technology acquisitions of 2021 so far, in reverse chronological
          order.Here are the biggest enterprise technology acquisitions of 2021
          so far
        </p>
        <div class="d-flex align-items-center gap-2">
          <div class="input-group button">
            <input
              type="number"
              class="form-control"
              v-model="quantity"
              min="1"
              placeholder="0"
            />
          </div>
          <button class="btn btn-success" @click="addToCart">
            <fa icon="cart-shopping" /> Add To Cart
          </button>

          <button class="btn btn-outline-secondary" @click="addToWishlist">
            <fa icon="heart" />
          </button>
          <button class="btn btn-outline-secondary" @click="removeItem">
            <fa icon="repeat" />
          </button>
        </div>
        <div class="block py-2">
          <div class="text-sm">
            Vender: <small class="text-gray-400">NestMart</small>
          </div>
          <div class="text-sm">
            SKU: <small class="text-gray-400">FWM15VKT</small>
          </div>
        </div>
      </div>
    </div>

    <div class="product-carousel float-start">
      <!-- <button class="btn btn-outline-secondary" @click="prevImage">
        <i class="fas fa-chevron-left"></i>
      </button> -->
      <div class="image-thumbnails mt-3">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="thumbnail"
          :class="{ active: currentIndex === index }"
          @click="currentIndex = index"
        >
          <img :src="image" class="img-thumbnail" alt="Thumbnail" />
        </div>
      </div>
      <!-- <button class="btn btn-outline-secondary" @click="nextImage">
        <i class="fas fa-chevron-right"></i>
      </button> -->
    </div>

    <nav class="drop">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
    <!-- <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button> -->
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <!-- <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div> -->
</div>
  </div>
</template>
<script>
// import background from '../../public/images/background.jpg'
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        "../../public/images/background.jpg", // Example image URL
        "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Banana",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Strawberry",
        "https://via.placeholder.com/150/FFFF99/FFFFFF?text=Lemon",
      ],
    };
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>
<style>
.detail {
  width: 31rem;
}
.button {
  width: 5rem;
}
.product-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-display {
  margin: 1rem 0;
}
.product-image {
  width: 40rem;
  /* height: 32rem; */
}
.image-thumbnails {
  display: flex;
  justify-content: center;
}

.thumbnail {
  cursor: pointer;
  margin: 0 0.5rem;
  width: 50px;
  height: 50px;
}

.active {
  border: 2px solid #007bff;
}
.wrapper {
  margin-top: 8rem;
}
.drop{
    margin-top: 6rem;
}
</style>
