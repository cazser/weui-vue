import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter } from 'vue-router';
import Home from './views/Home.vue'
import ButtonView from './views/ButtonView.vue'
import { createWebHashHistory } from 'vue-router';
const routes=[{ path: '/', component: Home },
              {path:'/button', component: ButtonView}];
const router=createRouter(
  {
     history: createWebHashHistory(),
     routes: routes
  }
)
const app = createApp(App);
app.use(router);
app.mount('#app')
