function Stage(stageName)
{
	this.background=null;
	this.bossBackground=null;
	this.enemies=new Array();
	this.backgroundSpeed=1;
	this.bossBackgroundOriginHeight;
	this.gameOverEntity=null;
	this.missionCompletedEntity=null;
	this.finallyScoreEntity=null;
	
	var This=this;
	var currentTime=0;
	var playTimer;
	var timerCurtain;
	var scrollTimer;
	var bossBackgroundScrollTimer;
	var curtainLeft;
	var curtainRight;
	var bossBGShowed=false;
	
	function Constructor()
	{
		This.background=document.createElement("div");
		eval("This.background.style.width=global.entity."+stageName+"Background.width;");
		eval("This.background.style.height=global.entity."+stageName+"Background.height;");
		This.background.style.backgroundImage="url("+eval("global.entity."+stageName+"Background.src")+")";
		This.background.style.position="absolute";
		This.background.style.zIndex=10;
		
		This.bossBackground=document.createElement("div");
		eval("This.bossBackground.style.width=global.entity."+stageName+"BossBackground.width;");
		eval("This.bossBackground.style.height=global.entity."+stageName+"BossBackground.height;");
		This.bossBackground.style.backgroundImage="url("+eval("global.entity."+stageName+"BossBackground.src")+")";
		This.bossBackground.style.position="absolute";
		This.bossBackground.style.zIndex=10;
		This.bossBackgroundOriginHeight=parseInt(This.bossBackground.style.height);
		
		
		curtainLeft=document.createElement("div");
		curtainLeft.style.width=oScreen.width/2+10+"px";
		curtainLeft.style.height=oScreen.height+"px";
		curtainLeft.style.top=oScreen.elementMoveArea.top+"px";
		curtainLeft.style.left=oScreen.elementMoveArea.left-parseInt(curtainLeft.style.width)+"px";
		curtainLeft.style.backgroundColor="#000000";
		curtainLeft.style.position="absolute";
		curtainLeft.style.zIndex=10000;
		oScreen.addElement(curtainLeft);
		
		curtainRight=document.createElement("div");
		curtainRight.style.width=oScreen.width/2+10+"px";
		curtainRight.style.height=oScreen.height+"px";
		curtainRight.style.top=oScreen.elementMoveArea.top+"px";
		curtainRight.style.left=oScreen.elementMoveArea.right+"px";
		curtainRight.style.backgroundColor="#000000";
		curtainRight.style.position="absolute";
		curtainRight.style.zIndex=10000;
		oScreen.addElement(curtainRight);
	};
	
	this.addEnemy=function(enemy,appearTime)
	{
		enemy.appearTime=appearTime;
		This.enemies.push(enemy);
		enemy=null;
		appearTime=null;
	};
	
	this.play=function()
	{
		currentTimer=0;
		function playStart()
		{
			//Game Over
			if(global.planes.length==0)
			{
				This.showFinallyScore();
				This.showGameOver();
				This.clearScreenElements();
				playTimer.dispose();
				objDisposition.dispose(playTimer);
				playTimer=null;
				currentTime=0;
				setTimeout("global.keyListenState='gameOver'",3000);
			}
				
			if(This.enemies.length>0)
			{
				var enemiesLength=This.enemies.length;
				for(var i=enemiesLength-1;i>=0;i--)
				{
					if(currentTime==This.enemies[i].appearTime)
					{
						This.enemies[i].appear();
						This.enemies.splice(i,1);
					}
				}
				currentTime++;
				enemiesLength=null;
			}
			else
			{
				//Stage Clear or Mission Completed
				if(global.enemies.length==0)
				{
					for(var i=global.enemyBullets.length-1;i>=0;i--)
					{
						global.enemyBullets.pop().destroy();
					}
					playTimer.dispose();
					playTimer=null;
					currentTime=0;
					
					if(global.stagesCount>0)
					{
						This.switchStage();
					}
					else
					{
						This.showFinallyScore();
						This.showMissionCompleted();
						This.clearScreenElements();
						//setTimeout("global.keyListenState='missionCompleted'",3000);
					}
				}
			}
			
		};

		playTimer=new Timer(playStart,global.GAME_SPEED);
		playTimer.start();
	};
	
	this.switchStage=function()
	{
		function planeForward()
		{
			for(var i=0;i<global.planes.length;i++)
			{
				global.planes[i].canBeControl=false;
				global.planes[i].shotConcentratedPower();
				global.planes[i].canBeAttack=false;
				global.planes[i].forward();
			}
		};
		window.setTimeout(planeForward,3000);
		
		
		//Switch Stages
		function doSwitch()
		{
			timerCurtain=new Timer(function(){moveCurtain("close");},global.GAME_SPEED);
			timerCurtain.start();
		};
		window.setTimeout(doSwitch,5000);

	};
	
	var moveCurtain=function(state)
	{
		if(state=="close")
		{
			if(parseInt(curtainLeft.style.left)+parseInt(curtainLeft.style.width)<oScreen.elementMoveArea.left+oScreen.width/2)
			{
				curtainLeft.style.left=parseInt(curtainLeft.style.left)+13+"px";
			}
			else//Curtain was closed
			{
				timerCurtain.dispose();
				timerCurtain=null;
				global.currentStage.clear();
				
				function startNextStage()
				{
					var stageIndex=global.stagesIndexs.splice(parseInt(global.stagesIndexs.length*Math.random()),1);
					eval("stage"+stageIndex+"Define();");
					global.stagesCount--;
					global.currentStage.start();
					
					for(var i=0;i<global.planes.length;i++)
					{
						global.planes[i].canBeControl=true;
						global.planes[i].flash();
						global.planes[i].setPosition(global.planes[i].getPositionX(),global.planes[i].appearPosition.y-400);
					}
					timerCurtain=new Timer(function(){moveCurtain("open");},global.GAME_SPEED);
					timerCurtain.start();
				};
				window.setTimeout(startNextStage,1000);
			}
			
			if(parseInt(curtainRight.style.left)>oScreen.elementMoveArea.left+oScreen.width/2)
			{
				curtainRight.style.left=parseInt(curtainRight.style.left)-15+"px";
			}
		}
		else if(state=="open")
		{
			if(parseInt(curtainLeft.style.left)+parseInt(curtainLeft.style.width)>oScreen.elementMoveArea.left)
			{
				curtainLeft.style.left=parseInt(curtainLeft.style.left)-15+"px";
			}
			else
			{
				timerCurtain.dispose();
				timerCurtain=null;
			}
			
			if(parseInt(curtainRight.style.left)<oScreen.elementMoveArea.right)
			{
				curtainRight.style.left=parseInt(curtainRight.style.left)+15+"px";
			}
			
		}
	};
	
	this.scrollBackground=function()
	{
		oScreen.addElement(This.background);
		This.background.style.left=oScreen.elementMoveArea.left;
		This.background.style.top=oScreen.elementMoveArea.bottom-parseInt(This.background.style.height)+"px";
		function bossBackgroundScroll()
		{
			
			This.bossBackground.style.top=parseInt(This.bossBackground.style.top)+This.backgroundSpeed;
			
			if(parseInt(This.bossBackground.style.top)>=oScreen.elementMoveArea.top)
			{
				This.bossBackground.style.height=parseInt(This.bossBackground.style.height)+This.bossBackgroundOriginHeight;
				This.bossBackground.style.top=parseInt(This.bossBackground.style.top)-This.bossBackgroundOriginHeight;
			}

			if(parseInt(This.bossBackground.style.top)+parseInt(This.bossBackground.style.height)>=oScreen.elementMoveArea.bottom+1)
			{
				This.bossBackground.style.height=parseInt(This.bossBackground.style.height)-This.backgroundSpeed;
			}
			
		};
		
		bossBackgroundScrollTimer=new Timer(bossBackgroundScroll,global.GAME_SPEED);
		
		function scroll()
		{
			if(parseInt(This.background.style.top)<oScreen.elementMoveArea.bottom)
			{
				This.background.style.top=parseInt(This.background.style.top)+This.backgroundSpeed;
				This.background.style.height=parseInt(This.background.style.height)-This.backgroundSpeed;
				if(parseInt(This.background.style.top)>=oScreen.elementMoveArea.top && !bossBGShowed)
				{
					bossBGShowed=true;
					oScreen.addElement(This.bossBackground);
					This.bossBackground.style.left=oScreen.elementMoveArea.left;
					This.bossBackground.style.top=parseInt(This.background.style.top)-parseInt(This.bossBackground.style.height)+1+"px";
					bossBackgroundScrollTimer.start();
				}
			}
			else
			{
				scrollTimer.dispose();
				objDisposition.dispose(scrollTimer);
				scrollTimer=null;
				oScreen.removeElement(This.background);
				This.background=null;
			}
		};
		
		scrollTimer=new Timer(scroll,global.GAME_SPEED);
		scrollTimer.start();
		
	};
	
	this.showFinallyScore=function()
	{
		This.finallyScoreEntity=document.createElement("div");
		This.finallyScoreEntity.style.top=oScreen.elementMoveArea.top+330+"px";
		This.finallyScoreEntity.style.left=oScreen.elementMoveArea.left+oScreen.width/2-120+"px";
		This.finallyScoreEntity.style.fontSize="32px";
		This.finallyScoreEntity.style.zIndex=6000;
		This.finallyScoreEntity.style.fontFamily="Impact,Arial";
		This.finallyScoreEntity.style.color="#FFFF00";
		This.finallyScoreEntity.innerHTML=unescape(global.languageResource.finallyScore)+"&nbsp;&nbsp;&nbsp;"+$("plane1Score").innerHTML;
		oScreen.addElement(This.finallyScoreEntity);
	};
	
	this.showGameOver=function()
	{
		This.gameOverEntity=new Image();
		This.gameOverEntity.src=global.languageResource.gameOverSrc;
		This.gameOverEntity.style.position="absolute";
		This.gameOverEntity.style.left=oScreen.elementMoveArea.left+140+"px";
		This.gameOverEntity.style.top=oScreen.elementMoveArea.top+200+"px";
		This.gameOverEntity.style.zIndex=6000;
		oScreen.addElement(This.gameOverEntity);
	};
	
	this.showMissionCompleted=function()
	{
		This.missionCompletedEntity=new Image();
		This.missionCompletedEntity.src=global.languageResource.missionCompletedSrc;
		This.missionCompletedEntity.style.position="absolute";
		This.missionCompletedEntity.style.left=oScreen.elementMoveArea.left+140+"px";
		This.missionCompletedEntity.style.top=oScreen.elementMoveArea.top+200+"px";
		This.missionCompletedEntity.style.zIndex=6000;
		oScreen.addElement(This.missionCompletedEntity);
	};
	
	this.clearScreenElements=function()
	{
		for(var i=global.planes.length-1;i>=0;i--)
		{
			global.planes[i].setPosition(0,oScreen.elementMoveArea.bottom+500);
			global.planes[i].dispose();
		}
		global.planes.length=0;
		
		if($("player1"))
		{
			document.body.removeChild($("player1"));
		}
		if($("player2"))
		{
			document.body.removeChild($("player2"));
		}
		
		for(var i=$("plane1BombState").childNodes.length-1;i>=0;i--)
		{
			$("plane1BombState").removeChild($("plane1BombState").childNodes[i]);
		}
		for(var i=$("plane2BombState").childNodes.length-1;i>=0;i--)
		{
			$("plane2BombState").removeChild($("plane2BombState").childNodes[i]);
		}
		
		for(var i=$("plane1Count").childNodes.length-1;i>=0;i--)
		{
			$("plane1Count").removeChild($("plane1Count").childNodes[i]);
		}
		for(var i=$("plane2Count").childNodes.length-1;i>=0;i--)
		{
			$("plane2Count").removeChild($("plane2Count").childNodes[i]);
		}
		
		$("plane1Score").innerHTML="";
		$("plane2Score").innerHTML="";
	};
	
	this.clear=function()
	{
		if(scrollTimer)
		{
			scrollTimer.dispose();
		}
		
		if(bossBackgroundScrollTimer)
		{
			bossBackgroundScrollTimer.dispose();
		}
	
		This.enemies.length=0;
		
		for(var i=global.enemies.length-1;i>=0;i--)
		{
			global.enemies[i].setPosition(0,oScreen.elementMoveArea.bottom+500);
			global.enemies[i].destroy();
		}
		global.enemies.length=0;
		
		for(var i=global.planeBullets.length-1;i>=0;i--)
		{
			global.planeBullets[i].destroy();
		}
		global.planeBullets.length=0;
		
		for(var i=global.enemyBullets.length-1;i>=0;i--)
		{
			global.enemyBullets[i].destroy();
		}
		global.enemyBullets.length=0;
		
		for(var i=global.bonuses.length-1;i>=0;i--)
		{
			if(!global.bonuses[i].beCatched)
			{
				global.bonuses[i].dispose();
			}
		}
		global.bonuses.length=0;
		
		if(This.background)
		{
			oScreen.removeElement(This.background);
		}
		
		if(bossBGShowed)
		{
			oScreen.removeElement(This.bossBackground);
		};
		
		This.background=null;
		This.bossBackground=null;
	};
	
	Constructor();
}