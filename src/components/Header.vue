<template>
	<div>
		<header>
      <div class="flx basHeadStyle">
        <img class="bas-alignment" :src="imgs.urlBack" alt="" @click="backTo">
        <p class="basHeadH1">Baschain Addressing System</p>
        <div id="bas-menu">
          <img class="bas-alignment"
            :src="this.play ? imgs.urlX: imgs.urlList" alt="" @click="clickMenu">
        </div>
      </div>
      <Dropdown trigger="custom" :visible="play" style="width:100%;left:0px" class="bas-dropdown-menu">
        <a href="javascript:void(0)" @click="clickMenu"></a>
        <Dropdown-menu slot="list" style="">
          <div class="dropdown-item" @click="toHome">Home</div>
          <div class="dropdown-item" @click="toSearch">Search</div>
          <div class="dropdown-item" @click="toSuper">Super Node/Domain Agent</div>
          <div class="dropdown-item" @click="toHelp">Help</div>
        </Dropdown-menu>
      </Dropdown>
      <div class="bas-mask" v-show="play" @click="clickMenu"></div>
    </header>
	</div>
</template>
<style>
.ivu-select-dropdown {
  width: 100%;
  border-radius: 0px !important;
  box-shadow: none !important;
  margin: 0 !important;
  padding: 0 !important;
  left: 0px;
  top: 58px;
  background: rgba(255,255,255,1);
  /* z-index: 1; */
}

#bas-menu {
  width: 18%;
}
.bas-mask {
  width: 100%;
  height: 1000px;
  background:rgba(0,0,0,0.3);
  mask-mode: alpha;
  top: 183px;
  z-index: 999;
  position: relative;
}

.bas-dropdown-menu {
  width: 100%;
  /* height: 132px; */
  /* display: none; */
  background: #F5F6F6;
  /* background: rgba(249,249,249,0.94); */
  /* padding: 0;
  margin: 0;
  border: 0; */
  /* box-shadow: 0px !important; */
  top: 53px;
  left: 5px !important;
  position: absolute;
}
.dropdown-item {
  width: 100%;
  height: 46px;
  padding: 0;
  text-align: right;
  margin: 0;
  padding-right: 4%;
  background: rgba(255,255,255,1);
  /* background: #F5F6F6; */
  border-radius: 0px;
  font-size:16px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(4,4,4,1);
  letter-spacing:1px;
  line-height: 44px;
  margin-top: 1px;
  border-top: 1px solid #F5F6F6;
}
.basHeadStyle {
  width: 100%;
  height: 58px;
  align-items: center;
  justify-content: space-between;
  overflow: visible;
  z-index: 3px;
}
.bas-alignment {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 3px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  transform:scale(0.45);
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
import $ from 'jquery'
export default {
	data() {
    return {
      play: false,
      imgs: {
        urlList: require('@/assets/listicon@2x.png'),
        urlX: require('@/assets/x@2x.png'),
        urlBack: require('@/assets/back@2x.png')
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
    },
    toSearch() {
      this.$router.push('/search')
      this.$store.commit('showLoading')
      //这里需要将 axios 提前挂载到 Vue的属性上。
      // await this.$axios.get('xxx/xxxx/xxx')
      this.$store.commit('hideLoading')
    }
  },
  mounted() {
    $('#bas-menu').on('show.bs.dropdown', function () {
      // console.log('show')
      this.play = true
    })
    $('#bas-menu').on('hide.bs.dropdown', function () {
      // console.log('hide')
      this.play = false
    })
  }
}
</script>
