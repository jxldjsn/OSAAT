<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>后台登陆</title>
<link href="css/reset.css" rel="stylesheet" type="text/css" media="screen">
<link href="css/login.css" rel="stylesheet" type="text/css">

<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>

<link rel="stylesheet" href="css/layer.css" id="layui_layer_skinlayercss">
<style id="style-1-cropbar-clipper">
/* Copyright 2014 Evernote Corporation. All rights reserved. */
.en-markup-crop-options {
	top: 18px !important;
	left: 50% !important;
	margin-left: -100px !important;
	width: 200px !important;
	border: 2px rgba(255,255,255,.38) solid !important;
	border-radius: 4px !important;
}
.en-markup-crop-options div div:first-of-type {
	margin-left: 0px !important;
}
</style>
</head>

<body>
	<input id="idInput" type="hidden" value="company">
	<div class="container clearfix">
		<!-----------------页面左侧文字------------------>
		<div class="secL">
			<h2>户外运动及娱乐部落后台登陆</h2>
			<p>
				部落具有博客、论坛、小游戏、音乐等多种功能，<br>基于SSM平台架构，稳定可靠<br> 要有网络的地方就可以了解户外运动知识，<br> 随时随地发博文、玩游戏、听音乐。 
			</p>
		</div>
		<!-----------------页面右侧表单------------------>
		<div class="secR">
			<!-----页面右侧透明背景----->
			<div class="box-bg"></div>
			<!--------表单内容------------>
			<form action="<%=basePath%>OSAAT/admin/AdminLogin.action" method="post" name="frmLogin" id="loginForm">
				<div class="form">
					<h1>登录平台</h1>
					<p>
						请用<span class="f9c442"> 您的姓名 </span>作为用户名登录
					</p>
					<div class="item clearfix">
						<label for="userNameIpt"></label> 
						<input type="text" tabindex="1" id="userNameIpt" name="dtoUserName" notnull="true" info="用户名" placeholder="请输入管理员姓名">
					</div>
					<div class="item itempass clearfix">
						<label for="password"></label> 
						<input type="password" tabindex="2" id="password" name="password" notnull="true" info="密码" autocomplete="off" placeholder="请输入密码">
					</div>
					
					<div class="item validatepic clearfix">
						<a tabindex="4" class="changepic" style="color: crimson; cursor: default;">${Tips}</a>
					</div>
					
					<div class="item itemRadio clearfix">
					    <input type="checkbox" style="float: left;width:13px;height: 25px" id="radioPass" onclick="checkbox();">&nbsp;记住密码 
						
					</div>

					<div class="item">
					   <button type="submit" tabindex="5" onclick="return loginSubmit();" id="btnSubmit">登&nbsp;&nbsp;录</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	<div id="bg"></div>
	
	<script type="text/javascript">
	    
        function loginSubmit() {
            
			var userName = $("#userNameIpt").val();
			var password=$("#password").val();
			if(userName == ""){
				alert("请用 输入您的姓名 作为用户名登录");
				return false;
			} else if(password == "") {
				alert("请用您的密码");
				return false;
			}

			$("#loginForm").submit();
            
        }
        
        
    </script>



</body>
</html>
