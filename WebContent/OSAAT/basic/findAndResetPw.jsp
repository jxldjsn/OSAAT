<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!-- <h1>操作失败，请<a href="DiskDemo/login.jsp">返回</a>主页面重试！</h1> -->

<!DOCTYPE html>
<html>
  <head>
  <title>户外运动及娱乐部落用户找回密码</title>
  <link href="../../media/css/bootstrap.css" rel='stylesheet' type='text/css' />
  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="../../media/js/jquery.min.js"></script>
  <!-- Custom Theme files -->
  <link href="../../media/css/indexstyle.css" rel="stylesheet" type="text/css" media="all" />
  <!-- Custom Theme files -->
  <!-- navigation -->
  <link href="../../media/css/findPw.css" rel="stylesheet" type="text/css"  />
  <link href="../../media/css/menu.css" rel="stylesheet" type="text/css"  />
  <link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />
  <!-- navigation -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="keywords" content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
  <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
  <!--webfont-->
  
 <script>
    $(function () {
      $("#slider").responsiveSlides({
      	auto: true,
      	speed: 500,
        namespace: "callbacks",
        pager: true,
      });
    });
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
<div class="content" style="background-color: #F4F4F4;">
    <div class="container m0 bod top70" id="zt" style="padding-top: 20px; padding-bottom: 30px;">
    <div class="pwd">
        <form action="FindResetPw.action" method="post" onSubmit="return sc();">
       
        <div class="page-header">
            <h3>户外运动及娱乐部落--重设密码</h3>
            <h4 style="margin-top: 20px;color: #DB0EA0">${findAndResetPwError}</h4>
          </div>

	<input type="text" class="form-control newpwd" name="username" value="${username}" readonly>

        <h5 class="pwpd1">密码长度太短,请输入3位以上的密码</h5>
        <input type="password" class="form-control newpwd" name="password" id="eml" placeholder="请输入新的密码" onblur="emailgs()">
        <h5 class="pwpd2">两次输入的密码不一致</h5>
        <div class="input-group">
            <input type="password" class="form-control" id="emlpd" name="repassword" placeholder="确认密码" onblur="emaip2()">
            <span class="input-group-btn1">
          		<input id="Button1" class="btn btn-default pwdbut" type="submit" value="修改密码">
          	</span> 
        </div>
        <!-- /input-group -->
        
      </form>
      </div>
  </div>
    <script type="text/javascript">
        var m = 0;
        
        function sc() {

            if (m == 1 && $("#eml").val() == $("#emlpd").val()) {
                return true;
            } else {
				return false;
            }
            
        }

        function emailgs() {
            var mpwd1 = $("#eml").val();
            if (mpwd1.length< 3) {
                $("#eml").addClass("err");
                $("#eml").attr('placeholder', '密码长度太短')
                $(".pwpd1").css("display", "block")
                m = 0;
            } 
            else if (mpwd1.length > 30) {
                $("#eml").addClass("err");
                $("#eml").attr('placeholder', '密码长度太长了.')
                m = 0;
            }
            else
            {
                m = 1;
                $("#eml").removeClass("err");
                $(".pwpd1").css("display", "none")
            }

        }
        function emaip2() {
            if ($("#eml").val() == $("#emlpd").val()) {
                $(".pwpd2").css("display", "none")
            } else {
                $(".pwpd2").css("display", "block")
            }
        }
    </script> 
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
</body>
</html>