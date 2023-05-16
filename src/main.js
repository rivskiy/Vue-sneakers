import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'
import '@/assets/scss/main.scss'

createApp(App).use(router).use(store).mount('#app')
