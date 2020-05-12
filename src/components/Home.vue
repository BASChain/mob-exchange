<template>
    <main class="basMain">
		<div class="basHomeContainer">
			<div class="basSlogan">
				<div class="basSloganContent">
					<!-- {/* <p class="basSloganP1"><span>Block </span>Records Hostory</p> -->
					<!-- <p class="basSloganP2">Techology<span> Links </span>Future</p> */} -->
					<img src="../assets/banner-png@2x.png" alt="" class="basSloganImg">
				</div>
			</div>
			<div class="basIntro">
				<div class="basIntroContent">
					<p class="basIntro1">命名一切</p>
					<p class="basIntro2">支持世界任意国家语言以及emoj</p>
					<p class="basIntro3">你好/Hallo/Hello/こんにちは/Γ- </p>
					<p class="basIntro3">ειάσου/Здравствулте/Alô/안녕하세요…</p>
					<p class="basIntro4"><span role="img">😌/❤️/😂/❤️/👪…</span></p>
				</div>
			</div>
			<div class="basScroll">
				<p class="basScrollTitle">完全去中心化</p>
				<div class="basScrollOut">
					<div class="basScrollCointaner">
						<div class="basScrollItem">
							<img src="../assets/register@2x.png" alt="">
							<p>域名注册</p>
						</div>
						<div class="basScrollItem">
							<img src="../assets/trans@2x.png" alt="" >
							<p>域名交易</p>
						</div>
						<div class="basScrollItem">
							<img src="../assets/minner@2x.png" alt="" >
							<p>加入矿池</p>
						</div>
					</div>
				</div>
			</div>
			<div class="basGoal">
				<p class="basGoalTitle">颠覆霸权，降维空间</p>
				<p class="basGoalCont1">打破少数国家技术霸权的局面，</p>
				<p class="basGoalCont2">将所有权归不同国家不同机构所有，数据更加透明化</p>
				<div class="basGoalBt">
					<div class="basGoalBtLeft">
						<p class="basGoalBtTitle1">• 传统节点</p>
						<p class="basGoalBtCont">根节点1个，辅根节点12个</p>
					</div>
					<div class="basGoalBtRight">
						<p class="basGoalBtTitle2">• Bas节点</p>
						<p class="basGoalBtCont">62个根节点，128个辅根节点</p>
					</div>
				</div>
			</div>
			<div class="basCore">
				<div class="basCoreTitle">全新协议，新世界入口</div>
				<div class="basCoreTop">
					<div class="basCoreImg1"><img src="../assets/ppn@2x.png" alt=""></div>
					<div class="basCoreTopContent">
						<p>升级TLS1.3到TLS1.5 支持区</p>
						<p>块链公钥与签名的安全通</p>
						<p>讯协议http + TLS1.5 + bas </p>
						<p>= httpb,全新的RFC标准。</p>
					</div>
				</div>
				<div class="basCoreBto">
					<p class="basCoreBtoText">被完全颠覆的Ca中心</p>
					<div class="basCoreImg2"><img src="../assets/ch@2x.png" alt=""></div>
				</div>
			</div>
			<div class="basFooterPlace"></div>
		</div>
	</main>
