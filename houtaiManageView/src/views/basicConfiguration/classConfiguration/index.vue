<template>
    <div class="box">
        <el-form :inline="true">
            <el-form-item label="班主任名称" prop="headTeacher">
                <el-select size="small" clearable v-model="filterForm.headTeacherId" placeholder="请选择">
                    <el-option
                    v-for="item in  headTeacherList"
                    :key="item.teacherId"
                    :label="item.teacherName"
                    :value="item.teacherId">
                    </el-option>
                </el-select>                    
            </el-form-item>
            <el-form-item label="班级名称：">
                <el-input size="small" v-model="filterForm.className"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="mini" type="primary" icon="el-icon-search" @click="findClass">查询</el-button>
                <el-button size="mini" type="primary" icon="el-icon-circle-plus" @click="dialogVisible = true">添加班级</el-button>
                <el-button size="mini" type="warning" >重置</el-button>
            </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <div class="content">
            <div class="content-item" v-for="item in classList" :key="item.classId">
                <div class="item-top">{{ item.className }}</div>
                <div class="class-teacher">班主任:{{ item.headTeacher }}</div>
                <div class="student-num">人数：{{ item.classNumber }}人</div>
            </div>
        </div>
        <el-dialog
          title="添加班级"
          :visible.sync="dialogVisible"
          @close="resetTeacherInfo"
          :show-close="false"
          width="1050px"
          :center="true">
          <div class="dialog-content">
              <div class="form-box">
                <el-form  ref="form" :rules="rules" :inline="true" :model="form" label-width="120px">
                    <el-form-item label="班级名称" prop="className">
                      <el-input size="small" v-model="form.className" placeholder="请输入班级名称"></el-input>
                    </el-form-item>
                    <el-form-item label="班级人数" prop="classNumber">
                      <el-input size="small" v-model="form.classNumber" placeholder="请输入班级人数"></el-input>
                    </el-form-item>
                    <el-form-item label="班主任名称" prop="headTeacherId">
                        <el-select size="small" clearable v-model="form.headTeacherId" placeholder="请选择班主任">
                            <el-option
                            v-for="item in  headTeacherList"
                            :key="item.teacherId"
                            :label="item.teacherName"
                            :value="item.teacherId">
                            </el-option>
                        </el-select>                    
                    </el-form-item>
                    <el-form-item label="语文老师" prop="chineseId">
                        <el-select size="small" clearable v-model="form.chineseId" placeholder="请选择语文老师">
                            <el-option
                            v-for="item in  chineseTeacherList"
                            :key="item.teacherId"
                            :label="item.teacherName"
                            :value="item.teacherId">
                            </el-option>
                        </el-select>                    
                    </el-form-item>
                    <el-form-item label="数学老师" prop="mathId">
                        <el-select size="small" clearable v-model="form.mathId" placeholder="请选择数学老师">
                            <el-option
                            v-for="item in  mathTeacherList"
                            :key="item.teacherId"
                            :label="item.teacherName"
                            :value="item.teacherId">
                            </el-option>
                        </el-select>                    
                    </el-form-item>
                    <el-form-item label="英语老师" prop="englishId">
                        <el-select size="small" clearable v-model="form.englishId" placeholder="请选择英语老师">
                            <el-option
                            v-for="item in  englishTeacherList"
                            :key="item.teacherId"
                            :label="item.teacherName"
                            :value="item.teacherId">
                            </el-option>
                        </el-select>                    
                    </el-form-item>
                    <el-form-item label="生物老师" prop="biologicalId">
                        <el-select size="small" clearable v-model="form.biologicalId" placeholder="请选择生物老师">
                            <el-option
                            v-for="item in  biologicalTeacherList"
                            :key="item.teacherId"
                            :label="item.teacherName"
                            :value="item.teacherId">
                            </el-option>
                        </el-select>                    
                    </el-form-item>
                    <el-form-item label="物理老师" prop="cphysicalId">
                        <el-select size="small" clearable v-model="form.cphysicalId" placeholder="请选择物理老师">
                            <el-option
                            v-for="item in  cphysicalTeacherList"
                            :key="item.teacherId"
                            :label="item.teacherName"
                            :value="item.teacherId">
                            </el-option>
                        </el-select>                    
                    </el-form-item>
                    <el-form-item label="化学老师" prop="chemistryId">
                        <el-select size="small" clearable v-model="form.chemistryId" placeholder="请选择化学老师">
                            <el-option
                            v-for="item in  chemistryTeacherList"
                            :key="item.teacherId"
                            :label="item.teacherName"
                            :value="item.teacherId">
                            </el-option>
                        </el-select>                    
                    </el-form-item>
                    <el-form-item label="地理老师" prop="geographyId">
                        <el-select size="small" clearable v-model="form.geographyId" placeholder="请选择地理老师">
                            <el-option
                            v-for="item in  geographyTeacherList"
                            :key="item.teacherId"
                            :label="item.teacherName"
                            :value="item.teacherId">
                            </el-option>
                        </el-select>                    
                    </el-form-item>
                    <el-form-item label="政治老师" prop="politicalId">
                        <el-select size="small" clearable v-model="form.politicalId" placeholder="请选择政治老师">
                            <el-option
                            v-for="item in  politicalTeacherList"
                            :key="item.teacherId"
                            :label="item.teacherName"
                            :value="item.teacherId">
                            </el-option>
                        </el-select>                    
                    </el-form-item>
                    <el-form-item label="历史老师" prop="historyId">
                        <el-select size="small" clearable v-model="form.historyId" placeholder="请选择历史老师">
                            <el-option
                            v-for="item in  historyTeacherList"
                            :key="item.teacherId"
                            :label="item.teacherName"
                            :value="item.teacherId">
                            </el-option>
                        </el-select>                    
                    </el-form-item>
                    <el-form-item label="班级描述" prop="desc">
                        <el-input type="textarea"
                         v-model="form.desc"
                        placeholder="请输入班级描述" 
                        :autosize="{ minRows: 5, maxRows: 14}"
                        maxlength="260"
                        show-word-limit></el-input>
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
import { findHandStudent,addNewClass,findClass,findSubjectTeacher } from "@/api/basicConfiguration/classConfiguration/index.js"
export default {
    data() {
        return {
            //过滤表单的数据
            filterForm:{
                className:"",
                headTeacherId:""
            },
            classList:[],
            //班主任下拉值
            headTeacherList:[],
            form:{
                className:"",
                headTeacherId:"",
                classNumber:"",
                chineseId:"",
                mathId:"",
                englishId:"",
                cphysicalId:"",
                chemistryId:"",
                biologicalId:"",
                geographyId:"",
                historyId:"",
                politicalId:"",
                desc:""
            },
            dialogVisible:false,

            chineseTeacherList:[],//语文
            mathTeacherList:[],//数学
            englishTeacherList:[],//英语
            cphysicalTeacherList:[],//物理
            chemistryTeacherList:[],//化学
            biologicalTeacherList:[],//生物
            geographyTeacherList:[],//地理
            historyTeacherList:[],//历史
            politicalTeacherList:[],//政治

            //规则
            rules:{
                className:[{required:true,message:"请输入班级名称", trigger: 'blur'}],
                headTeacherId:[{required:true,message:"请选择班主任姓名", trigger: 'change'}],
                classNumber:[{required:true,message:"请输入班级人数", trigger: 'blur'}],
                chineseId:[{required:true,message:"请选择语文老师", trigger: 'change'}],
                mathId:[{required:true,message:"请选择数学老师", trigger: 'change'}],
                englishId:[{required:true,message:"请选择英语老师", trigger: 'change'}],
                cphysicalId:[{required:true,message:"请选择物理老师", trigger: 'change'}],
                chemistryId:[{required:true,message:"请选择化学老师", trigger: 'change'}],
                biologicalId:[{required:true,message:"请选择生物老师", trigger: 'change'}],
                geographyId:[{required:true,message:"请选择地理老师", trigger: 'change'}],
                historyId:[{required:true,message:"请选择历史老师", trigger: 'change'}],
                politicalId:[{required:true,message:"请选择政治老师", trigger: 'change'}],
                desc:[{required:true,message:"请输入班级描述", trigger: 'blur'}],
            }
        }
    },
    created() {
        this.findClass();
        this.findHandStudents();
        this.getMathTeacher();      
        this.getChineseTeacher();
        this.getEnglishTeacher();
        this.getBiologicalTeacher();
        this.getGeographyTeacher();
        this.getChemistryTeacher();
        this.getCphysicalTeacher();
        this.getHistoryTeacher();
        this.getPoliticalTeacher();
    },
    methods: {
        //查找班级
        findClass(){
            let data={
                express:this.filterForm
            }
            findClass(data).then(res =>{
                if(res.success){
                    this.classList = res.data;
                }
            })
        },
        //查找班主任下拉值
        findHandStudents(){
            findHandStudent({}).then(res =>{
                if(res.success){
                    this.headTeacherList = res.data;
                }
            })
        },
        //添加班级
        addClass(){
            console.log(111);
             this.$refs.form.validate((valid) => {
                 if(valid){
                     addNewClass(this.form).then(res =>{
                         if(res.success){
                             this.findClass();
                            this.dialogVisible = false;
                             this.$message.success("添加成功");
                         }
                     })
                 }
             })
        },
        //获取语文老师
        getChineseTeacher(){
            let data = {
                id: "0"
            }
            findSubjectTeacher(data).then(res =>{
               if(res.success){
                   this.chineseTeacherList = res.data
               }
            })
        },
        //获取数学老师
        getMathTeacher(){
            let data = {
                id: "1"
            }
            findSubjectTeacher(data).then(res =>{
                console.log(res);
               if(res.success){
                   this.mathTeacherList = res.data
               }
            })
        },
        //获取英语老师
        getEnglishTeacher(){
            let data = {
                id: "2"
            }
            findSubjectTeacher(data).then(res =>{
               if(res.success){
                   this.englishTeacherList = res.data
               }
            })
        },
        //获取生物老师
        getBiologicalTeacher(){
            let data = {
                id: "3"
            }
            findSubjectTeacher(data).then(res =>{
               if(res.success){
                   this.biologicalTeacherList = res.data
               }
            })
        },
        //获取地理老师
        getGeographyTeacher(){
            let data = {
                id: "4"
            }
            findSubjectTeacher(data).then(res =>{
               if(res.success){
                   this.geographyTeacherList = res.data
               }
            })
        },
        //获取化学老师
        getChemistryTeacher(){
            let data = {
                id: "5"
            }
            findSubjectTeacher(data).then(res =>{
               if(res.success){
                   this.chemistryTeacherList = res.data
               }
            })
        },
        //获取物理老师
        getCphysicalTeacher(){
            let data = {
                id: "6"
            }
            findSubjectTeacher(data).then(res =>{
               if(res.success){
                   this.cphysicalTeacherList = res.data
               }
            })
        },
        //获取历史老师
        getHistoryTeacher(){
            let data = {
                id: "7"
            }
            findSubjectTeacher(data).then(res =>{
               if(res.success){
                   this.historyTeacherList = res.data
               }
            })
        },
        //获取政治老师
        getPoliticalTeacher(){
            let data = {
                id: "8"
            }
            findSubjectTeacher(data).then(res =>{
               if(res.success){
                   this.politicalTeacherList = res.data
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
        /deep/ .el-input__inner{
        width:180px;
        }
        /deep/ .el-textarea__inner{
            width:425%;
        }
        /deep/ .el-input__count{
            right: -600px;
        }
        
    }
    .content{
        width: 100%;
        display: flex;
        .content-item{
            width:150px;
            height: 180px;
            background-color: #fff;
            border-radius: 15px;
            overflow: hidden;
            margin-right:15px;
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