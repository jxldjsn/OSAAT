<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
System.out.println("path=" + path);
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!-- <h1>操作失败，请<a href="DiskDemo/login.jsp">返回</a>主页面重试！</h1> -->

<!DOCTYPE html>
<html>
<head>
<title>修改信息</title>
<link href="../../media/css/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="../../media/js/jquery.min.js"></script>
<!-- Custom Theme files -->
<link href="../../media/css/indexstyle.css" rel="stylesheet" type="text/css" media="all" />
<!-- Custom Theme files -->
<!-- navigation -->
<link href="../../media/css/alterinformation.css" rel="stylesheet" type="text/css"  />
<link href="../../media/css/menu.css" rel="stylesheet" type="text/css"  />
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />
<!-- navigation -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--webfont-->

<script src="../../media/js/responsiveslides.min.js"></script>
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

	<!-- header-section-ends -->
	<!-- content-section-starts -->
	<table width="100%">
    	<tr>
        	<td width="8%" bgcolor="#28A7CD"></td>
        	<td width="12%" bgcolor="#28A7CD" valign="top" bordercolordark="#3D3B3B">
            	
            	<table>
                	<tr height="5px"></tr>
                	<tr><td on><p id="selftitle">个人中心</p></td></tr>
                    <tr height="5px"></tr>
                    <tr onMouseOver="this.style.background='#FB060A'" onMouseOut="this.style.background=''">
                    	<td><p class="myinformationmenu"><a href="selfInformation.jsp">我的资料</a></p></td>
                    </tr>
                    <tr height="5"></tr>
                    <tr onMouseOver="this.style.background='#FB060A'" onMouseOut="this.style.background=''">
                    	 <td><p class="myinformationmenu"><a href="alterInformation.jsp">信息修改</a></p></td>
                    </tr>
                    <tr height="5"></tr>
                    <tr onMouseOver="this.style.background='#FB060A'" onMouseOut="this.style.background=''">
                    	<td><p class="myinformationmenu"><a href="alterheadimage.jsp" dropzone="link">头像上传</a></p></td>
                    </tr>
                    <tr onMouseOver="this.style.background='#FB060A'" onMouseOut="this.style.background=''">
                    	<td><p class="myinformationmenu"><a href="alterpassword.jsp" dropzone="link">修改密码</a></p></td>
                    </tr>
                </table>
               
            </td>
            <td width="70%" bgcolor="#28A7CD">
            <script>
				function verifyAge() {
					var bl = false;
					var age = document.getElementById('age').value;  // 根据你的实际情况取相应元素的值
					var mobile = document.getElementById('phone').value;
					var qq = document.getElementById('qq').value;
					// 校验年龄为有效数字
					var reg = new RegExp("^[0-9]*$");
					var regMobile = new RegExp("^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$"); //手机
					var regqq =  new RegExp("^[1-9][0-9]{4,9}$");//qq
					
					if (reg.test(age)) {
						if (age >= 0 && age <=120) {  // 判断年龄是否在0-120间
							if (regMobile.test(mobile)) {
								if (regqq.test(qq)) {
									bl = true;
								} 
							}
						} 
					}
					if (bl == false) {
						alert("您输入的信息有误，请核对后重新输入！");
						return bl;
					} else {
						return bl;
					}
					
				}	
			</script>
            <form action="AlterBasicInformation.action" method="post" onSubmit="return verifyAge()" >
            	<table width="100%">
                	
                        <tr height="90px"><td width="20%" align="right"><p id="pagetitle">个人中心></p></td><td width="80%"><p id="pagetitle"><a href="alterInformation.jsp">信息修改</a></p></td></tr>
                        <tr height="60px"><td width="20%"></td><td width="80%">${result}</td></tr>
                        <tr height="60px"><td width="20%" align="right" class="contentelement">性&nbsp;&nbsp;别:</td>
                            <td width="80%" class="contentcontent">
                                <select id="gender" name="gender" class="inputClass"><option value="男" selected="selected">男</option><option value="女">女</option></select>
                            </td>
                        </tr>
                        <tr height="60px"><td width="20%" align="right" class="contentelement">年&nbsp;&nbsp;龄:</td><td width="80%" class="contentcontent"><input type="text" name="age" id="age" value="${sessionScope.age}"></td></tr>
                        <tr height="60px"><td width="20%" align="right" class="contentelement">地&nbsp;&nbsp;址:</td><td width="80%" class="contentcontent"><input type="text" name="address" id="address" value="${sessionScope.address}"></td></tr>
                        <tr height="60px"><td width="20%" align="right" class="contentelement">电&nbsp;&nbsp;话:</td><td width="80%" class="contentcontent"><input type="text" name="phone" id="phone" value="${sessionScope.phone}"></td></tr>
                        <tr height="60px"><td width="20%" align="right" class="contentelement">Q Q 号码:</td><td width="80%" class="contentcontent"><input type="text" name="qq" id="qq" value="${sessionScope.qq}"></td></tr>
                        <tr height="60px"><td width="20%" align="right" class="contentelement">兴趣爱好:</td><td width="80%" class="contentcontent"><textarea name="hobbies" id="hobbies">${sessionScope.hobbies}</textarea></td></tr>
                        <tr height="10px"><th colspan="2"></th></tr>
                        <tr height="60px"><td width="20%" align="right" class="contentelement">自我介绍:</td><td width="80%" class="contentcontent"><textarea name="introduce" id="introduce">${sessionScope.introduce}</textarea></td></tr>
                        <tr height="20px"><th></th></tr>
                        <tr><td width="20%"></td><td width="80%"><input type="submit" value="提交" class="submitinformation"></td></tr>
                        <tr height="100px"><th colspan="2"></th></tr>
                   
                </table>
            </form>
            </td>
            
            <td width="10%" bgcolor="#28A7CD" valign="top">
            	<table width="100%">
            		<tr height="5"><td align="center"></td></tr>
            		<tr><td align="center">扫一扫网站二维码</td></tr>
            		<tr height="300px"><td><img alt="网站二维码" src="<%=basePath %>HeadPortrait/WZY.png" width="180px" height="180px"></td></tr>
            	</table>
            </td>
        </tr>
    </table>
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