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
    <title>游戏类型列表</title>  
    <link rel="stylesheet" href="css/pintuer.css">
    <link rel="stylesheet" href="css/admin.css">
    <link href="../../media/page/Pager.css" rel="stylesheet" type="text/css">
    <script src="js/jquery.js"></script>
    <script src="js/pintuer.js"></script>  
    <script src="../../media/page/jquery.pager.js"></script>
</head>
<body>
<div class="panel admin-panel">
  <div class="panel-head"><strong class="icon-reorder"> 游戏类型列表</strong></div>
  <div class="padding border-bottom">
  </div> 
  <table class="table table-hover text-center">
    <tr>
      <th width="5%">用户游戏ID</th>
      <th>用户ID</th>      
      <th>游戏ID</th>  
      <th width="250">操作</th>
    </tr>
    
  <c:forEach items="${gamemelist}" var="item" varStatus="status">
    <tr>
      <td>${item.gameMeid}</td>      
      <td>${item.gameMeUserid}</td> 
      <td>${item.gameMeGameid}</td> 
      <td>
      <div class="button-group">
       	<a class="button border-red" href="DeleteGameMe.action?gameMeid=${item.gameMeid}" onclick="return confirm('确定将此用户删除?')"><span class="icon-trash-o"></span> 删除</a>
      </div>
      </td>
    </tr> 
 </c:forEach>
    <tr>
      <th>
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
    	</th>
    </tr>
  </table>
</div>

<script type="text/javascript">

//分页
$(document).ready(function() {
	$("#pager").pager({ pagenumber: ${pagenumber}, pagecount: ${pagecount}, buttonClickCallback: PageClick });
});

PageClick = function(pageclickednumber) {
	window.location.href = "UserGameList.action?startPage=" + pageclickednumber;

}
	

</script>
</body>
</html>