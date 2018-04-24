<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>

<!-- BEGIN HEAD -->

<head>

	<meta charset="utf-8" />

	<title>户外运动及娱乐部落 | 登录页面</title>

	<meta content="width=device-width, initial-scale=1.0" name="viewport" />

	<meta content="" name="description" />

	<meta content="" name="author" />

	<!-- BEGIN GLOBAL MANDATORY STYLES -->

	<link href="<%=basePath%>media/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>

	<link href="<%=basePath%>media/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>

	<link href="<%=basePath%>media/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>

	<link href="<%=basePath%>media/css/style-metro.css" rel="stylesheet" type="text/css"/>

	<link href="<%=basePath%>media/css/style.css" rel="stylesheet" type="text/css"/>

	<link href="<%=basePath%>media/css/style-responsive.css" rel="stylesheet" type="text/css"/>

	<link href="<%=basePath%>media/css/default.css" rel="stylesheet" type="text/css" id="style_color"/>

	<link href="<%=basePath%>media/css/uniform.default.css" rel="stylesheet" type="text/css"/>

	<!-- END GLOBAL MANDATORY STYLES -->

	<!-- BEGIN PAGE LEVEL STYLES -->

	<link href="<%=basePath%>media/css/login-soft.css" rel="stylesheet" type="text/css"/>

	<!-- END PAGE LEVEL STYLES -->

	<link rel="shortcut icon" href="<%=basePath%>media/image/favicon.ico" />

</head>

<!-- END HEAD -->

<!-- BEGIN BODY -->

