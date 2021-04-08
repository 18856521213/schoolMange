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
                        content:"校内有什么喜讯，没有什么资讯，什么资讯都没有,都是杂七杂八的玩意儿",
                        time:"2021.08.04"
                    },
                    {
                        id:2,
                        content:"校内有什么喜讯，没有什么资讯，什么资讯都没有,都是杂七杂八的玩意儿",
                        time:"2021.08.04"
                    },
                    {
                        id:3,
                        content:"校内有什么喜讯，没有什么资讯，什么资讯都没有,都是杂七杂八的玩意儿",
                        time:"2021.08.04"
                    },
                    {
                        id:4,
                        content:"校内有什么喜讯，没有什么资讯，什么资讯都没有,都是杂七杂八的玩意儿",
                        time:"2021.08.04"
                    },
                    {
                        id:5,
                        content:"校内有什么喜讯，没有什么资讯，什么资讯都没有,都是杂七杂八的玩意儿",
                        time:"2021.08.04"
                    },
                    {
                        id:6,
                        content:"校内有什么喜讯，没有什么资讯，什么资讯都没有,都是杂七杂八的玩意儿",
                        time:"2021.08.04"
                    },
                    {
                        id:7,
                        content:"校内有什么喜讯，没有什么资讯，什么资讯都没有,都是杂七杂八的玩意儿",
                        time:"2021.08.04"
                    },
                    {
                        id:8,
                        content:"校内有什么喜讯，没有什么资讯，什么资讯都没有,都是杂七杂八的玩意儿",
                        time:"2021.08.04"
                    },
                ]
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
            width:78%;
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