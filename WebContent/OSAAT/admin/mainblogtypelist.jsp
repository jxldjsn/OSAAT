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
    <title>博客类型列表</title>  
    <link rel="stylesheet" href="css/pintuer.css">
    <link rel="stylesheet" href="css/admin.css">
    <script src="js/jquery.js"></script>
    <script src="js/pintuer.js"></script>  
</head>
<body>
<div class="panel admin-panel">
  <div class="panel-head"><strong class="icon-reorder"> 博客类型列表</strong></div>
  <div class="padding border-bottom">  
  <a class="button border-yellow" href="mainblogtypeadd.jsp"><span class="icon-plus-square-o"></span> 添加博客类型</a>
  </div> 
  <table class="table table-hover text-center">
    <tr>
      <th width="5%">类型ID</th>     
      <th>类型名称</th>  
      <th width="250">操作</th>
    </tr>
    
  <c:forEach items="${blogtypelist}" var="item" varStatus="status">
    <tr>
      <td>${item.blogTypeid}</td>      
      <td>${item.blogTypeName}</td>  
      <td>
      <div class="button-group">
      <a type="button" class="button border-main" href="PreAlterBlogType.action?typeid=${item.blogTypeid}&typename=${item.blogTypeName}"> <span class="icon-edit"></span>修改</a>
        </div>
      </td>
    </tr> 
 </c:forEach>
    
  </table>
</div>


</body>
</html>