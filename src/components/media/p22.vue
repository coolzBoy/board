<template>

  <div class="main-container">

    <div class="title">工会热点话题</div>

    <div class="item-content">

      <el-row>
        <el-col class="item-title" :span="22" :offset="1">
          <el-col :span="16">话题内容</el-col>
          <el-col :span="6" :offset="1">话题来源</el-col>
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
                  <el-col :span="6" :offset="1"><span>{{item.source}}</span></el-col>
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
          {title:'密薪制背后的腐败 ，严查！',source:'全国总工会'},
          {title:'春分时节户外放风筝，需要带口罩吗？',source:'海淀区总工会'},
          {title:'学党史 悟思想 办实事 开新局',source:'暖微工会'},
          {title:'养老金还会涨吗？回应来了！',source:'全国总工会'},
          {title:'中国共产党的诞生，要从五四运动讲起',source:'暖微工会'},
          {title:'植树节，一起为美丽中国添新绿！',source:'海淀区总工会'},

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
    width: 474px;
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
