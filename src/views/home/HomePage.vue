<template>
  <div class="hello">
    <bas-head />
    <div class="basLayout">
      <bas-home />
      <bas-foot />
      <bas-footer-place />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Home from "@/components/home/Home"
import FooterPlace from "@/components/FooterPlace"
export default {
  components: {
    'bas-head': Header,
    'bas-foot': Footer,
    'bas-home': Home,
    'bas-footer-place': FooterPlace
  },
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  
}
</script>
<style scoped>
.basLayout {
  margin: 0 auto;
  max-width: 960;
  width: 100%;
}
</style>
