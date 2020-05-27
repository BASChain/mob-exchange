import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HomePage from '@/components/home/HomePage'
import HelpPage from '@/components/help/HelpPage'
import MetaMaskPage from '@/components/details/metamask/MetaMaskPage.vue'
import SuperPage from '@/components/super/SuperPage'
import SearchPage from '@/components/search/SearchPage.vue'
import BmailGuide from '@/components/help/BmailGuide.vue'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/help',
      name: 'HelpPage',
      component: HelpPage,
    },
    {
      path: '/help/meta-mask',
      name: 'MetaMaskPage',
      component: MetaMaskPage
    },
    {
      path: '/help/bmail-guide',
      name: 'BmailGuide',
      component: BmailGuide
    },
    {
      path: '/super',
      name: 'SuperPage',
      component: SuperPage
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage
    }
  ],
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
})
