import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter } from 'vue-router';
const router=createRouter()
const app = createApp(App);
app.mount('#app')
