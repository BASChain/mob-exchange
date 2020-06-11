// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
// import $ from 'jquery'
// global.$ = $
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
import toast from '@/components/alert';
import axios from 'axios'
Vue.prototype.$axios=axios
Vue.use(toast)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
// import clipboard from 'clipboard'
// Vue.prototype.clipboard = clipboard;
// global.web3 = new Web3('https://ropsten.infura.io/v3/1362a998079949baaea80eb017fe1f0f');
// import web3 from 'web3'
// import { mobInfuraWeb3 } from '@/web3-lib/infura/index'
// global.web3 = mobInfuraWeb3(3)
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
