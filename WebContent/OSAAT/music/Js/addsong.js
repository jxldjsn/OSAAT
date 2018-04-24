// JavaScript Document
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function(window) {

	'use strict';

	// class helper functions from bonzo https://github.com/ded/bonzo

	function classReg(className) {
		return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}

	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes
	// at once
	var hasClass, addClass, removeClass;

	if ('classList' in document.documentElement) {
		hasClass = function(elem, c) {
			return elem.classList.contains(c);
		};
		addClass = function(elem, c) {
			elem.classList.add(c);
		};
		removeClass = function(elem, c) {
			elem.classList.remove(c);
		};
	} else {
		hasClass = function(elem, c) {
			return classReg(c).test(elem.className);
		};
		addClass = function(elem, c) {
			if (!hasClass(elem, c)) {
				elem.className = elem.className + ' ' + c;
			}
		};
		removeClass = function(elem, c) {
			elem.className = elem.className.replace(classReg(c), ' ');
		};
	}

	function toggleClass(elem, c) {
		var fn = hasClass(elem, c) ? removeClass : addClass;
		fn(elem, c);
	}

	var classie = {
		// full names
		hasClass : hasClass,
		addClass : addClass,
		removeClass : removeClass,
		toggleClass : toggleClass,
		// short names
		has : hasClass,
		add : addClass,
		remove : removeClass,
		toggle : toggleClass
	};

	// transport
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(classie);
	} else {
		// browser global
		window.classie = classie;
	}

})(window);

/* 判断音乐文件是否上传 */
//function checkMusic() {
//	var str = document.getElementById("uploadsong").value;
//	if (str.length == 0 || str == "") {
//		/* alert("请选择上传"); */
//		var txt = "对不起，请您先选择要上传的音乐文件！";
//		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
//		return false;
//	}
//
//	return true;
//}

/*
 * 判断音乐的类型是否符合标准
 * 
 * @param ths type="file"的javascript对象 @return true-符合要求,false-不符合
 */

function checkMusicType(ths) {

	if (ths.value == "") {
		var txt = "对不起，请您先上传音乐文件！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.confirm);
		return false;
	} else {
		if (!/\.(mp3|MP3)$/.test(ths.value)) {
			var txt = "对不起，请您选择格式为MP3的音乐类型！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
			/* alert("图片类型必须是.gif,jpeg,jpg,png中的一种"); */
			ths.value = "";
			return false;
		}
	}
	return true;
}

/* 判断音乐的图片是否上传 */
//function checkMusicImg() {
//	var str = document.getElementById("songImage").value;
//	if (str.length == 0 || str == "") {
//		/* alert("请选择上传"); */
//		var txt = "对不起，请您先选择要上传的音乐图片！";
//		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
//		return false;
//	}
//
//	return true;
//}

/*
 * 判断图片类型是否符合标准
 * 
 * @param ths type="file"的javascript对象 @return true-符合要求,false-不符合
 */

function checkImgType(ths) {

	if (ths.value == "") {
		var txt = "对不起，请您先上传图片！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.confirm);
		return false;
	} else {
		if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(ths.value)) {
			var txt = "对不起，请您选择正确的图片类型（包括：gif,jpeg,jpg,png）等！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
			/* alert("图片类型必须是.gif,jpeg,jpg,png中的一种"); */
			ths.value = "";
			return false;
		}
	}
	return true;
}

/* 判断上传音乐的信息是否完整 */
function checkMusicInformation() {
	var songname = document.getElementById("input-16").value;
	var songer = document.getElementById("input-17").value;
	var songSrc = document.getElementById("songSrc").value;
	var imageSrc = document.getElementById("imageSrc").value;

	/* 判断音乐文件是否选择 */
	var str = document.getElementById("uploadsong").value;
	if (str.length == 0 || str == "") {
		/* alert("请选择上传"); */
		var txt = "对不起，请您先选择要上传的音乐文件！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
		return false;
	}

	/* 判断音乐的图片是否选择 */
	var str = document.getElementById("songImage").value;
	if (str.length == 0 || str == "") {
		/* alert("请选择上传"); */
		var txt = "对不起，请您先选择要上传的音乐图片！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
		return false;
	}
	
	if (songname == "") {
		/* alert("请选择上传"); */
		var txt = "对不起，请您先填写歌曲的名字！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.warning);
		return false;
	} else if (songer == "") {
		var txt = "对不起，请您先填写歌手的名字！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.warning);
		return false;
	}

	return true;
}