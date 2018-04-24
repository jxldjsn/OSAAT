var setScreenWidth = 390;
var setScreenHeight = 500;
init(50,"mylegend",setScreenWidth,setScreenHeight,main);

var backLayer,loadingLayer,imgLayer,ctrlLayer,borderLayer,overLayer,initGameLayer,recordLayer,aboutLayer;
var steps = 0,time = 0;
var grades;
var isWin = 0;
var imglist = {};
var imgData = [
	{name:"garden",path:"./images/garden.jpg"},
	{name:"outside",path:"./images/outside.jpg"},
	{name:"button01",path:"./images/button01.png"},
	{name:"button02",path:"./images/button02.png"},
	{name:"button03",path:"./images/button03.png"},
	{name:"button04",path:"./images/button04.png"},
	{name:"button05",path:"./images/button05.png"},
	{name:"gameover_rect",path:"./images/rect.png"},
	{name:"button01_over",path:"./images/button01_over.png"},
	{name:"button02_over",path:"./images/button02_over.png"},
	{name:"button04_over",path:"./images/button04_over.png"},
	{name:"button05_over",path:"./images/button05_over.png"}
];

function main(){
	loadingLayer = new LoadingSample1();
	addChild(loadingLayer);
	LLoadManage.load(
		imgData,
		function(progress){
			loadingLayer.setProgress(progress);
		},
		function(result){
			imglist = result;
			removeChild(loadingLayer);
			loadingLayer = null;
			//加入游戏开始时的背景
			gameInitBack();
        	}
	);
}
var mapLookData;
function gameInit(){
	mapLookData = Math.ceil(Math.random()*(1-(-1))-1);

	//初始化游戏层
	initLayer();
	//初始化背景
	initBackground();
	//调用随即分配地图的函数
	getRandomMap();
	//加入两个用户可见的变量
	addText();
	//加入要达到的图片
	addTrueImg();
	//初始化拼图块
	initImg();
}
var startBtn;
var aboutBtn;
var recordBtn;
var initTextContent = ["智力大拼图","版本：v0.1"];
var initText;
function gameInitBack(){
	gameInit();
	initGameLayer = new LSprite();
	backLayer.addChild(initGameLayer);

	initGameLayer.graphics.drawRect(3,"dimgray",[15,30,360,440],true,"lightgray");

	for(var i=0;i<initTextContent.length;i++){
		initText = new LTextField();
		initText.weight = "bold";
		initText.text = initTextContent[i];
		if(i==0){
			initText.size = 25;
  			initText.color = "dimgray";
			initText.font = "黑体";
			initText.x = (LGlobal.width - initText.getWidth())*0.5;
			initText.y = 130;
		}
		if(i==1){
			initText.size = 15;
  			initText.color = "white";
			initText.font = "宋体";
			initText.x = (LGlobal.width - initText.getWidth())*0.5;
			initText.y = 170;	
		}
		initGameLayer.addChild(initText);
	}

	startBtn = new LButton(new LBitmap(new LBitmapData(imglist["button01"])),
		new LBitmap(new LBitmapData(imglist["button01_over"])));  
	startBtn.x = (LGlobal.width - startBtn.getWidth())*0.5;
	startBtn.y = 200;  
	initGameLayer.addChild(startBtn);

	aboutBtn = new LButton(new LBitmap(new LBitmapData(imglist["button05"])),
		new LBitmap(new LBitmapData(imglist["button05_over"])));  
 	aboutBtn.x = (LGlobal.width - aboutBtn.getWidth())*0.5;  
    	aboutBtn.y = 250;  
    	initGameLayer.addChild(aboutBtn);
 
 
	recordBtn = new LButton(new LBitmap(new LBitmapData(imglist["button02"])),
		new LBitmap(new LBitmapData(imglist["button02_over"])));  
 	recordBtn.x = (LGlobal.width - recordBtn.getWidth())*0.5;  
    	recordBtn.y = 300;  
    	initGameLayer.addChild(recordBtn);

    	startBtn.addEventListener(LMouseEvent.MOUSE_DOWN, function(){
		//加入事件监听
		addEvent();
		
		if(startStatus == 0){
			startStatus++;
			changeTime = setInterval(function(){time+=1; timeText.text = "游戏用时："+time;},1000);
		}
		LTweenLite.to(initGameLayer,1,{alpha:1});
		initGameLayer.removeAllChild();
		backLayer.removeChild(initGameLayer);
	});  
	recordBtn.addEventListener(LMouseEvent.MOUSE_DOWN, function(){
		showRecord();
	});
	aboutBtn.addEventListener(LMouseEvent.MOUSE_DOWN, aboutGame);

	LTweenLite.to(initGameLayer,1,{alpha:0.9});
}
var initCloseBtn;
var aboutTextArr = ["关于游戏","游戏引擎：lufylegend","游戏版本：v0.1","程序设计：Yorhom","素材来源：按钮自画，拼图来自网络","我的博客：http://www.cnblogs.com/jxldjsn/","我的邮箱：1622140253@qq.com"];
var aboutText;

