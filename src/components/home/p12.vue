<template>

  <div class="main-container">
    <div id="container1"></div>
    <div class="item-list">
      <ul>
        <li><span></span><div>一般工会：835</div></li>
        <li><span></span><div>工会联合会：273</div></li>
        <li><span></span><div>联合工会：273</div></li>
        <li><span></span><div>密切工会：165</div></li>
        <li><span></span><div>非密切工会：588</div></li>
      </ul>
    </div>
  </div>

</template>

<script>


  export default {
    data(){
      return{
        list:[
          {id:'p',parent:'',name:'总工会',color:'transparent'},
          {id:'p1',parent: 'p',name:'密切工会',color:'#ffb000'},
          {id:'p2',parent: 'p',name:'非密切工会',color:'#e4007f'},
          {id:'p1-1',parent: 'p1',name:'工会联合会',value:273,color:'#6cbc13'},
          {id:'p2-1',parent: 'p2',name:'联合工会',value:165,color:'#ff3900'},
          {id:'p2-2',parent: 'p2',name:'一般工会',value:523,color:'#35d0e9'},
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
            width:'300',
            height: '100%',
            backgroundColor:'transparent',
            marginTop:55,
            marginLeft:50,
          },
          credits:{enabled:false},
          title: {
            text: '工会类型',
            style:{color:'#fff31c',fontSize:'25px',letterSpacing: '2px'},
            floating:true,
            align:'center',
            x:75,
            y:23,
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
              style:{color:'#fff',fontWeight:'500',letterSpacing: '2px'},
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
      right: 10px;
      top: 70px;
      width: 150px;
      height: 180px;
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
        background-color: #35d0e9;
      }
      ul li:nth-child(2) span{
        background-color: #6cbc13;
      }
      ul li:nth-child(3) span{
        background-color: #ff3900;
      }
      ul li:nth-child(4) span{
        background-color: #ffb000;
      }
      ul li:nth-child(5) span{
        background-color: #e4007f;
      }
    }

  }






</style>
