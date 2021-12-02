<template>

  <div id="container4"></div>

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

        this.$highcharts.chart('container4',{
          chart: {
            type: 'bar',
            // width:'300',
            height: '350',
            backgroundColor:'transparent',
            options3d: {
              enabled: true,
              alpha: 25,
              beta: 0,
              depth: 50,
              viewDistance: 25,
            },
            marginTop:60,
            marginLeft:140,
          },
          credits:{enabled:false},
          title: {
            text: '基层工会荣誉',
            style:{color:'#fff31c',fontSize:'25px',letterSpacing: '2px'},
            floating:true,
            align:'center',
            x:-1,
            y:22,
          },
          legend:{
            enabled:false,
          },
          xAxis: {
            categories: ['劳模集体','优秀基层工会','创新工作室','首都劳动奖状','三八红旗集体','其他荣誉', ],
            gridLineColor: 'rgba(0,0,0,0)',
            labels: {
              // skew3d: true,
              style: {
                fontSize: '16px',
                color:'#fff',
              }
            }
          },
          yAxis: {
            visible: false,
          },

          tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25CF </span> &nbsp; &nbsp;<b> {point.key}</b> : {point.y}',
            pointFormat: '',
          },

          plotOptions: {
            bar: {
              cursor: 'pointer',
              stacking: 'normal',
              depth: 30
            }
          },

          series: [{
            data:[
              {y: 30,color: '#0030ff'},
              {y: 100,color: '#6ac013'},
              {y: 22,color: '#35d0e9'},
              {y: 14,color: '#fff31c'},
              {y: 25,color: '#ff3900'},
              {y: 112,color: '#ffb000'},
            ],

          }]
        })
      }
    }
  }


</script>
