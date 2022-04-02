import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './util/pxtorem'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import server from './axios/services';
Vue.prototype.$axios = server;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
