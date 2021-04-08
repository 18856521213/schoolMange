<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 首页中部
 -->
<template>
    <div class="top">
        <div class="mid-left br-radius">
            <h3>推荐的功能单</h3>
            <el-divider></el-divider>
            <div class="mid-left-content">
                <div class="content-item">
                    <img src="../../../../assets/icon/data.png" alt="">
                    <p>这是什么玩意儿</p>
                </div>
                <div class="content-item">
                    <img src="../../../../assets/icon/class.png" alt="">
                    <p>这是什么玩意儿</p>
                </div>
                <div class="content-item">
                    <img src="../../../../assets/icon/pk.png" alt="">
                    <p>这是什么玩意儿</p>
                </div>
                <div class="content-item">
                    <img src="../../../../assets/icon/renwu.png" alt="">
                    <p>这是什么玩意儿</p>
                </div>
                <div class="content-item">
                    <img src="../../../../assets/icon/message.png" alt="">
                    <p>这是什么玩意儿</p>
                </div>
                <div class="content-item">
                    <img src="../../../../assets/icon/store.png" alt="">
                    <p>这是什么玩意儿</p>
                </div>
                <div class="content-item">
                    <i class="el-icon-circle-plus-outline"></i>
                </div>
            </div>
            <div class="content-bottom">
                <p>这是在小程旭上呈现的功能,添加和减少都是在这儿</p>
            </div>
        </div>
        <div class="mid-right br-radius">
            <el-tabs tab-position="top" v-model="active" :stretch="true">
                <el-tab-pane :lazy="true" label="综合资讯" name="first">
                    <complexInformation></complexInformation>
                </el-tab-pane>
                <el-tab-pane :lazy="true" label="校内资讯" name="second">
                    <schoolInformation></schoolInformation>
                </el-tab-pane>
                <el-tab-pane :lazy="true" label="班级调整" name="third">
                    <classAdj></classAdj>
                </el-tab-pane>
                <el-tab-pane :lazy="true" label="奖学金" name="fourth">
                    <scholarship></scholarship>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import complexInformation from "./components/complexInformation.vue"
import schoolInformation from "./components/schoolInformation.vue"
import classAdj from "./components/classAdj.vue"
import scholarship from "./components/scholarship.vue"
export default {
    name:"mid",
    data(){
        return{
            active:"first"
        }
    },
    components:{ complexInformation,schoolInformation,classAdj,scholarship }
    
}
</script>
<style lang="less" scoped>
@projectionColor:#f0f0f0;
.top{
    display: flex;
    justify-content: space-between;
    padding:15px 0;
    .br-radius{
        border-radius:10px;
        box-shadow: 3px 3px 3px @projectionColor;
    }
    .mid-left{
        width:55%;
        height:300px;
        background: #fff;
        padding:10px;
        overflow: hidden;
        h3{
            padding-top:10px;
            margin:0;
            color:#19856f;
        }
        .mid-left-content{
            display: flex;
            padding:30px 0 15px 10px;
            .content-item{
                margin-right: 20px;
                text-align: center;
                p{
                    color:#3b3b3b;
                    font-size: 15px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                img{
                    width:80px;
                }
                i{
                    font-size: 83px;
                    color: #19856f;
                }
            }
        }
        .content-bottom{
            text-align: center;
            font-size: 14px;
            color: #19856f;
        }
    }
    .mid-right{
        width:41%;
        height:300px;
        background: #fff;
        padding:10px;
        overflow: hidden;
        /deep/ .el-tabs__content{
            width:100%;
            height:255px;
            overflow-y: auto;
            overflow-x: hidden;
        }

    }
}
</style>
