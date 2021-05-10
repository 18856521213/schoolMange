<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 教师管理
 -->
<template>
  <div class="box">
    <el-form :inline="true" :model="filterForm">
      <el-form-item label="教师姓名">
          <el-input size="small" v-model="filterForm.teacherName" placeholder="请输入教师姓名"></el-input>
      </el-form-item>
      <el-form-item label="授课类型">
          <el-select size="small" v-model="filterForm.teacherSubject" clearable placeholder="请选择教授科目">
            <el-option
              v-for="item in subjectList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="教师手机号" placeholder="请输入教师手机号">
          <el-input size="small" v-model="filterForm.teacherTel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="primary" @click="searchHandle" icon="el-icon-search">搜索</el-button>
        <el-button size="mini" type="primary" icon="el-icon-circle-plus" @click="addTeacher">新增教师</el-button>
        <el-button size="mini" type="warning" @click="resetFilterForm">重置</el-button>
      </el-form-item>
    </el-form>
        <div>
            <el-table
            :data="tableData"
            border
            :header-cell-style="{background:'#19856f',color:'#fff'}"
            style="width: 100%">
                <el-table-column type="index" :index="indexMethod" label="序号" width="60" align="center"></el-table-column>
                <el-table-column prop="teacherName" label="教师姓名" align="center"></el-table-column>
                <el-table-column prop="teacherId" label="教师编号" align="center"></el-table-column>
                <el-table-column prop="teacherSubject" label="所授科目" align="center" :formatter="resetSubject"></el-table-column>
                <el-table-column prop="teacherSex" label="教师性别" align="center" :formatter="resetSex"></el-table-column>
                <el-table-column prop="teacherAge" label="教师年纪" align="center"></el-table-column>
                <el-table-column prop="teacherTel" label="教师手机号" align="center"></el-table-column>
                <el-table-column prop="teacherNumber" label="教师身份证号" align="center"></el-table-column>
                <el-table-column prop="teacherLevel" label="教师级别" align="center" :formatter="resetLevel"></el-table-column>
                <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
                <el-table-column label="操作" align="center" width="170">
                 <template slot-scope="scope">
                    <el-button size="mini" @click="changeTeacher(scope.row)" type="primary">修改</el-button>
                    <el-button size="mini" @click="deleteTeacher(scope.row)" type="danger">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <div style="text-align: right; margin-top: 12px;">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page.current"
                :page-sizes="page.sizes"
                :page-size="page.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="page.total">
            </el-pagination>
        </div>

        <el-dialog
            :title="title"
            :visible.sync="dialogVisible"
            @close="resetTeacherInfo"
            :show-close="false"
            width="1050px"
            :center="true">
            <div class="dialog-content">
                <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="120px">
                    <el-form-item label="教师姓名" prop="teacherName">
                        <el-input size="small" v-model="form.teacherName" placeholder="请输入教师姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="教师年纪" prop="teacherAge">
                        <el-input size="small" maxlength="3" v-model="form.teacherAge" placeholder="请输入教师年纪"></el-input>
                    </el-form-item>
                    <el-form-item label="教师身份证号" prop="teacherNumber">
                        <el-input size="small" maxlength="18" v-model="form.teacherNumber" placeholder="请输入教师身份证号"></el-input>
                    </el-form-item>
                    <el-form-item label="教师手机号" prop="teacherTel">
                        <el-input size="small" maxlength="11" v-model="form.teacherTel" placeholder="请输入教师手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="教师微信号" prop="teacherWechat">
                        <el-input size="small" v-model="form.teacherWechat" placeholder="请输入教师微信号"></el-input>
                    </el-form-item>
                    <el-form-item label="教师现住址" prop="teacherAdress">
                        <el-input size="small" v-model="form.teacherAdress" placeholder="请输入教师现住址"></el-input>
                    </el-form-item>
                    <el-form-item label="教师母亲姓名" prop="teacherMatherName">
                        <el-input size="small" v-model="form.teacherMatherName" placeholder="请输入教师母亲姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="教师父亲姓名" prop="teacherFatherName">
                        <el-input size="small" v-model="form.teacherFatherName" placeholder="请输入教师父亲姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="教师出生日期" prop="teacherBron">
                       <el-date-picker
                        size="small"
                        v-model="form.teacherBron"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期">
                      </el-date-picker>
                    </el-form-item>
                    <el-form-item label="教师学历" prop="teacherEducation">
                        <el-select size="small" v-model="form.teacherEducation" clearable placeholder="请选择最高学历">
                          <el-option
                            v-for="item in educationList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="教师级别" prop="teacherLevel">
                        <el-select size="small" v-model="form.teacherLevel" clearable placeholder="请选择级别">
                          <el-option
                            v-for="item in levelList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="教授科目" prop="teacherSubject">
                        <el-select size="small" v-model="form.teacherSubject" clearable placeholder="请选择教授科目">
                          <el-option
                            v-for="item in subjectList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="教师性别" prop="teacherSex">
                        <el-select size="small" v-model="form.teacherSex" clearable placeholder="请选择教师性别">
                          <el-option
                            v-for="item in sexList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="教师成分" prop="teacherIngredient">
                        <el-select size="small" v-model="form.teacherIngredient" clearable placeholder="请选择教师成分">
                          <el-option
                            v-for="item in ingredientList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="健康水平" prop="teacherHealth">
                        <el-select size="small" v-model="form.teacherHealth" clearable placeholder="请选择教师健康水平">
                          <el-option
                            v-for="item in healthList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="submitBtn">确 定</el-button>
            </span>
        </el-dialog>

  </div>
