//基础配置(一级)
const basicConfiguration = () => import('@/views/basicConfiguration/')
//轮播图(二级)
const swiperConfiguration = () => import('@/views/basicConfiguration/swiperConfiguration/')

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
        ]
      },
]