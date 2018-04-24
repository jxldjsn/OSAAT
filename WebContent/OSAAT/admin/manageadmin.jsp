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
    <title>管理管理员</title>  
    <link rel="stylesheet" href="css/pintuer.css">
    <link rel="stylesheet" href="css/admin.css">
    <script src="js/jquery.js"></script>
    <script src="js/pintuer.js"></script>  
</head>
<body>
<div class="panel admin-panel">
  <div class="panel-head"><strong class="icon-reorder"> 管理员列表</strong></div>
  <div class="padding border-bottom">  
  <a class="button border-yellow" href="PreAddAdmin.action"><span class="icon-plus-square-o"></span> 添加管理员</a>
  </div> 
  <table class="table table-hover text-center">
    <tr>
      <th width="5%">ID</th>     
      <th>管理员名称</th>  
      <th>密码</th>
      <th>类型</th>
      <th>头像</th>     
      <th width="250">操作</th>
    </tr>
    
   <c:forEach items="${administrators}" var="item" varStatus="status">
    <tr>
      <td>${item.id}</td>      
      <td>${item.name}</td>  
      <td>${item.password}</td>
      <td>${item.roleType}</td>  
      <td>${item.photo}</td>    
      <td>
      <div class="button-group">
      <a type="button" class="button border-main" href="PreAlterAdmin.action?id=${item.id}"> <span class="icon-edit"></span>修改</a>
       <a class="button border-red" href="DeleteAdmin.action?id=${item.id}" onclick="return del()"><span class="icon-trash-o"></span> 删除</a>
      </div>
      </td>
    </tr> 
   </c:forEach>
    
  </table>
</div>
<script>
function del(){
	if(confirm("您确定要删除吗?")){
		return true;
	} else {
		return false;
	}
}
</script>


</body>
</html>