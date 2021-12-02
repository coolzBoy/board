<template>

    <div id="chart1" class="echart1" ></div>

</template>

<script>

  export default{
    data(){
      return{

      }
    },
    mounted() {
      this.initChart()
    },
    methods:{
      initChart(){

        let myChart = this.$echarts.init(document.getElementById("chart1"))

        myChart.setOption({

          series: [
            {
              name: '',
              type: 'pie',
              radius: [20, 150],
              center: ['55%', '55%'],
              roseType: 'area',
              color: ["#d3290d","#e71b9a","#1084ed","#0fdb85","#ffb300",],
              startAngle: 0,
              itemStyle: {
                borderRadius: 5
              },
              label:{
                show:true,
                position:'inside',
                formatter:'{b}',
                color:'#fff',
                fontSize:14,
              },
              data: [
                {value: 30, name: '博士及以上'},
                {value: 20, name: '硕士'},
                {value: 60, name: '本科'},
                {value: 40, name: '专科'},
                {value: 25, name: '其他'},
              ]
            }
          ],
          tooltip:{
            show:true,
            formatter:'{b} <br>所占比例为: {d}%',

          },

        });

      }
    }


  }


</script>

<style lang="scss" scoped>

  .echart1{
    height:350px;
  }


</style>
