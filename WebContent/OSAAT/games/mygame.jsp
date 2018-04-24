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
<title>游戏搜索</title>
<link href="../../media/css/bootstrap.css" rel='stylesheet'
	type='text/css' />

<script src="../../media/js/jquery.min.js"></script>

<script src="../../media/page/jquery.pager.js" type="text/javascript"></script>

<link href="../../media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />
<link href="../../media/css/menu.css" rel="stylesheet" type="text/css"  />
<link href="../../media/css/mygame.css" rel="stylesheet" type="text/css"  />
<link href="../../media/page/Pager.css" rel="stylesheet" type="text/css">
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords"
	content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />

<script>
		/* $("span.menu").click(function() {
			$(".top-menu").slideToggle("slow", function() {
				// Animation complete.
			});
		}); */
		
		$(document).ready(function() {
			$("#pager").pager({ pagenumber: ${pagenumber}, pagecount: ${pagecount}, buttonClickCallback: PageClick });
		});

		PageClick = function(pageclickednumber) {
			window.location.href = "BlogIndex.action?startPage=" + pageclickednumber;
			
			/*$("#pager").pager({ pagenumber: pageclickednumber, pagecount: 15, buttonClickCallback: PageClick });
		   $("#result").html("Clicked Page " + pageclickednumber);*/
		}
	</script>

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
						<a href="../../OSAAT/basic/Logout.action"><p class="logout">注销</p></a> <a
							href="../../OSAAT/basic/selfInformation.jsp"><p class="username">${sessionScope.username}
								&nbsp;&nbsp;|&nbsp;&nbsp;</p></a>
					</c:if>
					

					<c:if test="${empty sessionScope.username}">
						<div class="nav-account">
							<a href="../../OSAAT/basic/login.jsp" class="nav-account-login" id="nav-login">登录&注册</a>
						</div>
					</c:if>

					</div>
				</div>
			</div>


			<div class="header-bottom">

			<div class="container1">
				<ul class="menu">
					<li id="setlogo"><span><img src="../../media/image/logo.png"></span></li>
					<li><a href="../../OSAAT/basic/IndexAction.action">主页</a></li>

					<li class="active"><a href="../../OSAAT/blog/BlogIndex.action?startPage=1">博客</a>

						<ul class="submenu">

							<li><a href="../../OSAAT/blog/searchBlog.jsp">博客搜索</a></li>

							<li><a href="../../OSAAT/blog/MyBlog.action?startPage=1">我的博客</a></li>

							<li><a href="../../OSAAT/blog/PreAddBlog.action">写博客</a></li>

						</ul>

					</li>

					<li class="active"><a href="../../OSAAT/bbs/InvitationIndex.action?startPage=1">论坛</a>

						<ul class="submenu">

							<li><a href="../../OSAAT/bbs/SectionIndex.action">板块</a></li>

							<li><a href="../../OSAAT/bbs/searchinvitation.jsp">帖子搜索</a></li>

							<li><a href="../../OSAAT/bbs/MyInvitation.action?startPage=1">我的帖子</a></li>

							<li><a href="../../OSAAT/bbs/PreAddInvitation.action">我要发帖</a></li>

						</ul>

					</li>

					<li class="active"><a href="../../OSAAT/games/AllGames.action?startPage=1">小游戏</a>

						<ul class="submenu">

							<li><a href="../../OSAAT/games/searchgame.jsp">游戏搜索</a></li>
							
							<li><a href="../../OSAAT/games/MyGames.action?startPage=1">我的游戏</a></li>
						</ul>

					</li>

					<li class="active"><a href="../../OSAAT/music/MusicIndex.action" target="_blank">音乐</a>
					
					</li>

					<li class="active"><a href="../../OSAAT/search/index.html">搜索</a></li>


				</ul>

		</div>

		</div>


	</div>

<!-- header-section-ends --> 

	<div class="team" id="team">
    <div class="container">
    <h3 class="title title1">我的游戏</h3>
    <div class="team-info">
	    <c:forEach items="${gamelist}" var="item" varStatus="status">
	    	<div class="col-md-3 team-grids wow bounceIn animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: bounceIn;">
	    	 	<a href="<%=basePath %>OSAAT/games/${item.gameUrl}" target="_black"> 
	    			 <img class="img-responsive" src="<%=basePath %>OSAAT/games/${item.gameCoverUrl}" alt="">
	          			<div class="captn">
	          				<h4>${item.gameName}</h4>
	          				<p>${item.gameIntroduce}</p>
	        			</div>
	          	</a> 
	          	<div style="margin: 10px auto 20px auto; vertical-align: middle;"><a href="<%=basePath %>OSAAT/games/DeleteMyGames.action?gameId=${item.gameId}" class="hvr-sweep-to-left button">删  除</a></div>
	          </div>
	          
	    </c:forEach>
       
        
        <div class="clearfix"> </div>
        
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
     
        
      </div>
  </div>
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