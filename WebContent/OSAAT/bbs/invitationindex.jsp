<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html>
<head>
<title>论坛 主页</title>
<link href="../../media/css/bootstrap.css" rel='stylesheet'
	type='text/css' />

<script src="../../media/js/jquery.min.js"></script>

<link href="../../media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />
<link href="../../media/css/bbsindex.css" rel="stylesheet"
	type="text/css" />
<link href="../../media/css/menu.css" rel="stylesheet"
	type="text/css" />
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />
<link href="../../media/page/Pager.css" rel="stylesheet" type="text/css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords"
	content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript">
	
	
	 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 


</script>

<script src="../../media/js/responsiveslides.min.js"></script>
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
		window.location.href = "InvitationIndex.action?startPage=" + pageclickednumber;
		
		/*$("#pager").pager({ pagenumber: pageclickednumber, pagecount: 15, buttonClickCallback: PageClick });
	   $("#result").html("Clicked Page " + pageclickednumber);*/
	}
</script>
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
		<!--帖子主页内容-->
		<table width="100%">
			<tr height="20px"></tr>
			<tr>
				<td width="5%"></td>
				<th align="left" colspan="3" width="90%" height="40px">论坛专区</th>
				<td width="5%"></td>
			</tr>
			<tr>
				<td width="5%"></td>
				<td width="30%"><div class="topview">
						今日发帖数
						<div class="invitationnum">${TodayCount}</div>
					</div></td>
				<td width="30%"><div class="topview">
						昨日发帖数
						<div class="invitationnum">${YesterdayCount}</div>
					</div></td>
				<td width="30%"><div class="topview">
						总帖数
						<div class="invitationnum">${CountInvitation}</div>
					</div></td>
				<td width="5%"></td>
			</tr>
			<tr height="10px"></tr>
			<tr>
				<td width="5%"></td>
				<th colspan="2" width="60%" valign="top">
					<table width="98%">
						<c:forEach items="${InvitationList}" var="item" varStatus="status">
							<tr class="invitationcontent">

								<td><img src="<%=basePath %>${item.photo}" alt="帖主头像"
									class="tiezhuimg"></td>
								<td><div class="invitationtitle">
										<a href="<%=basePath %>OSAAT/bbs/InvitationDetail.action?invitationId=${item.invitationId}&startPage=1">${item.invitationTitle}</a>
									</div>
									<div class="displaytime">${item.invitationOfPeople}于<fmt:parseDate value="${item.invitationOfDate}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" />发表
										<c:if test="${empty item.replyOfPeople}">  |  此贴暂时无回复 </c:if>
										<c:if test="${not empty item.replyOfPeople}">  |  ${item.replyOfPeople}于<fmt:parseDate value="${item.replyOfTime}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" />回复 </c:if>
									</div></td>
								<td><div class="replycount">${item.invitationReplyCount}</div></td>

							</tr>
						</c:forEach>
						<tr align="left">
							<th colspan="3" width="100%">
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
						<tr class="invitationcontent" height="30px">
						</tr>

					</table>
				</th>
				<td width="30%" valign="top">
					<table width="100%">
						<tr>
							<th colspan="2">
								<div id="invitationbutton">
									<a href="<%=basePath %>OSAAT/bbs/PreAddInvitation.action"><button name="submit" type="submit"
											id="invitationbutton-submit">我要发帖</button></a>
								</div>
							</th>
						</tr>
						<tr height="30px">
							<td width="50%"><p align="left">热门板块</p></td>
							<td width="50%"><a href="<%=basePath %>OSAAT/bbs/SectionIndex.action"><p align="right"
										style="font-size: 10px; color: #0CF;">更多>></p></a></td>
						</tr>

						<tr>
							<td valign="top" width="50%" align="left">
								<table>
									<c:forEach items="${SectionList}" var="item" begin="0" step="2"
										varStatus="status">
										<tr>
											<td><a href="SearchBySectionId.action?startPage=1&sectionId=${item.sectionId}" class="invatationmanu">${item.sectionName}</a></td>
										</tr>
									</c:forEach>
								</table>
							</td>
							<td valign="top" width="50%" align="right">
								<table>
									<c:forEach items="${SectionList}" var="item" begin="1" step="2"
										varStatus="status">
										<tr>
											<td><a href="SearchBySectionId.action?startPage=1&sectionId=${item.sectionId}" class="invatationmanu">${item.sectionName}</a></td>
										</tr>
									</c:forEach>
								</table>
							</td>
						</tr>

					</table>
				</td>
				<td width="5%"></td>
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