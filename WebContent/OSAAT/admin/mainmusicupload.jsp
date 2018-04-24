<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>音乐上传</title>
    <link rel="stylesheet" type="text/css" href="<%=basePath%>OSAAT/music/Css/addsong.css" />
    <link rel="stylesheet" type="text/css" href="<%=basePath%>OSAAT/music/Css/xcConfirm.css" />
    <script id="jquery" type="text/javascript" class="library" src="<%=basePath%>OSAAT/music/Js/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" language="javascript" src="<%=basePath%>OSAAT/music/Js/addsong.js"></script>
    <script type="text/javascript" language="javascript" src="<%=basePath%>OSAAT/music/Js/xcConfirm.js"></script>
    
</head>
<body>
	<div id="WZYmusic">
    	音乐上传
    </div>
    
    <div id="addMySong">
    	<div class="fileupload">
    	<form method="post" action="AddMusic.action" enctype="multipart/form-data" onSubmit="return checkMusicInformation();" >
            <!-- <form action="UploadMusic.action" method="post" enctype="multipart/form-data"  onSubmit="return checkMusic();" > -->
                <div class="uploader white">
                    <input type="text" class="filename" readonly/>
                    <input type="button" name="file" class="button" value="请选择您的音乐文件..."/>
                    <input type="file" name="uploadsong" id="uploadsong" size="30" onChange="return checkMusicType(uploadsong);" />
                </div>
                	
            <h3>&nbsp;${uploadresult} &nbsp;</h3>
            
            <!-- <form method="post" action="UploadMusicImage.action"  method="post" enctype="multipart/form-data" onSubmit="return checkMusicImg();" > -->
               <div class="uploader white">
                    <input type="text" class="filename" readonly/>
                    <input type="button" name="file" class="button" value="请选择这个歌手图片..."/>
                    <input type="file" name="songImage" id="songImage" size="30" onChange="return checkImgType(songImage);" />
                </div>
                	<!-- <input type="hidden"  value="${uploadsongFileName}" name="uploadsongFileName" >
                	
                	<input type="submit" class="btns" onmouseover="this.style.backgroundPosition='left -40px'" onmouseout="this.style.backgroundPosition='left top'" value="上传此图片" />-->
            <!-- </form> -->
            <h3>&nbsp;${songImageresult} &nbsp;</h3>
            
            <!-- <form method="post" action="AddMyMusic.action" onSubmit="return checkMusicInformation();" > -->
            
            	<h1>选择文件和图片后，请您填写歌曲的相关信息：</h1>
				<span class="input input--minoru">
					<input class="input__field input__field--yoko" type="text" id="input-16" name="songname" />
					<label class="input__label input__label--yoko" for="input-16">
						<span class="input__label-content input__label-content--yoko">歌曲名字</span>
					</label>
				</span>
				<span class="input input--minoru">
                    <input class="input__field input__field--yoko" type="text" id="input-17" name="songer" />
                    <label class="input__label input__label--yoko" for="input-17">
						<span class="input__label-content input__label-content--yoko">歌手姓名</span>
					</label>
                    
				</span>
				
				
                <!--<input type="hidden" value="${uploadsongFileName}" name="songSrc" id="songSrc" >
                <input type="hidden" value="uploadperson" name="uploadperson" >
                <input type="hidden" value="${songImageFileName}" name="imageSrc" id="imageSrc" > -->
                <p align="right" style="margin-right:70px;">
                <input type="submit" class="btns" onmouseover="this.style.backgroundPosition='left -40px'" onmouseout="this.style.backgroundPosition='left top'" value="提交信息" />
                
                </p>
                
            </form>
            
            <h3>&nbsp;${addsongResult} &nbsp;</h3>
		</div>
    </div>
    
</body>
</html>


<script>


$(function(){
	$("input[type=file]").change(function(){$(this).parents(".uploader").find(".filename").val($(this).val());});
	$("input[type=file]").each(function(){
	if($(this).val()==""){$(this).parents(".uploader").find(".filename").val("您还没有选择任何文件...");}
	});
});

(function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
			})();

</script>
