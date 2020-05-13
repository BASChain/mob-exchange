// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import clipboard from 'clipboard';
import toast from './components/alert/index'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(toast)
// Vue.use(VueRouter);
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
