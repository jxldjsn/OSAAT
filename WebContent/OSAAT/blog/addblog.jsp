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
<title>编写我的博客</title>
<script type="text/javascript">
	function weatherselectradio() {
		
		var resualt = false;
		var blogabstract = UE.getEditor('editor').getContentTxt().substring(0,80);
		document.getElementById('blogAbstract').value = blogabstract;
		/* alert(document.getElementById('blogAbstract').value); */
		var arra = document.getElementsByName("type");
		for (var i = 0; i < arra.length; i++) {
			if (arra[i].checked) {
				resualt = true;
			}
		}
		if (!resualt) {
			alert("对不起，请您选一个博客的标题！");
		}
		
		return resualt;
	}

</script>
<script type="text/javascript" charset="utf-8"
	src="<%=basePath %>ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8"
	src="<%=basePath %>ueditor/ueditor.all.js"></script>
<script type="text/javascript" charset="utf-8"
	src="<%=basePath %>ueditor/lang/zh-cn/zh-cn.js"></script>
<link href="<%=basePath %>media/css/bootstrap.css" rel='stylesheet'
	type='text/css' />
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />
<script src="<%=basePath %>media/js/jquery.min.js"></script>

<link href="<%=basePath %>media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />
<link href="<%=basePath %>media/css/addBlogContent.css" rel="stylesheet"
	type="text/css" />
<link href="<%=basePath %>media/css/menu.css" rel="stylesheet" type="text/css"  />

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords"
	content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript">
	
	
	
	 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 



</script>


<script src="<%=basePath %>media/js/responsiveslides.min.js"></script>
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
<script type="text/javascript" src="<%=basePath %>media/js/move-top.js"></script>
<script type="text/javascript" src="<%=basePath %>media/js/easing.js"></script>
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
		<tr>
			<td width="10%" bgcolor="#28A7CD"></td>
			<td width="80%" bgcolor="#28A7CD">
				<form method="post" action="<%=basePath %>OSAAT/blog/AddBlog.action" onsubmit="return(weatherselectradio());">
					<table width="100%">
						<tr>
							<th colspan="2"><p align="center" id="BlogCenterTitle">编辑我的博客</p></th>
						</tr>
						<tr><th colspan="2"><p align="left">${message}</p></th></tr>
						<tr>
							<td width="10%">博客标题</td>
							<td width="90%"><input type="text" id="Blogtitle"
								name="blogTitle"></td>
						</tr>
						<tr>
						</tr>
						<tr>
							<td width="10%">博客内容</td>
							<td width="90%" height="700px"><textarea id="editor"
									name="blogContent" style="width: 100%; height: 560px;">
	                            </textarea> 
	                            <script type="text/javascript">
										UE.getEditor('editor');
								</script>
							</td>
						</tr>
						
	                    <input type="hidden" id="blogAbstract" name="blogAbstract" value="为什么不能改变？" />
	                            
						<tr>
							<td width="10%">博客类型</td>
							<td width="90%">
								<table width="100%">
									<tr>
										<c:forEach items="${blogtypelist}" var="item"
											varStatus="status">
											<c:if test="${status.count % 10 == 0}">
												<td width="10%" align="center"><input type="radio"
													name="type" class="blogtype" value="${item.blogTypeid}" />${item.blogTypeName}</td>
									</tr>
									<tr>
										</c:if>
											<c:if test="${status.count % 10 != 0}">
												<td width="10%" align="center"><input type="radio"
													name="type" class="blogtype" value="${item.blogTypeid}" />${item.blogTypeName}</td>
											</c:if>
										</c:forEach>
									</tr>
								</table>
							</td>
						</tr>
						<tr height="30px"></tr>
						<tr>
							<th colspan="2" align="center"><input id="submit"
								class="button orange" type="submit" value="提交" ><input
								class="button orange" id="reset" type="reset" value="重置"></th>
						</tr>
						<tr height="50px"></tr>
					</table>
				</form>
			</td>
			<td width="10%" bgcolor="#28A7CD"></td>
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