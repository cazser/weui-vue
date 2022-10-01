import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter } from 'vue-router';
import Home from './views/Home.vue'
import ButtonView from './views/ButtonView.vue'
import ButtonDefaultView from './views/ButtonDefaultView.vue'
import FormView from './views/FormView.vue'
import { createWebHashHistory } from 'vue-router';
const routes=[{ path: '/', component: Home },
              {path:'/button', component: ButtonView},
            {path:'/button_default', component: ButtonDefaultView},
             {path:'/form', component: FormView}];
const router=createRouter(
  {
     history: createWebHashHistory(),
     routes: routes
  }
)
const app = createApp(App);
app.use(router);
app.mount('#app')
