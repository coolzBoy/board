import Vue from "vue";
import App from "./App.vue";
import router from "./router"
// import store from "./store"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/common.scss';

Vue.use(ElementUI)

import VueSuperSlide from 'vue-superslide';
Vue.use(VueSuperSlide)

import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import Highcharts3D from 'highcharts/highcharts-3d';
import HighchartsSunburst from 'highcharts/modules/sunburst';
import HighchartsCylinder from 'highcharts/modules/cylinder';
import HighchartsFunnel3d from 'highcharts/modules/funnel3d';
import HighchartsPyramid3d from 'highcharts/modules/pyramid3d';
import Wordcloud from 'highcharts/modules/wordcloud';

HighchartsMore(Highcharts)
Highcharts3D(Highcharts)
HighchartsSunburst(Highcharts)
HighchartsCylinder(Highcharts)
HighchartsFunnel3d(Highcharts)
HighchartsPyramid3d(Highcharts)
Wordcloud(Highcharts)

Vue.prototype.$highcharts = Highcharts;

import * as echarts from 'echarts';

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
