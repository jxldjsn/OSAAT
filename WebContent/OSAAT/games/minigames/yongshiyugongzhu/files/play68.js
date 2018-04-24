function play68_init() {
	updateShare(0);
}



function play68_submitScore(score) {
	updateShareScore(score);
	setTimeout( function() { Play68.shareFriend(); }, 1000 )
}

function updateShare(bestScore) {
	var descContent = "分享信息内容！";
   if(bestScore > 0) {
		shareTitle = "我在玩#勇士与公主#拯救了" + bestScore + "次公主，一起来拯救公主吧！";
	}
	else{
		shareTitle = "我在玩#勇士与公主#我的公主，我一定会来救你的！";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}

function updateShareScore(bestScore) {
	updateShare(bestScore);
}