//基础配置(一级)
const basicConfiguration = () => import('@/views/basicConfiguration/index.vue')
//轮播图(二级)
const swiperConfiguration = () => import('@/views/basicConfiguration/swiperConfiguration/index.vue')
//导航栏配置(二级)
const tabarConfiguration = () => import('@/views/basicConfiguration/tabarConfiguration/index.vue')

//班级配置(二级)
const classConfiguration = () => import('@/views/basicConfiguration/classConfiguration/index.vue')

export default[
    {
        path: '/basicConfiguration',
        name: 'basicConfiguration',
        component: basicConfiguration,
        meta:{
          name:"基础配置"
        },
        children:[
          {
            path: 'swiperConfiguration',
            name: 'swiperConfiguration',
            component: swiperConfiguration,
            meta:{
              name:"轮播图配置"
            }
          },
          {
            path: 'tabarConfiguration',
            name: 'tabarConfiguration',
            component: tabarConfiguration,
            meta:{
              name:"导航栏配置"
            }
          },
          {
            path: 'classConfiguration',
            name: 'classConfiguration',
            component: classConfiguration,
            meta:{
              name:"班级配置"
            }
          },
        ]
      },
]