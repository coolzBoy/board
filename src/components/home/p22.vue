<template>

  <div id="container3"></div>

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

        this.$highcharts.chart('container3',{
          chart: {
            type: 'column',
            // width:'300',
            height: '370',
            backgroundColor:'transparent',
            options3d: {
              enabled: true,
              alpha: 25,
              beta: 0,
              depth: 50,
              viewDistance: 25,
            },
            marginTop:30,
            marginLeft:20,
          },
          credits:{enabled:false},
          colors:['#6ac013','#fff31c'],
          title: {
            text: '工资协商',
            style:{color:'#fff31c',fontSize:'25px',letterSpacing: '2px'},
            floating:true,
            align:'center',
            x:6,
            y:22,
          },
          legend:{
            enabled:true,
            floating:true,
            align:"center",
            verticalAlign:"top",
            layout:"horizontal",
            itemStyle:{"color": "#fff",'fontSize':'14px'},
            itemDistance: 20,
            itemHoverStyle:{'color':'#f00'},
            x:0,
            y:50,
          },
          xAxis: {
            categories: ['专项合同', '集体合同', ],
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
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y}'
          },

          plotOptions: {
            column: {
              cursor: 'pointer',
              stacking: 'normal',
              depth: 40
            }
          },

          series: [{
            name: '签订',
            data: [293, 166,],
            stack: 'stack1'
          }, {
            name: '即将到期',
            data: [34, 23,],
            stack: 'stack2'
          }]
        })
      }
    }
  }


</script>

