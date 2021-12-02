<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>

<script>
  export default {
    name: "p12",
    data() {
      return {
        chartOptions: {
          chart: {
            type: 'area',
            height: 280,
            backgroundColor: 'rgba(0,0,0,0)',
            marginLeft:30,
            marginRight:30,
          },
          title: {
            text: '活跃趋势',
            style: {
              "color": "#fff31c",
              "font-size": "25px",
              'letter-spacing':'2px',
            }
          },
          xAxis: {
            crosshair: false,
            lineColor: "#ffb300",
            lineWidth: 2,
            labels: {
              style: {
                fontSize: '14px',
                "color": "#ffffff",
              },
              step:2
            },
            type: 'category',
          },
          yAxis: {
            visible: false
          },
          colors: ["#b9a463"],
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          tooltip: {
            pointFormat: '在线人数：<b>{point.y:,.0f}</b>'
          },
          plotOptions: {
            area: {
              marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              },
              // dataLabels:{
              //   enabled:true,
              //   backgroundColor:'rgba(0,0,0,0)',
              //   style:{ color:'#fff',fontSize:'14px',fontWeight:'500'},
              // },

            }
          },
          series: [{
            data: [
              ['00:00', 1234],
              ['02:00', 813],
              ['04:00', 634],
              ['06:00', 1953],
              ['08:00', 5352],
              ['10:00', 13521],
              ['12:00', 23125],
              ['14:00', 12432],
              ['16:00', 11293],
              ['18:00', 15412],
              ['20:00', 21532],
              ['22:00', 3241],
              ['24:00', 1234],
            ]
          }]

        }
      };
    },
    mounted() {},
    methods: {
      myCallback() {
        // console.log("this is callback function");
      }
    }
  };
</script>

<style lang="scss">
  .p12 {
    padding-top: 8px;
  }
</style>
