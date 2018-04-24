<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport"
	content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>WZY音乐播放器</title>
<link rel="stylesheet" type="text/css" href="Css/tplayer.css" />
<link rel="stylesheet" type="text/css"
	href="Plugins/FontAwesome4.1/css/font-awesome.min.css" />
<script type="text/javascript" src="Js/animateManage.js"></script>
<script src="Js/jquery.js"></script>
<script src="Js/jquery-ui.js"></script>
<script src="Js/tPlayer.js"></script>
</head>
<body>
	<div id="WZYmusic">
		音乐
		<p align="right" style="margin-top: -65px;">
			<a href="AllMySong.action" class="btn twitter"> <i
				class="icons fi-social-twitter"></i> <span class="text">
					我的私人音乐 </span>
			</a> <span>&nbsp;&nbsp;</span> <a href="musicupload.jsp"
				class="btn twitter"> <i class="icons fi-social-twitter"></i> <span
				class="text"> 上传我的歌曲 </span>
			</a> &nbsp;
		</p>
	</div>
	<div id="t_wrapper">
		<div id="t_cover">
			<img src="Images/logo.png">
		</div>
		<div id="t_top">
			<div id="t_title_info">
				<span class="artist"></span> <span class="title"></span>
			</div>
		</div>
		<div id="t_middle">
			<div id="play"></div>
			<div id="pause" class="hidden"></div>
			<div
				class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
				id="t_progress">
				<div id="trackInfo">
					<div id="error"></div>
					<div id="current">0:00</div>
					<div id="duration">0:00</div>
				</div>
				<div style="width: 0%;"
					class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div>
				<span style="left: 0%;"
					class="ui-slider-handle ui-state-default ui-corner-all"
					tabindex="0"></span>
			</div>
			<span id="prev"></span> <span id="next"></span>
		</div>
		<div id="t_bottom">
			<div id="range">
				<div id="val"></div>
				<div id="vol"></div>
				<div id="rangeVal"></div>
			</div>
			<div id="t_pls_show" class="noselectpls"></div>
		</div>
	</div>

	<div id="playlist">
		<ul>
			<div class="musictitle" >
				<p align="center">我的音乐</p>
			</div>
			
			<c:forEach items="${mymusiclist}" var="item" varStatus="status">
				<li t_cover="${item.imagesrc}" t_artist="${item.songname}" t_name="${item.songer}" id="lifirst">
					<a href="#">${item.songname} – ${item.songer} </a> <audio preload="none">
						<source src="${item.songsrc}" type="audio/mp3">
						<source src="Media/Transformers2.htm"
							type="audio/ogg; codecs=vorbis">
					</audio>
				</li>
			</c:forEach>
		</ul>
	</div>

	<div id="liubiao" style="height: 15px;"></div>

	<div id="playlist">
		<ul>
			<div class="musictitle">
				<p align="center">系统音乐</p>
			</div>
			
			<c:forEach items="${systemmusiclist}" var="item" varStatus="status">
				<li t_cover="${item.imagesrc}" t_artist="${item.songname}" t_name="${item.songer}" id="lifirst">
					<a href="#">${item.songname} – ${item.songer} </a> <audio preload="none">
						<source src="${item.songsrc}" type="audio/mp3">
						<source src="Media/Transformers2.htm"
							type="audio/ogg; codecs=vorbis">
					</audio>
					<span><button id="DownLoadMusic" onClick="window.location=('DownLoadMusic.action?songsrc=${item.songsrc}&songname=${item.songname}')">下载</button></span>
				</li>
			</c:forEach>
			
			<!-- <li t_cover="wlh.jpg" t_artist="就是现在" t_name="王力宏" id="lifirst">
				<a href="#">就是现在 – 王力宏</a> <audio preload="none">
					<source src="Media/jiushixianzai.mp3" type="audio/mp3">
					<source src="Media/Transformers2.htm"
						type="audio/ogg; codecs=vorbis">
				</audio>
			</li> -->
			
		</ul>
	</div>
	<div id="WZYmusicfoolter">
		<p align="center">版权所有@WZY</p>
	</div>

<script>
    	//jquery.snow
(function(e){e.fn.snow=function(t){var n=e('<div id="flake" />').css({position:"absolute",top:"-50px"}).html("&#10052;"),r=e(document).height(),i=e(document).width(),s={minSize:10,maxSize:25,newOn:500,flakeColor:"#FC0101"},t=e.extend({},s,t),o=setInterval(function(){var s=Math.random()*i-100,o=.5+Math.random(),u=t.minSize+Math.random()*t.maxSize,a=r-40,f=s-100+Math.random()*200,l=r*10+Math.random()*5e3;n.clone().appendTo("body").css({left:s,opacity:o,"font-size":u,color:t.flakeColor}).animate({top:a,left:f,opacity:.2},l,"linear",function(){e(this).remove()})},t.newOn)}})(jQuery);
$.fn.snow();
    
    </script>
</body>
</html>