function aboutGame(){
	aboutLayer = new LSprite();
	backLayer.addChild(aboutLayer);

	aboutLayer.graphics.drawRect(3,"dimgray",[15,30,360,440],true,"lightgray");

	initCloseBtn = new LButton(new LBitmap(new LBitmapData(imglist["button03"])),
		new LBitmap(new LBitmapData(imglist["button03"])));  
	initCloseBtn.x = 342;
	initCloseBtn.y = 33;  
	aboutLayer.addChild(initCloseBtn);
	initCloseBtn.addEventListener(LMouseEvent.MOUSE_DOWN, function(event){
		LTweenLite.to(aboutLayer,1,{alpha:1});
		aboutLayer.removeAllChild();
		backLayer.removeChild(aboutLayer);
	});
	LTweenLite.to(aboutLayer,1,{alpha:0.9});

	for(var i=0;i<aboutTextArr.length;i++){
		aboutText = new LTextField();
		aboutText.weight = "bold";
		aboutText.text = aboutTextArr[i];
		if(i==0){
			aboutText.size = 25;
  			aboutText.color = "dimgray";
			aboutText.font = "黑体";
			aboutText.x = (LGlobal.width - aboutText.getWidth())*0.5;
			aboutText.y = 33;
		}else{
			aboutText.size = 12;
  			aboutText.color = "white";
			aboutText.font = "Tahoma";
			aboutText.x = 30;
			aboutText.y = 100 + (i-1)*22;	
		}
		aboutLayer.addChild(aboutText);
	}	
}
function initLayer(){
	backLayer = new LSprite();
	addChild(backLayer);

	imgLayer = new LSprite();
	backLayer.addChild(imgLayer);

	borderLayer = new LSprite();
	backLayer.addChild(borderLayer);

	overLayer = new LSprite();
	backLayer.addChild(overLayer);

	ctrlLayer = new LSprite();
	backLayer.addChild(ctrlLayer);
}
function initBackground(){
	//画出图片上的横向网格
	var color = "gray";
	for(var i=0;i<3;i++){
		borderLayer.graphics.drawRect(5,color,[0,i*130,setScreenWidth,130],false);
	}
	//画出图片上的纵向网格
	for(var i=0;i<3;i++){
		borderLayer.graphics.drawRect(5,color,[i*130,0,130,390],false);
	}
	//画出游戏的边框和背景
	borderLayer.graphics.drawRect(6,"dimgray",[0,0,setScreenWidth,setScreenHeight],false);
	backLayer.graphics.drawRect(5,"dimgray",[0,0,setScreenWidth,setScreenHeight],true,"lightgray");
}
//地图数组
var tileData = [
	[0,1,2],
	[3,4,5],
	[6,8,7]
];

function initImg(){
	var i,j;
	var index,indexY,indexX;
	var bitmapdata,bitmap;

	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			//从地图数组中得到相应位置的图片坐标
			index = tileData[i][j];
			//小图片的竖坐标
			indexY = Math.floor(index/3);
 			//小图片的横坐标
			indexX = index - indexY*3;
 
			//得到小图片
			if(mapLookData==0){
				bitmapdata = new LBitmapData(imglist["garden"],indexX*130,indexY*130,130,130);
			}else{
				bitmapdata = new LBitmapData(imglist["outside"],indexX*130,indexY*130,130,130);
			}
			//bitmapdata = new LBitmapData(imglist["garden"],indexX*130,indexY*130,130,130);
			bitmap = new LBitmap(bitmapdata);
			//设置小图片的显示位置
			bitmap.x = j*130;  
			bitmap.y = i*130;
			//将小图片显示到地图层
			imgLayer.addChild(bitmap);
        	}
	}
	toWin();
	stepText.text = "行动次数："+steps;
}
//原数组
var tileOriginaArray = [];
//最终数组
var finallyMapArry = [];

