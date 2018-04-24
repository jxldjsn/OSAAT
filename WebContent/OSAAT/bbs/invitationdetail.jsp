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
<title>帖子详情</title>
<link href="../../media/css/bootstrap.css" rel="stylesheet"
	type="text/css" />

<script src="../../media/js/jquery.min.js"></script>

<link href="../../media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />
<link href="../../media/css/bbsdetail.css" rel="stylesheet"
	type="text/css" />
<link href="../../media/css/menu.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css"
	href="../../media/simpleeditor/css/wangEditor.min.css">
<link href="../../media/page/Pager.css" rel="stylesheet" type="text/css">
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />
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
		$("#pager").pager({ pagenumber: ${pagenumber}, pagecount: ${CountInvitationReply}, buttonClickCallback: PageClick });
	});

	PageClick = function(pageclickednumber) {

		window.location.href = "InvitationDetail.action?invitationId=" + $("#invitationId").val() + "&startPage=" + pageclickednumber;
		
		/*$("#pager").pager({ pagenumber: pageclickednumber, pagecount: 15, buttonClickCallback: PageClick });
	   $("#result").html("Clicked Page " + pageclickednumber);*/
	}
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
		<!-- header-section-ends -->
		<!-- content-section-starts -->
		<div class="content">
			<div class="main">
				<div class="container">
					<div class="blog-content">
						<div class="blog-content-head text-left">
							<h3>帖子详情</h3>
						</div>
						<div class="section group">
							<div class="cont span_2_of_3">
								<div class="blog_desc">
									<div class="section group example">
										<div class="col blog_detail_1_of_2">
											<div class="blogdetail_img">
												<img src="<%=basePath %>${invitation.userPhoto}" alt="用戶头像">
											</div>
											<div class="author">
												<div class="authorInformation">
													<span>姓名：</span>${invitation.username}
												</div>
												<div class="authorInformation">
													<span>等级：</span>初出茅庐
												</div>
												<div class="authorInformation">
													<span>积分：</span>${invitation.userIntegral}
												</div>
											</div>
										</div>
										<div class="col blogdetaildata_1_of_2">
											<div class="blog_heading">
												<p>
													<span>${invitation.invitationName }</span>
												</p>
												<p class="post">${invitation.username}于<fmt:parseDate value="${invitation.invitationTime}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" />发表</p>
											</div>
											<div class="blog_data">
												<p>${invitation.invitationContent}</p>
											</div>
										</div>
										<div class="clearfix"></div>
									</div>
									<div class="clearfix"></div>
								</div>
								<div class="single">
									<div class="clearfix"></div>
									<div class="leave">
										<h4>添加评论</h4>
									</div>
									<form id="commentform" method="post" action="<%=basePath %>OSAAT/bbs/AddComment.action">
										<input type="hidden" value="${invitation.invitationId}" name="invitationId" id="invitationId">
										<p class="comment-form-comment">
										<div id="editor-container" class="container">
											<!--<div id="editor-trigger"><p>请输入内容</p></div>-->
											<textarea id="editor-trigger" name="commentcontent"
												style="height: 260px; max-height: 500px; width: 100%;">
                                <p></p>
                            </textarea>
										</div>
										<!--<textarea></textarea>-->
										</p>
										<div class="clearfix"></div>
										<p class="form-submit">
											<input name="submit" type="submit" id="submit" value="提交">
										</p>
										<div class="clearfix"></div>
									</form>
									<div class="comments1">
										<h4>评论</h4>
										
										<c:forEach items="${replyList}" var="item" varStatus="status">
											<div class="comments-main">
												<div class="col-md-2 cmts-main-left">
													<img src="<%=basePath %>${item.replyUserPhoto}" width="150px"
														height="120px" alt="">
													<div>姓名：${item.replyUserName}</div>
													<div>等级：金鹰不对</div>
													<div>积分：${item.replyUserIntegral}分</div>
												</div>
												<div class="col-md-10 cmts-main-right">
													<h5>${item.replyUserName}</h5>
													<p>${item.replyContent}</p>
													<div class="cmts">
														<div class="col-md-6 cmnts-left">
															<p>回复于<fmt:parseDate value="${item.replyTime}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /></p>
														</div>
	
														<div class="clearfix"></div>
													</div>
												</div>
												<div class="clearfix"></div>
											</div>
										</c:forEach>

									</div>
								</div>
							</div>
						</div>
						<div class="clearfix"></div>
						<div class="content-pagenation">
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
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- content-section-ends -->
		<!-- footer-section-starts -->
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
		<!-- footer-section-ends -->
		<script type="text/javascript">
						$(document).ready(function() {
							/*
							var defaults = {
					  			containerID: 'toTop', // fading element id
								containerHoverID: 'toTopHover', // fading element hover id
								scrollSpeed: 1200,
								easingType: 'linear' 
					 		};
							*/
							
							$().UItoTop({ easingType: 'easeOutQuart' });
							
						});
					</script>
		<a href="#" id="toTop" style="display: block;"> <span
			id="toTopHover" style="opacity: 1;"> </span></a>

		<script type="text/javascript"
			src="../../media/simpleeditor/js/wangEditor.js"></script>
		<script type="text/javascript">
		//$(document).ready(function(){ 
		 //	var location = (window.location+'').split('/'); 
		//	var basePath = location[0]+'//'+location[2]+'/'+location[3] + '/'; 
		//	alert(basePath);
		//}); 
     	var editor = new wangEditor('editor-trigger');
		 editor.create();
		 
		
     </script>
</body>
</html>