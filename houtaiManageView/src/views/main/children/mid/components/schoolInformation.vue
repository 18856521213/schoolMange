<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 校内资讯
 -->
<template>
    <div class="box">
        <div class="content" v-for="(item,index) in informationData" :key="item.id">
            <span>{{ index+1 }}.</span>
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
import { findSchoolInformation } from "@/api/main/index.js"
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
            this.findSchoolInformation();
        },
        methods:{
            //参照综合资讯
            findSchoolInformation(){
                    let data = {
                        page:this.page
                    }
                    findSchoolInformation(data).then(res =>{
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
                    findSchoolInformation(data).then(res =>{
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