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
<title>博客搜索</title>
<link href="../../media/css/bootstrap.css" rel='stylesheet' type='text/css' />
<script src="<%=basePath %>media/js/jquery.min.js" type="text/javascript"></script>

<link href="../../media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />
<link href="../../media/css/search.css" rel="stylesheet" type="text/css" />
<link href="../../media/css/searchresult.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath %>media/css/menu.css" rel="stylesheet" type="text/css"  />
<link href="<%=basePath %>media/page/Pager.css" rel="stylesheet" type="text/css">
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords"
	content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />


<script src="<%=basePath %>media/page/jquery.pager.js" type="text/javascript"></script>
</head>
<body>
<input type="hidden" value="${blogkey}" id="blogkey">
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

<!-- 主体-->
<div class="container">

  <div style="width:100%; margin-left:-22%;">
    <form class="search" method="post" action="<%=basePath %>OSAAT/blog/SearchBlogByTitle.action">
      <input type="search" placeholder="请输入关键字进行搜索..." required name="blogkey">
      <input type="hidden" name="startPage" value="1">
      <button type="submit">博客搜索</button>
    </form>
  </div>
  
  <div class="component">
    <div class="sticky-wrap">
      <table class="sticky-enabled" style="margin: 0px; width: 100%;">
        <thead>
          <tr>
            <th>序号</th>
            <th>标题</th>
            <th>发博时间</th>
            <th>博客类型</th>
          </tr>
        </thead>
        <tbody>
	        <c:forEach items="${BlogList}" var="item" varStatus="status">
	          <tr>
	            <td class="user-name" width="15%">${status.count}</td>
	            <td class="user-email" width="50%"><a href="<%=basePath %>OSAAT/blog/BlogDetail.action?blogId=${item.blogId}">${item.blogTitle}</a></td>
	            <td class="user-phone" width="20%">${item.createTime}</td>
	            <td class="user-mobile" width="15%">${item.blogType}</td>
	          </tr>
	        </c:forEach>
        </tbody>
      </table>
      
      <!-- <div style="width: 100%;">
	                        <div>
								<div>
									<div id="pager"><ul class="pages"><li class="pgNext pgEmpty">首页</li><li class="pgNext pgEmpty">上一页</li><li class="page-number pgCurrent">1</li><li class="page-number">2</li><li class="page-number">3</li><li class="page-number">4</li><li class="page-number">5</li><li class="pgNext">下一页</li><li class="pgNext">末页</li></ul></div>
								</div>
	                        </div>
	                        <div style="height: 20px;"></div>
     
      </div> -->
      <script>

		$(document).ready(function() {
			$("#pager").pager({ pagenumber: ${pagenumber}, pagecount: ${pagecount}, buttonClickCallback: PageClick });
		});
		
		PageClick = function(pageclickednumber) {

			window.location.href = "SearchBlogByTitle.action?blogkey=" + $("#blogkey").val() + "&startPage=" + pageclickednumber;
		}
	  </script>
      
      <table width="100%">
	                        <tr><th colspan="4" bgcolor="#FDFDFD" align="center">
	                        	<div id="pager"><ul class="pages"><li class="pgNext pgEmpty">首页</li><li class="pgNext pgEmpty">上一页</li><li class="page-number pgCurrent">1</li><li class="page-number">2</li><li class="page-number">3</li><li class="page-number">4</li><li class="page-number">5</li><li class="pgNext">下一页</li><li class="pgNext">末页</li></ul></div>
	                        </th></tr>
	                        <tr height="20px"><th colspan="4" bgcolor="#FDFDFD"></th></tr>
      </table>
    </div>
  </div>
</div>
<!--主体结束--> 
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