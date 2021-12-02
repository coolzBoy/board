<template>

  <div class="main-container">

    <div class="title">抖音热门视频</div>

    <div class="item-content">

      <el-row>
        <el-col class="item-title" :span="22" :offset="1">
          <el-col :span="16">标题</el-col>
          <el-col :span="6" :offset="1">点赞量</el-col>
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
          {title:'美媒报道武汉0号新冠是美军官...',value:'51.2w'},
          {title:'全民抗洪共度难关',value:'2.0w'},
          {title:'中关村科学城企业职工“助力武汉捐赠口罩”这个是最高的',value:'1.8w'},
          {title:'顺丰小哥徒手爬3楼救被卡在防盗窗的幼童',value:'1.1w'},
          // {title:'剑桥大学溯源新冠病毒',value:'5873'},
          {title:'新冠病毒有效药申请获受理',value:'4432'},
          {title:'护士小姐姐持续工作10小时，脖子长满水泡',value:'3751'},
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
