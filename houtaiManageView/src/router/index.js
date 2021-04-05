import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/index.vue'
Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect:'/home'
  },

  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      name:"主页"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
