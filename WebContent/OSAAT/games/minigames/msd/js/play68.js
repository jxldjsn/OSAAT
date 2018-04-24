function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "迷失";
	if(score > 0)
		shareTitle = '#迷失#我闯过了第' + score +'关，在迷失的荒岛为生存而战吧！';
	else
		shareTitle = "#迷失#在迷失的荒岛为生存而战吧！";
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
	// document.title = shareTitle;
}
