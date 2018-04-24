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
<title>修改游戏类型</title>
<link rel="stylesheet" href="css/pintuer.css">
    <link rel="stylesheet" href="css/admin.css">
</head>

<body>

	<div class="panel admin-panel margin-top" id="adduser">
  <div class="panel-head" id="add"><strong><span class="icon-pencil-square-o"></span>修改类型</strong></div>
  <div class="body-content">
    <form method="post" class="form-x" action="AlterGameType.action">   
      <input type="hidden" name="typeid" value="${typeid}">
      <div class="form-group">
        <div class="label">
          <label>类型名称：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" name="typename" value="${typename}" data-validate="required:请输入类型名" placeholder="请输入类型名" />         
          <div class="tips">${Tips}</div>
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
