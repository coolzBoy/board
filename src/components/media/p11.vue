<template>
  <div class="p11">
    <div class="p11-1">
      <label>新媒体粉丝数</label>
      <b>
        <countTo :startVal='startVal' :endVal='endVal' :duration='6000' :separator='separator' :prefix='prefix'></countTo>
      </b>
    </div>

    <el-row type="flex" class="p11-2" justify="center">
      <el-col class="p11-2-1">
        <label>微信粉丝</label>
        <b>
          <countTo :startVal='startVal1' :endVal='endVal1' :duration='2000' :separator='separator' :prefix='prefix1'></countTo>
        </b>
      </el-col>
      <el-col class="p11-2-1">
        <label>抖音粉丝</label>
        <b>
          <countTo :startVal='startVal2' :endVal='endVal2' :duration='2000' :separator='separator' :prefix='prefix2'></countTo>
        </b>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  export default {
    name: "p11",
    components: {
      countTo,
    },
    data() {
      return {
        separator: '',
        startVal: 0,
        endVal: 106070, //1273
        prefix: '',
        startVal1: 0,
        endVal1:  62828,
        prefix1: '0',
        startVal2: 0,
        endVal2: 43242,
        prefix2: '0',
      }
    },
    mounted() {
      //定时器

    }
  }
</script>

<style scoped>
  @font-face {
    font-family: "digifaw";
    src: url("/assets/digifaw.ttf");
  }

  .p11-1 {
    padding-top: 50px;
  }

  .p11-1 label {
    color: #fff31c;
    padding-left: 13px;
    font-size: 25px;
    letter-spacing: 2px;
    float: left;
  }

  .p11-1 b {
    width: 256px;
    height: 52px;
    margin-left: 185px;
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
