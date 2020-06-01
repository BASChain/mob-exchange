<template>
  <div class="hello">
    <bas-head />
    <div class="basLayout">
      <bas-bmailguide />
      <bas-foot />
      <bas-footer-place />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BmailGuide from "@/components/help/details/bmailguide/BmailGuide"
import FooterPlace from "@/components/FooterPlace"
export default {
  components: {
    'bas-head': Header,
    'bas-foot': Footer,
    'bas-bmailguide': BmailGuide,
    'bas-footer-place': FooterPlace
  },
  name: 'BmailGuidePage',
  data () {
    return {
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
