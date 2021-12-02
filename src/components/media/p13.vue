<template>

  <div class="main-container">

    <div class="title">微信热门文章</div>

    <div class="item-content">

      <el-row>
        <el-col class="item-title" :span="22" :offset="1">
          <el-col :span="16">标题</el-col>
          <el-col :span="6" :offset="1">阅读量</el-col>
        </el-col>
      </el-row>

      <div class="content-list">

        <superslide :options="options" class="slideBox">
          <!-- slides -->
          <div class="bd">
            <div class="main-content">
              <el-row v-for="(item,key) in list" :key="key">
                <el-col :class="item.class" :span="22" :offset="1">
                  <el-col :span="16" ><div class="list-title">{{item.title}}</div></el-col>
                  <el-col :span="6" :offset="1"><span>{{item.value}}</span></el-col>
                </el-col>
              </el-row>
            </div>
          </div>

        </superslide>
      </div>

    </div>

  </div>

</template>

<script>

  export default {
    data(){
      return{
        options: {
          mainCell: ".bd",
          autoPlay: true,
          effect: "topMarquee",
          vis: 1,
          interTime: 50,
          trigger: "click"
        },
        list:[
          {title:'武汉挺住！中关村科学城企业职工捐赠暖心口罩，抗击新型肺炎，支援祖国刻不容缓',value:22746},
          {title:'中关村科学城非公科技企业赴内蒙古科尔沁右翼前旗开展扶贫对接',value:6744},
          {title:'这些国内外口罩是假货！请自查，内附鉴别指南',value:5179},
          {title:'习近平主持中央政治局常委会会议，研究疫情防控工作',value:5075},
          {title:'重磅！北京发放122亿消费券',value:4923},
          {title:'热议：职工年假未休，索要经济补偿，人社部带你来维权',value:4859},
          {title:'关注：北京突然发布，再见学区房',value:4827},
          {title:'关注：首都的积分落户政策要改了',value:4735},
          // {title:'中关村科学城总工会：1.3万只医用口罩发出 将空运至武汉',value:4254},
        ]

      }
    },
    created() {
      this.init();
    },
    methods:{
      init(){
        this.list.forEach( (item,key)=>{
          if(key %2 == 0){
            item.class = 'item1';
          }else{
            item.class = 'item2';
          }
        })
      }
    }

  }
</script>

<style lang="scss" scoped>

  .slideBox {
    width: 450px;
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  .main-content{height:200px;}

  .main-container {
    position: relative;
    .title {
      color: #fff31c;
      font-size: 25px;
      letter-spacing: 2px;
      position: relative;
      left: 3px;
      top: 7px;
    }
    .item-content {
      margin-top: 30px;
    }
    /*.content-list{height:200px;overflow-y: scroll;}*/

    .item-title{font-size:18px;height:50px;line-height: 50px;margin-bottom:15px;background-color: rgba(255,255,255,0.2);}

    .item1{height:40px;line-height: 40px;background-color: rgba(255,255,255,0.2);}
    .item2{height:40px;line-height: 40px;}
    .list-title{
      padding-left:10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

  }


</style>
