<template>
  <main class="bas-meta-main">
		<div class="bas-meta-container">
			<div class="bas-meta-title">如何生成邮箱账号?</div>
			<div class="bas-sub-title">一、创建账号</div>
			<img src="/static/img/help/mobile_mail/create_account.png" alt="">
			<div class="bas-sub-title">二、输入密码</div>
			<img src="/static/img/help/mobile_mail/intput_password.png" alt="">
			<div class="bas-sub-title">三、复制邮箱客户端公钥地址</div>
			<img src="/static/img/help/mobile_mail/copy_address.png" alt="">
			<div class="bas-sub-title">四、打开BAS官网: 我的钱包->我的邮箱->修改，粘贴公钥地址</div>
			<img src="/static/img/help/mobile_mail/copy_to_bas.png" alt="">
			<p class="bas-content">
				如果没有邮箱，请查看
				<span class="bas-jump" @click="openGetMail">如何注册邮箱</span>
			</p>
			<div class="bas-sub-title">五、输入邮箱账号</div>
			<img src="/static/img/help/mobile_mail/input_mail_account.png" alt="">
			<div class="bas-sub-title">六、保存邮箱二维码或密文</div>
			<img src="/static/img/help/mobile_mail/save_qr.png" alt="">
			<img src="/static/img/help/mobile_mail/copy_cipher.png" alt="">
			<div class="bas-sub-title">七、成功生成客户端账号</div>
			<img src="/static/img/help/mobile_mail/mail_success.png" alt="">
		</div>
	</main>
</template>
<style scoped>
.bas-content {
	width: 100%;
	margin: 0;
	text-align: left;
	/* height:88px; */
	font-size:15px;
	font-family:PingFangSC-Regular,PingFang SC;
	font-weight:400;
	color:rgba(69,71,101,1);
	line-height:22px;
	margin-bottom: 10px;
}
.bas-jump {
	color: #00CA9B;
}
img {
  width: 100%;
}
.bas-sub-title {
  width: 100%;
	/* height:29px; */
	font-size:16px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:400;
	color:rgba(4,6,46,1);
	line-height:29px;
	margin-top: 14px;
	margin-bottom: 14px;
	text-align: left;
}
.bas-content {
	width: 100%;
	margin: 0;
	text-align: left;
	/* height:88px; */
	font-size:14px;
	font-family:PingFangSC-Regular,PingFang SC;
	font-weight:400;
	color:rgba(69,71,101,1);
	line-height:22px;
	margin-bottom: 10px;
}
.bas-meta-title {
	width: 100%;
	height:29px;
	font-size:21px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color:rgba(4,6,46,1);
	line-height:29px;
	margin-top: 14px;
	margin-bottom: 14px;
	text-align: left;
}
.bas-meta-main {
	width: 100%;
  height: auto;
}
.bas-meta-container {
	width: 100%;
	padding: 0 7.5% 0 7.5%;
}
</style>
<script>
export default {
  name:"MobileBmailGuide",
	data () {
		return {
			
		}
  },
  methods: {
		openGetMail() {
			this.$router.push('/help/bmail-guide')
		}
  }
}
</script>
