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
<title>户外运动及娱乐部落</title>
<link href="<%=basePath %>media/css/bootstrap.css" rel='stylesheet'
	type='text/css' />

<script src="<%=basePath %>media/js/jquery.min.js"></script>

<link href="<%=basePath %>media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />
<link href="<%=basePath %>media/css/index_content.css" rel="stylesheet" type="text/css" />
<link href="../../media/css/menu.css" rel="stylesheet" type="text/css"  />
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords"
	content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript">
	
	
	
	 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 



</script>

<!-- <link
	href='http://fonts.useso.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic'
	rel='stylesheet' type='text/css'> -->
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
<!-- content-section-starts -->
<div id="content">
    <div id="leftcontent"> 
    
    <!--UL标签class属性必需，图片alt属性值即标题文字-->
    
    <div class="yx-rotaion" style="position: relative; overflow: hidden; width: 560px; height: 305px;">
        <ul class="rotaion_list">
	        <c:forEach items="${newsList}" var="item" varStatus="status">
	        	<c:if test="${status.first}">
	        		<li style="position: absolute; left: 0px; top: 0px; display: list-item;"><a href="${item.sourceUrl }"><img src="<%=basePath %>${item.image}" alt="${item.title}"></a></li>
	        	</c:if>
	        	
	        	<c:if test="${(status.first) != true}">
	        		<li style="position: absolute; left: 0px; top: 0px; display: none;"><a href="${item.sourceUrl }"><img src="<%=basePath %>${item.image}" alt="${item.title}"></a></li>
	        	</c:if>
		      
	        </c:forEach>
      </ul>
        <div class="yx-rotaion-btn"><span class="left_btn"></span><span class="right_btn"></span></div>
        <div class="yx-rotation-title"></div>
        <a href="." class="yx-rotation-t"> </a>
        <div class="yx-rotation-focus"></div>
      </div>
  </div>
    <div id="rightcontent">
    <div id="tab" >
        <div class="tabbed_content">
        <div class="tabs">
            <div class="moving_bg"> &nbsp; </div>
            <span class="tab_item"> 博客 </span> <span class="tab_item"> 论坛 </span> <span class="tab_item"> 游戏 </span> <span class="tab_item"> 资讯 </span> </div>
        <div class="slide_content">
            <div class="tabslider">
            <ul>
            
            	<c:forEach items="${blogList}" var="item" varStatus="status">
            		<li> <a href="${item.sourceUrl}"> ${item.title } </a> </li>
            	</c:forEach>
                
            </ul>
            <ul>
            
                <c:forEach items="${bbsList}" var="item" varStatus="status">
            		<li> <a href="${item.sourceUrl}"> ${item.title } </a> </li>
            	</c:forEach>
            	
             </ul>
            <ul>
                
                <c:forEach items="${gameList}" var="item" varStatus="status" end="4">
            		<li> <a href="${item.sourceUrl}"> ${item.title } </a> </li>
            	</c:forEach>
            	
              </ul>
            <ul>
                
                <c:forEach items="${newsList}" var="item" varStatus="status">
            		<li> <a href="${item.sourceUrl}"> ${item.title } </a> </li>
            	</c:forEach>
            	
              </ul>
          </div>
            <br style="clear: both">
          </div>
      </div>
      </div>
  </div>
  </div>
<div class="clear"></div>

<!-- content-section-starts -->
<div class="content">
    <div class="main">
    <div class="container">
        <div class="blog-content">
        <div class="blog-content-head text-left">
            <h3>最新资讯</h3>
          </div>
        <div class="section group">
            <div class="cont span_2_of_3">
            <c:forEach items="${newsList}" var="item" varStatus="status">
	            <div class="blog_posts">
	                <div class="section group example">
	                <div class="col blog_1_of_2">
	                    <div class="blog_img"> <a href="${item.sourceUrl }"><img src="<%=basePath %>${item.image }" alt=""></a> </div>
	                  </div>
	                <div class="col blogdata_1_of_2">
	                    <div class="blog_heading">
	                    <p><a href="${item.sourceUrl }"><span>${item.title }</span></a></p>
	                    <p class="post">
	                     <a href="#">${item.editorPeople }</a>
	                     	 于<fmt:parseDate value="${item.editorTime }" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /> 发表.
	                    </p>
	                  </div>
	                    <div class="blog_data">
	                    <p>${item.indexAbstract}</p>
	                    <div class="more"> <a href="${item.sourceUrl }" class="btn btn-1 btn-1d">更多详情</a> </div>
	                  </div>
	                  </div>
	                <div class="clearfix"></div>
	              </div>
	                <div class="clearfix"></div>
	              </div>
            </c:forEach>
          </div>
          </div>
      </div>
      </div>
  </div>
  </div>
<div class="clear"></div>
<div id="modelintroduce">
    <div id="modelintroduceinside">
    <div class="panel panel-info">
        <div class="panel-heading">
        <h3 class="panel-title">博客</h3>
      </div>
        <ul class="list-group">
        <c:forEach items="${blogList}" var="item" varStatus="status">
        	<a href="${item.sourceUrl}">
          		<li class="list-group-item">${item.title }</li>
          	</a> 
        </c:forEach>
      </ul>
      </div>
    <div class="panel panel-info">
        <div class="panel-heading">
        <h3 class="panel-title">论坛</h3>
      </div>
        <ul class="list-group">
        <c:forEach items="${bbsList}" var="item" varStatus="status">
        	<a href="${item.sourceUrl}">
          		<li class="list-group-item">${item.title }</li>
          	</a> 
        </c:forEach>
      </ul>
      </div>
    <div class="panel panel-info">
        <div class="panel-heading">
        <h3 class="panel-title">资讯</h3>
      </div>
        <ul class="list-group">
        <c:forEach items="${newsList}" var="item" varStatus="status">
        	<a href="${item.sourceUrl}">
          		<li class="list-group-item">${item.title }</li>
          	</a> 
        </c:forEach>
      </ul>
      </div>
  </div>
  </div>
<div class="clear"></div>
<div class="team" id="team">
    <div class="container">
    <h3 class="title title1">最新游戏</h3>
    <div class="team-info">
	    <c:forEach items="${gameList}" var="item" varStatus="status">
	    	<div class="col-md-3 team-grids wow bounceIn animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: bounceIn;">
	    	 	<a href="${item.sourceUrl}"> 
	    			 <img class="img-responsive" src="<%=basePath %>${item.image}" alt="">
	          			<div class="captn">
	          				<h4>${item.title}</h4>
	          				<p>${item.indexAbstract}</p>
	        			</div>
	          	</a> 
	          </div>
	    </c:forEach>
        
        <div class="clearfix"> </div>
      </div>
  </div>
  </div>

<!-- content-section-ends -->



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
	
	<script src="<%=basePath %>media/js/jquery.taber.js" type="text/javascript"></script> 
	<script type="text/javascript">
	
		$(".yx-rotaion").yx_rotaion({auto:true});
	
	</script>

</body>
</html>