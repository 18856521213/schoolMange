<template>
    <div class="box">
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#fff"
            text-color="#909399"
            router
            @open="handleOpen"
            @close="handleClose"
            active-text-color="#19856F">
               <el-menu-item v-for="item in navList.single" :key="item.path" :index="item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{  item.name }}</span>
               </el-menu-item>
                <el-submenu :index="item.path" v-for='item in navList.multiple' :key="item.name">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{ item.name }}</span>
                    </template>
                    <el-menu-item @click="wowe" ref="abc" v-for="item2 in item.children" :key="item2.path" :index="item2.path">{{ item2.name }}</el-menu-item>
                </el-submenu>   
        </el-menu>
    </div>
</template>
<script>
export default {
    name:"left",
    data() {
        return {
            navList:{
                single:[
                    {path:"/home/main",name:"首页",icon:"el-icon-s-home"}
                ],
                multiple:[
                    {
                        name:"学生管理",
                        icon:"el-icon-user-solid",
                        path:"/studentManage",
                        children:[
                             {path:"/home/student",name:"学生名单"},
                             {path:"/home/studentScore",name:"学生成绩"},
                             {path:"/home/studentScore1",name:"学生信息"},
                        ]
                    },
                ],
            }
        }
    },
    methods: {
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      wowe(){
          console.log(this.$refs.abc)
      }
    },
}
</script>
<style lang="less" scoped>
.box{
    height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    background-color: red;
}
</style>
