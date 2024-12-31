// src/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: {}, // Store entries for each section/page
    currentIndex: {}, // Track current index for each section/page
  },
  mutations: {
    addEntry(state, { sectionId, pageId, entry }) {
      const key = `${pageId}-${sectionId}`;
      if (!state.entries[key]) {
        state.entries[key] = [];
      }
      state.entries[key].push(entry);
    },
    setCurrentIndex(state, { sectionId, pageId, index }) {
      const key = `${pageId}-${sectionId}`;
      Vue.set(state.currentIndex, key, index); // Use Vue.set for reactivity
    },
  },
  getters: {
    getEntries: (state) => (sectionId, pageId) => {
      const key = `${pageId}-${sectionId}`;
      return state.entries[key] || [];
    },
    getCurrentIndex: (state) => (sectionId, pageId) => {
      const key = `${pageId}-${sectionId}`;
      return state.currentIndex[key] || 0; // Default to 0 if not set
    },
  },
});
