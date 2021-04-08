<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 首页尾部
 -->
<template>
    <div class="box">
        <div class="content-left">
            <div id="left" style="width:100%;height:100%;"></div>
        </div>
        <div class="content-right">
            <div id="right" style="width:100%;height:100%;"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.getLeftEcharts();
        this.getRightEcharts();
    },
    methods:{
        getLeftEcharts(){
            let myChart = this.$echarts.init(document.getElementById("left"));
            let option = {
             
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['语文', '数学', '英语', '生物', '物理']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '语文',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '数学',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '英语',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '生物',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '物理',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };

            option && myChart.setOption(option);

        },
        getRightEcharts(){
            let myChart = this.$echarts.init(document.getElementById("right"));
            let option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid:[{
                    top:15,
                    bottom:20,
                }],
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                }]
            };

            option && myChart.setOption(option);

        },
    }
    
}
</script>
<style lang="less" scoped>
.box{
    display: flex;
    justify-content: space-between;
    .content-left{
        width:49%;
        height: 200px;
        background-color: #fff;
        padding: 0 5px;
    }
    .content-right{
        width:49%;
        height: 200px;
        background-color: #fff;
        padding: 0 5px;
    }
}
</style>