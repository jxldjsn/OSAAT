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
<title></title>
<link rel="stylesheet" href="css/pintuer.css">
<link rel="stylesheet" href="css/admin.css">
<link href="../../media/page/Pager.css" rel="stylesheet" type="text/css">
<script src="js/jquery.js"></script>
<script src="js/pintuer.js"></script>
<script src="../../media/page/jquery.pager.js"></script>
</head>
<body>

  <div class="panel admin-panel">
    <div class="panel-head"><strong class="icon-reorder"> 用户列表</strong> <a href="" style="float:right; display:none;">添加字段</a></div>
    <div class="padding border-bottom">
      <ul class="search" style="padding-left:10px;">
        <li>搜索：</li>
        <li>
         <form action="SearchUser.action" method="post">
          <input type="text" placeholder="请输入搜索用户名关键字" name="name" class="input" style="width:250px; line-height:17px;display:inline-block" />
          <input type="hidden" value="1" name="startPage">
          <input type="submit" value="搜索" class="button border-main icon-search" >
         </form>
        </li>
      </ul>
    </div>
    <table class="table table-hover text-center">
      <tr>
        <th width="100" style="text-align:left; padding-left:20px;">ID</th>
        <th width="10%">用户名</th>
        <th>头像</th>
        <th>邮件</th>
        <th>电话</th>
        <th>积分</th>
        <th width="10%">激活码</th>
        <th width="310">操作</th>
      </tr>
      <volist name="list" id="vo">
      
      <c:forEach items="${userlist}" var="item" varStatus="status">
        <tr>
          <td style="text-align:left; padding-left:20px;">
           ${item.id}</td>
          <td>${item.username}</td>
          <td width="10%"><img src="<%=basePath %>${item.photo}" alt="" width="70" height="50" /></td>
          <td>${item.email}</td>
          <td><font color="#00CC99">${item.phone}</font></td>
          <td>${item.integral}</td>
          <td>${item.activationCode}</td>
          <td>
          	<div class="button-group">
          		<form action="DeleteUser.action" method="post">
          			<input type="hidden" value="${item.id}" name="id">
          			<input type="submit" value="删除" class="button border-red" onclick="return confirm('确定将此用户删除?')">
          		</form>
          	</div>
          </td>
        </tr>
   	   </c:forEach>
   		 
      <tr>
        <td colspan="8"><div class="pagelist">
         	
         	<div id="pagination">
									<div id="pager">
										<ul class="pages">
											<li class="pgNext pgEmpty">首页</li>
											<li class="pgNext pgEmpty">上一页</li>
											<li class="page-number pgCurrent">1</li>
											<li class="page-number">2</li>
											<li class="page-number">3</li>
											<li class="page-number">4</li>
											<li class="page-number">5</li>
											<li class="pgNext">下一页</li>
											<li class="pgNext">末页</li>
										</ul>
									</div>
								</div>
         	
         </div></td>
      </tr>
      
		</volist>
    </table>
  </div>

<script type="text/javascript">

//分页
$(document).ready(function() {
	$("#pager").pager({ pagenumber: ${pagenumber}, pagecount: ${pagecount}, buttonClickCallback: PageClick });
});

PageClick = function(pageclickednumber) {
	window.location.href = "UserList.action?startPage=" + pageclickednumber;
}
	
</script>
</body>
</html>