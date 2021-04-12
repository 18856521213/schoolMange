import Vue from 'vue';

//重置css
import '@/assets/css/reset.css';
import '@/assets/css/global.css';

import '@/assets/css/style/theme/index.css';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//引入echarts
import  * as echarts from "echarts";
import { message } from '@/publicUtils/resetMessage'
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);

Vue.prototype.$echarts = echarts;
Vue.prototype.$message = message;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
