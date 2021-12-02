<template>

  <div class="main-container">

    <div class="title">在线会员</div>
    <div class="item-content" >

      <div class="load-content" v-loading="loading"
           element-loading-spinner="el-icon-loading"
           element-loading-background="rgba(0, 0, 0, 0)">

        <superslide :options="options" class="slideBox" v-if="!loading">
          <!-- slides -->
          <div class="bd">
            <div class="main-content">
              <el-row v-for="(item,key) in list" :key="key">
                <el-col :class="item.class" :span="22" :offset="1">
                  <el-col :span="6" :offset="2">
                    <div :class="item.img"></div>
                    <div class="img-name">{{item.name}}</div>
                  </el-col>
                  <el-col :span="6" :offset="2"><span>{{item.mobile}}</span></el-col>
                  <el-col :span="6" :offset="2"><span>{{item.type}}</span></el-col>
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

  import axios from 'axios';

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
        loading:true,
        list:[],
      }
    },
    created() {
      this.init();
    },
    methods:{
      init(){
        this.getData();
      },
      getData(){
        axios({
          method: 'get',
          url: '/api/admin/pub/loginlog',
        }).then( res =>{

          this.list = res.data;
          this.list.forEach( (item,key)=> {
            if (key % 2 == 0) {
              item.class = 'item1';
            } else {
              item.class = 'item2';
            }
            if(item.sex == 1){item.img = 'img1'}
            if(item.sex == 2){item.img = 'img2'}

          });

          if(this.list.length >8){
            this.loading = false;
          }

        }).catch( error =>{
          this.$message.error(error);
          // console.log(error);
        })

      },

    }

  }
</script>

<style lang="scss" scoped>
  .load-content{
    width: 450px;
    height: 430px;
  }
  .el-icon-loading{
    color:#fff !important;
  }
  .slideBox {
    width: 450px;
    height: 430px;
    overflow: hidden;
    position: relative;
    top:10px;
  }
  .main-container {
    position: relative;
    .title {
      color: #fff31c;
      font-size: 25px;
      letter-spacing: 2px;
      position: relative;
      left: 3px;
      top: 2px;
    }
    .item-content {
      margin-top: 30px;
    }
    .item1{height:50px;line-height: 50px;}
    .item2{height:50px;line-height: 50px;background-color: rgba(255,255,255,0.2);}
  }

  .img1{
    background: url(/assets/user1.png) center top no-repeat;
    width:30px;
    height:30px;
    float:left;
    margin-top:10px;
    margin-right: 10px;
  }
  .img2{
    background: url(/assets/user2.png) center top no-repeat;
    width:30px;
    height:30px;
    float:left;
    margin-top:10px;
    margin-right: 10px;
  }
  .img-name{float:left}


</style>
