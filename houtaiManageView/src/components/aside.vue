
<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 页面侧边栏
 -->
<template>
    <div class="box">
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#fff"
            text-color="#909399"
            router
            :default-active="fullPath"
            active-text-color="#19856f">
               <el-menu-item v-for="item in navList.single" :key="item.name" :index="item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{  item.name }}</span>
               </el-menu-item>
                <el-submenu :index="item.path" v-for='item in navList.multiple' :key="item.name">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{ item.name }}</span>
                    </template>
                    <el-menu-item ref="abc" v-for="item2 in item.children" :key="item2.path" :index="item2.path">{{ item2.name }}</el-menu-item>
                </el-submenu>   
        </el-menu>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:"left",
    data() {
        return {
            navList:{
                single:[
                    {path:"/main",name:"首页",icon:"el-icon-s-home"}
                ],
                multiple:[
                    {
                        name:"新闻管理",
                        icon:"el-icon-document",
                        path:"/newsManage",
                        children:[
                             {path:"/newsManage/complexInformation",name:"综合资讯管理"},
                             {path:"/newsManage/schoolInformation",name:"校内资讯管理"},
                             {path:"/newsManage/scholarship",name:"奖学金管理"},
                        ]
                    },
                    {
                        name:"人员管理",
                        icon:"el-icon-user-solid",
                        path:"/peopleManage",
                        children:[
                             {path:"/peopleManage/teacherManage",name:"教师管理"},
                        ]
                    },
                    {
                        name:"基础配置",
                        icon:"el-icon-s-tools",
                        path:"/basicConfiguration",
                        children:[
                             {path:"/basicConfiguration/swiperConfiguration",name:"轮播图配置"},
                             {path:"/basicConfiguration/tabarConfiguration",name:"导航栏配置"},
                             {path:"/basicConfiguration/classConfiguration",name:"班级配置"},
                        ]
                    },
                ],
            },
        }
    },
    created(){
    },
    computed:{
        ...mapState(['routeName']),
        //随时获取当前路由值
        fullPath(){
            return this.routeName.path;
        }
    },
    methods: {

    },
}
</script>
<style lang="less" scoped>
@hoveBgLeft : #ececec;
@hoverFontColor :#fff;
.box{
    height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}
.el-menu-item:hover{
	  background: @hoveBgLeft !important;
	}
.el-submenu__title:hover{
	  background: @hoveBgLeft !important;
}
/deep/ .el-menu-item.is-active {
       border-right:3px solid #19856f  !important;
}

// .el-submenu__title .is-active {
//     background: #1c88cf!important;
//     color: #fff!important;
// }

    </style>
