<template>
	<div class="bas-search-close">
		<div class="bas-close">
			<div class="bas-close-title"><span>こんにちは </span>已被注册</div>
			<div class="bas-t1">
				<div class="bas-t1-title">所有者：</div>
				<div class="bas-t1-content">
					<p>0x08970FEd061E7747CD9a38d680A60510CB659FB</p>
				</div>
			</div>
			<div class="bas-t2">
				<div class="bas-t2-title">到期日期：</div>
				<div class="bas-t2-content">2020-02-20 <span>已过期去官网抢注</span></div>
			</div>
			<div class="bas-t3">
				<div class="bas-t3-title">是否开放二级域名：</div>
				<div class="bas-t3-content">是</div>
			</div>
			<div class="br" />
			<div class="bas-t4">
				<div class="bas-t4-title">域名类型：</div>
				<div class="bas-t4-content">非纯英文根域名</div>
			</div>
			<div class="bas-t4">
				<div class="bas-t4-title">域名权限：</div>
				<div class="bas-t4-content">已开放注册二级域名</div>
			</div>
			<div class="bas-t4">
				<div class="bas-t4-title">到期时间：</div>
				<div class="bas-t4-content">2025-12-30 12:25:35</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.bas-t4-title {
	/* width: 22%; */
}
.bas-t4 {
	width: 100%;
	height: 20px;
	margin-bottom: 6px;
	display: flex;
	font-size:14px;
	font-family:PingFangTC-Light,PingFangTC;
	font-weight:300;
	color:rgba(154,154,170,1);
	line-height:20px;
}
.bas-t3-title,
.bas-t3-content {
	font-size:14px;
	font-family:PingFangSC-Light,PingFang SC;
	font-weight:300;
	color:rgba(4,6,46,1);
	line-height:20px;
}
.bas-t2-content > span {
	font-size:14px;
	font-family:PingFangSC-Regular,PingFang SC;
	font-weight:400;
	color:rgba(229,81,81,1);
	line-height:20px;
}
.bas-t2-title,
.bas-t2-content {
	font-size:14px;
	font-family:PingFangSC-Light,PingFang SC;
	font-weight:300;
	color:rgba(4,6,46,1);
	line-height:20px;
}
.bas-t2,
.bas-t3 {
	width: 100%;
	height: 20px;
	margin-bottom: 6px;
	text-align: left;
	display: flex;
}
.br {
	width: 100%;
	height: 1px;
	background:rgba(235,237,237,1);
	border-radius:3px;
	margin-top: 2px;
	margin-bottom: 8px;
}
.bas-t1-content > p {
	word-break: break-all;
}
.bas-t1-title {
	width: 17%;
	white-space:nowrap;
}
.bas-t1-title,
.bas-t1-content {
	font-size:14px;
	font-family:PingFangSC-Light,PingFang SC;
	font-weight:300;
	color:rgba(4,6,46,1);
	line-height:20px;
	text-align: left;
}
.bas-t1 {
	width: 100%;
	height: 40px;
	margin-bottom: 6px;
	display: flex;
}
.bas-close-title > span {
	color:rgba(0,202,155,1);
}
.bas-close-title {
	width: 100%;
	height: 22px;
	font-size:16px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color:rgba(4, 6, 46, 1);
	line-height:22px;
	margin-bottom: 7px;
	margin-top: 14px;
	text-align: left;
}
.bas-search-close {
	width: 100%;
	height: 232px;
	position: relative;
}
.bas-close {
	width: 93%;
	height: 232px;
	border-radius:6px 6px 6px 0px;
	border:1px solid rgba(235,237,237,1);
	position: absolute;
	left: 3.5%;
	padding-left: 8px;
	padding-right: 8px;
}
</style>