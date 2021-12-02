<template>

  <div class="main-container">

    <div class="title">阵地建设</div>

    <div class="item-content">

      <el-row>
        <el-col :span="12">
          <div class="items">
            <sunburst :list="list1"></sunburst>
            <div class="item-number">192</div>
            <div class="item-title">职工之家</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="items">
            <sunburst :list="list2"></sunburst>
            <div class="item-number">46</div>
            <div class="item-title">职工书屋</div>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <div class="items">
            <sunburst :list="list3"></sunburst>
            <div class="item-number">79</div>
            <div class="item-title">母婴关爱室</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="items">
            <sunburst :list="list4"></sunburst>
            <div class="item-number">34</div>
            <div class="item-title">暖心驿站</div>
          </div>
        </el-col>
      </el-row>

    </div>

  </div>

</template>

<script>

  import sunburst from "./sunburst";

  export default {
    components:{
      sunburst,
    },
    data(){
      return{
        list1:[
          {id:'p',parent:'',name:' ',color:'transparent'},
          {id:'p1',parent: 'p',name:' ',value:20,color:'#ff7300'},
          {id:'p2',parent: 'p',name:' ',value:80,color:'#35d0e9'},
        ],
        list2:[
          {id:'p',parent:'',name:' ',color:'transparent'},
          {id:'p1',parent: 'p',name:' ',value:30,color:'#ff7300'},
          {id:'p2',parent: 'p',name:' ',value:70,color:'#ffb000'},
        ],
        list3:[
          {id:'p',parent:'',name:' ',color:'transparent'},
          {id:'p1',parent: 'p',name:' ',value:40,color:'#ff7300'},
          {id:'p2',parent: 'p',name:' ',value:60,color:'#6ac013'},
        ],
        list4:[
          {id:'p',parent:'',name:' ',color:'transparent'},
          {id:'p1',parent: 'p',name:' ',value:40,color:'#ff7300'},
          {id:'p2',parent: 'p',name:' ',value:60,color:'#ff3900'},
        ],
      }
    },

  }

</script>

<style lang="scss" scoped>
  .main-container{
    position: relative;
    .title{
      color: #fff31c;
      font-size: 25px;
      letter-spacing: 2px;
      position: relative;
      left: 7px;
      top: 7px;
    }
    .item-content{
      margin-top:20px;
      .items{
        width:130px;
        position: relative;
        .item-number{position: absolute;top:53px;right:53px;}
        .item-title{color:#fff;font-size:18px;margin-top:-15px;}

      }
    }


  }

</style>
