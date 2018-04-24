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
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
	<title>音乐列表</title>
 	<link rel="stylesheet" href="css/pintuer.css">
    <link rel="stylesheet" href="css/admin.css">
    <link href="../../media/page/Pager.css" rel="stylesheet" type="text/css">
	<script src="js/jquery.js"></script>
	<script src="js/pintuer.js"></script>
	<script src="../../media/page/jquery.pager.js"></script>
</head>

<body>
<input type="hidden" name="key" value="${key}">
	<div class="panel admin-panel">
    <div class="panel-head"><strong class="icon-reorder"> 音乐列表</strong></div>
    <div class="padding border-bottom">
     	
      <ul class="search" style="padding-left:10px;">
       
       <li><button type="button" class="button border-yellow" onclick="window.location.href='mainmusicupload.jsp'"><span class="icon-plus-square-o"></span> 添加音乐</button></li>
       
        <li>搜索：</li>
        <li>
         <form action="SearchMusicByName.action" method="post">
          <input type="text" placeholder="请输入搜索游戏标题的关键字" name="key" class="input" style="width:250px; line-height:17px;display:inline-block" />
          <input type="hidden" value="1" name="startPage">
          <input type="submit" value="搜索" class="button border-main icon-search" >
         </form>
        </li>
      </ul>
    </div>
    <table class="table table-hover text-center">
      <tr>
        <th width="120">ID</th>
        <th>歌名</th>       
        <th>上传人</th>
        <th>路径</th>
        <th>类型</th>
        <th>歌手</th>
        <th width="25%">封面路径</th>
         <th width="120">上传时间</th>
        <th>操作</th>       
      </tr> 
      
      <c:forEach items="${musiclist}" var="item" varStatus="status">     
        <tr>
          <td>${item.songid}</td>
          <td>${item.songname}</td>
          <td>${item.uploadperson}</td>
          <td>${item.songsrc}</td>  
           <td>${item.songtype}</td>
           <td>${item.songer}</td>         
          <td>${item.imagesrc}</td>
          <td>${item.time}</td>
          <td><div class="button-group">
          		<a type="button" class="button border-main" href="PreAlterMusic.action?musicid=${item.songid}" target="right"> <span class="icon-edit"></span>修改</a>
       	<a class="button border-red" href="DeleteMusic.action?musicid=${item.songid}" onclick="return confirm('确定将此用户删除?')"><span class="icon-trash-o"></span> 删除</a>
          	</div></td>
        </tr>
       </c:forEach> 
      <tr>
        <td colspan="9"><div class="pagelist">
         	
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
    </table>
  </div>
<script type="text/javascript">

//分页
$(document).ready(function() {
	$("#pager").pager({ pagenumber: ${pagenumber}, pagecount: ${pagecount}, buttonClickCallback: PageClick });
});

PageClick = function(pageclickednumber) {
	window.location.href = "SearchMusicByName.action?key=" + $("#key").val() +"&startPage=" + pageclickednumber;

}
	
</script>
</body>
</html>
