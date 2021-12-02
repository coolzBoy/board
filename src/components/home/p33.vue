<template>

  <div class="main-container">

    <div class="title">业务办理统计</div>
    <div class="item-content">

      <superslide :options="options" class="slideBox">
        <!-- slides -->
        <div class="bd">
          <div class="main-content">
            <el-row v-for="(item,key) in list" :key="key">
              <el-col :class="item.class" :span="20" :offset="2">
                  <el-col :span="10" :offset="2"><span>{{item.title}}</span></el-col>
                  <el-col :span="10" :offset="2"><span>{{item.value}}</span></el-col>
              </el-col>
            </el-row>
          </div>
        </div>
      </superslide>

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
          {title:'建会业务',value:12},
          {title:'工会换届',value:134},
          {title:'增补改选',value:12},
          {title:'工会更名',value:5},
          {title:'经费补缴',value:23},
          {title:'经费回拨',value:32},
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
    height: 240px;
    overflow: hidden;
    position: relative;
    top:20px;
  }
  .main-content{height:240px;font-size:18px;}

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
    .item1{height:55px;line-height: 55px;}
    .item2{height:55px;line-height: 55px;background-color: rgba(255,255,255,0.2);}

  }


</style>
