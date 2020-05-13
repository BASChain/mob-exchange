import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home/HomePage'
import HelpPage from '@/components/help/HelpPage'
import MetaMaskPage from '@/components/details/metamask/MetaMaskPage.vue'
import SuperPage from '@/components/super/SuperPage'

Vue.use(Router)

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
      path: '/super',
      name: 'SuperPage',
      component: SuperPage
    }
  ],
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
})
