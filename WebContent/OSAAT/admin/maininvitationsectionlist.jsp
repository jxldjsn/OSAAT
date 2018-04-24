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
    <title>帖子板块列表</title>  
    <link rel="stylesheet" href="css/pintuer.css">
    <link rel="stylesheet" href="css/admin.css">
    <script src="js/jquery.js"></script>
    <script src="js/pintuer.js"></script>  
</head>
<body>
<div class="panel admin-panel">
  <div class="panel-head"><strong class="icon-reorder"> 板块列表</strong></div>
  <div class="padding border-bottom">  
  <a class="button border-yellow" href="maininvitationsectionadd.jsp"><span class="icon-plus-square-o"></span> 添加板块</a>
  </div> 
  <table class="table table-hover text-center">
    <tr>
      <th width="5%">板块ID</th>     
      <th>板块名称</th>  
      <th>板块介绍</th>
      <th width="250">操作</th>
    </tr>
    
  <c:forEach items="${sectionlist}" var="item" varStatus="status">
    <tr>
      <td>${item.sectionId}</td>      
      <td>${item.sectionName}</td>
      <td>${item.sectionIntroduce}</td>  
      <td>
      <div class="button-group">
      <a type="button" class="button border-main" href="PreUpdateSection.action?sectionid=${item.sectionId}&sectionname=${item.sectionName}&sectionintroduce=${item.sectionIntroduce}"> <span class="icon-edit"></span>修改</a>
        </div>
      </td>
    </tr> 
 </c:forEach>
    
  </table>
</div>


</body>
</html>