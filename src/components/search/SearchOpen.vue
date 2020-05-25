<template>
	<div class="bas-search-open">
		<div class="bas-open">
			<div class="bas-open-title"><span>{{ input }}</span> 未被注册</div>
			<div class="bas-open-tip">去pc端官网注册</div>
		</div>
	</div>
</template>
<style scoped>
.bas-open-tip {
	width: 40%;
	margin-top: 11px;
	text-align: right;
	color:rgba(154,154,170,1);
}
.bas-open-title > span {
	color:rgba(0,202,155,1);
}
.bas-open-title {
	width: 60%;
	height: 22px;
	font-size:16px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color: rgba(4, 6, 46, 1);
	line-height:22px;
	text-align: left;
	margin-top: 11px;
}
.bas-search-open {
	width: 100%;
	height: 44px;
	position: relative;
}
.bas-open {
	width: 93%;
	height: 44px;
	border-radius:6px 6px 6px 0px;
	border:1px solid rgba(235,237,237,1);
	position: absolute;
	left: 3.5%;
	padding-left: 8px;
	padding-right: 8px;
	display: flex;
}
</style>

<script>
export default {
	props: ['inputInfo'],
	computed: {
		input: {
			get: function() {
				return this.inputInfo
			}
		}
	}
}
</script>