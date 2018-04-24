<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html>
<head>
<title>我的帖子</title>
<link href="<%=basePath %>media/css/bootstrap.css" rel='stylesheet'
	type='text/css' />

<script src="<%=basePath %>media/js/jquery.min.js"></script>

<link href="<%=basePath %>media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />
<link href="<%=basePath %>media/css/MyBlog.css" rel="stylesheet" type="text/css" />
<link href="../../media/page/Pager.css" rel="stylesheet" type="text/css">
<link href="../../media/css/menu.css" rel="stylesheet"
	type="text/css" />
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords"
	content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript">
	
	
	 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 


</script>

<script src="<%=basePath %>media/js/responsiveslides.min.js"></script>
<script src="<%=basePath %>media/page/jquery.pager.js" type="text/javascript"></script>
<script>
	$(function() {
		$("#slider").responsiveSlides({
			auto : true,
			speed : 500,
			namespace : "callbacks",
			pager : true,
		});
	});
	
	$(document).ready(function() {
		$("#pager").pager({ pagenumber: ${pagenumber}, pagecount: ${CountInvitationPage}, buttonClickCallback: PageClick });
	});

	PageClick = function(pageclickednumber) {
		window.location.href = "MyInvitation.action?startPage=" + pageclickednumber;
		
	}
</script>
<script type="text/javascript" src="<%=basePath %>media/js/move-top.js"></script>
<script type="text/javascript" src="<%=basePath %>media/js/easing.js"></script>
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
	
	
	<!-- 内容编辑区 -->

	<table width="100%">
		<tr>
			<td width="15%" bgcolor="#28A7CD">
				<table>
					<tr>
						<td></td>
					</tr>
					<tr></tr>
				</table>
			</td>
			<td width="70%" bgcolor="#28A7CD">
				<!--<form action="AddBlog.action" method="post">-->
				<table width="100%">
					<tr>
						<th colspan="3"><p align="center" id="MyBlog">我的帖子</p></th>
					</tr>
					<tr height="60px">
						<td width="20%" align="center" id="blognumber">序号</td>
						<td width="60%" align="center" id="blogtitle">标题</td>
						<td width="20%" align="center" id="operating">操作</td>
					</tr>
					<c:forEach items="${myInvitationList}" var="item"
											varStatus="status">
					<tr>
						<th colspan="3">
							<table width="100%" border="1">
								<tr onMouseOver="this.style.background='#13E1CB'"
									onMouseOut="this.style.background=''" height="50px">
									<td width="20%" align="center" class="content-number">${status.count}</td>
									<td width="60%" align="center" class="content-content"><a
										href="<%=basePath %>OSAAT/bbs/InvitationDetail.action?invitationId=${item.invitationId}&startPage=1" onMouseOver="this.style.color='#6B12D9'"
										onMouseOut="this.style.color=''">${item.invitationName}</a></td>
									<td width="20%" align="center">
										<table width="100%">
											<tr>
												<form action="<%=basePath %>OSAAT/bbs/MyInvitationDelete.action" method="post">
													<input type="hidden" name="invitationId" value="${item.invitationId}">
													<td align="center" width="50%"><input type="submit"
														value="删除" class="blogminibutton"></td>
												</form>
												<%-- <form action="<%=basePath %>OSAAT/blog/PreMyBlogAlter.action" method="post">
													<input type="hidden" name="blogId" value="${item.bolgId}">
													<td align="center" width="50%"><input type="submit"
														value="编辑" class="blogminibutton"></td>
												</form> --%>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</th>
					</tr>
					</c:forEach>
					<tr height="100px">
					<th colspan="3">
						<div id="pagination">
									<div id="pager">
										<ul class="pages">
											<li class="pgNext pgEmpty">首页</li>
											<li class="pgNext pgEmpty">上一页</li>
											<li class="page-number pgCurrent">1</li>
											<li class="page-number">2</li>
											<li class="page-number">3</li>
											<li class="page-number">4</li>
											<li class="page-number">5</li>
											<li class="pgNext">下一页</li>
											<li class="pgNext">末页</li>
										</ul>
									</div>
								</div>
					</th>
					</tr>
				</table> <!--</form>-->
			</td>
			<td width="15%" bgcolor="#28A7CD" align="right">
				<table>
					<tr>
						<td></td>
					</tr>
					<tr></tr>
				</table>
			</td>
		</tr>
	</table>
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