</template>
<script>
import { addTeacher,findTeacher,deleteTeacher,updateTeacher } from "@/api/peopleManage/teacherManage/index.js"
  export default {
    data() {
      return {
        filterForm:{
          teacherName:"",
          teacherSubject:"",
          teacherTel:"",
        },
        form:{
          teacherName:"",
          teacherEducation:"",
          teacherAge:"",
          teacherSex:"",
          teacherIngredient:"",
          teacherNumber:"",
          teacherTel:"",
          teacherWechat:"",
          teacherBron:"",
          teacherAdress:"",
          teacherLevel:"",
          teacherSubject:"",
          teacherMatherName:"",
          teacherFatherName:"",
          teacherHealth:"",
        },
        tableData:[],
        page:{
            current: 1,
            size: 10,
            total: 0,
            sizes: [10, 20, 50, 100]
        },
        dialogVisible:false,
        dialogForm:{},
        title:"",
        //学历列表
        educationList:[
          {label:"高中",value:"0"},
          {label:"大专",value:"1"},
          {label:"本科",value:"2"},
          {label:"研究生",value:"3"},
          {label:"博士",value:"4"},
          {label:"博士后",value:"5"},
        ],
        //性别列表
        sexList:[
          {label:"女",value:"0"},
          {label:"男",value:"1"},
        ],
        //教师成分
        ingredientList:[
          {label:"群众",value:"0"},
          {label:"党员",value:"1"},
          {label:"其他",value:"2"},
        ],
        //教师级别
        levelList:[
          {label:"普通教师",value:0},
          {label:"班主任",value:1},
          {label:"教导主任",value:2},
        ],
        //科目列表
        subjectList:[
          {label:"语文",value:"0"},
          {label:"数学",value:"1"},
          {label:"英语",value:"2"},
          {label:"生物",value:"3"},
          {label:"地理",value:"4"},
          {label:"化学",value:"5"},
          {label:"物理",value:"6"},
          {label:"历史",value:"7"},
          {label:"政治",value:"8"},
        ],
        //健康水平
        healthList:[
          {label:"优",value:"2"},
          {label:"良",value:"1"},
          {label:"差",value:"0"},
        ],
        //规则
        rules:{
          teacherName:[{required: true, message: '请输入教师姓名', trigger: 'blur'}],
          teacherEducation:[{required: true, message: '请选择教育经历', trigger: 'change'}],
          teacherAge:[{required: true, message: '请输入教师年纪', trigger: 'blur'}],
          teacherSex:[{required: true, message: '请输入教师性别', trigger: 'blur'}],
          teacherIngredient:[{required: true, message: '请选择教师成分', trigger: 'change'}],
          teacherNumber:[{required: true, message: '请输入教师身份证号', trigger: 'blur'}],
          teacherWechat:[{required: true, message: '请输入教师微信', trigger: 'blur'}],
          teacherBron:[{required: true, message: '请输入教师出生日期', trigger: 'blur'}],
          teacherAdress:[{required: true, message: '请输入教师现住址', trigger: 'blur'}],
          teacherLevel:[{required: true, message: '请选择教师级别', trigger: 'change'}],
          teacherSubject:[{required: true, message: '请选择教师所授科目', trigger: 'change'}],
          teacherMatherName:[{required: true, message: '请输入教师母亲姓名', trigger: 'blur'}],
          teacherFatherName:[{required: true, message: '请输入教师父亲姓名', trigger: 'blur'}],
          teacherHealth:[{required: true, message: '请选择教师健康', trigger: 'change'}],
          teacherTel:[{required: true, message: '请输入手机号', trigger: 'blur'}],
        }
      }
    },
    mounted() {
    },
    created(){
      this.getTeacherList();
    },
    methods:{
      //查询教师
      getTeacherList(){
        let data = {
          page:{
            size:this.page.size,
            current:this.page.current
          },
          express:this.filterForm
        };
        findTeacher(data).then(res =>{
          if(res.success){
            this.tableData = res.data;
            this.page.total = res.total;
          }else{
            this.tableData = [];
            this.page.total = 0;
          }
        })
      },
      //搜搜
      searchHandle(){
        this.page.current = 1;
        this.getTeacherList();
      },
      //修改表格序号
      indexMethod(index) {
          return (this.page.current - 1) * this.page.size + (index + 1)
      },
      changeTeacher(row){
        Object.assign(this.form,row);
        this.dialogVisible = true;
      },
      deleteTeacher(row){
        let data = {
         teacherId: row.teacherId
        };
        deleteTeacher(data).then(res =>{
          if(res.success){
            this.$message.success(res.message);
            this.getTeacherList();
          }
        })
      },
      //新增教师
      addTeacher(){
        this.title = "添加教师" 
        this.dialogVisible = true;
        delete this.form.teacherId
      },
      //提交按钮
      submitBtn(){
         this.$refs.form.validate((valid) => {
            if(valid){
              if(!this.form.teacherId){
                addTeacher(this.form).then(res =>{
                  if(res.success){
                    this.$message.success(res.message);
                    this.dialogVisible = false;
                    this.getTeacherList();
                  }
                })
              }else{
                updateTeacher(this.form).then(res =>{
                  if(res.success){
                    this.$message.success(res.message);
                    this.dialogVisible = false;
                    this.getTeacherList();
                  }
                })
              }
            }
         })
      },
      //重置弹框
      resetTeacherInfo(){
        this.dialogVisible = false;
        this.$refs.form.resetFields();
        for(let i in this.form){
          this.form[i] = ""
        }
      },
      //改变列表尺寸
      handleSizeChange(size){
          this.page.size = size;
          this.page.current = 1;
          this.getTeacherList();
      },
      //跳转页数
      handleCurrentChange(current){
          this.page.current = current;
          this.getTeacherList();
      },
      //重置过滤表单
      resetFilterForm(){
        for(let i in this.filterForm){
          this.filterForm[i] = ""
        }
      },
      //重置授课
      resetSubject(row){
        let subjectName;
        this.subjectList.forEach(item =>{
          if(item.value == row.teacherSubject){
            subjectName = item.label;
          }
        })
        return subjectName
      },
      //重置性别
      resetSex(row){
        return row.teacherSex == "0" ? "女" : "男"
      },
      //重置教师级别
      resetLevel(row){
        let levelName;
        this.levelList.forEach(item =>{
          if(item.value == row.teacherLevel){
            levelName = item.label;
          }
        })
        return levelName
      },
    },

  }
</script>
<style lang="less" scoped>
.box{
  padding:10px 0;
  .dialog-content{
    /deep/ .el-input__inner{
      width:180px;
    }
    /deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner{
      width:180px;
    }

  }
}
</style>