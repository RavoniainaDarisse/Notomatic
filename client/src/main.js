import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue' 
import ListeViews from './views/liste/ListeViews.vue'
import FormViews from './views/form/FormViews.vue'
import UpdateViews from './views/form/UpdateViews.vue'
import LoginViews from './views/Auth/LoginViews.vue'
import RegisteurViews from './views/Auth/RegisteurViews.vue'
import DetailsViews from './views/details/DetailsViews.vue'


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
          path:'/',
          redirect:'/login'
        },
        {
        path: '/login',
        name: 'Auth',
        component: LoginViews
        },
        {
          path: '/registre',
          name: 'registre',
          component: RegisteurViews
          },
        {
          path: '/home',
          name: 'Home',
          component: ListeViews
        },
        {
        path: '/create',
        name: 'form',
        component: FormViews
        },
        {
          path: '/update/:id',
          name: 'update',
          component: UpdateViews
        },
        {
          path: '/details/:id',
          name: 'details',
          component: DetailsViews
        }
      ]
    })
    

    
    const app = createApp(App)
    app.use(router).mount('#app')
    app.mount('app')
// createApp(App).mount('#app')
