<template>
  <div class="hello">
    <bas-head />
    <div class="basLayout">
      <bas-super />
      <bas-foot />
      <bas-footer-place />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Super from "@/components/super/Super"
import FooterPlace from "@/components/FooterPlace"
export default {
  components: {
    'bas-head': Header,
    'bas-foot': Footer,
    'bas-super': Super,
    'bas-footer-place': FooterPlace
  },
  name: 'SuperPage',
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
}
</style>
