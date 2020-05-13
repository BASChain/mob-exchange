<template>
  <main class="bas-help-container">
		<div v-for="item in itemDetails" :key="item.id" class="bas-help-item">
			<div class="bas-list" @click="clickLink(item.id)">
				<p>{{ item.text }}</p>
				<Icon type="ios-arrow-forward" class="bas-btn-icon" />
			</div>
			<Divider class="bas-line" />
		</div>
  	<router-view />
	</main>
</template>
<style scoped>
.bas-btn-icon {
	right: 1.6%;
	position: absolute;
	margin: 15px;
	/* background:rgba(13,15,54,1); */
	opacity:0.3;
}
.bas-list > p {
	margin-left: 3.7%;
	font-size:15px;
	font-family:PingFangSC-Regular,PingFang SC;
	font-weight:400;
	color:rgba(4,6,46,1);
}
.bas-list {
	width: 100%;
	height: 44px;
	display: flex;
	line-height: 44px;
	position: relative;
}
.bas-line {
	margin: 0;
	width: 100%;
  opacity: 60%;
}
</style>
<script>
export default {
	data () {
		return {
			itemDetails: [
				{
					id: 0,
					text: '域名注册规则'
				},
				{
					id: 1,
					text: '如何安装MetaMask并创建账号?'
				},
				{
					id: 2,
					text: '为什么需要Metamask插件?'
				},
				{
					id: 3,
					text: '如何免费申请测试网域名以及使用BAS系统？'
				}
			]
		}
	},
	methods: {
		clickLink(itemid) {
			if (itemid===2) {
				this.$router.push('/help/meta-mask')
			}
		}
	}
}
</script>