<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!-- <h1>操作失败，请<a href="DiskDemo/login.jsp">返回</a>主页面重试！</h1> -->

<!DOCTYPE html>
<html>
<head>
<title>WZY 出错页面</title>
<link href="../../media/css/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="../../media/js/jquery.min.js"></script>
<!-- Custom Theme files -->
<link href="../../media/css/indexstyle.css" rel="stylesheet" type="text/css" media="all" />
<!-- Custom Theme files -->
<!-- navigation -->
<link href="../../media/css/component.css" rel="stylesheet" type="text/css"  />
<link href="../../media/css/menu.css" rel="stylesheet" type="text/css"  />

<!-- navigation -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--webfont-->
<script src="../../media/js/responsiveslides.min.js"></script>
 <script>
    $(function () {
      $("#slider").responsiveSlides({
      	auto: true,
      	speed: 500,
        namespace: "callbacks",
        pager: true,
      });
    });
  </script>
  <script type="text/javascript" src="../../media/js/move-top.js"></script>
<script type="text/javascript" src="../../media/js/easing.js"></script>
</head>
<body>
    <!-- header-section-starts -->
	
		<div class="header">


			<div class="header-top">
				<div class="container">
				<div class="clearfix">
					<p class="location">
						<i class="location">Welcome to you</i>
					</p>

					<c:if test="${not empty sessionScope.username}">
						<a href="Logout.action"><p class="logout">注销</p></a> <a
							href="selfInformation.jsp"><p class="username">${sessionScope.username}
								&nbsp;&nbsp;|&nbsp;&nbsp;</p></a>
					</c:if>
					

					<c:if test="${empty sessionScope.username}">
						<div class="nav-account">
							<a href="/login" class="nav-account-login" id="nav-login">登录&注册</a>
						</div>
					</c:if>

					</div>
				</div>
			</div>


			<div class="header-bottom">

			<div class="container1">
				<ul class="menu">
					<li id="setlogo"><span><img src="../../media/image/logo.png"></span></li>
					<li><a href="#">主页</a></li>

					<li class="active"><a href="#">博客</a>

						<ul class="submenu">

							<li><a href="#">博客搜索</a></li>

							<li><a href="<%=basePath %>OSAAT/blog/MyBlog.action">我的博客</a></li>

							<li><a href="<%=basePath %>OSAAT/blog/PreAddBlog.action">写博客</a></li>

						</ul>

					</li>

					<li class="active"><a href="#s2">论坛</a>

						<ul class="submenu">

							<li><a href="#">板块</a></li>

							<li><a href="#">帖子搜索</a></li>

							<li><a href="#">我的帖子</a></li>

							<li><a href="#">我要发帖</a></li>

						</ul>

					</li>

					<li class="active"><a href="#">小游戏</a>

						<ul class="submenu">

							<li><a href="#">游戏搜索</a></li>

						</ul>

					</li>

					<li class="active"><a href="#">音乐</a>
					
						<ul class="submenu">

								<li><a href="#">我的音乐</a></li>

								<li><a href="#">上传音乐</a></li>

						</ul>
					
					</li>

					<li class="active"><a href="#">搜索</a></li>


				</ul>

		</div>

		</div>


	</div>
	
	
	<!-- header-section-ends -->
	<!-- content-section-starts -->
	<div class="content">
			<div class="container">
			    <!--404-->
			<div class="error">
				<div class="error-head">
					<h1><fmt:parseDate value="" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /></h1>
					<h1>出错了</h1>
					<h2>对不起，您的操作出错了...!</h2>
					<a class="hvr-bounce-to-left button" href="index.jsp">返回</a>
				</div>
			</div>				
	       </div>
	</div> 
	<!-- content-section-ends -->
	<table align="center" bgcolor="#13D4E4">
    	<tr height="60px">
        	<th width="100%">我们是一群自信、乐观、开朗、活泼的人。如果你喜欢我们，请加入我们QQ群：314484333</th>
        </tr>
        <tr height="50px">
        	<th width="100%"> Copyright © 2015 <a href="<%=basePath %>index.html">WZY社区</a> All Rights Reserved | 理工QQ群 314484333号</th>
        </tr>
    </table>
</body>
</html>