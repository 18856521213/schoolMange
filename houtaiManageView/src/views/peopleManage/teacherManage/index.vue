<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 教师管理
 -->
<template>
  <div class="box">
    <el-form :inline="true" :model="form">
      <el-form-item label="教师姓名">
          <el-input size="small" v-model="form.teacherName"></el-input>
      </el-form-item>
      <el-form-item label="教师类型">
          <el-input size="small" v-model="form.teacherType"></el-input>
      </el-form-item>
      <el-form-item label="教师手机号">
          <el-input size="small" v-model="form.teacherTel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="primary" icon="el-icon-search">搜索</el-button>
        <el-button size="mini" type="primary" icon="el-icon-circle-plus" @click="addTeacher">新增教师</el-button>
        <el-button size="mini" type="warning">重置</el-button>
      </el-form-item>
    </el-form>
        <div>
            <el-table
            :data="tableData"
            border
            :header-cell-style="{background:'#19856f',color:'#fff'}"
            style="width: 100%">
                <el-table-column type="index" :index="indexMethod" label="序号" width="60" align="center"></el-table-column>
                <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                <el-table-column prop="age" label="年龄" align="center"></el-table-column>
                <el-table-column prop="studyID" label="身份证号" align="center"></el-table-column>
                <el-table-column prop="born" label="出生年月日" align="center"></el-table-column>
                <el-table-column prop="sex" label="学生性别" align="center"></el-table-column>
                <el-table-column prop="studentClass" label="所在班级" align="center"></el-table-column>
                <el-table-column prop="fatherName" label="父亲姓名" align="center"></el-table-column>
                <el-table-column prop="matherName" label="母亲姓名" align="center"></el-table-column>
                <el-table-column prop="address" label="家庭住址" align="center"></el-table-column>
                <el-table-column label="操作" align="center" width="220">
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
            @close="resetStudentInfo"
            :show-close="false"
            width="350px"
            :center="true">
            <div class="dialog-content">
                <el-form ref="studentForm" :inline="true" :model="dialogForm" label-width="100px">
                    <el-form-item label="学生姓名">
                        <el-input size="small" placeholder="请输入学生姓名" v-model="dialogForm.name"></el-input>
                    </el-form-item>
                    <el-form-item size="small" label="学生年龄">
                        <el-input placeholder="请输入学生年龄" v-model="dialogForm.age"></el-input>
                    </el-form-item>
                    <el-form-item label="学生父亲姓名">
                        <el-input size="small" placeholder="请输入学生父亲姓名" v-model="dialogForm.fatherName"></el-input>
                    </el-form-item>
                    <el-form-item label="学生母亲姓名">
                        <el-input size="small" placeholder="请输入学生母亲姓名" v-model="dialogForm.matherName"></el-input>
                    </el-form-item>
                    <el-form-item label="学生家庭住址">
                        <el-input size="small" placeholder="请输入学生家庭住址" v-model="dialogForm.address"></el-input>
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
  export default {
    data() {
      return {
        form:{
          teacherName:"",
          teacherType:"",
          teacherTel:""
        },
        tableData:[{},{}],
        page:{
            current: 1,
            size: 10,
            total: 0,
            sizes: [10, 20, 50, 100]
        },
        dialogVisible:false,
        dialogForm:{},
        title:"",
      }
    },
    mounted() {
      },
    methods:{
      //修改表格序号
      indexMethod(index) {
          return (this.page.current - 1) * this.page.size + (index + 1)
      },
      changeTeacher(){},
      deleteTeacher(){},
      //新增教师
      addTeacher(){
        this.title = "添加教师" 
        this.dialogVisible = true;
      },
      //提交按钮
      submitBtn(){},
      //重置弹框
      resetStudentInfo(){},
      //改变列表尺寸
      handleSizeChange(size){
          this.page.size = size;
          this.page.current = 1;
      },
      //跳转页数
      handleCurrentChange(current){
          this.page.current = current;
      },
      
    },

  }
</script>
<style lang="less" scoped>
.box{
  padding:10px 0;
}
</style>