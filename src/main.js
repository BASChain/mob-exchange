// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
global.$ = $

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import toast from './components/alert';
import axios from 'axios'
Vue.prototype.$axios=axios
Vue.use(toast)
Vue.use(ViewUI);
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
// import clipboard from 'clipboard'
// Vue.prototype.clipboard = clipboard;
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
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
