<template>

  <div class="charts"></div>

</template>

<script>


  export default {
    name: "p32",
    data() {
      return {
        data:[
          {name:"动漫",weight:86},{name:"动物",weight:81},{name:"二次元",weight:92},{name:"滑雪",weight:54},{name:"绘画",weight:87},{name:"健身",weight:72},{name:"金融",weight:75},{name:"军事",weight:75},{name:"科技",weight:182},{name:"篮球",weight:85},{name:"乐器",weight:89},{name:"轮滑",weight:76},{name:"旅行",weight:122},{name:"美食",weight:62},{name:"美妆",weight:88},{name:"母婴",weight:63},{name:"烹饪",weight:60},{name:"乒乓球",weight:46},{name:"骑行",weight:91},{name:"棋牌",weight:64},{name:"汽车",weight:138},{name:"亲子",weight:37},{name:"摄影",weight:91},{name:"声乐",weight:50},{name:"时尚",weight:66},{name:"时政",weight:47},{name:"台球",weight:60},{name:"网球",weight:57},{name:"文化",weight:68},{name:"文学",weight:45},{name:"舞蹈",weight:67},{name:"音乐",weight:176},{name:"影视",weight:82},{name:"游戏",weight:160},{name:"游泳",weight:50},{name:"瑜伽",weight:90},{name:"羽毛球",weight:43},{name:"运动",weight:170},{name:"长跑",weight:93},{name:"足球",weight:62},{name:"数码",weight:173}
        ],
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {

        this.$highcharts.chart(this.$el, {
          chart: {
            height: 350,
            backgroundColor: 'rgba(0,0,0,0)',
          },
          credits: {
            enabled: false
          },
          series: [{
            type: 'wordcloud',
            data: this.data,
          }],
          title: {
            text: '兴趣爱好',
            style: {
              "color": "#fff31c",
              "font-size": "25px",
              "margin-top": "10px",
              'letter-spacing': '2px',
            }
          },

          tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25CF </span>{point.key}<br>',
            pointFormat: '提及频次：<b>{point.weight}</b>',
            style:{fontSize:'16px'},
          },

        })
      },

    },


  };
</script>

<style>

</style>
