<template>

  <highcharts :options="chartOptions" :callback="myCallback"></highcharts>

</template>

<script>
  export default {
    name: "p24",
    data() {
      return {
        chartOptions: {
          chart: {
            type: 'variablepie',
            backgroundColor: 'rgba(0,0,0,0)',
            width:340,
            height: 360,
            marginTop:10,
            marginLeft:-100,
          },
          title: {
            text: '',
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
                x:-5,
                y:-5,
                distance: -60,
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
                name: '20岁以下',
                y: 2.29,
                z: 50
              },
              {
                name: '20-30岁',
                y: 41.43,
                z: 30
              },
              {
                name: '30-40岁',
                y: 34.37,
                z: 16
              },
              {
                name: '40-50岁',
                y: 15.51,
                z: 20
              },
              {
                name: '50岁以上',
                y: 6.41,
                z: 40
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
