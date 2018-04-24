<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html>
<head>
<title>博客</title>
<link href="../../media/css/bootstrap.css" rel='stylesheet' type='text/css' />

<script src="../../media/js/jquery.min.js"></script>

<link href="../../media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />
<link href="../../media/css/blogindex.css" rel="stylesheet" type="text/css" />
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
<script src="../../media/page/jquery.pager.js" type="text/javascript"></script>
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


<link href="css/buju.css" rel="stylesheet">
<link href="css/index.css" rel="stylesheet">
<link href="../../media/css/menu.css" rel="stylesheet" type="text/css"  />
 <script type="text/javascript" src="js/sliders.js"></script>


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


	<!-- script for pager -->
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
	
	<article>
    <div class="l_box f_l">
	   <div class="topnews">
		   <h2>
			博客推荐
		   </h2>
	   
		   <c:forEach items="${bloglist}" var="item" varStatus="status">

				<div class="blogs">
				  <figure>
					 <a href="<%=basePath %>OSAAT/blog/BlogDetail.action?blogId=${item.blogId}"><img src="<%=basePath %>${item.photo}" ></a>
				   </figure>
				   <ul>
					 <h3><a href="<%=basePath %>OSAAT/blog/BlogDetail.action?blogId=${item.blogId}" style="float: left;">${item.blogTitle}</a><span style="color: deeppink;"><img src="../../media/image/dianzhan.png"  style="width: 20px; height: 20px; float: left; margin-left: 20px;">${item.blogPraise}</span></h3>
					  <p>${item.blogAbstract}</p>
					 <p class="autor">
						<span class="lm f_l">
							<a>${item.blogType}</a>
						 </span>
						 <span class="dtime f_l"><fmt:parseDate value="${item.createTime}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /></span>
						 <span class="viewnum f_r">
							浏览（<a>${item.blogbrowse}</a>）</span>
						 <span class="pingl f_r">	
							评论（<a>${item.blogComment}</a>）</span>
					  </p>
				   </ul>
			   </div>

		   </c:forEach>
	       
	   </div>
	   
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
	 
   
    <div class="r_box f_r">
	   <div class="tab" id="lp_right_select">
	   
	   
	   <script type="text/javascript">
			$(document).ready(function(e) {
				$(".tab1 li").click(function(){
					$(".tab1 li").eq($(this).index()).addClass("activ").siblings().removeClass("activ");
					$(".tabCon div").hide().eq($(this).index()).show();
				})
			});
	   </script>
	   
	   
	   
	   
	   <div class="warpbox">
    <!--# 选项卡 -->
        <div class="table_card">
            <ul class="tab1">
               <li class="activ">最新</li>
               <li>浏览排行</li>
               <li>点赞排行</li>
            </ul>
            <div class="tabCon">
                <div class="on">
                    <ul class="newslist01">
                        <c:forEach items="${newestblogList}" var="item" varStatus="status">
                        	<li><a href="<%=basePath %>OSAAT/blog/BlogDetail.action?blogId=${item.blogId}"><span>【${item.blogType}】</span>${item.blogTitle} </a></li>
						</c:forEach>
                    </ul>
                </div>
                <div>
                    <ul class="newslist01">
                       <c:forEach items="${hotbrowseblogList}" var="item" varStatus="status">
                        	<li><a href="<%=basePath %>OSAAT/blog/BlogDetail.action?blogId=${item.blogId}"><span>【${item.blogType}】</span>${item.blogTitle} </a></li>
					   </c:forEach>
                    </ul>
                </div>
                <div>
                    <ul class="newslist01">
                       
                       <c:forEach items="${hotpraiseblogList}" var="item" varStatus="status">
                        	<li><a href="<%=basePath %>OSAAT/blog/BlogDetail.action?blogId=${item.blogId}"><span>【${item.blogType}】</span>${item.blogTitle} </a></li>
					   </c:forEach>
                    </ul>
                </div>
            </div>
        </div>
	<!--#@ 选项卡 -->
