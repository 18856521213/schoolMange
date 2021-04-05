import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/index.vue'
import Main from '@/views/main/index.vue'
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
    },
    children:[
      {
        path: 'main',
        name: 'main',
        component: Main,
        meta:{
          name:"主页"
        }
      },
      {
        path: 'main1',
        name: 'main1',
        component: Main,
        meta:{
          name:"主页"
        }
      },
      {
        path: 'main2',
        name: 'main2',
        component: Main,
        meta:{
          name:"主页"
        }
      },
      {
        path: 'main3',
        name: 'main3',
        component: Main,
        meta:{
          name:"主页"
        }
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
