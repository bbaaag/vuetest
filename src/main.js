// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false
Vue.use(iView);
Vue.prototype.$axios = axios    // 全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           // 全局注册，使用方法为:this.qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
