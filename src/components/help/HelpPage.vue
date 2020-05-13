<template>
  <div class="help">
    <bas-head />
    <div class="basLayout">
      <bas-help />
      <bas-foot />
    </div>
  </div>
</template>

<script>
import Header from "../Header"
import Footer from "../Footer"
import Help from "./Help"
// import Home from "./Home"
export default {
  components: {
    'bas-head': Header,
    'bas-foot': Footer,
    'bas-help': Help
    // 'bas-home': Home,
  },
  name: 'HelpPage',
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