</div>
	   

	   </div>
	   <div class="cloud">
	     <h3>标签云</h3>
		  <ul>
	     		<c:forEach items="${allblogtypeList}" var="item" varStatus="status">
                      <li><a href="<%=basePath %>OSAAT/blog/SelectBlogByType.action?startPage=1&blogTypeid=${item.blogTypeid}">${item.blogTypeName} </a></li>
				</c:forEach>
		  </ul>
	   </div>
	   <div class="tuwen">
	     <h3>游泳</h3>
		 <ul>
	   		<c:forEach items="${blogSwingList}" var="item" varStatus="status">
                      
                      <li><a href="<%=basePath %>OSAAT/blog/BlogDetail.action?blogId=${item.blogId}"><img src="<%=basePath %>${item.photo}"><b>${item.blogTitle}</b></a>
		      		  <p>
			      			<span class="tulanum"><a href="<%=basePath %>OSAAT/blog/SelectBlogByType.action?blogTypeid=${item.blogType}">${item.blogType}</a></span>
				   			<span class="tutime"><fmt:parseDate value="${item.createTime}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /></span>
			   		  </p>
		   			  </li>
                      
			</c:forEach>
		  
		 </ul>
		 
		 
		 
		 <h3>陆地徒步</h3>
		 <ul>
		   <c:forEach items="${blogWorkingList}" var="item" varStatus="status">
                      
                      <li><a href="<%=basePath %>OSAAT/blog/BlogDetail.action?blogId=${item.blogId}"><img src="<%=basePath %>${item.photo}"><b>${item.blogTitle}</b></a>
		      		  <p>
			      			<span class="tulanum"><a href="<%=basePath %>OSAAT/blog/SelectBlogByType.action?blogTypeid=${item.blogType}">${item.blogType}</a></span>
				   			<span class="tutime"><fmt:parseDate value="${item.createTime}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /></span>
			   		  </p>
		   			  </li>
                      
			</c:forEach>
		 </ul>
		 
		 
		 <h3>登山</h3>
		 <ul>
		   <c:forEach items="${blogMountainClimbingList}" var="item" varStatus="status">
                      
                      <li><a href="<%=basePath %>OSAAT/blog/BlogDetail.action?blogId=${item.blogId}"><img src="<%=basePath %>${item.photo}"><b>${item.blogTitle}</b></a>
		      		  <p>
			      			<span class="tulanum"><a href="<%=basePath %>OSAAT/blog/SelectBlogByType.action?blogTypeid=${item.blogType}">${item.blogType}</a></span>
				   			<span class="tutime"><fmt:parseDate value="${item.createTime}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /></span>
			   		  </p>
		   			  </li>
                      
			</c:forEach>
		 </ul>
		 
		 
		 <h3>球类</h3>
		 <ul>
		   <c:forEach items="${blogBallList}" var="item" varStatus="status">
                      
                      <li><a href="<%=basePath %>OSAAT/blog/BlogDetail.action?blogId=${item.blogId}"><img src="<%=basePath %>${item.photo}"><b>${item.blogTitle}</b></a>
		      		  <p>
			      			<span class="tulanum"><a href="<%=basePath %>OSAAT/blog/SelectBlogByType.action?blogTypeid=${item.blogType}">${item.blogType}</a></span>
				   			<span class="tutime"><fmt:parseDate value="${item.createTime}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /></span>
			   		  </p>
		   			  </li>
                      
			</c:forEach>
		 </ul>
		 
		 
		 <h3>娱乐休闲</h3>
		 <ul>
		   <c:forEach items="${blogEntertainmentList}" var="item" varStatus="status">
                      
                      <li><a href="<%=basePath %>OSAAT/blog/BlogDetail.action?blogId=${item.blogId}"><img src="<%=basePath %>${item.photo}"><b>${item.blogTitle}</b></a>
		      		  <p>
			      			<span class="tulanum"><a href="<%=basePath %>OSAAT/blog/SelectBlogByType.action?blogTypeid=${item.blogType}">${item.blogType}</a></span>
				   			<span class="tutime"><fmt:parseDate value="${item.createTime}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /></span>
			   		  </p>
		   			  </li>
                      
			</c:forEach>
		 </ul>
		 
		 
	   </div>
	   <div class="ad"><img src="images/03.jpg" width="300px"></div>
	   
	 </div>
  </article>
  <br style="clear: both">
	
	<!-- footer-section-ends -->
	<!-- footer-section-start -->
	
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="share-coin text-center" style="margin-left:26%">
					<a class="button_zhihu" style="margin: 30px 15px; float:left;" href="https://www.zhihu.com/signin?next=%2Fpeople%2Fjiu-xiang-li-de-jiu-shao-nian-8" target="_blank"><img onMouseOver="this.src='../../media/image/footer/zhihu_hover.png'" onMouseOut="this.src='../../media/image/footer/zhihu_default.png'" src="../../media/image/footer/zhihu_default.png"></a>
					<a class="button_github"  style="margin: 30px 15px;float:left;" href="https://github.com/jxldjsn" target="_blank"><img onMouseOver="this.src='../../media/image/footer/github_hover.png'" onMouseOut="this.src='../../media/image/footer/github_default.png'" src="../../media/image/footer/github_default.png"></a>
					<a class="button_qzone"  style="margin: 30px 15px;float:left;" href="https://user.qzone.qq.com/736250930/infocenter?ptsig=KDPH7ORo72WLAc9PaJs3e-udP5IeCViBZ9TFjgkjlLE_" target="_blank"><img onMouseOver="this.src='../../media/image/footer/qqzone_hover.png'" onMouseOut="this.src='../../media/image/footer/qqzone_default.png'" src="../../media/image/footer/qqzone_default.png"></a>
					<a class="button_tqq"  style="margin: 30px 15px;float:left;" href="http://t.qq.com/tianyaguniao7257" target="_blank"><img onMouseOver="this.src='../../media/image/footer/txweibo_hover.png'" onMouseOut="this.src='../../media/image/footer/txweibo_default.png'" src="../../media/image/footer/txweibo_default.png"></a>
					<a class="button_tsina"  style="margin: 30px 15px;float:left;" href="http://weibo.com/u/3845589045?topnav=1&wvr=6&topsug=1&is_all=1" target="_blank"><img onMouseOver="this.src='../../media/image/footer/sinaweibo_hover.png'" onMouseOut="this.src='../../media/image/footer/sinaweibo_default.png'" src="../../media/image/footer/sinaweibo_default.png"></a>
				</div>
				<br style="clear: both">
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