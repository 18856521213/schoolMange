import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/index.vue'
import Home from '@/views/main/index.vue'
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
  },
  {
    path: '/newsManage',
    name: 'newsManage',
    meta:{
      name:"新闻管理"
    },
    children:[
      {
        path: 'complexInformation',
        name: 'complexInformation',
        component: Home,
        meta:{
          name:"综合资讯管理"
        }
      },
      {
        path: 'schoolInformation',
        name: 'schoolInformation',
        component: Home,
        meta:{
          name:"校内资讯管理"
        }
      },
      {
        path: 'classAdj',
        name: 'classAdj',
        component: Home,
        meta:{
          name:"班级调整管理"
        }
      },
      {
        path: 'scholarship',
        name: 'scholarship',
        component: Home,
        meta:{
          name:"奖学金管理"
        }
      },
    ]
  }
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
