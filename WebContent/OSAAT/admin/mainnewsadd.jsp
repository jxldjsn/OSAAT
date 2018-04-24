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
    <title>添加资讯</title>  
    <link rel="stylesheet" href="css/pintuer.css">
    <link rel="stylesheet" href="css/admin.css">
    
    <script src="js/jquery.js"></script>
    <script src="js/pintuer.js"></script> 
    <script type="text/javascript" charset="utf-8"
	src="<%=basePath %>ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8"
	src="<%=basePath %>ueditor/ueditor.all.js"></script>
<script type="text/javascript" charset="utf-8"
	src="<%=basePath %>ueditor/lang/zh-cn/zh-cn.js"></script> 
</head>
<body>
<div class="panel admin-panel">
  <div class="panel-head"><strong><span class="icon-pencil-square-o"></span> 添加资讯</strong></div>
  <div class="body-content">
    <form method="post" class="form-x" action="AddNews.action">
      <div class="form-group">
        <div class="label">
          <label>资讯标题：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="newstitle" value="" />
          <div class="tips"></div>
        </div>
      </div>
      
      <div class="form-group">
        <div class="label">
          <label>作者姓名：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="author" value="" />
        </div>
      </div>
      
      <div class="form-group">
        <div class="label">
          <label>资讯摘要：</label>
        </div>
        <div class="field">
          <textarea name="newsabstract" class="input" style="height:100px;"></textarea>
          <div class="tips"></div>
        </div>
      </div>  
              
      <div class="form-group">
        <div class="label">
          <label>资讯内容：</label>
        </div>
        <div class="field">
        <textarea id="editor"
									name="newscontent" style="width: 100%; height: 560px;">
	                            </textarea> 
	                            <script type="text/javascript">
										UE.getEditor('editor');
								</script>
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label></label>
        </div>
        <div class="field">
          <button class="button bg-main icon-check-square-o" type="submit"> 提交</button>
        </div>
      </div>
    </form>
  </div>
</div>
</body></html>