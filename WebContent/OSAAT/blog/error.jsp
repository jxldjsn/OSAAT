<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!-- <h1>操作失败，请<a href="DiskDemo/login.jsp">返回</a>主页面重试！</h1> -->

<!DOCTYPE html>
<html>
<head>
<title>WZY 出错页面</title>
<link href="<%=basePath%>media/css/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="<%=basePath%>media/js/jquery.min.js"></script>
<!-- Custom Theme files -->
<link href="<%=basePath%>media/css/indexstyle.css" rel="stylesheet" type="text/css" media="all" />
<!-- Custom Theme files -->
<!-- navigation -->
<link href="<%=basePath%>media/css/component.css" rel="stylesheet" type="text/css"  />
<!-- navigation -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--webfont-->
<link href='http://fonts.useso.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
<script src="<%=basePath%>media/js/responsiveslides.min.js"></script>
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
  <script type="text/javascript" src="<%=basePath%>media/js/move-top.js"></script>
<script type="text/javascript" src="<%=basePath%>media/js/easing.js"></script>
</head>
<body>
    <!-- header-section-starts -->
	<div class="header">
		<div class="header-top">
			<div class="container">
				<p class="location"><i class="location"></i>欢迎来到WZY社区</p>
				<a href="<%=basePath%>WZYCommunity/basic/Logout.action"><p class="logout">注销</p></a>
				<a href="<%=basePath%>WZYCommunity/basic/selfInformation.jsp"><p class="username">${sessionScope.username} &nbsp;&nbsp;|&nbsp;&nbsp;</p></a>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="header-bottom">
			<div class="container">
				<div class="logo">
					<a href="<%=basePath%>WZYCommunity/basic/IndexAction.action"><img src="<%=basePath%>media/image/bloglogo.png" alt="" /></a>
				</div>
				<span class="menu"></span>
				<div class="top-menu">
					<ul>
					<nav class="cl-effect-5">
						<li><a href="<%=basePath %>WZYCommunity/basic/index.jsp"><span data-hover="主页">主页</span></a></li>
						<li><a class="active" href="<%=basePath %>WZYCommunity/blog/BlogIndex.action"><span
								data-hover="博客">博客</span></a></li>
						<li><a href="#"><span data-hover="热门博客">热门博客</span></a></li>
						<li><a href="#"><span data-hover="博客搜索">博客搜索</span></a></li>
						<li><a href="<%=basePath %>WZYCommunity/blog/MyBlog.action"><span data-hover="我的博客">我的博客</span></a></li>
						<li><a href="<%=basePath %>WZYCommunity/blog/PreAddBlog.action"><span data-hover="写博客">写博客</span></a></li>
					</nav>
					</ul>
				</div>
				<!-- script for menu -->
				<script>
				$( "span.menu" ).click(function() {
				  $( ".top-menu" ).slideToggle( "slow", function() {
				    // Animation complete.
				  });
				});
			</script>
			<!-- script for menu -->
				<div class="clearfix"></div>
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
					<h1>出错了</h1>
					<h2>对不起，您的操作出错了...!</h2>
					<a class="hvr-bounce-to-left button" href="blogindex.jsp">返回</a>
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