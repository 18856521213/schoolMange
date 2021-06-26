import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';
Vue.use(VueRouter)
import main from "./children/home.js"
import newsManage from "./children/newsManage.js"
import peopleManage from "./children/peopleManage.js"
import basicConfiguration from "./children/basicConfiguration.js"
import Home from '@/views/index.vue'
const login = () => import("@/views/login")
const NotFound = () => import("@/views/notFound.vue")

const routes = [
  { 
    path: '/', 
    redirect:'/login'
  },
  {
    path: "/login",
    name: 'login',
    component: login,
    meta:{
      name:"登录页"
    },   
  },
  {
    path: "*",
    component: NotFound,
    meta:{
      name:"未知页面"
    },   
  },
  {
    path: '/home',
    name: 'home',
    redirect: 'main',
    component: Home,
    meta:{
      name:"首页"
    },
    children: [
      ...main,
      ...newsManage,
      ...peopleManage,
      ...basicConfiguration,
      ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //将路由信息放置vuex中进行统一管理
  store.commit("getRouteName",to);
  if(to.meta.name){
    document.title = to.meta.name
  }
  next();
})


export default router
