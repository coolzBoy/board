<template>
  <div>
    <img class="bgs" src="/assets/bj.png" />

    <span class="pts cqs">144</span>
    <span class="pts hd">864</span>
    <span class="pts cy">13</span>
    <span class="pts sjs">8</span>
    <span class="pts mtg">4</span>
    <span class="pts ft">18</span>
    <span class="pts fs">8</span>
    <span class="pts dx">13</span>
    <span class="pts tz">12</span>
    <span class="pts sy">7</span>
    <span class="pts pg">5</span>
    <span class="pts cp">174</span>
    <span class="pts hr">1</span>
    <span class="pts yq">1</span>
    <span class="pts my">1</span>
  </div>
</template>

<script>
  export default {
    name: "p21",
  }
</script>

<style scoped>
  .bgs {
    margin-top: 50px;
  }

  @keyframes move {
    from {
      top: -300px;
    }
  }

  .cqs {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 260px;
    margin-left: -335px;
  }

  .hd {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 230px;
    margin-left: -380px;
  }

  .cy {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 245px;
    margin-left: -285px;
  }

  .sjs {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 268px;
    margin-left: -400px;
  }

  .mtg {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 233px;
    margin-left: -513px;
  }

  .ft {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 288px;
    margin-left: -370px;
  }

  .fs {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 323px;
    margin-left: -513px;
  }

  .dx {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 347px;
    margin-left: -340px;
  }

  .tz {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 300px;
    margin-left: -218px;
  }

  .sy {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 198px;
    margin-left: -223px;
  }
  .pg {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 180px;
    margin-left: -100px;
  }
  .cp {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 170px;
    margin-left: -372px;
  }
  .hr {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 40px;
    margin-left: -265px;
  }
  .yq {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 110px;
    margin-left: -413px;
  }
  .my {
    animation: move 1s infinite;
    -webkit-animation: move 1s infinite;
    animation-iteration-count: 1;
    top: 105px;
    margin-left: -165px;
  }

  .pts {
    width: 30px;
    padding: 4px 0;
    position: absolute;
    background-color: #ffe699;
    text-align: center;
    border: 5px solid #ffe699;
    font-weight: bold;
    border-radius: 40px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
  }

  .pts:after {
    content: '';
    height: 0px;
    width: 0px;
    display: block;
    position: absolute;
    bottom: 2px;
    left: 3px;
    border: 10px transparent solid;
    border-top-color: #ffe699;
    border-width: 15px 10px 0px 10px;
    top: 31px;
    margin-left: 2px;
  }

  .pts:hover {
    background-color: #ffc000;
    border: 5px solid #ffc000;
  }

  .pts:hover:after {
    border-top-color: #ffc000;
  }
</style>
