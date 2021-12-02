<template>
  <div>
    <div id="p32container"></div>
  </div>
</template>

<script>

  export default {
    name: "p32",
    mounted() {
      this.init();
    },
    methods: {
      init() {

        this.$highcharts.chart('p32container', {
          chart: {
            type: 'column',
            backgroundColor: 'rgba(0,0,0,0)',
            options3d: {
              enabled: true,
              alpha: 25,
              beta: 0,
              depth: 100,
              viewDistance: 10,
            },
            marginRight:100,
            marginTop:30,
            height: 290,
          },
          credits:{enabled:false},
          colors: ['#3aa4ef', '#49ec9e', '#fbb44a', '#35d0e9',],
          title: {
            text: '工会经费',
            style:{color:'#fff31c',fontSize:'25px',letterSpacing: '2px'},
            floating:true,
            align:'center',
            x:-1,
            y:22,
          },
          xAxis: {
            crosshair: true,
            lineColor: "#ffffff",
            lineWidth: 3,
            labels: {
              style: {
                fontSize: '16px',
                "color": "#ffffff",
              }
            },
            gridLineColor: 'rgba(0,0,0,0)',
            categories: ['2017年','2018年','2019年','2020年','2021年'],
            offset:5,
          },
          yAxis: {
            visible: false
          },
          legend:{
            align:"right",
            verticalAlign:"middle",
            layout:"vertical",
            floating:true,
            itemMarginBottom:5,
            itemStyle:{"color": "#FFFFFF",fontSize:'14px'},
            itemHoverStyle:{color:'#f00'},
            x:-10,
            y:10,
          },
          tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y}元'
          },
          plotOptions: {
            column: {
              cursor: 'pointer',
              stacking: 'normal',
              depth: 40,
            }
          },
          series: [{
            name: '第一期',
            data: [6698129.41, 6756514.43, 7354858.3, 7730594.9, 9179349.18,],
          }, {
            name: '第二期',
            data: [7981224.03, 9429868.69, 9630433.11, 17842887.68,],
          }, {
            name: '第三期',
            data: [6298879.59, 7182406.26, 7541791.84, 8339450.13],
          }, {
            name: '第四期',
            data: [6862800.37, 7473540.86, 7423967.45, ],
          }]
        });

      }
    }
  }
</script>

<style>

</style>
