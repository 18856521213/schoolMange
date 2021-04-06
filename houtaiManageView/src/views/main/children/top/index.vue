<template>
    <div class="top">
      <div class="lesson-class br-radius">
        <div class="class-time-top">
          <div class="class-icon">
            <i class="el-icon-stopwatch"></i>
          </div>
          <div class="class-time">{{ classTime }}课时</div>
        </div>
        <div class="time-btn">
          <p>本周已上课的课时</p>
          <div>
            <el-button type="warning" size="mini" @click=" dialogVisible = true ">增加课时</el-button>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
      <div class="lesson-class br-radius">
          <div id="weekClass" style="width:100%;height:100%"></div>
      </div>
      <div class="lesson-class br-radius">
          <div id="yearClass" style="width:100%;height:100%"></div>
      </div>

      <el-dialog
        title="增加课时"
        :visible.sync="dialogVisible"
        width="30%"
       >
         <div class="dialog-content">
              <el-input-number v-model="classTime" :min="1" :max="100" label="增加课时按钮"></el-input-number>
         </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
        data(){
            return{
                dialogVisible:false,
                classTime:56,
            }
        },
        created(){

        },
        mounted(){
            this.weekClassEcharts();
            this.yearClassEcharts();
        },
        methods:{
            //周课时渲染表函数
            weekClassEcharts(){
                let myChart = this.$echarts.init(document.getElementById("weekClass"));
                let option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    title:{
                        left:'center',
                        text:'月课时',
                    },
                    grid:[{
                        top:30,
                        bottom:20,
                    }],
                    series: [{
                        data: [8, 10, 4, 2, 6, 2, 2],
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'center'
                            },
                            formatter: '{@value}'
                        },
                    }]
                };
                option && myChart.setOption(option);
            },
            //年课时渲染表函数
            yearClassEcharts(){
                let myChart = this.$echarts.init(document.getElementById("yearClass"));
                let option = {
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        itemWidth:10,
                        itemHeight:10,

                    },
                    title:{
                        left:'center',
                        text:'年课时',
                    },
                    series: [
                        {
                            name: '排课明细',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                borderRadius: 10,
                                borderColor: '#fff',
                                borderWidth: 2
                            },
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '15',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value:38, name: '一月'},
                                {value: 50, name: '二月'},
                                {value: 62, name: '三月'},
                                {value: 73, name: '四月'},
                                {value: 84, name: '五月'},
                                {value: 77, name: '六月'},
                                {value: 32, name: '七月'},
                                {value: 45, name: '八月'},
                                {value: 47, name: '九月'},
                                {value: 32, name: '十月'},
                                {value: 78, name: '十一月'},
                                {value: 32, name: '十二月'},
                            ]
                        }
                    ]
                };
                option && myChart.setOption(option);
            },
        }
}
</script>
<style lang="less" scoped>
//公共颜色
@projectionColor:#f0f0f0;

.top{
  display: flex;
  justify-content: space-between;
  .dialog-content{
      display: flex;
      justify-content: center;
  }
  .br-radius{
    border-radius:10px;
    overflow: hidden;
    padding:20px;
  }
  .lesson-class{
    width:29%;
    height: 200px;
    background-color:#fff;
    box-shadow: 3px 3px 3px @projectionColor;
    &:hover{
      box-shadow: 3px 3px 3px @projectionColor;
    }
  }
  .class-time-top{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    .class-icon{
      width:50px;
      height:50px;
      border-radius: 20px;
      background: #ff4343;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left:10px;
      margin-top:20px;
      i{
        font-size: 25px;
        color: #fff;
      }
    }
    .class-time{
      font-size: 30px;
      padding: 30px 20px 5px 10px;
      margin: 0;
    }
  }
  .time-btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 80px;
    p{
      padding: 0;
      margin: 0;
      font-size: 14px;
      color: #afafaf;
    }
  }
}
</style>
