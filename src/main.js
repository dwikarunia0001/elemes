import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './assets/tailwind.css'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')
