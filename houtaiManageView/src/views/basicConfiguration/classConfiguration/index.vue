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
                <el-button size="mini" type="primary" icon="el-icon-circle-plus">添加班级</el-button>
                <el-button size="mini" type="warning" >重置</el-button>
            </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <div class="content">
            <div class="content-item">
                <div class="item-top">高三五班</div>
                <div class="class-teacher">班主任：张晓明</div>
                <div class="student-num">人数：40人</div>
            </div>
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
        .content-item{
            width:150px;
            height: 180px;
            background-color: #fff;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            .item-top{
                height: 28%;
                width: 100%;
                background-color: #19856f;
                text-align: center;
                line-height: 50px;
                font-size: 18px;
                color: #fff;
            }
            .class-teacher{
                height: 30%;
                width: 100%;
                text-align: center;
                line-height: 60px;
                color: #19856f;
            }
            .student-num{
                height: 30%;
                width: 100%;
                font-weight: 900;
                text-align: center;
                line-height: 60px;
                color: #19856f;
            }
        }
    }
}
</style>