<template>
	<div class="bas-search-top">
		<div class="bas-logo">
			<img src="../../assets/search/logo@3x.png" alt="">
		</div>
		<div class="bas-search">
			<Input id="bas-input" prefix="ios-search" placeholder="请输入域名名称" style="width: 85%" size="large" />
		</div>
	</div>
</template>
<style>
.bas-search-top {
	width: 100%;
	height: 277px;
}
.bas-logo {
	width: 100%;
	height: 209px;
	position: relative;
}
.bas-logo > img {
	width: 228px;
	height: 48px;
	position: absolute;
	top: 137px;
	left: 28px;
}
.bas-search {
	width: 100%;
	height: 44px;
}
.ivu-input:hover {
  border-color: rgba(231,237,235,1) !important;
	box-shadow:0px;
	border: 0px;
}
.ivu-input {
	border-radius:22px !important;
	background:rgba(243,246,245,1);
}
/* #bas-input {
	background:rgba(243,246,245,1);
	border-radius:22px;
} */
/* #bas-input:focus{
	border: 0px;
	box-shadow: 0px;
} */
</style>