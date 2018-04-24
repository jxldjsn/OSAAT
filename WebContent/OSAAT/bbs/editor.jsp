<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>编辑测试</title>
    <link rel="stylesheet" type="text/css" href="../../media/simpleeditor/css/wangEditor.min.css">
</head>

<body>
	<header>
    	<h1>WZY编辑器</h1>
    </header>
    
    <table width="100%">
    <tr>
    	<form method="post" action="#">
    	<td width="5%" height="90px"></td>
        <td width="900px" height="300px">
        	<div id="editor-container" class="container">
        		<!--<div id="editor-trigger"><p>请输入内容</p></div>-->
         		<textarea id="editor-trigger" style="height:260px; max-height:500px; width:100%;" >
           			<p>请输入内容...</p>
        		</textarea> 
    		</div>
        </td>
        <td width="5%" height="20px"></td>
        </form>
    </tr>
    </table>
    
     <script type="text/javascript" src="../../media/simpleeditor/js/jquery.min.js"></script>
     <script type="text/javascript" src="../../media/simpleeditor/js/wangEditor.js"></script>
     <script type="text/javascript">
		//$(document).ready(function(){ 
		 //	var location = (window.location+'').split('/'); 
		//	var basePath = location[0]+'//'+location[2]+'/'+location[3] + '/'; 
		//	alert(basePath);
		//}); 
     	var editor = new wangEditor('editor-trigger');
		 editor.create();
		 
		
     </script>
</body>
</html>
