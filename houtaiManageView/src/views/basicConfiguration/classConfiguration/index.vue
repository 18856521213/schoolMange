<template>
    <div class="box">
        <el-form :inline="true">
            <el-form-item label="班主任姓名：">
                <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="班级名称：">
                <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="年级名称：">
                <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="mini" type="primary" icon="el-icon-search">查询</el-button>
                <el-button size="mini" type="warning" >重置</el-button>
            </el-form-item>
        </el-form>
        <div class="content">

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.box{
    padding-top: 15px;
    .content{
        width: 100%;
        min-height: 400px;
        background-color: #fff;
    }
}
</style>