function getRandomMap(){
	//用来装每一行的值的临时数组
	var partTimeArray = [];
	//用于遍历变量
	var i,j;
	//设置最大限度
	var count = 9;

	//第一次遍历让原数组获得值
	for(i=0;i<count;i++){
		tileOriginaArray[i] = i;
	}
	//将原数组打乱顺序
	tileOriginaArray.sort(function(){return 0.5 - Math.random();});
	//第二次遍历让原数组分割成二维数组
	for(j=0;j<count;j++){
		//给二维数组某一行赋值
		partTimeArray[partTimeArray.length] = tileOriginaArray[j];
		//判断是否达到每行需要的列数
		if((j+1)%3==0){
			//给最终数组装入每一行
			finallyMapArry.push(partTimeArray);
			//清空临时数组
			partTimeArray = [];
		}
	}
	//给地图数组赋值为最终数组
	tileData = finallyMapArry;
}
function addTrueImg(){
	var trueBitmapdata,trueBitmap;
	
	if(mapLookData==0){
		trueBitmapdata = new LBitmapData(imglist["garden"]);
	}else{
		trueBitmapdata = new LBitmapData(imglist["outside"]);
	}
	trueBitmap = new LBitmap(trueBitmapdata);
	trueBitmap.x = 160;
	trueBitmap.y = 400;
	trueBitmap.scaleX = 0.2;
	trueBitmap.scaleY = 0.2;
	overLayer.addChild(trueBitmap);

	overLayer.graphics.drawRect(3,"dimgray",[15,423,120,28],false);
	overLayer.graphics.drawRect(3,"dimgray",[255,423,120,28],false);
}
function addEvent(){
	imgLayer.addEventListener(LMouseEvent.MOUSE_DOWN,onDown);
}
var partX,partY;
var changeTime;
var startStatus = 0;

function onDown(){
	var mouseX,mouseY;
	mouseX = event.clientX;
	mouseY = event.clientY;

	partX = Math.floor(mouseX/130);
	partY = Math.floor(mouseY/130);
	queryMove(partX,partY);
}
function queryMove(x,y){
	steps+=1;

	if(x<2 && tileData[y][x+1] == 8){
		tileData[y][x+1] = tileData[y][x];
		tileData[y][x] = 8;
		initImg();
	}else if(x>0 && tileData[y][x-1] == 8){
		tileData[y][x-1] = tileData[y][x];
		tileData[y][x] = 8;
		initImg();
	}else if(y<2 && tileData[y+1][x] == 8){
		tileData[y+1][x] = tileData[y][x];
		tileData[y][x] = 8;
		initImg();
	}else if(y>0 && tileData[y-1][x] == 8){
		tileData[y-1][x] = tileData[y][x];
		tileData[y][x] = 8;
		initImg();
	}
}
//正确数组
var trueTileData = [
	[0,1,2],
	[3,4,5],
	[6,7,8]
];
var amount;
localStorage["locRecordNo"] = 0;

function toWin(){
	if(isWin != 1 && tileData.toString() == trueTileData.toString()){
		amount = steps + time;
		gameOver();
		writeRecord();
	}
}
//定义输出层
var stepText;
var timeText;

function addText(){	
	stepText = new LTextField();
	stepText.size = 10;
  	stepText.color = "black";
	stepText.x = 20;
	stepText.y = 430;
	overLayer.addChild(stepText);

	timeText = new LTextField();
	timeText.size = 10;
  	timeText.color = "black";
	timeText.text = "游戏用时："+time;
	timeText.x = 260;
	timeText.y = 430;
	overLayer.addChild(timeText);
}
var btn01;
var btn02;
var gameoverBitMap;
var winText;
var winTextContent = [];

