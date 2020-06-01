<template>
  <div class="hello">
    <bas-head />
    <div class="basLayout">
      <bas-metamask />
      <bas-foot />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MetaMask from "@/components/help/details/metamask/MetaMask"
export default {
  components: {
    'bas-head': Header,
    'bas-foot': Footer,
    'bas-metamask': MetaMask,
  },
  name: 'MetaMaskPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  /* padding: 0 1.0875rem 1.45rem; */
}
</style>
