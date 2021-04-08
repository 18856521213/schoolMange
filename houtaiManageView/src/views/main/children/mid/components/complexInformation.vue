<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 综合资讯
 -->
<template>
    <div class="box">
        <div class="content" v-for="item in informationData" :key="item.id">
            <div>
                <el-button plain type="primary" size="mini">{{item.title}}</el-button>
            </div>
            <p>{{ item.content }}</p>
            <span>{{ item.time }}</span>
        </div>
        <div class="foot-btn">
            <span>--</span><el-button type="text">加载更多</el-button><span>--</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            informationData:[
                {
                    id:1,
                    title:"防火知识",
                    content:"都是一些防火小知识啊，没有别的什么东西,看看还有什么其他想学的吗，没有的话就先这样啊",
                    time:"2021.05.21"
                },
                {
                    id:2,
                    title:"防火知识",
                    content:"都是一些防火小知识啊，没有别的什么东西,看看还有什么其他想学的吗，没有的话就先这样啊",
                    time:"2021.05.21"
                },
                {
                    id:3,
                    title:"防火知识",
                    content:"都是一些防火小知识啊，没有别的什么东西,看看还有什么其他想学的吗，没有的话就先这样啊",
                    time:"2021.05.21"
                },
                {
                    id:4,
                    title:"防火知识",
                    content:"都是一些防火小知识啊，没有别的什么东西,看看还有什么其他想学的吗，没有的话就先这样啊",
                    time:"2021.05.21"
                },
                {
                    id:5,
                    title:"防火知识",
                    content:"都是一些防火小知识啊，没有别的什么东西,看看还有什么其他想学的吗，没有的话就先这样啊",
                    time:"2021.05.21"
                },
                {
                    id:6,
                    title:"防火知识",
                    content:"都是一些防火小知识啊，没有别的什么东西,看看还有什么其他想学的吗，没有的话就先这样啊",
                    time:"2021.05.21"
                },
                {
                    id:7,
                    title:"防火知识",
                    content:"都是一些防火小知识啊，没有别的什么东西,看看还有什么其他想学的吗，没有的话就先这样啊",
                    time:"2021.05.21"
                },
                {
                    id:8,
                    title:"防火知识",
                    content:"都是一些防火小知识啊，没有别的什么东西,看看还有什么其他想学的吗，没有的话就先这样啊",
                    time:"2021.05.21"
                },
                {
                    id:9,
                    title:"防火知识",
                    content:"都是一些防火小知识啊，没有别的什么东西,看看还有什么其他想学的吗，没有的话就先这样啊",
                    time:"2021.05.21"
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.box{
    .content{
        color: #505050;
        font-size: 14px;
        display: flex;
        align-items: center;
        p{
            width:60%;
            padding:0 10px 0 5px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
    .foot-btn{
        text-align: center;
        color: #19856f;
    }
}
</style>