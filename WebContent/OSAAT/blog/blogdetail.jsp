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
<title>博客详情</title>

<script type="text/javascript" charset="utf-8"
	src="<%=basePath%>ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8"
	src="<%=basePath%>ueditor/ueditor.all.min.js"></script>
<script type="text/javascript" charset="utf-8"
	src="<%=basePath%>ueditor/lang/zh-cn/zh-cn.js"></script>
<link href="<%=basePath%>media/css/bootstrap.css" rel='stylesheet'
	type='text/css' />

<script src="<%=basePath%>media/js/jquery.min.js"></script>

<link href="<%=basePath%>media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />
<!--<link href="<%=basePath%>media/css/bootstrap.min.css" rel="stylesheet"
	media="screen">
 <link rel="stylesheet" href="../../media/css/reset.css"> -->
<link href="<%=basePath%>media/css/BlogDetail.css" rel="stylesheet"
	type="text/css" />
<link href="<%=basePath %>media/css/menu.css" rel="stylesheet" type="text/css"  />
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />
<!--  <link href="../../ueditor/dialogs/video/video.css" rel="stylesheet"
	type="text/css" />-->

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords"
	content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript">
	
	
	
	 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 



</script>


<script src="<%=basePath%>media/js/responsiveslides.min.js"></script>
<!--<script src="<%=basePath%>ueditor/dialogs/video/video.js"></script>-->
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
<script type="text/javascript" src="../../media/js/move-top.js"></script>
<script type="text/javascript" src="../../media/js/easing.js"></script>
<script type="text/javascript" src="../../media/js/jquery-browser.js"></script>
<script type="text/javascript" src="../../media/js/jquery.qqFace.js"></script>
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
	
	<!-- 内容编辑区 -->

	<table width="100%">
		<!-- 文章主题-->
		<tr>
			<td width="15%" bgcolor="#ffffff"></td>
			<td width="70%" bgcolor="#ffffff">
				<table width="100%">
					<tr>
						<td><p align="left" id="pageTitle">博客详情</p></td>
					</tr>
					<tr>
						<td><p align="center" id="blogTitle">${blog.blogTitle}</p></td>
					</tr>
					<tr height="30px"></tr>
					<tr height="30px">
						<td>
							<table width="100%">
								<tr>
									<td width="55%"></td>
									<td width="30%">创建日期：<fmt:parseDate value="${blog.blogDate}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /> </td>
									<td width="15%">作者：${authorName}</td>
								</tr>
							</table>
						</td>
					</tr>
					
					<tr height="30px"></tr>
					<tr bgcolor="#FFFFFF">
						<td><p id="blogContent">${blog.blogContent}</p></td>
						</script>
						</td>
					</tr>
					<tr height="50px">
						<td><p align="left">博客类型：${blogTypeName}</p></td>
					</tr>
					<tr height="60px">
						<form action="<%=basePath%>OSAAT/blog/PraiseBlog.action" method="post">
							<input type="hidden" name="blogId" value="${blog.blogId}">
							<td><p align="center">
									<input type="submit" value="赞：${blog.blogPraise}"
										class="praiseButton">
								</p></td>
						</form>
					</tr>
					<tr height="50px"></tr>
				</table>
			</td>
			<td width="15%" bgcolor="#ffffff"></td>
		</tr>

		<!--评论信息-->
		<tr>
			<td width="15%" bgcolor="#EEF0F1"></td>

			<td width="70%" bgcolor="#EEF0F1">
				<table width="100%">
					<tr height="20px">
						<td class="commenttitle">评论信息</td>
					</tr>
					<tr height="20px"></tr>
					<c:forEach items="${blogCommentList}" var="item" varStatus="status">
						<tr class="allcommit">
							<td width="20%" align="center">
								<table>
									<tr>
										<td align="center"><img alt="评论人头像"
											src="<%=basePath %>${item.photo}" width="100px"
											height="100px"></td>
									</tr>
									<tr>
										<td align="center" class="communtname">${item.username}</td>
									</tr>
									<tr>
										<td align="center"><fmt:parseDate value="${item.commentTime}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /></td>
									</tr>
								</table>
							</td>
							<td width="80%" align="left" valign="top" bgcolor="#F9FAF9">
								<p class="conmitcontent">${item.commentContent}</p>
							</td>
						</tr>
						<tr height="20px"></tr>
					</c:forEach>
				</table>
			</td>

			<td width="15%" bgcolor="#EEF0F1"></td>
		</tr>

		<!--用户评论-->
		<tr>
			<td width="15%" bgcolor="#EEF0F1"></td>

			<td width="70%" bgcolor="#EEF0F1">
				<form action="<%=basePath%>OSAAT/blog/AddComment.action" method="post"
					onSubmit="changetextarea()">
					<input type="hidden" name="blogId" value="${blog.blogId}">
					<input type="hidden" id="CommentContent" name="addCommentContent" >
					<h4 class="commenttitle">添加新评论:</h4>
					<div class="comment">
						<div class="com_form">
							<textarea class="input" id="altercommunt" name="commentContent"></textarea>
							<p>
								<span class="emotion">☺</span><input type="submit"
									class="commitButton" value="提交">
							</p>
						</div>
					</div>
				</form>
			</td>

			<td width="15%" bgcolor="#EEF0F1"></td>
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

	<script type="text/javascript">
		$(function() {
			$('.emotion').qqFace({
				id : 'facebox',
				assign : 'altercommunt',
				path : '<%=basePath%>media/image/emotion/' //表情存放的路径
			});
		});
		//查看结果
		function changetextarea() {
			var str = $("#altercommunt").val();
			str = str.replace(/\</g, '&lt;');
			str = str.replace(/\>/g, '&gt;');
			str = str.replace(/\n/g, '<br/>');
			str = str
					.replace(/\[em_([0-9]*)\]/g,
							'<img src="<%=basePath%>media/image/emotion/$1.gif" border="0" />');
			$("#CommentContent").val(str);

		}
		</script>

		</body>
		</html>
	