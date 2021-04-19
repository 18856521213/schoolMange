import Home from '@/views/main/index.vue'

export default [
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
]