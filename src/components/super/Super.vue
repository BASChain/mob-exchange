<template>
  <main class="basMain">
		<div class="basHomeContainer">
			<div class="bas-super">
				<div class="bas-super-title">
					超级节点的权利和义务
				</div>
				<img src="../../assets/super/supnodes_img@2x.png" alt="" class="bas-super-img">
				<div class="bas-super-price">100,000 <span>BAS/年</span></div>
				<div class="bas-super-subt">
					获得三个自定义顶级根域名
				</div>
				<div class="bas-super-content">
					从域名注册、域名充值、开放自定义价格等操作中获取BAS Token分成签发二级身份验证证书作为超级节点参与社区投票
				</div>
				<div class="bas-super-subt">缴纳超级节点授权费用</div>
				<div class="bas-super-content">
					维护两个以太坊账号，一个用于收取BAS Token分成（冷钱包），另一个用来签发身份验证证书部署BAS系统的DNS矿机，用来对外提供BAS域名解析服务
				</div>
			</div>
			<div class="bas-domain">
				<div class="bas-domain-title">域名服务</div>
				<img src="../../assets/super/d_serv_img@2x.png" alt="" class="bas-domain-img">
				<div class="bas-domain-subt">
					<div class="bas-inline">
						<div class="bas-domain-subt--left">顶级根域名</div>
						<div class="bas-domain-subt--right">2000 <span>BAS/年</span></div>
					</div>
					<div class="bas-domain-content">
						在未开放二级域名注册的情况下，（自己）能注册此根域名下的二级/多级域名开放二级/多级域名注册，并且可以修改注册价格（改价格需额外支付100BAS）此根域名下注册的二级/多级域名，注册支付的费用会分成给此根域名所有者
					</div>
				</div>
				<div class="bas-domain-subt1">
					<div class="bas-inline">
						<div class="bas-domain-subt--left">普通根域名</div>
						<div class="bas-domain-subt--right">200 <span>BAS/年</span></div>
					</div>
					<div class="bas-domain-content">
						不能开放注册，（自己）能注册此根域名下的二级/多级域名
					</div>
				</div>
			</div>
			<div class="bas-agent">
				<div class="bas-agent-title">成为代理商</div>
				<img src="../../assets/super/agent-img@2x.png" alt="" class="bas-agent-img">
				<div class="bas-agent-subt">普通域名代理</div>
				<div class="bas-agent-content">
					精通BAS域名注册系统操作，可以代用户注册域名，并在注册后把域名转让给用户持有一定数量的BAS Token，随时能为用户提供代注册服务
				</div>
				<div class="bas-agent-subt">使用SDK的域名代理</div>
				<div class="bas-agent-content">
					使用SDK开发中心化域名注册网站，为用户提供域名注册服务和域名交易在BAS官方网站作为合作伙伴，公示账号地址使用SDK每年需缴纳xxBAS的软件服务费
				</div>
			</div>
			<div class="basFooterPlace"></div>
		</div>
	</main>
</template>
<style scoped>
.bas-agent-content {
	height:60px;
	font-size:14px;
	font-family:PingFangSC-Light,PingFang SC;
	font-weight:300;
	color:rgba(4,6,46,1);
	line-height:20px;
	text-align: left;
}
.bas-agent-subt {
	height:21px;
	font-size:15px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color:rgba(0,202,155,1);
	line-height:21px;
	text-align: left;
	margin-top: 12px;
	margin-bottom: 3px;
}
.bas-agent-img {
	width: 100%;
	border-radius:2px;
}
.bas-agent-title {
	width: 100%;
	height:29px;
	font-size:21px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color:rgba(4,6,46,1);
	line-height:29px;
	letter-spacing:1px;
	text-align: left;
	/* margin-bottom: 8px; */
}
.bas-domain-subt1 {
	width: 100%;
}
.bas-inline {
	display: flex;
	justify-content: space-between;
}
.bas-domain-content {
	width: 100%;
	height:100px;
	font-size:14px;
	font-family:PingFangSC-Light,PingFang SC;
	font-weight:300;
	color:rgba(4,6,46,1);
	line-height:20px;
	text-align: left;
	display: block;
}
.bas-domain-subt--right > span {
	font-size: 12px;
}
.bas-domain-subt--right {
	height:30px;
	font-size:22px;
	font-family:PingFangSC-Semibold,PingFang SC;
	font-weight:600;
	color:rgba(0,202,155,1);
	line-height:30px;
	right: 0;
}
.bas-domain-subt--left {
	height:30px;
	font-size:15px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color:rgba(4,6,46,1);
	line-height:30px;
	text-align: left;
	left: 0;
}
.bas-domain-subt {
	width: 100%;
	/* height:30px; */
	/* display: flex; */
	margin-top: 8px;
	margin-bottom: 3px;
}
.bas-domain-img {
	width: 100%;
	/* background:rgba(4,6,46,1); */
	border-radius:4px;
	/* position: absolute; */
	/* top: 48px; */
	/* left: 0; */
}
.bas-domain-title {
	width: 100%;
	height:29px;
	font-size:21px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color:rgba(4,6,46,1);
	line-height:29px;
	letter-spacing:1px;
	text-align: left;
	margin-bottom: 8px;
}
.bas-super-content {
	height:60px;
	font-size:14px;
	font-family:PingFangSC-Light,PingFang SC;
	font-weight:300;
	color:rgba(4,6,46,1);
	line-height:20px;
	text-align: left;
	margin-bottom: 8px;
	margin-top: 2px;
}
.bas-super-subt {
	height:21px;
	font-size:15px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color:rgba(4,6,46,1);
	line-height:21px;
	text-align: left;
	margin-top: 8px;
}
.bas-super-price > span {
	font-size: 12px;
}
.bas-super-price {
	height:30px;
	font-size:22px;
	font-family:PingFangSC-Semibold,PingFang SC;
	font-weight:600;
	color:rgba(0,202,155,1);
	line-height:30px;
	text-align: left;
	margin-top: 8px;
}
.bas-super-img {
	width: 100%;
	/* background:rgba(4,6,46,1); */
	border-radius:4px;
}
.bas-super-title {
	height:29px;
	font-size:21px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color:rgba(4,6,46,1);
	line-height:29px;
	letter-spacing:1px;
	text-align: left;
	margin-top: 15px;
	margin-bottom: 8px;
}
.bas-super {
	width: 100%;
	/* height: 502px; */
	background:rgba(255,255,255,1);
	margin-bottom: 8px;
	padding-bottom: 5px;
	padding-left: 3%;
	padding-right: 3%;
}
.bas-domain {
	width: 100%;
	height: 448px;
	background:rgba(255,255,255,1);
	margin-bottom: 8px;
	padding-left: 3%;
	padding-right: 3%;
	padding-top: 15px;
	padding-bottom: 3px;
}
.bas-agent {
	width: 100%;
	height: 414px;
	background:rgba(255,255,255,1);
	padding-left: 3%;
	padding-right: 3%;
	margin-bottom: 3px;
	padding-top: 11px;
	padding-bottom: 3px;
}
.basMain{
  padding: 0;
  margin: 0;
}
.basHomeContainer {
  height: 100%;
  background:rgba(245,246,246,1);
}
.basFooterPlace {
  width: 100%;
  height: 64px;
}
</style>
<script>
export default {
	data () {
		return {
		}
	}
}
</script>