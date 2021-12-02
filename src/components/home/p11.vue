<template>
  <div class="p11">
    <div class="p11-1">
      <label>工会总数</label>
      <b>
        <countTo :startVal='startVal' :endVal='endVal' :duration='2000' :separator='separator' :prefix='prefix'></countTo>
      </b>
    </div>

    <el-row type="flex" class="p11-2" justify="center">
      <el-col class="p11-2-1">
        <label>职工人数</label>
        <b>
          <countTo :startVal='startVal1' :endVal='endVal1' :duration='2000' :separator='separator' :prefix='prefix1'></countTo>
        </b>
      </el-col>
      <el-col class="p11-2-1">
        <label>会员人数</label>
        <b>
          <countTo :startVal='startVal2' :endVal='endVal2' :duration='2000' :separator='separator' :prefix='prefix2'></countTo>
        </b>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  import axios from 'axios';
  export default {
    name: "p11",
    components: {
      countTo,
      axios,
    },
    data() {
      return {
        separator: '',
        startVal: 1000,
        endVal: 1273, //1273
        prefix: '00',
        startVal1: 0,
        endVal1: 163856,
        prefix1: '',
        startVal2: 10000,
        endVal2: 85634,
        prefix2: '0',
      }
    },
    mounted() {
      //定时器
      const timer = setInterval(() => {
        axios({
          method: 'get',
          url: '/api/admin/pub/getMsum',
        }).then( res =>{

            if (res.data != this.endVal2) {
              this.startVal2 = this.endVal2
              this.endVal2 = res.data
            }
          })
      }, 5000)



    }
  }
</script>

<style>
  @font-face {
    font-family: "digifaw";
    src: url("/assets/digifaw.ttf");
  }

  .p11-1 {
    padding-top: 50px;
  }

  .p11-1 label {
    color: #fff31c;
    padding-left: 30px;
    font-size: 25px;
    letter-spacing: 8px;
    float: left;
  }

  .p11-1 b {
    width: 256px;
    height: 52px;
    margin-left: 170px;
    margin-top: -10px;
    display: block;
    text-align: right;
    color: #00fcf6;
    font-family: "digifaw";
    font-size: 40px;
    padding-left: 5px;
    font-weight: normal;
    letter-spacing: 14px;
    background: url(/assets/countup.png) no-repeat;
    background-position: 1px 0px;
  }

  .p11-2-1 {
    text-align: center;
    margin-top: 30px;
    margin-left: 20px;
  }

  .p11-2-1 label {
    color: #fff31c;
    font-size: 19px;
    letter-spacing: 8px;
  }

  .p11-2-1 b {
    width: 180px;
    margin-top: 10px;
    display: block;
    text-align: right;
    overflow: hidden;
    color: #00fcf6;
    font-family: "digifaw";
    font-size: 28px;
    padding-left: 5px;
    font-weight: normal;
    letter-spacing: 10px;
    background: url(/assets/countup.png) no-repeat;
    background-position: 3px 0px;
    background-size: 182px;
  }
</style>
