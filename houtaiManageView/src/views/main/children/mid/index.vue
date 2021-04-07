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
            <el-tabs tab-position="top" :stretch="true">
                <el-tab-pane :lazy="true" label="综合资讯" name="first">
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </el-tab-pane>
                <el-tab-pane label="校内资讯" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="班级调整" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="奖学金" name="fourth">任务补偿</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    name:"mid",
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
@projectionColor:#f0f0f0;
.top{
    display: flex;
    justify-content: space-between;
    padding:20px 0;
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
