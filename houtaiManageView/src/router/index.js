import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from "./children/home.js"
import newsManage from "./children/newsManage.js"
import peopleManage from "./children/peopleManage.js"
import basicConfiguration from "./children/basicConfiguration.js"


const routes = [
  ...home,
  ...newsManage,
  ...peopleManage,
  ...basicConfiguration
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.name){
    document.title = to.meta.name
  }
  next();
})


export default router