<body class="login">

	<!-- BEGIN LOGO -->

	<div class="logo">

		<img src="<%=basePath%>media/image/logo.png" alt="logo" />

	</div>

	<!-- END LOGO -->

	<!-- BEGIN LOGIN -->

	<div class="content">

		<!-- BEGIN LOGIN FORM -->

		<form class="form-vertical login-form" action="<%=basePath%>OSAAT/basic/LoginAction.action" method="post">

			<h3 class="form-title">登 录 你 的 账 户</h3>

			<div class="alert alert-error hide">

				<button class="close" data-dismiss="alert"></button>

				<span>请 输 入 您 的 用 户 名 和 密 码.</span>

			</div>

			<div class="control-group">

				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->

				<label class="control-label visible-ie8 visible-ie9">用户名</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-user"></i>

						<input class="m-wrap placeholder-no-fix" type="text" placeholder="用户名" name="username"/>
						<c:out value="${Lusername}" />
					</div>
					
				</div>

			</div>

			<div class="control-group">

				<label class="control-label visible-ie8 visible-ie9">密码</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-lock"></i>

						<input class="m-wrap placeholder-no-fix" type="password" placeholder="密码" name="password"/>
						<c:out value="${Lpassword}" />
					</div>
					
				</div>

			</div>
			<h6><c:out value="${error}" /></h6>
			<div class="form-actions">

				<label class="checkbox">

				<input type="checkbox" name="remember" value="1"/> 记 住 我 

				</label>

				<button type="submit" class="btn blue pull-right">

				登 录 <i class="m-icon-swapright m-icon-white"></i>

				</button>            

			</div>

			<div class="forget-password">

				<h4>忘 记 了 密 码 ?</h4>

				<p>

					不用担心, 点击  <a href="javascript:;" class="" id="forget-password">这 里</a>

					去 重置 你的 密码.

				</p>

			</div>

			<div class="create-account">

				<p>

					您 是 否 还 没 有 账 户 ?&nbsp; 

					<a href="javascript:;" id="register-btn" class="">注册一个账户</a>

				</p>

			</div>

		</form>

		<!-- END LOGIN FORM -->        

		<!-- BEGIN FORGOT PASSWORD FORM -->

		<form class="form-vertical forget-form" action="<%=basePath%>OSAAT/basic/FindAndSendEmail.action" method="post">

			<h3 class="">忘记 密码 ?</h3>

			<p>重 置 密 码 前 请 输 入 你 的 邮 箱 地 址.</p>

			<div class="control-group">

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-envelope"></i>

						<input class="m-wrap placeholder-no-fix" type="text" placeholder="电子邮箱" name="email" />
						<c:out value="${LfindPw}" />
					</div>

				</div>

			</div>

			<div class="form-actions">

				<button type="button" id="back-btn" class="btn">

				<i class="m-icon-swapleft"></i> 返 回

				</button>

				<button type="submit" class="btn blue pull-right">

				提 交 <i class="m-icon-swapright m-icon-white"></i>

				</button>            

			</div>

		</form>

		<!-- END FORGOT PASSWORD FORM -->

		<!-- BEGIN REGISTRATION FORM -->

		<form class="form-vertical register-form" action="<%=basePath%>OSAAT/basic/RegisterAction.action" method="post" >

			<h3 class="">注 册 用 户</h3>

			<p>请输入您如下的帐户详细信息:</p>

			<div class="control-group">

				<label class="control-label visible-ie8 visible-ie9">用户名</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-user"></i>

						<input class="m-wrap placeholder-no-fix" type="text" placeholder="用户名" name="username" >
						<c:out value="${RusernameError}" />
					</div>

				</div>

			</div>

			<div class="control-group">

				<label class="control-label visible-ie8 visible-ie9">密 码</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-lock"></i>

						<input class="m-wrap placeholder-no-fix" type="password" id="register_password" placeholder="密 码" name="password" >
						<c:out value="${RpasswordError}" />
					</div>

				</div>

			</div>

			<div class="control-group">

				<label class="control-label visible-ie8 visible-ie9">重 复 你 的 密 码</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-ok"></i>

						<input class="m-wrap placeholder-no-fix" type="password" placeholder="重 复 你 的 密 码" name="rpassword" >
						<c:out value="${RrpasswordError}" />
					</div>

				</div>

			</div>

			<div class="control-group">

				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->

				<label class="control-label visible-ie8 visible-ie9">邮 箱</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-envelope"></i>

						<input class="m-wrap placeholder-no-fix" type="text" placeholder="邮 箱" name="email" >
						<c:out value="${RemailError}" />
					</div>

				</div>

			</div>
			
			<div class="control-group">

				<div class="controls">

					<label class="checkbox">

					<input type="checkbox" name="tnc"/> 我 同 意  <a href="<%=basePath %>OSAAT/basic/legal.jsp" target="_blank">服 务 条 款</a> 和 <a href="<%=basePath %>OSAAT/basic/legal.jsp" target="_blank">隐 私 政 策</a>

					</label>  

					<div id="register_tnc_error"></div>

				</div>

			</div>

			<div class="form-actions">

				<button id="register-back-btn" type="button" class="btn">

				<i class="m-icon-swapleft"></i>  返 回

				</button>

				<button type="submit" id="register-submit-btn" class="btn blue pull-right">

				注 册 <i class="m-icon-swapright m-icon-white"></i>

				</button>            

			</div>

		</form>

		<!-- END REGISTRATION FORM -->

	</div>

	<!-- END LOGIN -->

	<!-- BEGIN COPYRIGHT -->

	<div class="copyright">

		2017 &copy; wzy版权所有.

	</div>

	<!-- END COPYRIGHT -->

	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->

	<!-- BEGIN CORE PLUGINS -->

	<script src="<%=basePath%>media/js/jquery-1.10.1.min.js" type="text/javascript"></script>

	<script src="<%=basePath%>media/js/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>

	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->

	<script src="<%=basePath%>media/js/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>      

	<script src="<%=basePath%>media/js/bootstrap.min.js" type="text/javascript"></script>

	<!--[if lt IE 9]>

	<script src="<%=basePath%>media/js/excanvas.min.js"></script>

	<script src="<%=basePath%>media/js/respond.min.js"></script>  

	<![endif]-->   

	<script src="<%=basePath%>media/js/jquery.slimscroll.min.js" type="text/javascript"></script>

	<script src="<%=basePath%>media/js/jquery.blockui.min.js" type="text/javascript"></script>  

	<script src="<%=basePath%>media/js/jquery.cookie.min.js" type="text/javascript"></script>

	<script src="<%=basePath%>media/js/jquery.uniform.min.js" type="text/javascript" ></script>

	<!-- END CORE PLUGINS -->

	<!-- BEGIN PAGE LEVEL PLUGINS -->

	<script src="<%=basePath%>media/js/jquery.validate.min.js" type="text/javascript"></script>

	<script src="<%=basePath%>media/js/jquery.backstretch.min.js" type="text/javascript"></script>

	<!-- END PAGE LEVEL PLUGINS -->

	<!-- BEGIN PAGE LEVEL SCRIPTS -->

	<script src="<%=basePath%>media/js/app.js" type="text/javascript"></script>

	<script src="<%=basePath%>media/js/login-soft.js" type="text/javascript"></script>      

	<!-- END PAGE LEVEL SCRIPTS --> 

	<script>

		jQuery(document).ready(function() {     

		  App.init();

		  Login.init();

		});

	</script>

	<!-- END JAVASCRIPTS -->

</body>

<!-- END BODY -->

</html>