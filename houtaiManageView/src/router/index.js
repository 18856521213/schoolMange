import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/main/index.vue'

//新闻管理(一级)
const newsManage = () => import('@/views/newManage/')
//综合资讯管理(二级)
const complexInformation = () => import('@/views/newManage/complexInformation/')
//校内资讯管理(二级)
const schoolInformation = () => import('@/views/newManage/schoolInformation/')
//奖学金管理(二级)
const scholarship = () => import('@/views/newManage/scholarship/')
//人员管理(一级)
const peopleManage = () => import('@/views/peopleManage/')
//教师管理(二级)
const teacherManage = () => import('@/views/peopleManage/teacherManage/')
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
      name:"首页"
    },
  },
  {
    path: '/newsManage',
    name: 'newsManage',
    component: newsManage,
    meta:{
      name:"新闻管理"
    },
    children:[
      {
        path: 'complexInformation',
        name: 'complexInformation',
        component: complexInformation,
        meta:{
          name:"综合资讯管理"
        }
      },
      {
        path: 'schoolInformation',
        name: 'schoolInformation',
        component: schoolInformation,
        meta:{
          name:"校内资讯管理"
        }
      },
      {
        path: 'scholarship',
        name: 'scholarship',
        component: scholarship,
        meta:{
          name:"奖学金管理"
        }
      },
    ]
  },
  {
    path: '/peopleManage',
    name: 'peopleManage',
    component: peopleManage,
    meta:{
      name:"人员管理"
    },
    children:[
      {
        path: 'teacherManage',
        name: 'teacherManage',
        component: teacherManage,
        meta:{
          name:"教师管理"
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

router.beforeEach((to, from, next) => {
  if(to.meta.name){
    document.title = to.meta.name
  }
  next();
})


export default router
