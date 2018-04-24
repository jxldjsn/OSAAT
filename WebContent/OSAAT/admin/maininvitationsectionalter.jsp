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
<title>修改板块</title>
<link rel="stylesheet" href="css/pintuer.css">
    <link rel="stylesheet" href="css/admin.css">
</head>

<body>

	<div class="panel admin-panel margin-top" id="adduser">
  <div class="panel-head" id="add"><strong><span class="icon-pencil-square-o"></span>修改板块</strong></div>
  <div class="body-content">
    <form method="post" class="form-x" action="UpdateSection.action">   
      <input type="hidden" name="sectionid" value="${sectionid}">
      <div class="form-group">
        <div class="label">
          <label>板块名称：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" name="sectionname" value="${sectionname}" data-validate="required:请输入板块名" placeholder="请输入板块名" />         
          <div class="tips">${Tips}</div>
        </div>
      </div>
      
      <div class="form-group">
        <div class="label">
          <label>板块简介：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="sectionintroduce" value="${sectionintroduce}" data-validate="required:请输入简介" placeholder="请输入简介" />         
          <div class="tips">${Tips}</div>
        </div>
      </div>
     <div class="form-group">
        <div class="label">
          <label></label>
        </div>
        <div class="field">
          <button class="button bg-main icon-check-square-o" type="submit"> 修改</button>
        </div>
      </div>
    </form>
  </div>
</div>
	
</body>
</html>
