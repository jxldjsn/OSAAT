var Language=
{
	chinese:
	{
		startGame:"%u5F00%u59CB%u6E38%u620F",
		keySetting:"%u6309%u952E%u8BBE%u7F6E",
		level:"%u96BE%u5EA6%u8BBE%u7F6E",
		languageSetting:"%u8BED%u8A00%u8BBE%u7F6E",
		chinese:"%u7B80%u4F53%u4E2D%u6587",
		english:"%u82F1%u6587",
		creator:"%u5236%u4F5C%u8005",
		normal:"%u666E%u901A%u7EA7",
		hard:"%u56F0%u96BE%u7EA7",
		crazy:"%u72C2%u4EBA%u7EA7",
		gameKeyConfigure:"%u6E38%20%u620F%20%u6309%20%u952E%20%u8BBE%20%u7F6E",
		currentGameLevel:"%u5F53%u524D%u6E38%u620F%u96BE%u5EA6",
		keyUp:"%u5411%u4E0A",
		keyDown:"%u5411%u4E0B",
		keyLeft:"%u5411%u5DE6",
		keyRight:"%u5411%u53F3",
		keyShot:"%u53D1%u5F39",
		keyBomb:"%u653E%u70B8%u5F39",
		finallyScore:"%u6700%u7EC8%u5F97%u5206",
		gameDesigner:"%u6E38%u620F%u8BBE%u8BA1",
		graphicDesigner:"%u56FE%u5F62%u5904%u7406",
		programer:"%u7A0B%u5E8F%u8BBE%u8BA1",
		contentMe:"%u548C%u6211%u8054%u7CFB",
		creatorName:"%u968F%u673A",
		creatorFullName:"%u968F%u673A",
		email:"1366834931@qq.com",
		created:"%u4E8C%u96F6%u96F6%u516B%u5E74%u5341%u4E00%u6708%u4E8C%u5341%u4E09%u65E5",
		gameOverSrc:"images/background/gameOverCh.gif",
		missionCompletedSrc:"images/background/missionCompletedCh.gif",
		mainPictureTitle:"mainTitleCh"
	},
	english:
	{
		startGame:"Start Game",
		keySetting:"Key Setting",
		level:"Level",
		languageSetting:"Language",
		chinese:"Chinese",
		english:"English",
		creator:"Credits",
		normal:"Normal",
		hard:"Hard",
		crazy:"Crazy",
		gameKeyConfigure:"Game Key Configure",
		currentGameLevel:"Current Game Level",
		keyUp:"Up",
		keyDown:"Down",
		keyLeft:"Left",
		keyRight:"Right",
		keyShot:"Shot",
		keyBomb:"Bomb",
		finallyScore:"Finally Score:",
		gameDesigner:"Game Designer",
		graphicDesigner:"Graphic Designer",
		programer:"Programer",
		contentMe:"Content Me",
		creatorName:"Zhi.Yong",
		email:"1366834931@qq.com",
		creatorFullName:"Zhi.Yong.Wang",
		created:"2016-01-15",
		gameOverSrc:"images/background/gameOverEn.gif",
		missionCompletedSrc:"images/background/missionCompletedEn.gif",
		mainPictureTitle:"mainTitleEn"
		
	},
	changeTo:function(languageCode)
	{
		eval("global.languageResource=this."+languageCode+";");
	}
};