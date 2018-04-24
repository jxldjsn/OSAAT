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
	<title>修改游戏</title>
	<link rel="stylesheet" href="css/pintuer.css">
    <link rel="stylesheet" href="css/admin.css">
    <link rel="stylesheet" href="css/pagescoverupload.css">
    <script src="js/jquery.js"></script>
    <script src="js/pintuer.js"></script>  
</head>

<body>

 <div class="panel admin-panel">
  <div class="panel-head"><strong><span class="icon-pencil-square-o"></span> 修改游戏 </strong></div>
  <div class="body-content">
    <form method="post" class="form-x" action="AlterGame.action"  enctype="multipart/form-data" >
     <input type="hidden" name="gameid" value="${game.gameId}">
     
     <div class="form-group">
        <div class="label">
          <label>游戏类型：</label>
        </div>
        <div class="field">
        <select name="type" id="role" class="ui-select">
        	<c:forEach items="${gameTypes}" var="item" varStatus="status">
									<c:if test="${item.typeId == game.gameType}">
										<option selected value="${item.typeId}">${item.typeName}</option>
									</c:if>
									<c:if test="${!(item.typeId == game.gameType)}">
										<option value="${item.typeId}">${item.typeName}</option>
									</c:if>
			</c:forEach>
         </select>
        </div>
     </div>
     
      <div class="form-group">
        <div class="label">
          <label>游戏名字：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="gamename" value="${game.gameName}" />
          <div class="tips"></div>
        </div>
      </div>
      
      <div class="form-group">
        <div class="label">
          <label>游戏封面:</label>
        </div>
        <div class="field">
          
          <div class="con4">
			<canvas id="cvs" width="200" height="200"></canvas>
			<span class="btn upload">上传图片<input type="file" class="upload_pic" id="upload" name="gamecover"></span>
		  </div>
          <div class="tips">宽高为800X500的。${photoImageresult}</div>
        </div>
      </div>
      
      <div class="form-group">
        <div class="label">
          <label>游戏路径：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="gameurl" value="${game.gameUrl}" />
          <div class="tips"></div>
        </div>
      </div>
      
      <div class="form-group">
        <div class="label">
          <label>游戏介绍：</label>
        </div>
        <div class="field">
          <textarea class="input" name="gameintroduce">${game.gameIntroduce}</textarea>
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

<script>
//获取上传按钮
var input1 = document.getElementById("upload"); 
 
if(typeof FileReader==='undefined'){ 
     //result.innerHTML = "抱歉，你的浏览器不支持 FileReader"; 
     input1.setAttribute('disabled','disabled'); 
}else{ 
     input1.addEventListener('change',readFile,false); 
     /*input1.addEventListener('change',function (e){
     	console.log(this.files);//上传的文件列表
     },false); */
}
function readFile(){ 
	var file = this.files[0];//获取上传文件列表中第一个文件
	if(!/image\/\w+/.test(file.type)){
	//图片文件的type值为image/png或image/jpg
		alert("文件必须为图片！");
		return false; 
	} 
	// console.log(file);
	var reader = new FileReader();//实例一个文件对象
	reader.readAsDataURL(file);//把上传的文件转换成url
	//当文件读取成功便可以调取上传的接口
	reader.onload = function(e){ 
		// console.log(this.result);//文件路径
		// console.log(e.target.result);//文件路径
		/*var data = e.target.result.split(',');
		var tp = (file.type == 'image/png')? 'png': 'jpg';
		var imgUrl = data[1];//图片的url，去掉(data:image/png;base64,)
		//需要上传到服务器的在这里可以进行ajax请求
		// console.log(imgUrl);
		// 创建一个 Image 对象 
		var image = new Image();
		// 创建一个 Image 对象 
		// image.src = imgUrl;
		image.src = e.target.result;
		image.onload = function(){
			document.body.appendChild(image);
		}*/

		var image = new Image();
		// 设置src属性 
		image.src = e.target.result;
		var max=200;
		// 绑定load事件处理器，加载完成后执行，避免同步问题
		image.onload = function(){ 
			// 获取 canvas DOM 对象 
			var canvas = document.getElementById("cvs"); 
			// 如果高度超标 宽度等比例缩放 *= 
			/*if(image.height > max) {
				image.width *= max / image.height; 
				image.height = max;
			} */
			// 获取 canvas的 2d 环境对象, 
			var ctx = canvas.getContext("2d"); 
			// canvas清屏 
			ctx.clearRect(0, 0, canvas.width, canvas.height); 
			// 重置canvas宽高
			/*canvas.width = image.width;
			canvas.height = image.height;
			if (canvas.width>max) {canvas.width = max;}*/
			// 将图像绘制到canvas上
			// ctx.drawImage(image, 0, 0, image.width, image.height);
			ctx.drawImage(image, 0, 0, 200, 200);
			// 注意，此时image没有加入到dom之中
		};  
	}
};
</script>

</body>
</html>
