<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>激活账号</title>
<link rel="stylesheet" type="text/css"
	href="../../media/active/css/normalize.css" />
<link rel="stylesheet" type="text/css"
	href="../../media/active/css/htmleaf-demo.css" />
<link rel="stylesheet" type="text/css"
	href="../../media/active/css/style.css" />
<!--[if IE]>
		<script src="http://libs.useso.com/js/html5shiv/3.7/html5shiv.min.js"></script>
	<![endif]-->
</head>
<body>
	<div class="htmleaf-container">
		<header class="htmleaf-header">
			<h1>激活您的账户</h1>
			<div class="htmleaf-links">
				<a class="htmleaf-icon icon-htmleaf-home-outline" href="index.html"
					title="户外运动及娱乐部落" target="_blank"><span> 户外运动及娱乐部落</span></a> <a
					class="htmleaf-icon icon-htmleaf-arrow-forward-outline" href="login.jsp"
					title="返回注册登陆页" target="_blank"><span> 返回注册登陆页</span></a>
			</div>
		</header>
		<!--<div class="open">Open Modal</div>-->
		<div class="modal">
			<div class="form">
				<form method="post" action="ActiveAction.action">
					<label for="name" required="required">用户昵称</label> <input id="name"
						name="username" value="${username}" type="text" /> <label
						for="pass" required="required">密 码</label> <input id="pass"
						value="${password}" name="password" type="password" /> <label
						for="email">激 活 码</label> <input id="email" name="activecode"
						type="text" required="required" placeholder="请到您注册邮箱里面去查找！" />
					<button type="submit">激活您的账户</button>
				</form>
			</div>
			<div class="invite">
				<h3>漫漫长路，泪水在左，欢笑在右，生命的鲜花铺满两旁。走过生命的四季，我们经历了泪水的洗礼，见证了欢笑的时刻，欣赏着朝阳的升起，凝视着花蕊的绽放。人生途中，我们收获着生命之神不尽的惠赠，满揣着她的礼物与祝福启程。一路走来，因为有你，我们不曾寒冷，我们从未孤独。</h3>
				<div class="nope">户外运动及娱乐部落--你最忠实的朋友</div>
				<div title="close" class="close"></div>
			</div>
		</div>
	</div>

	<script src="../../media/active/js/jquery-2.1.1.min.js"
		type="text/javascript"></script>
	<script src="../../media/active/js/jquery.alertWindow.min.js"
		type="text/javascript"></script>
	<script>
		window.jQuery
				|| document
						.write('<script src="../../media/active/js/jquery-2.1.1.min.js"><\/script>')
	</script>
	<script type="text/javascript">
		$(document).ready(function() {
			var errorMessage = "${error}";
			var judge = errorMessage.charAt(errorMessage.length - 1);;
			//alert(depId);
			if (errorMessage != null || errorMessage != "") {
				if(judge == "。") {
					jQuery.alertWindow("激活账户失败", errorMessage);
				} else if(judge == "！") {
					jQuery.alertWindow("激活账户提示", errorMessage);
				}
				
				//uery.alertWindow("激活账户失败","对不起，您的账号激活失败，请确认激活码,用户名，密码没有错误！");
			}
		});
		/*$(".close, .nope").on('click', function () {
		  $('.modal').addClass('hidden');
		  $('.open').addClass('active');
		})

		$(".open").on('click', function () {
		  $(this).removeClass('active');
		  $('.modal').removeClass('hidden');
		})*/
	</script>
</body>
</html>