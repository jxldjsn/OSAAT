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
<title>帖子详情</title>
<link href="../../media/css/bootstrap.css" rel='stylesheet'
	type='text/css' />

<script src="../../media/js/jquery.min.js"></script>

<link href="../../media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />
<link href="../../media/css/addinvitation.css" rel="stylesheet"
	type="text/css" />
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />
<link href="../../media/css/menu.css" rel="stylesheet"
	type="text/css" />

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords"
	content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript">
	
	 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 

</script>

<script src="../../media/js/responsiveslides.min.js"></script>
<script>
	$(function() {
		$("#slider").responsiveSlides({
			auto : true,
			speed : 500,
			namespace : "callbacks",
			pager : true,
		});
	});
</script>
<script type="text/javascript" charset="utf-8"
	src="<%=basePath%>ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8"
	src="<%=basePath%>ueditor/ueditor.all.js"></script>
<script type="text/javascript" charset="utf-8"
	src="<%=basePath%>ueditor/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript" src="../../media/js/move-top.js"></script>
<script type="text/javascript" src="../../media/js/easing.js"></script>
</head>
<body>
	<!-- header-section-starts -->
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
	
	

	<div class="banner">

		<div class="slider">
			<div class="callbacks_container">
				<ul class="rslides" id="slider">
					<li><img src="../../media/image/blog1.gif" alt="" /> <!--<div class="caption">
							<h2>欢迎来到WZY社区！</h2>
							<a class="more" href="#">谢谢您的关爱</a>
						</div>--></li>
					<li><img src="../../media/image/blog2.gif" alt="" /> <!--<div class="caption">
							<h2>WZY,您的私人社区！</h2>
							<a class="more" href="#">谢谢您的支持</a>
						</div>--></li>
					<li><img src="../../media/image/blog3.gif" alt="" /> <!--<div class="caption">
							<h2>WZY,更懂你的网络社区</h2>
							<a class="more" href="#">祝您体验愉快</a>
						</div>--></li>

					<li><img src="../../media/image/blog4.gif" alt="" /></li>
				</ul>
			</div>
		</div>
		<!--发帖子具体内容-->
		<div
			style="margin-left: 10%; margin-top: 20px; margin-bottom: 10px; margin-right: 10%; border: 1px solid #ABA8A8;">

			<form method="post" action="AddInvitation.action">
				<table width="100%">

					<tr>
						<th colspan="3"><h1
								style="background-color: #3C4049; color: #FFFFFF; padding-top: 10px; padding-bottom: 10px; padding-left: 10px;">
								撰写新贴子</h1></th>
					</tr>

					<tr>
						<th colspan="3"><h3
								style="padding-top: 20px; padding-left: 10px; padding-bottom: 10px; color: #555; font-size: 14px; font-weight: 800; background: #E9E9E9;">编辑帖子</h3></th>
					</tr>
					<tr height="10px"></tr>
					<tr>
						<td width="8.8888%"><h1
								style="padding-top: 7px; padding-right: 10px; margin-left: 10px; margin-bottom: 5px; text-align: right; font-size: 18px;">帖子标题</h1></td>
						<td width="66.66666667%"><input type="text"
							name="inviattionName" placeholder="请输入帖子标题"
							style="display: block; width: 100%; height: 34px; padding: 6px 12px; font-size: 14px; line-height: 1.42857143; color: #555; background-color: #fff; background-image: none; border: 1px solid #ccc; border-radius: 4px;">
						</td>
						<td width="24.4444454%"><select name="section" id="section"
							class="ui-select">
								<c:forEach items="${sectiontList}" var="item" varStatus="status">
									<c:if test="${status.first}">
										<option selected value="${item.sectionId}">${item.sectionName}</option>
									</c:if>
									<c:if test="${!(status.first)}">
										<option value="${item.sectionId}">${item.sectionName}</option>
									</c:if>
								</c:forEach>
						</select></td>
					</tr>
					<tr height="10px"></tr>
					<tr>
						<td width="8.8888%"><h1
								style="padding-top: 7px; padding-right: 10px; margin-left: 10px; margin-bottom: 5px; text-align: right; font-size: 18px;">帖子内容</h1></td>
						<th colspan="2"><textarea id="editor"
								name="inviattionContent" style="width: 100%; height: 560px;">
	                </textarea> <script type="text/javascript">
																		UE
																				.getEditor('editor');
																	</script></th>
					</tr>

					<tr>
						<td></td>
						<th colspan="2"><button type="submit" class="button">提交
							</button></th>
					</tr>
				</table>
			</form>
		</div>
		<!-- footer-section-ends -->
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