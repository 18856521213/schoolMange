//人员管理(一级)
const peopleManage = () => import('@/views/peopleManage/')
//教师管理(二级)
const teacherManage = () => import('@/views/peopleManage/teacherManage/')

export default[
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