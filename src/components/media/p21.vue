<template>

  <div class="container"></div>

</template>

<script>

  export default {
    data(){
      return{
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {

        this.$highcharts.chart(this.$el, {
          chart: {
            zoomType: 'xy',
            backgroundColor:'transparent',
            // width:'900',
            height:'520',
            marginTop:110,
            marginLeft:90,
          },
          title: {
            text: '',
            floating:true,
          },
          credits:{enabled:false},
          // colors:['#fbb44a','#fff31c','#d42c0e','#35d0e9'],
          colors:['#ffc200','#00b2f3','#f7f803','#02a0db'],
          xAxis: [{
            categories: ['03-01','03-02','03-03','03-04','03-05','03-06','03-07','03-08','03-09','03-10'],
            crosshair: true,
            labels:{
              style:{color:'#fff',fontSize:'16px'}
            },
          }],
          yAxis: [{ // Primary yAxis
            labels: {
              format: '{value}',
              style: { color:'#fff',fontSize: '16px',},
            },
            title: {
              text: ' ',
            },
            gridLineColor: 'rgba(0,0,0,0)',
            lineColor: '#fff',
            lineWidth: 1,
            tickPositions: [0,20,40,60,80,100]
          },
              { // Second yAxis
              labels: {
                enabled: true,
                format: '{value}',
                style: { color:'#fff',fontSize: '16px',},
              },
              title: {
                text: ' ',
              },
              gridLineColor: 'rgba(0,0,0,0)',
              lineColor: '#fff',
              lineWidth: 1,
              tickPositions: [0,2000,4000,6000,8000,10000,12000,14000,16000],
              opposite: true,
            },
          ],
          plotOptions:{
            column: {
              borderWidth:0,
            },
            line:{
              dataLabels:{
                enabled:true,
                backgroundColor:'rgba(0,0,0,0)',
                style:{ color:'#fff',fontSize:'14px',fontWeight:'500'},
              },
              marker:{
                radius:0,
              },
            }
          },
          tooltip: {
            shared: true,
            headerFormat: '<b>{point.key}</b><br>',
            style:{fontSize:'14px'},
          },
          legend: {
            verticalAlign: 'top',
            align: 'left',
            layout: 'horizontal',
            floating: true,
            itemStyle:{"color": "#fff",'fontSize':'18px','fontWeight':'500','letterSpacing':'2px'},
            itemDistance: 20,
            itemHoverStyle:{'color':'#f00'},
            x: 80,
            y: 30,
          },
          // legend：{
          //   useHTML：true，
          //   labelFormatter：function（）{
          //   return"< img src ='https：//pbs.twimg.com/profile_images/538262176134221824 /Vx4_Psj1_400x400.png'width = '20'高t ='20'>"+ this.name
          // },
          series: [
              {
                name: '发布文章',
                type: 'column',
                yAxis: 0,
                data: [25,27,30,18,26,16,45,12,45,36],
                tooltip: {
                  valueSuffix: ' '
                },
              },
              {
                name: '发布视频',
                type: 'column',
                yAxis: 0,
                data: [10,15,12,32,20,30,22,40,16,20],
                tooltip: {
                  valueSuffix: ' '
                },
              },
              {
                name: '微信阅读',
                // type: 'spline',
                type: 'line',
                yAxis: 1,
                data: [8342,7342,10305,8342,9000,9800,8200,8600,8100,9200],
                tooltip: {
                  valueSuffix: ' '
                }
              },
              {
                name: '抖音播放',
                type: 'line',
                yAxis: 1,
                data: [7642,9342,12305,13242,7000,8200,9200,8700,9100,7200],
                tooltip: {
                  valueSuffix: ' '
                }
              }
          ]
        });
      },
    }
  }
</script>
