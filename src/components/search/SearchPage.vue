<template>
  <div class="hello">
    <bas-head />
    <div class="basLayout">
      <bas-search />
      <bas-open />
      <!-- <bas-close /> -->
      <bas-foot />
    </div>
  </div>
</template>

<script>
import Header from "../Header"
import Footer from "../Footer"
import Search from "./Search"
import SearchClose from "./SearchClose"
import SearchOpen from "./SearchOpen"
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
