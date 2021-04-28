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
                <el-button size="mini" type="primary" icon="el-icon-circle-plus" @click="dialogVisible = true">添加班级</el-button>
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
        <el-dialog
          title="添加导航栏"
          :visible.sync="dialogVisible"
          @close="resetTeacherInfo"
          :show-close="false"
          width="450px"
          :center="true">
          <div class="dialog-content">
              <div class="form-box">
                <el-form  ref="form" :rules="rules" :model="form" label-width="120px">
                    <el-form-item label="班级名称" prop="className">
                      <el-input size="small" v-model="form.className"></el-input>
                    </el-form-item>
                    <el-form-item label="班主任名称" prop="headTeacher">
                        <el-select size="small" clearable v-model="form.headTeacherId" placeholder="请选择">
                            <el-option
                            v-for="item in  headTeacherList"
                            :key="item.teacherId"
                            :label="item.teacherName"
                            :value="item.teacherId">
                            </el-option>
                        </el-select>                    
                    </el-form-item>
                    <el-form-item label="班级人数" prop="classNumber">
                      <el-input size="small" v-model="form.classNumber"></el-input>
                    </el-form-item>
                </el-form>
              </div>
          </div>
          <span slot="footer" class="dialog-footer">
              <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
              <el-button size="mini" type="primary" @click="addClass">确定添加</el-button>
          </span>
      </el-dialog>
    </div>
</template>
<script>
import { findHandStudent,addNewClass } from "@/api/basicConfiguration/classConfiguration/index.js"
export default {
    data() {
        return {
            //班主任下拉值
            headTeacherList:[],
            form:{
                className:"",
                headTeacherId:"",
                classNumber:""
            },
            dialogVisible:false,
            //规则
            rules:{
                className:[{required:true,message:"请输入班级名称", trigger: 'blur'}],
                headTeacherId:[{required:true,message:"请输入班主任姓名", trigger: 'change'}],
                classNumber:[{required:true,message:"请输入班级人数", trigger: 'blur'}],
            }
        }
    },
    created() {
        this.findHandStudents();
    },
    methods: {
        //查找教师下拉值
        findHandStudents(){
            findHandStudent({}).then(res =>{
                console.log(res);
                if(res.success){
                    this.headTeacherList = res.data;
                }
            })
        },
        //添加班级
        addClass(){
             this.$refs.form.validate((valid) => {
                 if(valid){
                     addNewClass(this.form).then(res =>{
                         console.log(res);
                     })
                 }
             })
        },
        resetTeacherInfo(){}
    },
}
</script>
<style lang="less" scoped>
.box{
    padding-top: 15px;
    .dialog-content{
        width:320px;
    }
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