//******************* Global objects ****************
var global=
{
	GAME_SPEED:30,
	MAX_NUMBER:10E+100,
	level:1,
	levelText:"Normal",
	bulletType:new Object(),
	currentAttackPlaneIndex:0,
	currentAttackPlane:{},
	planeBullets:new Array(),
	enemyBullets:new Array(),
	planes:new Array(),
	enemies:new Array(),
	bonuses:new Array(),
	keyListenState:"setMenuOption",
	currentSettingKey:"",
	keyUp:87,
	keyDown:83,
	keyLeft:65,
	keyRight:68,
	keyShot:74,
	keyBomb:75,
	keyCodeList:new Array(),
	plane1:null,
	mainMenu:{},
	subMenu1:{},
	subMenu2:{},
	subMenu3:{},
	languageResource:{},
	currentStage:{},
	stagesCount:0,
	stagesIndexs:new Array(),
	mainPicture:{},
	mainTitleCh:{},
	mainTitleEn:{}
};

if(navigator.appName.toLowerCase().indexOf("netscape")!=-1)
{
	global.GAME_SPEED=global.GAME_SPEED+(parseInt(global.GAME_SPEED/7));
}

global.bulletType.PLANE="plane";
global.bulletType.ENEMY="enemy";

global.languageResource=Language.english;


global.getAngle=function(startX,startY,endX,endY)
{
	var angle;
	var tanx;
	if(endX-startX!=0)
	{
		tanx=Math.abs(endY-startY)/Math.abs(endX-startX);
	}
	else
	{
		return 90+(endY-startY>0?180:0);
	}
	angle=Math.atan(tanx)/2/Math.PI*360;

	if(endX-startX<0 && endY-startY<=0)
	{
		angle=180-angle;
	}
	if(endX-startX<0 && endY-startY>0)
	{
		angle+=180;
	}
	if(endX-startX>=0 && endY-startY>0)
	{
		angle=360-angle;
	}
	return angle;
};


function $(id)
{
	return document.getElementById(id);
};

function $$(name)
{
	return document.getElementsByName(name);
};
//****************************************************

