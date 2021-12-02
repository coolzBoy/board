<template>

    <div class="charts"></div>

</template>

<script>

  export default {
    props:{
      list:{
        type: Array,
        default:'',
      }
    },
    mounted() {
      this.init();
    },
    methods:{
      init(){

      this.$highcharts.chart(this.$el,{
          chart: {
            width:'130',
            height: '100%',
            backgroundColor:'transparent',
          },
          credits:{enabled:false},
          title: {
            text: '',
            floating:true,
          },
          series: [{
            type: "sunburst",
            borderColor:'transparent',
            borderWidth:1,
            data: this.list,
            allowDrillToNode: true,
            cursor: 'pointer',
            dataLabels: {
              format: '{point.name}',
              rotationMode: 'circular',
              style:{color:'#fff',fontSize:'20px',fontWeight:'500',},
            },
          }],
          tooltip: {
            headerFormat: "",
            pointFormat: '<b>{point.value}</b>'
          }
        });


      }
    }
  }

</script>


