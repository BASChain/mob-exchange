import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HomePage from '@/views/home/HomePage'
import HelpPage from '@/views/help/HelpPage'
import MetaMaskPage from '@/views/help/details/metamask/MetaMaskPage.vue'
import BmailGuidePage from '@/views/help/details/bmailguide/BmailGuidePage.vue'
import MobileBmailGuidePage from '@/views/help/details/bmailguide/MobileBmailGuidePage.vue'

import SuperPage from '@/views/super/SuperPage'
import SearchPage from '@/views/search/SearchPage.vue'

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
      name: 'BmailGuidePage',
      component: BmailGuidePage
    },
    {
      path: '/help/mobile-bmail-guide',
      name: 'MobileBmailGuidePage',
      component: MobileBmailGuidePage
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
