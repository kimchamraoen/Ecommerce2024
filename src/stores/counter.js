import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const useProductStore = defineStore("product", {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),
  getters: {
    getCategoriesByGroup: (state) => {
      return (groupName) =>
        state.categories.filter((category) => category.group === groupName);
    },
    getPromotionsByGroup: (state) => {
      return (groupName) =>
        state.promotions.filter((promotion) => promotion.group === groupName);
    },
    getProductsByGroup: (state) => {
      return (groupName) =>
        state.products.filter((Product) => Product.group === groupName);
    },
    getGroupsByGroup: (state) => {
      return (groupName) =>
        state.groups.filter((Group) => Group.group === groupName);
    },
  },
  actions: {
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
    async fetchGroups() {
      // axios.get("http://localhost:3000/api/groups").then((result) => {
      //   // console.log(result.data);
      //   this.groups = result.data;
      // });
      try {
        const response = await fetch("http://localhost:3000/api/groups"); // Replace with your API endpoint
        this.groups = await response.json(); // Assuming API returns an array
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    },
    fetchProducts() {
      axios.get("http://localhost:3000/api/products").then((result) => {
        // console.log(result.data);
        this.products = result.data;
      });
    },
  },
  fetchAllData() {
    // fetch data category, promotion from backent
    this.fetchCategoried();
    this.fetchPromotions();
    this.fetchGroups();
    this.fetchProducts();
  },
});