function gameOver(){
	if(amount<40){
		grades = "圣者";
	}else if(amount>39 && amount<80){
		grades = "前将军";
	}else if(amount>79 && amount<160){
		grades = "左将军";
	}else if(amount>159 && amount<200){
		grades = "右将军";
	}else if(amount>199 && amount<240){
		grades = "中将军";
	}else if(amount>239 && amount<300){
		grades = "后将军";
	}else if(amount>299 && amount<500){
		grades = "帐中军师";
	}else if(amount>499 && amount<1000){
		grades = "小小策士";
	}else if(amount>999 && amount<2000){
		grades = "献世小卒";
	}else{
		grades = "押粮步兵";
	}
	winTextContent = ["恭喜您，您通关了","您的等级是："+grades];

	gameoverBitMap = new LBitmap(new LBitmapData(imglist["gameover_rect"]));
	gameoverBitMap.x = 30;
	gameoverBitMap.y = 100;
	ctrlLayer.addChild(gameoverBitMap);

	imgLayer.removeEventListener(LMouseEvent.MOUSE_DOWN,onDown);
	clearInterval(changeTime);
	startStatus = -1;
	isWin = 1;

	for(var i=0;i<winTextContent.length;i++){
		winText = new LTextField();
		winText.weight = "bold";
		winText.text = winTextContent[i];
		if(i==0){
			winText.size = 25;
  			winText.color = "dimgray";
			winText.font = "黑体";
			winText.x = (LGlobal.width - winText.getWidth())*0.5;
			winText.y = 130;
		}
		if(i==1){
			winText.size = 15;
  			winText.color = "white";
			winText.font = "宋体";
			winText.x = (LGlobal.width - winText.getWidth())*0.5;
			winText.y = 170;	
		}
		ctrlLayer.addChild(winText);
	}

	btn01 = new LButton(new LBitmap(new LBitmapData(imglist["button01"])),
		new LBitmap(new LBitmapData(imglist["button01_over"])));  
	btn01.x = (LGlobal.width - btn01.getWidth())*0.5;
	btn01.y = 200;  
	ctrlLayer.addChild(btn01);  
 
	btn02 = new LButton(new LBitmap(new LBitmapData(imglist["button02"])),
		new LBitmap(new LBitmapData(imglist["button02_over"])));  
 	btn02.x = (LGlobal.width - btn02.getWidth())*0.5;  
    	btn02.y = 250;  
    	ctrlLayer.addChild(btn02);

    	btn01.addEventListener(LMouseEvent.MOUSE_DOWN, reStart);  
	btn02.addEventListener(LMouseEvent.MOUSE_DOWN, showRecord);

	LTweenLite.to(ctrlLayer,1,{alpha:0.9});
}
function reStart(event){
	backLayer.removeAllChild();
	removeChild(backLayer);
	gameInit();
	addEvent();
	stepText.text = "行动次数：0";
	steps = 0;
	time = 0;
	startStatus = 0;	

	if(startStatus == 0){
		startStatus++;
		changeTime = setInterval(function(){time+=1; timeText.text = "游戏用时："+time;},1000);
	}
	LTweenLite.to(ctrlLayer,1,{alpha:1});
	ctrlLayer.removeAllChild();
	isWin = 0;
}
var recordRunTimesArry;
var recordTimeArry;
var maxTimeArr = [];
var maxRunTimesArr = [];

