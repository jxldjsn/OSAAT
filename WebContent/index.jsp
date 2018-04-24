<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html> 
<html>  
<head>  
<title>网站加载中</title>  
</head>  
<body bgcolor="#5E4674" style="text-align: center">
 <div style="margin-top: 100px;">
  <img src="<%=basePath %>/media/image/indexloading.gif">
 </div>
 <script type="text/javascript">
 	location.href = "<%=basePath %>OSAAT/basic/IndexAction.action" ;
 </script>
</body>  
</html> 

