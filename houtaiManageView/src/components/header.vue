<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 页面头部
 -->
<template>
    <div class="box">
        <div class="header-left">
            <i class="el-icon-star-on"></i>
            <span class="header-left-title">教务系统</span>
        </div>
        <div class="header-right">
            <el-avatar class="header-img" size="large" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            <!-- <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt=""> -->
            <el-dropdown>
            <span class="el-dropdown-link" trigger="click">
                操作员<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">修改密码</el-dropdown-item>
                <el-dropdown-item command="a">退出</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.box{
    width: 100%;
    height: 100%;
    background-color: #19856F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left{
        padding: 0 20px;
        color: #fff;
        font-size: 25px;
        .header-left-title{
            padding-left:10px;
            color: #fff;
            font-size: 25px;
        }
    }
    .header-right{
        padding:0 20px 20px 0;
        text-align: center;
        .header-img{
            position: relative;
            top:12px;
            right:5px;
        }
        .el-dropdown-link {
            cursor: pointer;
            color: #fff;
        }
      }
}
</style>
