//新闻管理(一级)
const newsManage = () => import('@/views/newManage/index.vue')
//综合资讯管理(二级)
const complexInformation = () => import('@/views/newManage/complexInformation/index.vue')
//校内资讯管理(二级)
const schoolInformation = () => import('@/views/newManage/schoolInformation/index.vue')
//奖学金管理(二级)
const scholarship = () => import('@/views/newManage/scholarship/index.vue')

export default[
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
]