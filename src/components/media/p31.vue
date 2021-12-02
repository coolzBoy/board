<template>

  <div class="main-container">
    <div id="container1"></div>
    <div class="item-list">
      <ul>
        <li><span></span><div>区级媒体</div></li>
        <li><span></span><div>其他媒体</div></li>
        <li><span></span><div>市级媒体</div></li>
        <li><span></span><div>国家级媒体</div></li>
      </ul>
    </div>
  </div>

</template>

<script>

  export default {
    data(){
      return{
        list:[
          {id:'p',parent:'',name:'总量',color:'transparent'},
          {id:'p1',parent: 'p',name:'区级媒体',value:55,color:'#6ac013'},
          {id:'p2',parent: 'p',name:'其他媒体',value:25,color:'#35d0e9'},
          {id:'p3',parent: 'p',name:'市级媒体',value:23,color:'#d42c0e'},
          {id:'p4',parent: 'p',name:'国家级媒体',value:16,color:'#fbb44a'},
        ],
      }
    },
    mounted() {
      this.init();
    },
    methods:{
      init(){

        this.$highcharts.chart('container1',{
          chart: {
            // width:'240',
            height: '240',
            backgroundColor:'transparent',
            marginTop:50,
            marginRight:130,
          },
          credits:{enabled:false},
          title: {
            text: '媒体报道',
            style:{color:'#fff31c',fontSize:'25px',letterSpacing: '2px'},
            floating:true,
            align:'center',
            x:0,
            y:20,
          },
          series: [{
            type: "sunburst",
            borderColor:'transparent',
            borderWidth:1,
            data: this.list,
            allowDrillToNode: true,
            cursor: 'pointer',
            dataLabels: {
              format: '{point.value}',
              rotationMode: 'circular',
              style:{color:'#fff',fontWeight:'500',fontSize:'14px'},
            },
            levels: [{
              level: 1,
              dataLabels: {
                format: ' ',
              },
            },
              {
                level: 2,
                dataLabels: {
                },
              },
              {
                level: 3,
              },
            ]

          }],
          tooltip: {
            headerFormat: "",
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: {point.value}'
          }
        });


      }
    }
  }

</script>

<style lang="scss" scoped>
  .main-container{
    position: relative;
    .item-list{
      position: absolute;
      right: 50px;
      top: 65px;
      width: 130px;
      height: 150px;
      ul{padding: 0px;}
      ul li{
        width:100%;
        float:left;
        list-style-type: none;
        margin-bottom: 15px;
      }
      ul li div{
        float:left;
        font-size:14px;
        color:#fff;
      }
      ul li span{
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 5px;
        float: left;
        margin-left: 10px;
        margin-top: 5px;
        margin-right: 10px;
      }
      ul li:nth-child(1) span{
        background-color: #6ac013;
      }
      ul li:nth-child(2) span{
        background-color: #35d0e9;
      }
      ul li:nth-child(3) span{
        background-color: #d42c0e;
      }
      ul li:nth-child(4) span{
        background-color: #fbb44a;
      }

    }

  }


</style>
