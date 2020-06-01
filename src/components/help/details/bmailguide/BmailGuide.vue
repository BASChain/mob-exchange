<template>
  <main class="bas-meta-main">
		<div class="bas-meta-container">
			<div class="bas-meta-title">如何注册邮箱?</div>
			<div class="bas-sub-title">一、点击邮箱注册，选择想要注册的根域名</div>
			<img src="/static/img/help/mail/apply_mail_account.png" alt="">
			<div class="bas-sub-title">二、输入邮箱名称和别名，注册邮箱</div>
			<img src="/static/img/help/mail/apply_mail_inpput_alias.png" alt="">
			<div>
				<div class="bas-sub-title">三、下载安装邮箱（iOS/Android）客户端，生成邮箱公钥</div>
				<p class="bas-content">
					客户端安装可通过网站下载链接扫描二维码，或在app store中下载
				</p>
				<img src="/static/img/help/mail/footer_download_bmail.png" alt="">
			</div>
			<div>
				<div class="bas-sub-title">四、在“我的钱包->我的邮箱”中点击去配置绑定客户端生成的邮箱公钥</div>
				<p class="bas-content">
					由于“我的邮箱"中不显示邮箱名称，取而代之的显示别名或者邮箱的Hash，请注意绑定到正确的邮箱上
				</p>
				<img src="/static/img/help/mail/open_domain_service.png" alt="">
				<img src="/static/img/help/mail/update_mail_publickey.png" alt="">
			</div>
			<p class="bas-content">
			完成以上操作即可使用邮箱客户端发送邮件了
			</p>
		</div>
	</main>
</template>
<style scoped>
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
  name:"BmailGuide",
	data () {
		return {
			
		}
  },
  methods: {

  }
}
</script>
