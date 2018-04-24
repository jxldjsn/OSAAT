// config
var HOME_PATH = '#';

var LOAD_PATH = "http://www.qq.com";

var GAME_PATH = "http://127.0.0.1/game";

/*关注*/
var WEIXIN = 'http://mp.weixin.qq.com/s?__biz=MzA4MDQzNTQ1OA==&mid=400066902&idx=1&sn=5239102dd8f42b3905768ba50ba7b1bb&scene=0#rd';

/*游戏的首页url更多游戏*/
var MORE_GAME='#';
/*平台logo*/
var LOGO_URL='gfm.png';
/*pk，APP下载*/
var APP_URL='http://shouyou.hubayouxi.com/download.php';

/*关注*/
function HuBachangeweixin() {

    window.location.href='http://mp.weixin.qq.com/s?__biz=MzA4MDQzNTQ1OA==&mid=400066902&idx=1&sn=5239102dd8f42b3905768ba50ba7b1bb&scene=0#rd';
}

/*游戏的首页url*/
function HuBagameHomePage_url() {
    window.location.href='http://weiyouxi.hubayouxi.com';
}

/*平台logo*/
function HuBachangelogo_url() {

    window.location.href='http://weiyouxi.hubayouxi.com/mini-game/common/image/logo.png';

}

/*pk，APP下载*/
function HuBagameApp_url() {

    window.location.href='http://shouyou.hubayouxi.com/download.php';

}

/*点击分享*/
function HuBafenxiang() {

    $("#shareimg").css("display","block");
    $("#shareimg").click(function(e) {
        $("#shareimg").css("display","none")
    });

}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	