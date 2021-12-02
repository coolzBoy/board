<template>
  <div class="p13">

    <div class="charts"></div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {

        this.$highcharts.chart(this.$el,{
          chart: {
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
            },
            height: 350,
            backgroundColor: 'rgba(0,0,0,0)',
            marginLeft: 30,
            marginRight: 30,
          },

          title: {
            text: '出行习惯',
            style: {
              "color": "#fff31c",
              "font-size": "25px",
              'letter-spacing':'2px',
            }
          },
          xAxis: {
            crosshair: false,
            lineColor: "#ffb300",
            lineWidth: 1,
            labels: {
              style: {
                fontSize: '14px',
                "color": "#ffffff",
              },
              step: 4
            },
            type: 'category',
          },
          yAxis: {
            visible: false
          },
          colors: ["#6deaf7","#fff2a4","#ff6950","#8ad137"],
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25CF </span>{point.key}<br>',
            pointFormat: '<b>所占比例为：{point.y:,.2f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                enabled: true,
                format: '{point.name}',
                style:{color:'#fff',fontSize:'18px',fontWeight:'400',},
              }
            }
          },
          series: [{
            data: [
              ['共享单车', 24.60],
              ['步行', 8.03],
              ['驾车', 47.89],
              ['公共交通', 19.48]
            ]
          }]

        })
      },

    },


  };
</script>