function Entity()
{
	//---------- Attributes ----------
	this.currentLoad=0;
	this.totalLoad=0;
	
	var This=this;
	//---------------------------------
	
	function Constructor()
	{
		initializeEnemy();
		initializeEnemyBullet();
		initializePlane();
		initializePlaneBullet();
		initializeBonus();
		initializeAnimation();
		initializeBackground();
		var obj;
		for(obj in This)
		{
			if(This[obj].tagName && This[obj].tagName.toLowerCase()=="img")
			{
				This[obj].style.position="absolute";
				This[obj].style.left="0px";
				This[obj].style.top="0px";
				This.totalLoad++;
			}
		}
		obj=null;
	};
	
	//---------- Methods ----------
	function initializeEnemy()
	{
		This.enemy1=new Image();
		This.enemy1.onload=This.updateLoading;
		This.enemy1.src="images/enemies/enemy1.gif";
		This.enemy1Bright=new Image();
		This.enemy1Bright.onload=This.updateLoading;
		This.enemy1Bright.src="images/enemies/enemy1Bright.gif";
		
		This.enemy2=new Image();
		This.enemy2.onload=This.updateLoading;
		This.enemy2.src="images/enemies/enemy2.gif";
		This.enemy2Bright=new Image();
		This.enemy2Bright.onload=This.updateLoading;
		This.enemy2Bright.src="images/enemies/enemy2Bright.gif";
		
		This.enemy3=new Image();
		This.enemy3.onload=This.updateLoading;
		This.enemy3.src="images/enemies/enemy3.gif";
		This.enemy3Bright=new Image();
		This.enemy3Bright.onload=This.updateLoading;
		This.enemy3Bright.src="images/enemies/enemy3Bright.gif";
		
		This.enemy4=new Image();
		This.enemy4.onload=This.updateLoading;
		This.enemy4.src="images/enemies/enemy4.gif";
		This.enemy4Bright=new Image();
		This.enemy4Bright.onload=This.updateLoading;
		This.enemy4Bright.src="images/enemies/enemy4Bright.gif";
		
		This.enemy5=new Image();
		This.enemy5.onload=This.updateLoading;
		This.enemy5.src="images/enemies/enemy5.gif";
		This.enemy5Bright=new Image();
		This.enemy5Bright.onload=This.updateLoading;
		This.enemy5Bright.src="images/enemies/enemy5Bright.gif";
		
		This.enemy6=new Image();
		This.enemy6.onload=This.updateLoading;
		This.enemy6.src="images/enemies/enemy6.gif";
		This.enemy6Bright=new Image();
		This.enemy6Bright.onload=This.updateLoading;
		This.enemy6Bright.src="images/enemies/enemy6Bright.gif";
		
		This.enemy7=new Image();
		This.enemy7.onload=This.updateLoading;
		This.enemy7.src="images/enemies/enemy7.gif";
		This.enemy7Bright=new Image();
		This.enemy7Bright.onload=This.updateLoading;
		This.enemy7Bright.src="images/enemies/enemy7Bright.gif";
		
		This.enemy8=new Image();
		This.enemy8.onload=This.updateLoading;
		This.enemy8.src="images/enemies/enemy8.gif";
		This.enemy8Bright=new Image();
		This.enemy8Bright.onload=This.updateLoading;
		This.enemy8Bright.src="images/enemies/enemy8Bright.gif";
		
		This.enemy9=new Image();
		This.enemy9.onload=This.updateLoading;
		This.enemy9.src="images/enemies/enemy9.gif";
		This.enemy9Bright=new Image();
		This.enemy9Bright.onload=This.updateLoading;
		This.enemy9Bright.src="images/enemies/enemy9Bright.gif";
		
		This.enemy10=new Image();
		This.enemy10.onload=This.updateLoading;
		This.enemy10.src="images/enemies/enemy10.gif";
		This.enemy10Bright=new Image();
		This.enemy10Bright.onload=This.updateLoading;
		This.enemy10Bright.src="images/enemies/enemy10Bright.gif";
		
		This.enemy11=new Image();
		This.enemy11.onload=This.updateLoading;
		This.enemy11.src="images/enemies/enemy11.gif";
		This.enemy11Bright=new Image();
		This.enemy11Bright.onload=This.updateLoading;
		This.enemy11Bright.src="images/enemies/enemy11Bright.gif";
		
		This.enemy12=new Image();
		This.enemy12.onload=This.updateLoading;
		This.enemy12.src="images/enemies/enemy12.gif";
		This.enemy12Bright=new Image();
		This.enemy12Bright.onload=This.updateLoading;
		This.enemy12Bright.src="images/enemies/enemy12Bright.gif";
		
		This.enemy13=new Image();
		This.enemy13.onload=This.updateLoading;
		This.enemy13.src="images/enemies/enemy13.gif";
		This.enemy13Bright=new Image();
		This.enemy13Bright.onload=This.updateLoading;
		This.enemy13Bright.src="images/enemies/enemy13Bright.gif";
		
		This.enemy14=new Image();
		This.enemy14.onload=This.updateLoading;
		This.enemy14.src="images/enemies/enemy14.gif";
		This.enemy14Bright=new Image();
		This.enemy14Bright.onload=This.updateLoading;
		This.enemy14Bright.src="images/enemies/enemy14Bright.gif";
		
		This.enemy15=new Image();
		This.enemy15.onload=This.updateLoading;
		This.enemy15.src="images/enemies/enemy15.gif";
		This.enemy15Bright=new Image();
		This.enemy15Bright.onload=This.updateLoading;
		This.enemy15Bright.src="images/enemies/enemy15Bright.gif";
		
		This.enemy16=new Image();
		This.enemy16.onload=This.updateLoading;
		This.enemy16.src="images/enemies/enemy16.gif";
		This.enemy16Bright=new Image();
		This.enemy16Bright.onload=This.updateLoading;
		This.enemy16Bright.src="images/enemies/enemy16Bright.gif";
		
		This.enemy17=new Image();
		This.enemy17.onload=This.updateLoading;
		This.enemy17.src="images/enemies/enemy17.gif";
		This.enemy17Bright=new Image();
		This.enemy17Bright.onload=This.updateLoading;
		This.enemy17Bright.src="images/enemies/enemy17Bright.gif";
		
		This.enemy18=new Image();
		This.enemy18.onload=This.updateLoading;
		This.enemy18.src="images/enemies/enemy18.gif";
		This.enemy18Bright=new Image();
		This.enemy18Bright.onload=This.updateLoading;
		This.enemy18Bright.src="images/enemies/enemy18Bright.gif";
		
		This.enemy19=new Image();
		This.enemy19.onload=This.updateLoading;
		This.enemy19.src="images/enemies/enemy19.gif";
		This.enemy19Bright=new Image();
		This.enemy19Bright.onload=This.updateLoading;
		This.enemy19Bright.src="images/enemies/enemy19Bright.gif";
		
		This.enemy20=new Image();
		This.enemy20.onload=This.updateLoading;
		This.enemy20.src="images/enemies/enemy20.gif";
		This.enemy20Bright=new Image();
		This.enemy20Bright.onload=This.updateLoading;
		This.enemy20Bright.src="images/enemies/enemy20Bright.gif";
		
		This.enemy21=new Image();
		This.enemy21.onload=This.updateLoading;
		This.enemy21.src="images/enemies/enemy21.gif";
		This.enemy21Bright=new Image();
		This.enemy21Bright.onload=This.updateLoading;
		This.enemy21Bright.src="images/enemies/enemy21Bright.gif";
		
		This.enemy22=new Image();
		This.enemy22.onload=This.updateLoading;
		This.enemy22.src="images/enemies/enemy22.gif";
		This.enemy22Bright=new Image();
		This.enemy22Bright.onload=This.updateLoading;
		This.enemy22Bright.src="images/enemies/enemy22Bright.gif";
		
		This.enemy23=new Image();
		This.enemy23.onload=This.updateLoading;
		This.enemy23.src="images/enemies/enemy23.gif";
		This.enemy23Bright=new Image();
		This.enemy23Bright.onload=This.updateLoading;
		This.enemy23Bright.src="images/enemies/enemy23Bright.gif";
		
		This.enemy24=new Image();
		This.enemy24.onload=This.updateLoading;
		This.enemy24.src="images/enemies/enemy24.gif";
		This.enemy24Bright=new Image();
		This.enemy24Bright.onload=This.updateLoading;
		This.enemy24Bright.src="images/enemies/enemy24Bright.gif";
		
		This.enemy25=new Image();
		This.enemy25.onload=This.updateLoading;
		This.enemy25.src="images/enemies/enemy25.gif";
		This.enemy25Bright=new Image();
		This.enemy25Bright.onload=This.updateLoading;
		This.enemy25Bright.src="images/enemies/enemy25Bright.gif";
		
		This.enemy26=new Image();
		This.enemy26.onload=This.updateLoading;
		This.enemy26.src="images/enemies/enemy26.gif";
		This.enemy26Bright=new Image();
		This.enemy26Bright.onload=This.updateLoading;
		This.enemy26Bright.src="images/enemies/enemy26Bright.gif";
		
		This.enemy27=new Image();
		This.enemy27.onload=This.updateLoading;
		This.enemy27.src="images/enemies/enemy27.gif";
		This.enemy27Bright=new Image();
		This.enemy27Bright.onload=This.updateLoading;
		This.enemy27Bright.src="images/enemies/enemy27Bright.gif";
		
		This.enemy28=new Image();
		This.enemy28.onload=This.updateLoading;
		This.enemy28.src="images/enemies/enemy28.gif";
		This.enemy28Bright=new Image();
		This.enemy28Bright.onload=This.updateLoading;
		This.enemy28Bright.src="images/enemies/enemy28Bright.gif";
		
		This.enemy29=new Image();
		This.enemy29.onload=This.updateLoading;
		This.enemy29.src="images/enemies/enemy29.gif";
		This.enemy29Bright=new Image();
		This.enemy29Bright.onload=This.updateLoading;
		This.enemy29Bright.src="images/enemies/enemy29Bright.gif";
		
		This.enemy30=new Image();
		This.enemy30.onload=This.updateLoading;
		This.enemy30.src="images/enemies/enemy30.gif";
		This.enemy30Bright=new Image();
		This.enemy30Bright.onload=This.updateLoading;
		This.enemy30Bright.src="images/enemies/enemy30Bright.gif";
		
		This.enemy31=new Image();
		This.enemy31.onload=This.updateLoading;
		This.enemy31.src="images/enemies/enemy31.gif";
		This.enemy31Bright=new Image();
		This.enemy31Bright.onload=This.updateLoading;
		This.enemy31Bright.src="images/enemies/enemy31Bright.gif";
		
		This.enemy32=new Image();
		This.enemy32.onload=This.updateLoading;
		This.enemy32.src="images/enemies/enemy32.gif";
		This.enemy32Bright=new Image();
		This.enemy32Bright.onload=This.updateLoading;
		This.enemy32Bright.src="images/enemies/enemy32Bright.gif";
		
		This.enemy33=new Image();
		This.enemy33.onload=This.updateLoading;
		This.enemy33.src="images/enemies/enemy33.gif";
		This.enemy33Bright=new Image();
		This.enemy33Bright.onload=This.updateLoading;
		This.enemy33Bright.src="images/enemies/enemy33Bright.gif";
		
		This.enemy34=new Image();
		This.enemy34.onload=This.updateLoading;
		This.enemy34.src="images/enemies/enemy34.gif";
		This.enemy34Bright=new Image();
		This.enemy34Bright.onload=This.updateLoading;
		This.enemy34Bright.src="images/enemies/enemy34Bright.gif";
		
		This.enemy35=new Image();
		This.enemy35.onload=This.updateLoading;
		This.enemy35.src="images/enemies/enemy35.gif";
		This.enemy35Bright=new Image();
		This.enemy35Bright.onload=This.updateLoading;
		This.enemy35Bright.src="images/enemies/enemy35Bright.gif";
		
		
		
		This.boss1=new Image();
		This.boss1.onload=This.updateLoading;
		This.boss1.src="images/enemies/boss1.gif";
		This.boss1Bright=new Image();
		This.boss1Bright.onload=This.updateLoading;
		This.boss1Bright.src="images/enemies/boss1Bright.gif";
		
		
		This.boss2=new Image();
		This.boss2.onload=This.updateLoading;
		This.boss2.src="images/enemies/boss2.gif";
		This.boss2Bright=new Image();
		This.boss2Bright.onload=This.updateLoading;
		This.boss2Bright.src="images/enemies/boss2Bright.gif";
		
		This.boss2Left=new Image();
		This.boss2Left.onload=This.updateLoading;
		This.boss2Left.src="images/enemies/boss2Left.gif";
		This.boss2LeftBright=new Image();
		This.boss2LeftBright.onload=This.updateLoading;
		This.boss2LeftBright.src="images/enemies/boss2LeftBright.gif";
		
		This.boss2Right=new Image();
		This.boss2Right.onload=This.updateLoading;
		This.boss2Right.src="images/enemies/boss2Right.gif";
		This.boss2RightBright=new Image();
		This.boss2RightBright.onload=This.updateLoading;
		This.boss2RightBright.src="images/enemies/boss2RightBright.gif";
		
		
		This.boss3=new Image();
		This.boss3.onload=This.updateLoading;
		This.boss3.src="images/enemies/boss3.gif";
		This.boss3Bright=new Image();
		This.boss3Bright.onload=This.updateLoading;
		This.boss3Bright.src="images/enemies/boss3Bright.gif";
		
		This.boss3Left=new Image();
		This.boss3Left.onload=This.updateLoading;
		This.boss3Left.src="images/enemies/boss3Left.gif";
		This.boss3LeftBright=new Image();
		This.boss3LeftBright.onload=This.updateLoading;
		This.boss3LeftBright.src="images/enemies/boss3LeftBright.gif";
		
		This.boss3Right=new Image();
		This.boss3Right.onload=This.updateLoading;
		This.boss3Right.src="images/enemies/boss3Right.gif";
		This.boss3RightBright=new Image();
		This.boss3RightBright.onload=This.updateLoading;
		This.boss3RightBright.src="images/enemies/boss3RightBright.gif";
		
		
		This.boss4=new Image();
		This.boss4.onload=This.updateLoading;
		This.boss4.src="images/enemies/boss4.gif";
		This.boss4Bright=new Image();
		This.boss4Bright.onload=This.updateLoading;
		This.boss4Bright.src="images/enemies/boss4Bright.gif";
	};
	
	function initializeEnemyBullet()
	{
		This.enemyBullet1=new Image();
		This.enemyBullet1.onload=This.updateLoading;
		This.enemyBullet1.src="images/enemyBullets/enemyBullet1.gif";
		
		This.enemyBullet2=new Image();
		This.enemyBullet2.onload=This.updateLoading;
		This.enemyBullet2.src="images/enemyBullets/enemyBullet2.gif";
	};
	
	function initializePlane()
	{
		This.plane1=new Image();
		This.plane1.onload=This.updateLoading;
		This.plane1.src="images/planes/plane1.gif";
		
		This.plane1CountImage=new Image();
		This.plane1CountImage.onload=This.updateLoading;
		This.plane1CountImage.src="images/planes/plane1Count.gif";
	};
	
	function initializePlaneBullet()
	{
		This.planeBullet1=new Image();
		This.planeBullet1.onload=This.updateLoading;
		This.planeBullet1.src="images/planeBullets/planeBullet1_Power1.gif";
		
		This.planeBullet2=new Image();
		This.planeBullet2.onload=This.updateLoading;
		This.planeBullet2.src="images/planeBullets/planeBullet1_Power2.gif";
		
		This.planeBullet3=new Image();
		This.planeBullet3.onload=This.updateLoading;
		This.planeBullet3.src="images/planeBullets/planeBullet1_Power3.gif";
		
		This.planeBullet4=new Image();
		This.planeBullet4.onload=This.updateLoading;
		This.planeBullet4.src="images/planeBullets/planeBullet1_Power4.gif";
		
		This.concentrationBullet1=new Image();
		This.concentrationBullet1.onload=This.updateLoading;
		This.concentrationBullet1.src="images/planeBullets/concentrationBullet1.gif";
	};
	
	function initializeBonus()
	{
		This.powerBonus1=new Image();
		This.powerBonus1.onload=This.updateLoading;
		This.powerBonus1.src="images/bonus/powers/power1.gif";
		
		This.bombBonus1=new Image();
		This.bombBonus1.onload=This.updateLoading;
		This.bombBonus1.src="images/bonus/bombs/bomb1.gif";
		
		This.bombStateImage=new Image();
		This.bombStateImage.onload=This.updateLoading;
		This.bombStateImage.src="images/bonus/bombs/listBomb1.gif";
	};
	
	function initializeAnimation()
	{
		This.concentration1=new Array();
		for(var i=0;i<10;i++)
		{
			This.concentration1[i]=new Image();
			This.concentration1[i].onload=This.updateLoading;
			This.concentration1[i].src="images/animations/concentration1/"+i+".gif";
			This.totalLoad++;
		}
		
		This.bombing1=new Array();
		for(var i=0;i<26;i++)
		{
			This.bombing1[i]=new Image();
			This.bombing1[i].onload=This.updateLoading;
			This.bombing1[i].src="images/animations/bombing1/"+i+".gif";
			This.totalLoad++;
		}
		
		This.spark1=new Array();
		for(var i=0;i<12;i++)
		{
			This.spark1[i]=new Image();
			This.spark1[i].onload=This.updateLoading;
			This.spark1[i].src="images/animations/spark1/"+i+".gif";
			This.totalLoad++;
		}
		
		This.destroy1=new Array();
		for(var i=0;i<9;i++)
		{
			This.destroy1[i]=new Image();
			This.destroy1[i].onload=This.updateLoading;
			This.destroy1[i].src="images/animations/destroy1/"+i+".gif";
			This.totalLoad++;
		}
		
		This.destroy2=new Array();
		for(var i=0;i<8;i++)
		{
			This.destroy2[i]=new Image();
			This.destroy2[i].onload=This.updateLoading;
			This.destroy2[i].src="images/animations/destroy2/"+i+".gif";
			This.totalLoad++;
		}

		This.gold1=new Array();
		for(var i=0;i<9;i++)
		{
			This.gold1[i]=new Image();
			This.gold1[i].onload=This.updateLoading;
			This.gold1[i].src="images/animations/gold1/"+i+".gif";
			This.totalLoad++;
		}
		
		This.powerUp1=new Array();
		for(var i=0;i<2;i++)
		{
			This.powerUp1[i]=new Image();
			This.powerUp1[i].onload=This.updateLoading;
			This.powerUp1[i].src="images/animations/powerUp1/"+i+".gif";
			This.totalLoad++;
		}
		
		This.score500=new Array();
		for(var i=0;i<2;i++)
		{
			This.score500[i]=new Image();
			This.score500[i].onload=This.updateLoading;
			This.score500[i].src="images/animations/score500/"+i+".gif";
			This.totalLoad++;
		}

		This.score1000=new Array();
		for(var i=0;i<2;i++)
		{
			This.score1000[i]=new Image();
			This.score1000[i].onload=This.updateLoading;
			This.score1000[i].src="images/animations/score1000/"+i+".gif";
			This.totalLoad++;
		}
		
		This.score2000=new Array();
		for(var i=0;i<2;i++)
		{
			This.score2000[i]=new Image();
			This.score2000[i].onload=This.updateLoading;
			This.score2000[i].src="images/animations/score2000/"+i+".gif";
			This.totalLoad++;
		}
		
		This.score4000=new Array();
		for(var i=0;i<2;i++)
		{
			This.score4000[i]=new Image();
			This.score4000[i].onload=This.updateLoading;
			This.score4000[i].src="images/animations/score4000/"+i+".gif";
			This.totalLoad++;
		}
		
		This.score8000=new Array();
		for(var i=0;i<2;i++)
		{
			This.score8000[i]=new Image();
			This.score8000[i].onload=This.updateLoading;
			This.score8000[i].src="images/animations/score8000/"+i+".gif";
			This.totalLoad++;
		}
		
	};
	
	function initializeBackground()
	{
		//stages background image
		This.stage1Background=new Image();
		This.stage1Background.onload=This.updateLoading;
		This.stage1Background.src="images/background/stage1.gif";
		This.stage1BossBackground=new Image();
		This.stage1BossBackground.onload=This.updateLoading;
		This.stage1BossBackground.src="images/background/stage1Boss.gif";
		
		This.stage2Background=new Image();
		This.stage2Background.onload=This.updateLoading;
		This.stage2Background.src="images/background/stage2.gif";
		This.stage2BossBackground=new Image();
		This.stage2BossBackground.onload=This.updateLoading;
		This.stage2BossBackground.src="images/background/stage2Boss.gif";
		
		This.stage3Background=new Image();
		This.stage3Background.onload=This.updateLoading;
		This.stage3Background.src="images/background/stage3.gif";
		This.stage3BossBackground=new Image();
		This.stage3BossBackground.onload=This.updateLoading;
		This.stage3BossBackground.src="images/background/stage3Boss.gif";
		
		This.stage4Background=new Image();
		This.stage4Background.onload=This.updateLoading;
		This.stage4Background.src="images/background/stage4.gif";
		This.stage4BossBackground=new Image();
		This.stage4BossBackground.onload=This.updateLoading;
		This.stage4BossBackground.src="images/background/stage4Boss.gif";
		
		
		This.gameOverCh=new Image();
		This.gameOverCh.onload=This.updateLoading;
		This.gameOverCh.src="images/background/gameOverCh.gif";
		
		This.gameOverEn=new Image();
		This.gameOverEn.onload=This.updateLoading;
		This.gameOverEn.src="images/background/gameOverEn.gif";
		
		This.missionCompletedCh=new Image();
		This.missionCompletedCh.onload=This.updateLoading;
		This.missionCompletedCh.src="images/background/missionCompletedCh.gif";
		
		This.missionCompletedEn=new Image();
		This.missionCompletedEn.onload=This.updateLoading;
		This.missionCompletedEn.src="images/background/missionCompletedEn.gif";
	};
	
	this.updateLoading=function()
	{
		This.currentLoad++;
	};
	
	this.getLoadPercentage=function()
	{
		return This.currentLoad/This.totalLoad;
	};
	//-------------------------
	
	Constructor();
};