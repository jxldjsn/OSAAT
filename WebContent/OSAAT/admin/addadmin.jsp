<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>添加管理员</title>
<link rel="stylesheet" href="css/pintuer.css">
    <link rel="stylesheet" href="css/admin.css">
</head>

<body>

	<div class="panel admin-panel margin-top" id="adduser">
  <div class="panel-head" id="add"><strong><span class="icon-pencil-square-o"></span>增加管理员</strong></div>
  <div class="body-content">
    <form method="post" class="form-x" action="AddAdmin.action">   
      
      <div class="form-group">
        <div class="label">
          <label>管理员类型：</label>
        </div>
        <div class="field">
        <select name="role" id="role" class="ui-select">
        	<c:forEach items="${roleList}" var="item" varStatus="status">
									<c:if test="${status.first}">
										<option selected value="${item.id}">${item.roleName}</option>
									</c:if>
									<c:if test="${!(status.first)}">
										<option value="${item.id}">${item.roleName}</option>
									</c:if>
			</c:forEach>
         </select>
        </div>
     </div>
       
      <div class="form-group">
        <div class="label">
          <label>管理员姓名：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" name="name" value="" data-validate="required:请输入姓名" placeholder="请输入姓名" />         
          <div class="tips">${Tips}</div>
        </div>
      </div>
      
      <div class="form-group">
        <div class="label">
          <label>管理员头像：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" name="photo" value="" placeholder="请输入头像路径" />
          <div class="tips">路径格式：“image/head/2.jpg”，数字范围1-30，单数为女生头像，偶数为男生头像</div>
        </div>
      </div>
      
      <div class="form-group">
        <div class="label">
          <label>管理员密码：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="password" placeholder="请输入密码" />         
        </div>
      </div>
      
     <div class="form-group">
        <div class="label">
          <label></label>
        </div>
        <div class="field">
          <button class="button bg-main icon-check-square-o" type="submit"> 添加</button>
        </div>
      </div>
    </form>
  </div>
</div>
	
</body>
</html>
