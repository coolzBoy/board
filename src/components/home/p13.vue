<template>

  <div id="container2"></div>

</template>

<script>

  export default{
    data(){
      return{

      }
    },
    mounted() {
      this.init();
    },
    methods:{
      init(){
        this.$highcharts.chart('container2',{
          chart: {
            type: 'pyramid3d',
            // width:'390',
            height: '390',
            backgroundColor:'transparent',
            marginTop:55,
            marginRight:60,
            options3d: {
              enabled: true,
              alpha: 10,
              depth: 50,
              viewDistance: 50
            }
          },
          colors:['#ff3900','#fff31c','#6ac013','#ffb000','#35d0e9'],
          credits:{enabled:false},
          title: {
            text: '基层工会规模',
            style:{color:'#fff31c',fontSize:'25px',letterSpacing: '2px'},
            floating:true,
            align:'center',
            x:-2,
            y:23,
          },
          plotOptions: {
            series: {
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                backgroundColor:'transparent',
                borderColor:'#f00',
                // format: '<span style="font-size:12px;">{point.name}</span><b>{point.y:,.0f}</b>',
                format: '<span style="font-size:14px;">{point.name}</span>',
                style:{color:'#fff',fontSize:'14px',fontWeight:'400',padding:20,},
                allowOverlap: true,
                x: 15,
                y: 0,
              },
              width: '65%',
              height: '80%',
              center: ['50%', '43%']
            }
          },
          series: [{
            data: [
              ['100-500人：<b>584</b>', 602,],
              ['500-1000人：<b>331</b>', 367],
              ['1000-5000人：<b>203</b>', 356],
              ['100人以下：<b>103</b>', 316],
              ['5000人以上：<b>52</b>', 300],
            ]
          }],
          tooltip: {
            headerFormat: '<b>工会规模</b><br>',
            // pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: {point.y}'
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}'
          }


        })

      }
    }
  }
</script>
