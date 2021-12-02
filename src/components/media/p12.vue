<template>

  <div class="charts"></div>

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
    methods:{
      init(){

        this.$highcharts.chart(this.$el,{
          chart: {
            type: 'column',
            // width:'380',
            height: '290',
            backgroundColor:'transparent',
            options3d: {
              enabled: true,
              alpha: 20,
              beta: 0,
              depth: 50,
              viewDistance: 25,
            },
            marginTop:30,
            marginLeft:20,
          },
          credits:{enabled:false},
          title: {
            text: '微信公众号',
            style:{color:'#fff31c',fontSize:'25px',letterSpacing: '2px'},
            floating:true,
            align:'center',
            x:4,
            y:22,
          },
          legend:{
            enabled:false,
          },
          xAxis: {
            categories: ['年度文章数','平均阅读量','累计点赞量','累计转发数'],
            gridLineColor: 'rgba(0,0,0,0)',
            labels: {
              skew3d: true,
              style: {
                fontSize: '18px',
                color:'#fff',
              }
            },
            offset:10,
          },
          yAxis: {
            visible: false,
          },
          tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25CF </span> &nbsp; &nbsp;<b> {point.key}</b> : {point.y}',
            pointFormat: '',
          },
          plotOptions: {
            column: {
              stacking: 'normal',
              depth: 30,
              pointWidth: 30,
            }
          },
          series: [{
            data:[
              {y: 800,color: '#d42c0e'},
              {y: 2126,color: '#35d0e9'},
              {y: 3200,color: '#fff31c'},
              {y: 1500,color: '#6ac013'},

            ],

          }]

        })
      }
    }
  }


</script>