function writeRecord(){
	if(localStorage["locRecordRunTimesArry"] == undefined || localStorage["locRecordTimeArry"] == undefined){
		localStorage.setItem("locRecordRunTimesArry",'');
		localStorage.setItem("locRecordTimeArry",'');

		recordRunTimesArry = localStorage["locRecordRunTimesArry"].split(",");
		recordTimeArry = localStorage["locRecordTimeArry"].split(",");

		recordRunTimesArry[recordRunTimesArry.length] = steps;
		localStorage["locRecordRunTimesArry"] = recordRunTimesArry;

		recordTimeArry[recordTimeArry.length] = time;
		localStorage["locRecordTimeArry"] = recordTimeArry;
	}else{
		recordRunTimesArry = localStorage["locRecordRunTimesArry"].split(",");
		recordTimeArry = localStorage["locRecordTimeArry"].split(",");

		recordRunTimesArry[recordRunTimesArry.length] = steps;
		localStorage["locRecordRunTimesArry"] = recordRunTimesArry;

		recordTimeArry[recordTimeArry.length] = time;
		localStorage["locRecordTimeArry"] = recordTimeArry;
	}
}
var btn03;
var btn04;
function showRecord(){
	if(localStorage["locRecordRunTimesArry"] == undefined || localStorage["locRecordTimeArry"] == undefined){
		localStorage.setItem("locRecordRunTimesArry",'');
		localStorage.setItem("locRecordTimeArry",'');

		recordRunTimesArry = localStorage["locRecordRunTimesArry"].split(",");
		recordTimeArry = localStorage["locRecordTimeArry"].split(",");
	}else{
		recordRunTimesArry = localStorage["locRecordRunTimesArry"].split(",");
		recordTimeArry = localStorage["locRecordTimeArry"].split(",");
	}
	recordLayer = new LSprite();
	backLayer.addChild(recordLayer);

	getRecord();
	printRecordFont();
	recordLayer.graphics.drawRect(3,"dimgray",[15,30,360,440],true,"lightgray");
	LTweenLite.to(recordLayer,1,{alpha:0.9});

	btn03 = new LButton(new LBitmap(new LBitmapData(imglist["button03"])),
		new LBitmap(new LBitmapData(imglist["button03"])));  
	btn03.x = 342;
	btn03.y = 33;  
	recordLayer.addChild(btn03);
	
	btn04 = new LButton(new LBitmap(new LBitmapData(imglist["button04"])),
		new LBitmap(new LBitmapData(imglist["button04_over"])));  
	btn04.x = (LGlobal.width - btn04.getWidth())*0.5;;
	btn04.y = 420;  
	recordLayer.addChild(btn04);
	
	btn03.addEventListener(LMouseEvent.MOUSE_DOWN, 
	function(event){
		recordLayer.removeAllChild();
		backLayer.removeChild(recordLayer);
		LTweenLite.to(backLayer,1,{alpha:1});
	});
	btn04.addEventListener(LMouseEvent.MOUSE_DOWN, 
	function(event){
		localStorage.removeItem("locRecordRunTimesArry")
		localStorage.removeItem("locRecordTimeArry");
	});
}
var recordFontArr = ["游戏记录","名次","行动次数","游戏用时"];
var recordText;
var recordFontX = 120;
var recordFontY = 30;

function printRecordFont(){
	for(var i=0;i<recordFontArr.length;i++){
		recordText = new LTextField();
		recordText.weight = "bold";
		recordText.text = recordFontArr[i];
		if(i==0){
			recordText.size = 25;
  			recordText.color = "dimgray";
			recordText.font = "黑体";
			recordText.x = (LGlobal.width - recordText.getWidth())*0.5;
			recordText.y = 33;
		}else if(i>=1 && i<=4){
			recordText.size = 12;
  			recordText.color = "gray";
			recordText.font = "宋体";
			recordText.x = 25 + (i-1)*recordFontX;
			recordText.y = 80;	
		}
		recordLayer.addChild(recordText);
	}
	for(var i=0;i<10;i++){
		recordText = new LTextField();
		recordText.weight = "bold";
		recordText.font = "宋体";
		recordText.color = "white";
		recordText.size = 12;
		recordText.x = 25;
		recordText.y = 140 + (i-1)*recordFontY;
		recordText.text = i + 1;
		recordLayer.addChild(recordText);
	}
	for(var i=0;i<10;i++){
		recordText = new LTextField();
		recordText.weight = "bold";
		recordText.font = "宋体";
		recordText.color = "white";
		recordText.size = 12;
		recordText.x = 25 + 1*recordFontX;
		recordText.y = 140 + (i-1)*recordFontY;;
		recordText.text = maxRunTimesArr[i+1] || '';
		recordLayer.addChild(recordText);
	}
	for(var i=0;i<10;i++){
		recordText = new LTextField();
		recordText.weight = "bold";
		recordText.font = "宋体";
		recordText.color = "white";
		recordText.size = 12;
		recordText.x = 25 + 2*recordFontX;
		recordText.y = 140 + (i-1)*recordFontY;;
		recordText.text = maxTimeArr[i+1] || '';
		recordLayer.addChild(recordText);
	}
}
function getRecord(){
	maxTimeArr = recordTimeArry.sort(function(a,b){return a-b;});
	maxRunTimesArr = recordRunTimesArry.sort(function(a,b){return a-b;});
}



