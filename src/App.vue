<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    data(){
      return{

      }
    }
  };
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    min-width: 1920px;
    height: 100%;
    background-image: url(/assets/bg.png);
    background-color: #030d31;
    background-position: center top;
    background-repeat: no-repeat;
    animation: animatedBackground 15s linear infinite;
    -moz-animation: animatedBackground 15s linear infinite;
    -o-animation: animatedBackground 15s linear infinite;
  }

  #app {}

  @-webkit-keyframes animatedBackground {
    0% {
      background-size:  2200px auto;
    }

    12% {
      background-size:  2250px auto;
    }

    25% {
      background-size:  2300px auto;
    }

    38% {
      background-size:  2350px auto;
    }

    50% {
      background-size:  2400px auto;
    }

    62% {
      background-size:  2350px auto;
    }

    75% {
      background-size:  2300px auto;
    }

    88% {
      background-size:  2250px auto;
    }

    100% {
      background-size:  2200px auto;
    }
  }

  @-moz-keyframes animatedBackground {
    0% {
      background-size:  2200px auto;
    }

    12% {
      background-size:  2250px auto;
    }

    25% {
      background-size:  2300px auto;
    }

    38% {
      background-size:  2350px auto;
    }

    50% {
      background-size:  2400px auto;
    }

    62% {
      background-size:  2350px auto;
    }

    75% {
      background-size:  2300px auto;
    }

    88% {
      background-size:  2250px auto;
    }

    100% {
      background-size:  2200px auto;
    }
  }

  @-o-keyframes animatedBackground {
    0% {
      background-size:  2200px auto;
    }

    12% {
      background-size:  2250px auto;
    }

    25% {
      background-size:  2300px auto;
    }

    38% {
      background-size:  2350px auto;
    }

    50% {
      background-size:  2400px auto;
    }

    62% {
      background-size:  2350px auto;
    }

    75% {
      background-size:  2300px auto;
    }

    88% {
      background-size:  2250px auto;
    }

    100% {
      background-size:  2200px auto;
    }
  }

  @keyframes animatedBackground {
    0% {
      background-size:  2200px auto;
    }

    12% {
      background-size:  2250px auto;
    }

    25% {
      background-size:  2300px auto;
    }

    38% {
      background-size:  2350px auto;
    }

    50% {
      background-size:  2400px auto;
    }

    62% {
      background-size:  2350px auto;
    }

    75% {
      background-size:  2300px auto;
    }

    88% {
      background-size:  2250px auto;
    }

    100% {
      background-size:  2200px auto;
    }
  }
</style>
