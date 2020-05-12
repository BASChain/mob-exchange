<template>
  <div class="hello">
    <bas-head />
    <div class="basLayout">
      <bas-home />
      <bas-foot />
    </div>
  </div>
</template>

<script>
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
export default {
  components: {
    'bas-head': Header,
    'bas-foot': Footer,
    'bas-home': Home,
  },
  name: 'HelloWorld',
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
