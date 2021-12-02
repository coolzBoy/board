<template>
  <div>
    <div class="chart"></div>
  </div>
</template>

<script>

  export default {
    mounted() {
      this.init();
    },

    methods: {
      init() {
        this.$highcharts.chart(this.$el, {
          chart: {
            type: 'cylinder',
            backgroundColor: 'rgba(0,0,0,0)',
            options3d: {
              enabled: true,
              alpha: 25,
              beta: 0,
              depth: 50,
              viewDistance: 25
            },
            height: 350,
            marginTop:30,
          },
          colors: ['#90ed7d', '#f7a35c', '#8085e9',
            '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'
          ],
          title: {
            text: '工会活动',
            floating:true,
            style: {
              "color": "#fff31c",
              "font-size": "25px",
              "margin-top": "10px",
              'letter-spacing':'2px',
            }
          },
          credits: {
            enabled: false
          },
          xAxis: {
            crosshair: false,
            lineColor: "#ffffff",
            lineWidth: 10,
            labels: {
              style: {
                fontSize: '16px',
                color: "#ffffff",
              }
            },
            offset:5,
            gridLineWidth: 0,
            type: 'category',
          },
          yAxis: {
            visible: false
          },
          plotOptions: {
            series: {
              depth: 25,
              colorByPoint: true
            }
          },

          tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25CF </span>{point.key}<br>',
            pointFormat: '<b>所占比例为：{point.y:,.2f}%</b>'
          },
          series: [{

            cursor: 'pointer',
            data: [
              ['男', 54.6],
              ['女', 45.6],
            ],
            name: '比例',
            showInLegend: false
          }]
        });

      }
    }
  }
</script>

<style>

</style>
