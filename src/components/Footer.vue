<template>
  <footer class="basFooter">
		<div class="flx footerContainer">
			<img src="../assets/logo@2x.png" alt="" class="basFooterImg">
			<div class="footerBtn"
      :data-clipboard-text="`http://baschain.org`"
      @click="copyButton">复制链接</div>
		</div>
	</footer>
</template>
<style scoped>
.footerContainer{
  align-items: center;
  justify-content: space-between;
  height: 100%;
	display: flex;
}
.basFooter {
  width: 100%;
  height: 64px;
  position: fixed;
  left: 0;
  bottom: 0;
  background:rgba(255,255,255,1);
  margin-top: 2px;
}
.basFooterImg {
  width: 244px;
  height: 36px;
  margin-left: 16px;
  padding: 0;
  margin-bottom: 0;
}
.footerBtn{
  width: 86px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: #fff;
  background-color: #00CA9B;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  border: 0;
  margin-right: 13px;
  margin-left: 16px;
}
.flx{
  display: flex;
  flex-direction: row;
}
</style>
<script>
import Clipboard from 'clipboard'
export default {
	methods: {
		copyButton() {
      let _this = this;
      var clipboard = new Clipboard('.footerBtn');
      clipboard.on('success', function () {
        _this.$toast('复制成功✅')
        console.log('复制成功✅')
      });
      clipboard.on('error', function () {
        _this.$toast('复制失败❌')
        console.log('复制失败❌')
      });
			// var aux = document.createElement("input"); 
			// aux.setAttribute("value", 'http://baschain.org'); 
			// document.body.appendChild(aux); 
			// aux.select();
			// document.execCommand("copy"); 
			// document.body.removeChild(aux);
      // console.log('复制成功✅');
		}
	}
}
</script>