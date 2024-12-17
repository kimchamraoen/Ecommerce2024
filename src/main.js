import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'flowbite';
import 'flowbite/dist/flowbite.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "bootstrap"
import App from './App.vue'
import router from './router'
// import store from './stores/counter.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faS } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);
const app = createApp(App)
// app.use(store)
app.use(createPinia())
app.use(router)
app.component('fa',FontAwesomeIcon)
app.mount('#app')
app.use(router)
