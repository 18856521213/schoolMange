<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 奖学金
 -->
<template>
    <div class="box">
        <div class="content" v-for="item in informationData" :key="item.id">
            <div>
                <el-button plain type="primary" size="mini">{{item.label}}</el-button>
            </div>
            <p>{{ item.title }}</p>
            <span>{{ item.createTime }}</span>
        </div>
        <div class="foot-btn" v-if=" informationData.length != 0 ">
            <span>--</span><el-button type="text" @click="loadMore">{{ btnContent }}</el-button><span>--</span>
        </div>
        <div class="foot-btn" v-else>
            <span>--</span><el-button type="text">暂无内容</el-button><span>--</span>
        </div>
    </div>
</template>
<script>
import { findScholarship } from "@/api/main/index.js"
export default {
        data(){
            return{
                informationData:[],//综合资讯数据
                page:1,//页数
                btnContent:"加载更多",
                total:0,
            }
        },
    created(){
        this.findScholarship();
    },
    methods:{
        //参照综合资讯
        findScholarship(){
                let data = {
                    page:this.page
                }
                findScholarship(data).then(res =>{
                    if(res.success){
                        this.informationData = res.data;
                        this.total = res.total;
                    }
                })
        },
        //加载更多
        loadMore(){
            this.page += 1;
           if(this.informationData.length < this.total){
                let data = {
                    page:this.page
                }
                findScholarship(data).then(res =>{
                    if(res.success){
                        this.informationData.push(...res.data);
                    }
                })
           }else{
               this.btnContent = "暂无更多";
               return
           }
        }
    }
}   
</script>
<style lang="less" scoped>
.box{
    .content{
        display: flex;
        align-items: center;
        color: #505050;
        font-size: 14px;
        cursor: pointer;
        p{
            width:60%;
            padding:0 10px 0 5px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            &:hover{
                text-decoration:underline
            }
        }
    }
    .foot-btn{
        text-align: center;
        color: #19856f;
    }

}
</style>