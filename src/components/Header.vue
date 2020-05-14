<template>
	<div>
		<header>
      <div class="flx basHeadStyle">
        <img class="bas-alignment" :src="imgs.urlBack" alt="" @click="backTo">
          <p class="basHeadH1">Gatsby Default Starter</p>
        <div id="bas-menu">
          <img class="bas-alignment"  
          :src="this.play ? imgs.urlX: imgs.urlList" alt="" data-toggle="dropdown" @click="clickMenu">
          <ul class="dropdown-menu" v-show="play" @click="clickMenu">
            <li class="dropdown-item" @click="toHome">Home</li>
            <li class="dropdown-item" @click="toSuper">Super Node/Domain Agent</li>
            <li class="dropdown-item" @click="toHelp">Search</li>
          </ul>
        </div>
      </div>
      <div class="bas-mask" v-show="play" @click="clickMenu"></div>
    </header>
	</div>
</template>
<style scoped>
.bas-mask {
  width: 100%;
  height: 1000px;
  background:rgba(0,0,0,0.3);
  mask-mode: alpha;
  top: 190px;
  z-index: 999;
  position: absolute;
}
.dropdown-menu {
  width: 100%;
  height: 132px;
  /* display: none; */
  background: #F5F6F6;
  /* background: rgba(249,249,249,0.94); */
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 0px;
  top: 14px !important;
  left: 5px;
  position: absolute;
}
.dropdown-item {
  width: 100%;
  height: 44px;
  padding: 0;
  text-align: right;
  margin: 0;
  padding-right: 4%;
  background: rgba(255,255,255,1);
  border-radius: 0px;
  font-size:16px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(4,4,4,1);
  letter-spacing:1px;
  line-height: 44px;
  margin-top: 1px;
}
.basHeadStyle {
  width: 100%;
  height: 58px;
  align-items: center;
  justify-content: space-between;
  overflow: visible;
}
.bas-alignment {
  /* width: 16px;
  height: 16px; */
  padding-left: 16px;
  padding-right: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  transform:scale(0.45);
  /* -ms-transform:scale(0.45);
  -webkit-transform:scale(0.45);
  -o-transform:scale(0.45);
  -moz-transform:scale(0.45); */
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
  background: rgba(249,249,249,0.94);
  width: 100%;
  height: 58px;
  text-align: center;
  position: relative;
}
.flx{
  display: flex;
  flex-direction: row;
}
</style>
<script>
export default {
	data() {
    return {
      play: false,
      imgs: {
        urlList: require('../assets/listicon@2x.png'),
        urlX: require('../assets/x@2x.png'),
        urlBack: require('../assets/back@2x.png')
      }
    }
  },
  methods: {
    clickMenu() {
      this.play = ! this.play
      // console.log(this.play)
    },
    backTo() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    toHome() {
			this.$router.push('/')
    },
    toHelp() {
			this.$router.push('/help')
    },
    toSuper() {
      this.$router.push('/super')
    }
  },
  mounted() {
    $('#bas-menu').on('show.bs.dropdown', function () {
      console.log('show')
      this.play = true
    })
    $('#bas-menu').on('hide.bs.dropdown', function () {
      console.log('hide')
      this.play = false
    })
  }
}
</script>