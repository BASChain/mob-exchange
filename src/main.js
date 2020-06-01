// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
global.$ = $
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import clipboard from 'clipboard';
import toast from './components/alert/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Web3 from 'web3'
import { mobInfuraWeb3 } from './web3-lib/infura/index'

// global.web3 = new Web3('https://ropsten.infura.io/v3/1362a998079949baaea80eb017fe1f0f');
global.web3 = mobInfuraWeb3(3)
// Vue.use($);
Vue.use(toast);
Vue.use(ViewUI);
Vue.config.productionTip = false
Vue.prototype.clipboard = clipboard;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
