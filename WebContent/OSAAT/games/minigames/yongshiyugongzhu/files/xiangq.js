$(function(){
	var dragging = false;
	var gameTime = 0;
    var iX, iY, t1;
	function run (node, attr, val, maxval, fun, flag, offset) {
		offset = parseInt(offset || 0);
		if(val > 90){
			if(flag){
				$(node).hide();
			}
			$(node).removeAttr('moveing');
			return;
		}
		$(node).css(attr, fun(val*Math.PI/180)*maxval+offset).attr('moveing', 'true');
		
		setTimeout(function(){
			run(node, attr, val+5, maxval, fun, flag, offset);
		}, 10);
	}
	function action(action, showType) {
		var posAttr = {
			'lt' : [['left','top','right','bottom'], ['top','left','right','bottom']],
			'rt' : [['right','top','left','bottom'], ['top','right','left','bottom']],
			'lb' : [['left','top','right','bottom'], ['bottom','left','right','top']],
			'rb' : [['right','top','left','bottom'], ['bottom','right','left','top']]
		}[showType];
		var menus = {
			'lt' : [["s14","s12","s11"], ["s21","s22","s23"]],
			'rt' : [["s11","s12","s14"], ["s21","s22","s23"]],
			'lb' : [["s14","s12","s11"], ["s23","s22","s21"]],
			'rb' : [["s11","s12","s14"], ["s23","s22","s21"]]
		}[showType];
		if(action == 'hide') {
			var f = Math.cos;
			var s0 = $('#s0').show();
						setTimeout(function(){
				$('#s0').attr('src', '/resources/images/xiangq/batton_shouqi_1.png');
			}, 3000);
			var s1 = $('#s1').hide();
		}
		else {
			var f = Math.sin;
			var s0 = $('#s0').hide();
			var s1 = $('#s1').show();
		}
		var flag = action=='hide';
		var w = s1.width() * 1.1;
		s1.css(posAttr[0][0], s0.css(posAttr[0][0]))
				.css(posAttr[0][1], s0.css(posAttr[0][1]))
				.css(posAttr[0][2], s0.css(posAttr[0][2]))
				.css(posAttr[0][3], s0.css(posAttr[0][3]));
		// 纠正s1靠边
		autoPos(s1);
		for(var i=0; i<menus[0].length; i++) {
			var j=i+1;
			var node = $("#"+menus[0][i]).css(posAttr[0][0], s0.css(posAttr[0][0]))
				.css(posAttr[0][1], s0.css(posAttr[0][1]))
				.css(posAttr[0][2], 'auto')
				.css(posAttr[0][3], 'auto').show();
			run(node, posAttr[0][0], 0, j*w, f, flag);
		}
		for(var i=0; i<menus[1].length; i++) {
			var j=i+1;
			var node = $("#"+menus[1][i]).css(posAttr[1][0], s0.css(posAttr[1][0]))
				.css(posAttr[1][1], 0)
				.css(posAttr[1][2], 'auto')
				.css(posAttr[1][3], 'auto').show();
			if(showType=='rb' || showType == 'lb'){
				var t = parseInt(s0.css('top'));
				var dt = $(document).height();
				var offset = dt-t-node.height();
			}
			else{
				var offset = parseInt(s0.css('top'));
			}
			run(node, posAttr[1][0], 0, j*w, f, flag, offset);
		}
	}
	$("#s0").css('top',50).css('left',0).css('right','auto').css('bottom','auto');
	$("#s1").css('top',50).css('left',0).css('right','auto').css('bottom','auto');
	function posType () {
		var top = parseInt( $("#s0").css('top') );
		var left = parseInt( $("#s0").css('left') );
		//var right = $("#s0").css('right');
		//var bottom = $("#s0").css('bottom');

		var ch = document.documentElement.clientHeight/2;
		var cw = document.documentElement.clientWidth/2;
		//console.log(top+","+left+","+ch+","+cw);

		if(top < ch){
			return left < cw ? 'lt' : 'rt';
		}
		else{
			return left < cw ? 'lb' : 'rb';
		}
		
	}
	function autoPos(node){
		node = node || $("#s0");
		var posT = posType();
        if(posT == 'lt' || posT == 'lb'){
			var maxW = parseInt(node.css('left'));
			run(node, 'left', 0, -maxW, Math.sin, false, parseInt(node.css('left')));
		}
		else{
			var maxW = document.documentElement.clientWidth - parseInt(node.css('left'));
			run(node, 'left', 0, maxW-parseInt(node.width()), Math.sin, false, parseInt(node.css('left')));
		}
	}
	// 移动设备和不同处理
	if( /ipad|ipod|iphone|android/i.test(navigator.userAgent) ){
		$("#s1").bind('touchend',function(){
			action('hide',posType());
		});
		$("#s0").bind('touchend',function(){
			if( (new Date).getTime() - t1 > 200) {
				return;
			};
			action('show',posType());
		}).show();
		$("#s0").bind('touchstart', function(e){
			iX = e.originalEvent.targetTouches[0].clientX - $(this)[0].offsetLeft;
	        iY = e.originalEvent.targetTouches[0].clientY - $(this)[0].offsetTop;
			$("#cover").show();
		});
		$(document).bind('touchstart', function(e){
			t1 = (new Date).getTime();
			$("#cover").show();
		})
		.bind('touchmove', function(e){
			var x = e.originalEvent.targetTouches[0].clientX - iX;
			var y = e.originalEvent.targetTouches[0].clientY - iY;
			var nHeight = document.documentElement.clientHeight - parseInt($("#s0").css('height'));
			y = y < 0 ? 0 : y;
			y = y > nHeight ?  nHeight : y;
			$("#s0").css('left', x).css('top', y).css('right','auto').css('bottom','auto');
		})
		.bind('touchend', function(e){
			$("#cover").hide();
			autoPos();
		});
	}
	else{
		$("#s1").click(function(e){
			action('hide',posType());
			e.stopPropagation();
		});
		$("#s0").click(function(e){
			if( (new Date).getTime() - t1 > 200) {
				return;
			};
			action('show',posType());
			e.stopPropagation();
		})
		.mousedown(function(e) {
	        dragging = true;
	        $("#cover").show();
	        t1 = (new Date).getTime();
	        iX = e.clientX - this.offsetLeft;
	        iY = e.clientY - this.offsetTop;
	        this.setCapture && this.setCapture();
	        return false;
	    }).show();
		document.onmousemove = function(e) {
	        if (dragging) {
	        var e = e || window.event;
	        var oX = e.clientX - iX;
	        var oY = e.clientY - iY;
	        var nHeight = document.documentElement.clientHeight - parseInt($("#s0").css('height'));
			oY = oY < 0 ? 0 : oY;
			oY = oY > nHeight ?  nHeight : oY;
	        $("#s0").css({"left":oX + "px", "top":oY + "px"});
	        return false;
	        }
	        e.stopPropagation();
	    };
	    $(document).mouseup(function(e) {
	        dragging = false;
	        $("#s0")[0].releaseCapture && $("#s0")[0].releaseCapture();
	        autoPos();
	        $("#cover").hide();
	        e.cancelBubble = true;
	    });
	}

	$("#game_window").css('height', $(document).height());

	// $("#game_window").contents()[0].body.addEventListener('touchmove', function(e){
 //            e.preventDefault();
 //    });

	// .bind('touchmove',function(e){
	// 	alert("sss");
	// 	e.preventDefault();
	// });
    $("#cover").css('height', $(document).height());

    // 返回
    $("#s14").click(function(e){
    	if( $(this).attr('moveing') ){
    		return;
    	}
    	if(document.referrer == "" || document.referrer == window.location.href){
    		window.location.href = "/";
    	}
    	else {
    		window.location.href = document.referrer;
    	}
    });
    // 重玩
    $("#21").click(function(e){
    	if( $(this).attr('moveing') ){
    		return;
    	}
    	window.location.href = window.location.href;
    });
    // 分享
    $("#s23").click(function(e){
    	if( $(this).attr('moveing') ){
    		return;
    	}
    	box_show_share();
    });
    //--------排行榜低调的分割线--------//
    // 排行榜
    $(".paix1_a_1 li img").click(function(e){
    	$(".paix").hide();
    });
    $("#s11").click(function(e){
    	if( $(this).attr('moveing') ){
    		return;
    	}
    	showLoading();
    	$.ajax({
    		url : "?r=play/ranking/gameid/"+GAMEID,
    		dataType : 'json',
    		success : function(data){
    			hideLoading();
    			showRanking(data);
    		}
    	});
    });
    var tmpContent = $("#contentTmp").html();
    function showRanking(data){
    	var paixCon = $(".paix .content");
    	$(".paix .content div").remove();
    	for (var i in data) {
    		var obj = data[i];
    		var name = obj.nickname == "" ? "匿名玩家" : obj.nickname;
    		var head = obj.headimg == "" ? "/resources/images/user_head/bg_touxiang.png" : obj.headimg;
    		var str = tmpContent.replace('{{INDEX}}', parseInt(i)+1)
    					.replace('{{NAME}}', name)
    					.replace('{{SCORE}}', obj.score)
    					.replace('{{HEAD}}', head);
    		$(str).appendTo(paixCon);
    	}
    	$(".paix .content .content1:first").css("padding-top","10px");
    	$('<div style="position:fixed;"></div>').appendTo(paixCon);
    	$(".paix").show();
    }
    //--------评论低调的分割线--------//
    // 评论
    $(".pinglu .pinglu1_a_1 li img").click(function (e) {
    	$(".pinglu").hide();
    });
    $("#s22").click(function (e) {
    	if( $(this).attr('moveing') ){
    		return;
    	}
    	showLoading();
    	$.ajax({
    		url : '?r=play/getcomment/gameid/'+GAMEID,
    		dataType : 'json',
    		success : function(data){
    			hideLoading();
    			showComment(data);
    		}
    	});
    });
    var tmpComment = $("#tmpComment").html();
    function showComment(data) {
    	var pingluCon = $(".pinglu .content");
    	$(".pinglu .content div").remove();
    	for (var i in data) {
    		var obj = data[i];
    		var name = obj.nickname == "" ? "匿名玩家" : obj.nickname;
    		var head = obj.headimg == "" ? "/resources/images/user_head/bg_touxiang.png" : obj.headimg;
    		var str = tmpComment.replace('{{HEAD}}', head)
    					.replace('{{NAME}}', name)
    					.replace('{{TIME}}', obj.time)
    					.replace('{{CONTENT}}', obj.comment);
    		$(str).appendTo(pingluCon);
    	}
    	//$(".pinglu .content1_a").eq(0).after($('<div class="content1_b" style="height:100%;"></div>'));
    	$(".pinglu .content .content1:first").css("padding-top","5%");
    	$(".pinglu").show();
    }
    // 评论评分
    var stars = $(".pinglu .bottom img[v]");
    function getStar(){
    	return $(".pinglu .bottom img[checked]").length;
    }
    stars.click(function(e){
    	var checked = $(this).attr('checked');
    	var v = parseInt($(this).attr('v'));
    	if( checked || checked == true){
    		for(var i=4; i>=v-1; i--){
    			stars.eq(i).removeAttr("checked").attr('src', '/resources/images/pinglu/bg_xingxing.png');
    		}
    	}
    	else {
    		for(var i=0; i<v; i++){
    			stars.eq(i).attr("checked", true).attr('src', '/resources/images/pinglu/bg_xingxing_1.png');
    		}
    	}
    	var score = getStar() * 20;
    	if(score == 20){
    		var tipMsg = score + "分，好烂的游戏!";
    	}
    	else if(score == 40){
    		var tipMsg = score + "分，不怎么好玩…";
    	}
    	else if(score == 60){
    		var tipMsg = score + "分，一般般啦~";
    	}
    	else if(score == 80){
    		var tipMsg = score + "分，不错耶~";
    	}
    	else if(score == 100){
    		var tipMsg = score + "分，太好玩啦！";
    	}
    	else{
    		var tipMsg = "";
    	}
    	var _s1 = $(".pinglu .bottom .fenshu").html();
    	var _s2 = $(".pinglu .bottom1 .text1").val();
    	$(".pinglu .bottom .fenshu").html(tipMsg);
    	if ( _s1 == _s2)
    		$(".pinglu .bottom1 .text1").val(tipMsg);
    });
	$(".pinglu .bottom1 .text1").focus(function(){
		var _s1 = $(".pinglu .bottom .fenshu").html();
    	var _s2 = $(".pinglu .bottom1 .text1").val();
    	if ( _s1 == _s2 )
    		$(".pinglu .bottom1 .text1").val('');
	})
	.blur(function(){
		var _s1 = $(".pinglu .bottom .fenshu").html();
    	var _s2 = $(".pinglu .bottom1 .text1").val();
    	if ( _s2 == "" )
    		$(".pinglu .bottom1 .text1").val(_s1);
	});
	// 提示框
	var msgBox = null;
	function msgBoxShow(msg){
		if(msgBox == null){
			msgBox = $("<div class='flow_box'>"+msg+"</div>")
						.appendTo($(document.body))
						.show();
    	}
    	else {
    		msgBox.html(msg).show();
    	}
		setTimeout(function(){
			msgBox.hide();
		}, 1000);
	}
    // 提交评论
    var commentTime = 0;
    
    $(".pinglu .bottom .fas").click(function(e){
    	var comment = $(".pinglu .bottom1 .text input").val();
    	if( comment == "" ){
    		msgBoxShow("评论内容不能为空");
    		return false;
    	}
    	var now = (new Date()).getTime();
    	if( now - commentTime < 10000){
    		msgBoxShow('评论过于频繁，请稍后再试');
    		return false;
    	}
    	showLoading();
    	$.ajax({
    		url : '?r=play/comment',
    		data : {gameid:GAMEID, comment:comment, stars:getStar()},
    		type : 'POST',
    		dataType : 'json',
    		success : function(data){
    			commentTime = now;
    			hideLoading();
    			showComment(data);
    		}
    	});
    });
    // 重玩
    $("#s21").click(function(e){
    	if( $(this).attr('moveing') ){
    		return;
    	}
    	history.go(0);
    });
    //--------勋章低调的分割线--------//
    //成就
    if( achievement.length == 0 ) {
    	$("#s12 img").attr('src', '/resources/images/xiangq/batton_chengjiu_2.png');
    }
    else {
	    $("#s12").click(function(e){
	    	if( $(this).attr('moveing') ){
	    		return;
	    	}
	    	// $.ajax({
	    	// 	url : '?r=play/achievement/gameid/' + GAMEID,
	    	// 	dataType : 'json',
	    	// 	success : function(data){
	    	// 		showXunz(data);
	    	// 	}
	    	// });
	    	showXunz(achievement);
	    });
	}
    $(".xunz .xun_bg li img").click(function(e){
    	$(".xunz").hide();
    });
    var tmpXunz = $("#tmpXunz").html();
    function showXunz(data){
    	$("#focus .a div").remove();
    	$('<div class="b"></div>').appendTo($("#focus .a"));
    	var xunzCon = $("#focus .b");
    	for (var i=0; i<data.length; i++) {
    		var obj = data[i];
            if(obj.achieved==0){
               obj.achieved="class='toum'";
            }else if(obj.achieved==1){
                
                 obj.achieved='';
            }
    		var str = tmpXunz.replace('{{IMG}}', obj.img)
    					.replace('{{NAME}}', obj.name)
    					.replace('{{DESC}}', obj.desc)
                        .replace('{{toum}}', obj.achieved);
    		if(i >0 && i%2 == 0){
    			$('<div style="height:1px; width:100%;padding-top:2%; border-bottom:2px dashed #cbcbcb; clear:both;"></div>').appendTo(xunzCon);
    			$('<div style="height:1px; width:100%;padding-bottom:2%; clear:both;"></div>').appendTo(xunzCon);
    		}
    		$(str).appendTo(xunzCon);
    	}
    	$(".xunz").show();
    	TouchSlide({ 
	        slideCell:"#focus",
	        //titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	        mainCell:".bd .a", 
	        effect:"leftLoop", 
	        autoPlay:false,//自动播放
	        //autoPage:true, //自动分页
	        switchLoad:"_src" //切换加载，真实图片路径为"_src" 
	    });
    }
    // 游戏成就完成检查
    window.doRanking = function(rType, level, score){
    	switch(parseInt(rType)){
    		case 1:
    		case 2:
    			checkAchievement(2, score);
    			break;
    		case 3:
    		case 4:
    			checkAchievement(3, level);
    			break;
    		default:
    			console.log("unknow ranking type");
    			return;
    	}
    }
    function checkAchievement(type, val) {
     	for (var i = 0; i < achievement.length; i++) {
    		var obj = achievement[i];
    		if(obj.complete == undefined && type == parseInt(obj.conid) && val >= parseInt(obj.conVal)){
    			obj.complete = true;
    			submitAchi(type, val, obj);
    		}
    	}
    }
    function submitAchi (type, val, conObj) {
    	$.ajax({
    		url : '?r=play/submitAchi',
    		data : {"gameid":GAMEID, "type":type, "val":val},
    		dataType : 'json',
    		success : function (ret) {
    			$(".jiangl .jiangl1_a span").html(conObj.name);
    			$(".jiangl").show();
    			setTimeout(function(){
    				$(".jiangl").hide();
    			}, 3000);
    		}
    	});
    }
    // 游戏时间
    // 每次调用+5秒
    function submitPlayTime() {
	return;
    	$.ajax({
    		url : '?r=play/submitPlayTime',
    		success : function(ret){
    			//console.log(ret);
    		}
    	});
    }
    (function runTime(){
    	if(gameTime > 0)
    		submitPlayTime();
    	gameTime+=5;
    	setTimeout(runTime, 5*1000);
    })();
    // 隐藏地址栏
    setTimeout(scrollTo,0,0,0);
});

