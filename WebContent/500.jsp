<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>程序内部错误</title>
<link href="<%=basePath %>media/error/404/css/404.css" rel="stylesheet" type="text/css">
</head>

<body>

<!-- 代码 开始 -->
<div class="fullScreen" id="fullScreen">
    
    <img class="rotating" src="<%=basePath %>media/error/404/css/spaceman.svg">
    <div class="pagenotfound-text">
    <h1>Error Program was Wrong！程序出错</h1>
    <h2>Sorry，程序内部出现错误！&nbsp; &nbsp;<a href="<%=basePath %>OSAAT/basic/IndexAction.action">返回主页</a></h2>
    </div>
    <canvas id="canvas2d" width="1366" height="622"></canvas>
</div>
<script type="text/javascript" src="<%=basePath %>media/error/404/js/404.js"></script>
<!-- 代码 结束 -->

</body>
</html>