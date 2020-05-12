<template>
	<div>
		<header class="flx basHeadStyle">
			<img class="basAlignment" src="../assets/back@2x.png">
				<p class="basHeadH1">Gatsby Default Starter</p>
			<img class="basAlignment" src="../assets/list-icon@2x.png">
		</header>
	</div>
</template>
<style scoped>
.basHeadStyle {
  width: 100%;
  height: 58px;
  align-items: center;
	display: flex;
  justify-content: space-between;
}
.basAlignment {
	width: 4.3%;
	/* height: 4%; */
  padding-left: 16px;
  padding-right: 16px;
	/* font-size: 16px; */
  /* margin-left: 16px; */
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  /* -webkit-text-stroke-width: 0.2px; */
  -moz-osx-font-smoothing: grayscale;
}
.basHeadH1 {
  flex: 1;
  color: rgba(0,0,0,1);
  font-weight: 600;
  font-size: 17px;
  font-family: SFProText-Semibold,SFProText;
  padding: 0;
  margin: 0;
}
header {
  background: rgba(255,255,255,1);
  width: 100%;
  height: 58px;
  text-align: center;
}
.flx{
  display: flex;
  flex-direction: row;
}
</style>
<script>
export default {
	
}
</script>