(function(){

if(!isMobile()) return;

var COVER_IMG = "cover_play68.png";
var COVER_SIZE = "100%";

/*var coverNode = document.createElement("img");
coverNode.style.cssText = "position:fixed;z-index:1000000;left:0;top:0;width:100%;height:100%;";
coverNode.src = RESOURCE_IMG_PATH+COVER_IMG;*/

//加载loading图片

var COVEHEIGHT=window.innerHeight+"px";
var COVEWIDTH= window.innerWidth+"px";
var coverNode = document.createElement("div");
coverNode.style.cssText = "position:relative;z-index:1000000;margin:auto;background:#fff;width:"+COVEWIDTH+"max-width:640px;min-width:320px;height:"+COVEHEIGHT;
coverNode.innerHTML="<div  style='z-index:1000000;width:64.375%; margin:auto;padding-top:20%;'><img src='./files/bg_shurukuang.png' width='412' height='350' style='z-index:999999999;width:100%; height:auto;'></div><div  style='z-index:1000000;text-align:center; padding-top:40%; color:#adadad; font-size:12pt;'>&copy;2015 蚂蚁HTML5社区</div>";


document.body.appendChild(coverNode);
setTimeout(function(){coverNode.parentNode.removeChild(coverNode)},3000);

//document.addEventListener("touchmove",function(e){e.preventDefault();},false);
var noticeNode = document.createElement("div");
noticeNode.className = "common_notice";
noticeNode.style.cssText = "position:absolute;z-index:999999;left:0;top:0;background:#fffefc url(./files/rotate_tip.png) no-repeat center center;background-size: 50%;";
document.body.appendChild(noticeNode);


function checkCover(){
	window.scroll(0,0);
	var horizontal;
	if(window.orientation == 0 || window.orientation == 180){
		horizontal = false;
	}else if (window.orientation == -90 || window.orientation == 90){
		horizontal = true;
	}
	else {
		horizontal = false;
	}
	if(horizontal == HORIZONTAL){
		noticeNode.style.display = "none";
	}else{
		setTimeout(function(){
			ajustWidthHeight();
			noticeNode.style.width = window.innerWidth+"px";
			noticeNode.style.display = "block";
		},(isIOS() ? 0 : 600));
	}
	if(HORIZONTAL == true && isWeixin() && !isIOS()) {
		WeixinJSBridge.call('hideToolbar');
	}
	var _h = window.orientation;
	//GameFrame.style.cssText = "transform: rotateX("+_h+"deg);-moz-transform: rotateX("+_h+"deg);-webkit-transform: rotateX("+_h+"deg);";
	document.getElementById('game_window').contentWindow.postMessage({orientation:window.orientation}, '*');
}

function ajustWidthHeight(){
	coverNode.style.height=window.innerHeight+"px";
	coverNode.style.width=window.innerWidth+"px";
	noticeNode.style.height=window.innerHeight+"px";
}

window.addEventListener("orientationchange",checkCover);
window.addEventListener("load",checkCover);
window.addEventListener("scroll",ajustWidthHeight);
})();

// loading
function showLoading() {
	var img = $("<img id='loading' src='/resources/images/loding.png' style='width:128px;height:128px;'/>");
	var h = (document.documentElement.clientHeight-128)/2;
	var w = (document.documentElement.clientWidth-128)/2;
	img.css("position","absolute")
		.css("top",h)
		.css("left",w)
		.css("z-index","9999999")
		.appendTo($(document.body));
	var an = 0;
	window.loadTimer = setInterval(function(){
		img.css("transform", "rotate("+an+"deg)");
		an += 15;
	}, 40);
}
function hideLoading(){
	$('#loading').remove();
	clearInterval(window.loadTimer);
}
