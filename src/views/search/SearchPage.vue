<template>
  <div class="hello">
    <bas-head />
    <div class="basLayout">
      <bas-search v-on:queryData="showData"></bas-search>
			<!-- <div>{{ res }}</div> -->
      <bas-open v-if="domainState===0" :inputInfo="this.inputInfo"></bas-open>
      <bas-close v-if="domainState===1" :result="res"></bas-close>
      <bas-foot />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Search from "@/components/search/Search"
import SearchClose from "@/components/search/SearchClose"
import SearchOpen from "@/components/search/SearchOpen"
import { queryDomain } from '@/components/search/SearchFunc'
export default {
  components: {
    'bas-head': Header,
    'bas-foot': Footer,
    'bas-search': Search,
    'bas-close': SearchClose,
    'bas-open': SearchOpen
  },
  name: 'SearchPage',
  data () {
    return {
			msg: 'Welcome to Your Vue.js App',
			inputInfo: '',
			resData: {

			},
			domainState: '',
			res: {

			},
			asset: {}
    }
  },
  methods: {
		showData(result) {
			console.log('SHOW:', result.data)
			this.res = result
			this.resData = result.data
			this.domainState = result.data.state
			this.inputInfo = result.input
			this.asset = result.data.assetinfo || {}
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basLayout {
  margin: 0 auto;
  max-width: 960;
  width: 100%;
}
</style>
