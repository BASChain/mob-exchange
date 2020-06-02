import Vue from 'vue'
// import Vuex from 'vuex'
import Router from 'vue-router'
const HomePage = () => import('@/views/home/HomePage')
const HelpPage = () => import('@/views/help/HelpPage')
const MetaMaskPage = () => import('@/views/help/details/metamask/MetaMaskPage.vue')
const BmailGuidePage = () =>import('@/views/help/details/bmailguide/BmailGuidePage.vue')
const MobileBmailGuidePage = () => import('@/views/help/details/bmailguide/MobileBmailGuidePage.vue')

const SuperPage = () => import('@/views/super/SuperPage')
const SearchPage = () => import('@/views/search/SearchPage.vue')

Vue.use(Router)
// Vue.use(Vuex)

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
  // methods: {
  //   goBack() {
  //     window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
  //   }
  // }
})
