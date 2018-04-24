<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

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
<title>博客评论列表</title>
<link rel="stylesheet" href="css/pintuer.css">
<link rel="stylesheet" href="css/admin.css">
<link href="../../media/page/Pager.css" rel="stylesheet" type="text/css">
<script src="js/jquery.js"></script>
<script src="js/pintuer.js"></script>
<script src="../../media/page/jquery.pager.js"></script>
</head>
<body>

  <div class="panel admin-panel">
    <div class="panel-head"><strong class="icon-reorder"> 博客评论列表</strong> <a href="" style="float:right; display:none;">添加字段</a></div>
   
    <div class="padding border-bottom">
     	
      <ul class="search" style="padding-left:10px;">
       
        <li>选择搜索条件：</li>
        <form action="SearchComment.action" method="post">
	        <li>
	            <select name="type" class="input" style="width:200px; line-height:17px;" onchange="changesearch()">
	              <option value="1">评论ID</option>
	              <option value="2">评论人ID</option>
	              <option value="3">被评论博客ID</option>
	            </select>
	        </li>
	        
	        <li>
	          <input type="text" placeholder="请输入搜索内容" name="key" class="input" style="width:250px; line-height:17px;display:inline-block" />
	          <input type="hidden" value="1" name="startPage">
	          <input type="submit" value="搜索" class="button border-main icon-search" >
	        </li>
        </form>
      </ul>
    </div>
    <table class="table table-hover text-center">
      <tr>
        <th width="100" style="text-align:left; padding-left:20px;">ID</th>
        <th width="25%">评论人ID</th>
        <th>博客ID</th>
        <th>内容</th>
        <th>时间</th>
        <th width="310px">操作</th>
      </tr>
      <volist name="list" id="vo">
      <c:forEach items="${commentlist}" var="item" varStatus="status">
        <tr>
          <td style="text-align:left; padding-left:20px;">
           ${item.blogCommentid}</td>
          <td>${item.commentBlogUser}</td>
          <td width="10%">${item.commentBlogId}</td>
          <td><xmp>${item.commentContent}</xmp></td>
          <td><fmt:parseDate value="${item.commentTime}" var="date" pattern="yyyy-MM-dd HH:mm:ss"/><fmt:formatDate value="${date}" pattern="yyyy-MM-dd HH:mm:ss" /></td>
          <td width="310px;">
          
          	<div class="button-group">
          		
       <a class="button border-red" href="DeleteBlogComment.action?commentid=${item.blogCommentid}" onclick="return confirm('确定将此用户删除?')"><span class="icon-trash-o"></span> 删除</a>
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
	window.location.href = "BlogCommentList.action?startPage=" + pageclickednumber;

}

</script>
</body>
</html>