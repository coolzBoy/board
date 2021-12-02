<template>

  <highcharts :options="chartOptions" :callback="myCallback"></highcharts>

</template>

<script>
  export default {
    name: "p22",
    data() {
      return {
        chartOptions: {
          chart: {
            type: 'variablepie',
            width:340,
            height: 360,
            backgroundColor: 'rgba(0,0,0,0)',
            marginTop:10,
            marginLeft:-100,
          },
          title: {
            text: '',
            floating:true,
          },

          colors: ["#d3290d","#e71b9a","#1084ed","#0fdb85","#ffb300",],

          credits: {
            enabled: false
          },
          tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25CF </span>{point.key}<br>',
            pointFormat: '<b>所占比例为：{point.y:,.2f}%</b>'
          },

          plotOptions: {
            variablepie: {
              dataLabels: {
                enabled: true,
                x:-25,
                y:-5,
                distance: -80,
                style: {
                  fontWeight: '500',
                  color: '#fff',
                  // textShadow: '0px 1px 2px black',
                  fontSize:'14px',
                }
              },
              startAngle: -270, // 圆环的开始角度
              endAngle: 90, // 圆环的结束角度
              center: ['50%', '60%']
            }
          },

          series: [{
            minPointSize: 10,
            zMin: 0,
            name: 'countries',
            data: [{
                name: '博士及以上',
                y: 7.16,
                z: 40
              },
              {
                name: '硕士',
                y: 8.03,
                z: 30
              },
              {
                name: '本科',
                y: 36.09,
                z: 20
              },
              {
                name: '专科',
                y: 21.32,
                z: 19
              },
              {
                name: '其他',
                y: 7.16,
                z: 25
              }
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
