<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html>
<head>
<title>关于和联系我</title>
<link href="../../media/css/bootstrap.css" rel='stylesheet'
	type='text/css' />

<script src="../../media/js/jquery.min.js"></script>

<link href="../../media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />

<link href="<%=basePath %>media/css/menu.css" rel="stylesheet" type="text/css"  />
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords"
	content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />

<style>
			/*---content----*/
.grid1{
	background:#665cbe;
	text-align:center;
	padding: 50px 0px;
}
.grid1 h3{
	font-family: 'gandhi_sansregular';
	color: #FFF;
	font-size: 2.2em;
}
.grid1 img{
	background:#fff;
	padding:3px;
	border-radius: 50%;
}
.grid1 p a,.grid1 p{
	font-family: 'gandhi_sansregular';
	color: #FFF;
	font-size: 1.4em;
	line-height: 1.5em;
}
.grid1 p{
	width: 57%;
	margin:0 auto;
}
.grid1 p a{
	font-size: 1em;
	padding-left: 5px;
	color:#2a323a;
	transition: 0.5s ease;
	-o-transition: 0.5s ease;
	-webkit-transition: 0.5s ease;
}
.grid1 p a:hover{
	color:#FFF;
}
		</style>

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
						<a href="<%=basePath %>OSAAT/basic/Logout.action"><p class="logout">注销</p></a> <a
							href="<%=basePath %>OSAAT/basic/selfInformation.jsp"><p class="username">${sessionScope.username}
								&nbsp;&nbsp;|&nbsp;&nbsp;</p></a>
					</c:if>
					

					<c:if test="${empty sessionScope.username}">
						<div class="nav-account">
							<a href="<%=basePath %>OSAAT/basic/login.jsp" class="nav-account-login" id="nav-login">登录&注册</a>
						</div>
					</c:if>

					</div>
				</div>
			</div>


			<div class="header-bottom">

			<div class="container1">
				<ul class="menu">
					<li id="setlogo"><span><img src="../../media/image/logo.png"></span></li>
					<li><a href="<%=basePath %>OSAAT/basic/IndexAction.action">主页</a></li>

					<li class="active"><a href="<%=basePath %>OSAAT/blog/BlogIndex.action?startPage=1">博客</a>

						<ul class="submenu">

							<li><a href="<%=basePath %>OSAAT/blog/searchBlog.jsp">博客搜索</a></li>

							<li><a href="<%=basePath %>OSAAT/blog/MyBlog.action?startPage=1">我的博客</a></li>

							<li><a href="<%=basePath %>OSAAT/blog/PreAddBlog.action">写博客</a></li>

						</ul>

					</li>

					<li class="active"><a href="<%=basePath %>OSAAT/bbs/InvitationIndex.action?startPage=1">论坛</a>

						<ul class="submenu">

							<li><a href="<%=basePath %>OSAAT/bbs/SectionIndex.action">板块</a></li>

							<li><a href="<%=basePath %>OSAAT/bbs/searchinvitation.jsp">帖子搜索</a></li>

							<li><a href="<%=basePath %>OSAAT/bbs/MyInvitation.action?startPage=1">我的帖子</a></li>

							<li><a href="<%=basePath %>OSAAT/bbs/PreAddInvitation.action">我要发帖</a></li>

						</ul>

					</li>

					<li class="active"><a href="<%=basePath %>OSAAT/games/AllGames.action?startPage=1">小游戏</a>

						<ul class="submenu">

							<li><a href="<%=basePath %>OSAAT/games/searchgame.jsp">游戏搜索</a></li>
							
							<li><a href="<%=basePath %>OSAAT/games/MyGames.action?startPage=1">我的游戏</a></li>
						</ul>

					</li>

					<li class="active"><a href="<%=basePath %>OSAAT/music/MusicIndex.action" target="_blank">音乐</a>
					
					</li>

					<li class="active"><a href="<%=basePath %>OSAAT/search/index.html">搜索</a></li>


				</ul>

		</div>

		</div>


	</div>

<!-- header-section-ends --> 

	<div class="content">
		<div class="grid1" id="me">
			<a href="#"><img src="image/adminimage/psb.jpg" title="name" /></a>
			<h3>大家好,我是王智勇</h3>
			<p>普通程序员，毕业于重庆理工大学(校友都懂哈)，目前从事JavaEE开发，对Html5和搜索也有所了解。生活大爆炸，因为很喜欢一个人漫步在旧巷口里，所以博客取名为旧巷里的旧少年，用来记录学习思考中的一些收获，也许会有错误，也许并不完美，但这不就是成长的过程么。没什么宏伟的目标，只希望每天都能有所收获，add more ing into my life。😜😜😜</p>
			<div>联系方式:wangzy666@qq.com</div>
		</div>
	</div>

	
	<!-- footer-section-start -->
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="share-coin text-center">
					<a class="button_zhihu" href="https://www.zhihu.com/signin?next=%2Fpeople%2Fjiu-xiang-li-de-jiu-shao-nian-8" target="_blank"><img onMouseOver="this.src='../../media/image/footer/zhihu_hover.png'" onMouseOut="this.src='../../media/image/footer/zhihu_default.png'" src="../../media/image/footer/zhihu_default.png"></a>
					<a class="button_github" href="https://github.com/jxldjsn" target="_blank"><img onMouseOver="this.src='../../media/image/footer/github_hover.png'" onMouseOut="this.src='../../media/image/footer/github_default.png'" src="../../media/image/footer/github_default.png"></a>
					<a class="button_qzone" href="https://user.qzone.qq.com/736250930/infocenter?ptsig=KDPH7ORo72WLAc9PaJs3e-udP5IeCViBZ9TFjgkjlLE_" target="_blank"><img onMouseOver="this.src='../../media/image/footer/qqzone_hover.png'" onMouseOut="this.src='../../media/image/footer/qqzone_default.png'" src="../../media/image/footer/qqzone_default.png"></a>
					<a class="button_tqq" href="http://t.qq.com/tianyaguniao7257" target="_blank"><img onMouseOver="this.src='../../media/image/footer/txweibo_hover.png'" onMouseOut="this.src='../../media/image/footer/txweibo_default.png'" src="../../media/image/footer/txweibo_default.png"></a>
					<a class="button_tsina" href="http://weibo.com/u/3845589045?topnav=1&wvr=6&topsug=1&is_all=1" target="_blank"><img onMouseOver="this.src='../../media/image/footer/sinaweibo_hover.png'" onMouseOut="this.src='../../media/image/footer/sinaweibo_default.png'" src="../../media/image/footer/sinaweibo_default.png"></a>
				</div>
				<div class="about-us text-center">
					<ul class="list-inline">
						<li><a href="<%=basePath %>OSAAT/basic/aboutus.jsp" target="_blank">关于我们</a></li>
						<li><a href="<%=basePath %>OSAAT/basic/legal.jsp" target="_blank">法律声明</a></li>
						<li id="li_con_us"><a href="<%=basePath %>OSAAT/basic/aboutus.jsp" target="_blank">联系我们</a></li>
					</ul>
				</div>
				<div class="copyrighet text-center">
					<p>© 2017 版权所有 WZY  &nbsp;户外运动及娱乐部落技术交流群：455501402</p>
				</div>
			</div>
		</div>
	</footer>
<!-- footer-section-ends -->

</body>
</html>