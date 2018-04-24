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
<title>法律声明</title>
<link href="../../media/css/bootstrap.css" rel='stylesheet'
	type='text/css' />

<script src="../../media/js/jquery.min.js"></script>

<link href="../../media/css/indexstyle.css" rel="stylesheet"
	type="text/css" media="all" />

<link href="<%=basePath %>media/css/menu.css" rel="stylesheet" type="text/css"  />
<link href="../../media/css/foot.css" rel="stylesheet" type="text/css"  />

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords"
	content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />

<style>
			/*---content----*/
.grid1{
	background:#665cbe;
	text-align:center;
	padding: 50px 0px;
}
.grid1 h3{
	font-family: 'gandhi_sansregular';
	color: #FFF;
	font-size: 2.2em;
}
.grid1 img{
	background:#fff;
	padding:3px;
	border-radius: 50%;
}
.grid1 p a,.grid1 p{
	font-family: 'gandhi_sansregular';
	color: #FFF;
	font-size: 1.4em;
	line-height: 1.5em;
}
.grid1 p{
	width: 57%;
	margin:0 auto;
}
.grid1 p a{
	font-size: 1em;
	padding-left: 5px;
	color:#2a323a;
	transition: 0.5s ease;
	-o-transition: 0.5s ease;
	-webkit-transition: 0.5s ease;
}
.grid1 p a:hover{
	color:#FFF;
}
		</style>

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

	<div class="content">
		<div class="grid1" id="me">
			<h3>法律声明</h3>
			<p>版权<br>

     本网站包含之所有内容：文本、图形、LOGO、创意、及软件等之所有权归属户外运动及娱乐部落及本网站的内容/信息提供者，受中国及国际版权法的保护。对本网站上所有内容之复制（意指收集、组合和重新组合），本网站享有排他权并受中国及国际版权法的保护。本网站使用的所有软件的所有权归属于户外运动及娱乐部落或它的软件供应商并受中国及国际版权法的保护。本网站的特有信息经网站许可方能转载，并需标明出处。<br>

 

信息发布条款<br>

    户外运动及娱乐部落只能用于合法目的，即查看信息，网上咨询，用户交流。<br>
    ⑴ 禁止发布的信息中公布短缺或虚假的资料，若发现用户违反了相关使用规定，我们将保留暂停或终止对该用户的服务的权利。
    ⑵ 在本网站发布的所有信息，均不得违反国家及地方政府关于互联网网络信息安全的法规、条例、管理办法及其它相关法律法规的规定；
    ⑶发布的信息内容由发布该信息的用户负责解释，并独立承担由此引发的一切后果和法律责任。
    ⑷本网站有权使用用户通过网站发布的所有信息，同时保留对用户发布信息管理、修改、删除的权利；
    ⑸ 未经本网站授权，禁止用户将本网站的信息用于其它用途。<br>

 

用户隐私条款<br>

     尊重用户个人隐私是户外运动及娱乐部落用户服务的一项基本政策。户外运动及娱乐部落不会在未经合法用户授权时向第三方公开或透露其注册资料及保存在户外运动及娱乐部落用户平台中的非公开内容，但以下情况除外：<br>
    ⑴用户对自身信息保密不当原因，导致用户非公开信息泄露；
    ⑵由于网络线路、黑客攻击、计算机病毒、政府管制等原因造成的资料泄露、丢失、被盗用或被篡改等；
    ⑶有关法律或户外运动及娱乐部落服务管理要求提供用户的个人信息；
    ⑷在紧急情况下为维护用户和公众的生命、财产安全。<br>
    
服务终止条款<br>


     ⑴ 户外运动及娱乐部落有判定用户的行为是否符合本服务条款要求的权利，如果户外运动及娱乐部落认定用户违背了本服务条款的规定，有权立即终止其用户服务并删除其用户信息；
     ⑵ 户外运动及娱乐部落可根据实际情况随时修改、中断或终止用户部份或全部免费服务，并保留不需告之任何用户或第三方的权利。<br>

免责条款<br>


      ⑴ 本网站不保证提供的各项免费服务不会被修改、中断、终止、延迟，也不能保证用户信息资料的绝对完整及安全，对于用户免费服务的被修改、中断、终止、延迟及用户信息资料的丢失，本网站不承担任何责任；
      ⑵ 本网站仅对自身及受呼和浩特市旅游局委托发布信息的真实性、合法性、准确性作担保，不担保除此之外其他用户发布信息内容的真实性、合法性、准确性，其信息内容须由访问者自行确认并承担使用该信息的风险，同时本网站不承担除自身以外其他用户发布不实信息造成的损失和责任。<br>

服务条款的修改和服务修订<br>

    户外运动及娱乐部落有权在必要时修改服务条款，户外运动及娱乐部落用户服务条款一旦发生变动，将会在重要页面上提示修改内容。如果不同意所改动的内容，用户可以主动停止获得的网络服务。如果用户继续享用网络服务，则视为接受服务条款的变动。</p>
			<div>如有疑问请邮件:wangzy666@qq.com</div>
		</div>
	</div>

	
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