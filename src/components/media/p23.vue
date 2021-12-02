<template>

  <div class="main-container">

    <div class="title">微信视频号/今日头条</div>
    <div class="item-content">

      建设中...

    </div>

  </div>

</template>

<script>

  export default {
    data(){
      return{

      }
    },
    created() {
      this.init();
    },
    methods:{
      init(){

      }
    }

  }
</script>

<style lang="scss" scoped>
  .main-container {
    position: relative;
    .title {
      color: #fff31c;
      font-size: 25px;
      /*letter-spacing: 2px;*/
      position: relative;
      left: 3px;
      top: 7px;
    }

    .item-content {
      margin-top: 140px;
      color:#fff31c;
      font-size:28px;
    }
  }


</style>
