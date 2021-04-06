<template>
    <div class="top">
        <div class="mid-left">
            <h3>推荐的功能单</h3>
            <el-divider></el-divider>
        </div>
        <div class="mid-right">
            <el-tabs tab-position="top" :stretch="true">
                <el-tab-pane label="综合资讯" name="first">用户管理</el-tab-pane>
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
    div{
        border-radius:10px;
        box-shadow: 3px 3px 3px @projectionColor;
    }
    .mid-left{
        width:55%;
        height:300px;
        background: #fff;
        padding:10px;
    }
    .mid-right{
        width:41%;
        height:300px;
        background: #fff;
        padding:10px;

    }
}
</style>