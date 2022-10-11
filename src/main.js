import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter } from 'vue-router';
import Home from './views/Home.vue'
import ButtonView from './views/ButtonView.vue'
import ButtonDefaultView from './views/ButtonDefaultView.vue'
import FormView from './views/FormView.vue'
import CheckBoxView from './views/CheckBoxView.vue'
import SwitchView from './views/SwitchView.vue'
import DialogView from './views/DialogView.vue'
import PickerView from './views/PickerView.vue'
import ToastView from './views/ToastView.vue';
import ProgressView from './views/ProgressView.vue';
import AudioView from './views/AudioView.vue'
import { createWebHashHistory } from 'vue-router';
import singleton from './plugin/singletonPlugin';
const routes=[{ path: '/', component: Home },
              {path:'/button', component: ButtonView},
            {path:'/button_default', component: ButtonDefaultView},
             {path:'/form', component: FormView},
            {path: '/checkbox', component:CheckBoxView},
            {path: '/switch', component:SwitchView},
            {path: '/dialog', component: DialogView },
            {path: '/picker', component: PickerView},
            {path: '/toast', component: ToastView},
            {path: '/progress', component: ProgressView},
            {path: '/audio', component: AudioView}];
const router=createRouter(
  {
     history: createWebHashHistory(),
     routes: routes
  }
)
const app = createApp(App);
app.use(router);
//app.use(store);
app.use(singleton, {name:"audio", value:new Audio()})
app.mount('#app')
