<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>户外运动及娱乐部落后台管理中心</title>  
    <link rel="stylesheet" href="css/pintuer.css">
    <link rel="stylesheet" href="css/admin.css">
    <script src="js/jquery.js"></script>   
</head>
<body style="background-color:#f2f9fd;">
<div class="header bg-main">
  <div class="logo margin-big-left fadein-top">
    <h1><img src="<%=basePath%>OSAAT/admin/${sessionScope.adminphoto}" class="radius-circle rotate-hover" height="50" alt="" />户外运动及娱乐部落后台管理中心</h1>
  </div>
  <div class="head-l"><a class="button button-little bg-green" href="<%=basePath%>OSAAT/basic/IndexAction.action" target="_blank"><span class="icon-home"></span> 前台首页</a> &nbsp;&nbsp;<a class="button button-little bg-red" href="<%=basePath%>OSAAT/admin/AdminLogout.action"><span class="icon-power-off"></span> 退出登录</a> </div>
</div>
<div class="leftnav">
  <div class="leftnav-title"><strong><span class="icon-list"></span>菜单列表</strong></div>
  <h2><span class="icon-user"></span>管理员设置</h2>
  <ul style="display:block">
   	<li><a href="<%=basePath%>OSAAT/admin/AdminList.action" target="right"><span class="icon-caret-right"></span>设置管理员</a></li>
  </ul>  
  <h2><span class="icon-pencil-square-o"></span>主页管理</h2>
  <ul>
    <li><a href="<%=basePath%>OSAAT/admin/MainPageList.action?startPage=1" target="right"><span class="icon-caret-right"></span>主页列表</a></li>
  </ul> 
  <h2><span class="icon-pencil-square-o"></span>用户管理</h2>
  <ul>
    <li><a href="<%=basePath%>OSAAT/admin/UserList.action?startPage=1" target="right"><span class="icon-caret-right"></span>用户列表</a></li>
  </ul>
  <h2><span class="icon-pencil-square-o"></span>博客管理</h2>
  <ul>
    <li><a href="<%=basePath%>OSAAT/admin/BlogList.action?startPage=1" target="right"><span class="icon-caret-right"></span>博客列表</a></li>
    <li><a href="<%=basePath%>OSAAT/admin/BlogTypeList.action" target="right"><span class="icon-caret-right"></span>类型列表</a></li>
    <li><a href="<%=basePath%>OSAAT/admin/BlogCommentList.action?startPage=1" target="right"><span class="icon-caret-right"></span>评论列表</a></li>
  </ul> 
  <h2><span class="icon-pencil-square-o"></span>论坛管理</h2>
  <ul>
    <li><a href="<%=basePath%>OSAAT/admin/InvitationList.action?startPage=1" target="right"><span class="icon-caret-right"></span>帖子列表</a></li>
    <li><a href="<%=basePath%>OSAAT/admin/SearchAllSection.action" target="right"><span class="icon-caret-right"></span>板块列表</a></li>
    <li><a href="<%=basePath%>OSAAT/admin/BBSReplyList.action?startPage=1" target="right"><span class="icon-caret-right"></span>评论列表</a></li>
  </ul>
  <h2><span class="icon-pencil-square-o"></span>游戏管理</h2>
  <ul>
    <li><a href="<%=basePath%>OSAAT/admin/GameList.action?startPage=1" target="right"><span class="icon-caret-right"></span>游戏列表</a></li>
    <li><a href="<%=basePath%>OSAAT/admin/GameTypeList.action" target="right"><span class="icon-caret-right"></span>类型列表</a></li>
    <li><a href="<%=basePath%>OSAAT/admin/UserGameList.action?startPage=1" target="right"><span class="icon-caret-right"></span>用户游戏列表</a></li>
  </ul> 
  <h2><span class="icon-pencil-square-o"></span>音乐管理</h2>
  <ul>
    <li><a href="<%=basePath%>OSAAT/admin/MusicList.action?startPage=1" target="right"><span class="icon-caret-right"></span>音乐列表</a></li>
  </ul> 
  <h2><span class="icon-pencil-square-o"></span>资讯管理</h2>
  <ul>
    <li><a href="<%=basePath%>OSAAT/admin/NewsList.action?startPage=1" target="right"><span class="icon-caret-right"></span>资讯列表</a></li>
  </ul>   
</div>
<script type="text/javascript">
$(function(){
  $(".leftnav h2").click(function(){
	  $(this).next().slideToggle(200);	
	  $(this).toggleClass("on"); 
  })
  $(".leftnav ul li a").click(function(){
	    $("#a_leader_txt").text($(this).text());
  		$(".leftnav ul li a").removeClass("on");
		$(this).addClass("on");
  })
});
</script>
<ul class="bread">
  <li><a href="welcome.html" target="right" class="icon-home"> 首页</a></li>
  <li><a href="##" id="a_leader_txt">网站信息</a></li>
</ul>
<div class="admin">
  <iframe scrolling="auto" rameborder="0" src="welcome.html" name="right" width="100%" height="100%"></iframe>
</div>
<div style="text-align:center;">
</div>

</body>
</html>