</template>
<style scoped>
.basScroll {
  width:100%;
  height:210px;
  background:rgba(255,255,255,1);
  display:flex;
  flex-flow: column;
}
.basMain{
  padding: 0;
  margin: 0;
}
.basHomeContainer {
  height: 100%;
  background:rgba(245,246,246,1);
}
.basSloganImg {
	width: 100%;
  margin: 0px;
}
.basSloganContent {
  text-align: center;
}
.basIntro,
.basSlogan {
  width: 100%;
  height: 162px;
  display:flex;
  justify-content: center;/*水平居中*/
  align-items:center;/*垂直居中*/
}
.basIntroContent {
	width: 100%;
	height: 162px;
}
.basIntro {
  margin-bottom: 2px;
  background:rgba(255,255,255,1);
}
.basSlogan {
  margin-bottom: 1px;
  background-color: #04062E;
}
.basIntro1 {
  width: 100%;
  height:28px;
  font-size:20px;
  font-family:PingFangTC-Semibold,PingFangTC;
  font-weight:600;
  color:rgba(4,6,46,1);
  text-align: center;
  line-height:28px;
  margin-bottom: 0;
	top: 0;
}
.basIntro2 {
  width: 100%;
  height:20px;
  font-size:14px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(4,6,46,1);
  text-align: center;
  line-height:20px;
  margin-top: 7px;
  margin-bottom: 3px;
}
.basIntro3 {
  width: 100%;
  height:20px;
  font-size:14px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(0,202,155,1);
  line-height:20px;
  text-align: center;
  margin-bottom: 0;
	margin-top: 0;
}
.basIntro4 {
  width: 100%;
  height:23px;
  font-size:14px;
  font-family:AppleColorEmoji;
  color:rgba(4,6,46,1);
  text-align: center;
  line-height:23px;
  margin-top: 4px;
  margin-bottom: 0;
}
.basScrollCointaner {
  display:flex;
  width: 100%;
  /* padding: 10px 0; */
  white-space: nowrap;
  /*文本不会换行，文本会在在同一行上继续*/
  overflow-x: auto;/*可滑动*/
  /* overflow-y: auto; */
  display:-webkit-box;
}
.basScrollItem > p {
  width:64px;
  height:21px;
  font-size:15px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(4,6,46,1);
  line-height:21px;
  bottom: 0;
  text-align: center;
  margin-bottom: 0;
  position: absolute;
}
.basScrollItem > img {
  margin-bottom: 0;
  width: 100%;
  margin:0 auto;
}
.basScrollItem {
  width: 49%;
  margin-left: 3%;
  height: 135px;
  float: none;
  position: relative;
  /* background: #fff; */
  /* display: inline-block; */
}
.basScrollTitle {
  width:100%;
  height:28px;
  font-size:20px;
  font-family:PingFangSC-Semibold,PingFang SC;
  font-weight:600;
  color:rgba(4,6,46,1);
  line-height:28px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 4px;
}
.basScrollOut {
  overflow: hidden;
  /* height: 135px; */
  width: 100%;
}
.basGoalCont1,
.basGoalCont2 {
  width:100%;
  height:20px;
  font-size:14px;
  font-family:PingFangSC-Light,PingFang SC;
  font-weight:300;
  color:rgba(255,255,255,1);
  line-height:20px;
  text-align: center;
  position: absolute;
  margin-bottom: 0;
  top: 0;
}
.basGoalCont1 {
  margin-top: 50px;
}
.basGoalCont2 {
  margin-top: 70px;
}
.basGoalTitle {
  width: 100%;
  height: 28px;
  font-size:20px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:28px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
  position: absolute;
  top: 0;
}
.basGoal {
  width: 100%;
  height: 304px;
  background: rgba(4,6,46,1) url("../assets/con_jpg@2x.png") no-repeat;
  background-size: auto 247px;
  /* background-origin: padding-box; */
  background-position: 0px 22px;
  background-origin: content-box;
  position: relative;
  /* padding-top: 22px; */
  /* padding-bottom: 35px; */
}
.basGoalBtLeft,
.basGoalBtRight {
  width:179px;
  height:55px;
  background:rgba(255,255,255,0.2);
  border-radius:4px;
  /* opacity:0.2; */
}
.basGoalBtLeft {
  margin-left: 2%;
  margin-right: 1%;
}
.basGoalBtRight {
  margin-right: 2%;
  margin-left: 1%;
}
.basGoalBt {
  width: 100%;
  height: 55px;
  position: absolute;
  bottom: 7px;
  /* left: 2%; */
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.basCore {
  width:100%;
  height:276px;
  background:rgba(255,255,255,1);
  position: relative;
}
.basGoalBtCont {
  width:auto;
  height:20px;
  font-size:13px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:20px;
  text-align: center;
	margin: 0;
}
.basGoalBtTitle1,
.basGoalBtTitle2 {
  width:auto;
  height:22px;
  font-size:16px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  line-height:22px;
  margin-left: 12px;
  margin-top: 7px;
  margin-bottom: 0;
	text-align: left;
}
.basGoalBtTitle1 {
  color:rgba(229,81,81,1);
}
.basGoalBtTitle2 {
  color:rgba(0,202,155,1);
}
.basCoreBtoText {
  width:135px;
  height:20px;
  font-size:14px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(4,6,46,1);
  line-height:20px;
  margin: 38px 1.7% 0px 3.6%;
}
.basCoreTopContent {
  width:193px;
  height:80px;
  margin-top: 11px;
  margin-left: 8,3%;
}
.basCoreTopContent > p {
  width:100%;
  height:20px;
  font-size:14px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(4,6,46,1);
  line-height:20px;
  margin: 0;
}
.basCoreImg1 {
  width:114px;
  height:70px;
  background:rgba(245,246,246,1);
  border-radius:4px;
  margin-left: 4.7%;
  margin-top: 16px;
  left: 0;
}
.basCoreImg1 > img {
	width: 100%;
  margin: 0;
}
.basCoreImg2 > img {
	width: 100%;
  margin: 0;
}
.basCoreImg2 {
  width:190px;
  height:60px;
  background:rgba(245,246,246,1);
  border-radius:4px;
  margin-right: 3.9%;
  text-align: right;
  margin-top: 24px;
}
.basCoreTop {
  margin-top: 62px;
}
.basCoreBto {
  margin-top: 170px;
}
.basCoreTop,
.basCoreBto {
  width:96%;
  height:102px;
  background:rgba(245,246,246,1);
  border-radius:4px;
  position: absolute;
  top: 0;
  left: 2%;
  right: 2%;
  display: flex;
  justify-content: space-between;
}
.basCoreTitle {
  width:100%;
  height:28px;
  font-size:20px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(4,6,46,1);
  line-height:28px;
  text-align: center;
  margin-top: 23px;
  position: absolute;
  top: 0;
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
			basGoalBtTitle1: '• 传统节点',
		}
	}
}
</script>