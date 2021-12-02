<template>
  <div>
    <div id="p31container"></div>
  </div>
</template>

<script>

  export default {
    name: "p31",
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.$highcharts.chart('p31container', {
          chart: {
            type: 'cylinder',
            backgroundColor: 'rgba(0,0,0,0)',
            options3d: {
              enabled: true,
              alpha: 20,
              beta: 0,
              depth: 50,
              viewDistance: 25
            },
            marginLeft:10,
            marginTop:60,
            height: 230,

          },
          colors: ['#90ed7d', '#f7a35c', '#8085e9',
             '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
          title: {
            text: '工会活动',
            style:{color:'#fff31c',fontSize:'25px',letterSpacing: '2px'},
            floating:true,
            align:'center',
            x:-1,
            y:19,
          },
          credits:{enabled:false},
          xAxis: {
            // crosshair: true,
            lineColor:"#ffffff",
            lineWidth:3,
            labels: {
              skew3d: true,
              style: {
                fontSize: '14px',
                color: "#ffffff",
              }
            },
            offset:5,
            gridLineColor: 'rgba(0,0,0,0)',
            type: 'category',
          },
          yAxis: {
            visible: false,
            // labels:{
            //   style:{color:'#f00',},
            // },
            tickPositions: [100,500,1000,8000]
          },
          plotOptions: {
            series: {
              colorByPoint: true,
              depth: 30,
              pointWidth: 30,
            }
          },
          tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25CF </span> &nbsp; &nbsp;<b> {point.key}</b> : {point.y}',
            pointFormat: '',
          },
          series: [{
            cursor: 'pointer',
            data: [
              // ['职业技能培训', 534],
              ['技能培训', 534],
              ['专享活动', 14553],
              ['心悦活动', 5325],
              ['文体活动', 2736],
              ['法律培训', 423],
              ['干部培训', 323]
            ],
            name: '次数',
            showInLegend: false
          }]
        });

      }
    }
  }
</script>

<style>

</style>
