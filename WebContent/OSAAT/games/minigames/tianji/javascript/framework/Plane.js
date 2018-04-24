function Plane(id)
{
	Base.call(this);
	//---------- Attributes ----------
	this.id=id?id:"plane";
	this.speed=6;
	this.bulletSpeed=11;
	this.HP=1;
	this.score=0;
	this.life;
	this.flashTime=150;
	this.bulletTypeValue=1;
	this.bulletPowerValue=1;
	this.shotting=false;
	this.throwBombing=false;
	this.canBeAttack=false;
	this.canBeControl=false;
	this.isThrowingBomb=false;
	this.zIndex=3000;
	this.maxBulletPowerValue=4;
	this.canShot=true;
	this.lifeUpScores=[50000,100000,150000,200000,250000,300000];
	
	this.concentrationValue=0;
	this.concentrationPowerType="concentrationPowerType1";
	this.isShottingConcentrationPower=false;
	this.isConcentrated=false;
	this.concentrationTime=2;
	this.concentrationIsFixed=false;
	
	this.appearPosition={};
	this.subPlanes=new Array();
	this.concentrationEmplacements=new Array();
	this.emplacements=new Array();
	this.concentrationTimer;
	this.concertartionAnimation;
	
	var This=this;
	var screenOffset=10;
	
	var timerUp;
	var timerDown;
	var timerLeft;
	var timerRight;
	var bombs=new Array();
	var beforeConcentrateSpeed=0;
	
	//---------------------------------
	
	function Constructor()
	{
		This.appearPosition.x=oScreen.elementMoveArea.left+100;
		This.appearPosition.y=oScreen.elementMoveArea.bottom+300;
		
		This.concertartionAnimation=new Animation("concentration1",10,100,0,0,1900);
		
		This.concertartionAnimation.hidden();
		
		This.updateScore(This.score);
		
		global.planes.push(This);
		
		This.life=global.level+4;
		
		This.addCustomsEvent("onBeAttack",This.beAttacked,global.enemyBullets);
	};
	
	//---------- Methods ----------
	this.appear=function()
	{
		global.currentAttackPlaneIndex=(global.currentAttackPlaneIndex+1)%global.planes.length;
		global.currentAttackPlane=global.planes[global.currentAttackPlaneIndex];
		
		if(global.level>2)
		{
			This.updatePower(2);
		}
		
		var bomb1=new Bomb();
		var bomb2=new Bomb();
		bombs.length=0;
		bombs.push(bomb1);
		bombs.push(bomb2);
		oScreen.updateBombState(This.id,bombs.length);
		
		oScreen.updatePlaneState(This.id,This.life-1);
		
		This.canBeControl=false;
		This.setPosition(This.appearPosition.x,This.appearPosition.y);
		This.flash();
		function toAppear()
		{
			if(This.getPositionY()>This.appearPosition.y-400)
			{
				This.setPosition(This.getPositionX(),This.getPositionY()-This.speed);
			}
			else
			{
				This.canBeControl=true;
				appearTimer.dispose();
				appearTimer=null;
			}
		};
		
		var appearTimer=new Timer(toAppear,global.GAME_SPEED);
		appearTimer.start();
	};
	
	this.flash=function()
	{
		var currentFlashTime=0;
		function toFlash()
		{
			if(This.entity)
			{
				if(currentFlashTime++<This.flashTime)
				{
					This.entity.style.display=currentFlashTime%2==0?"none":"block";
					This.canBeAttack=false;
				}
				else
				{
					flashTimer.dispose();
					flashTimer=null;
					currentFlashTime=null;
					This.canBeAttack=true;
					This.entity.style.display="block";
				}
			}
		};
		
		var flashTimer=new Timer(toFlash,global.GAME_SPEED+6);
		flashTimer.start();
	};
	
	this.move=function(direction)
	{
		function moveUp()
		{
			if(This.getPositionY()>=oScreen.elementMoveArea.top+screenOffset+80)
			{
				This.setPosition(This.getPositionX(),This.getPositionY()-This.speed);
			}
		};
		
		function moveDown()
		{
			if(This.getPositionY()<=oScreen.elementMoveArea.bottom-This.height-screenOffset)
			{
				This.setPosition(This.getPositionX(),This.getPositionY()+This.speed);
			}
		};
		
		function moveLeft()
		{
			if(This.getPositionX()>=oScreen.elementMoveArea.left+screenOffset)
			{
				This.setPosition(This.getPositionX()-This.speed,This.getPositionY());
			}
		};
		
		function moveRight()
		{
			if(This.getPositionX()<=oScreen.elementMoveArea.right-This.width-screenOffset)
			{
				This.setPosition(This.getPositionX()+This.speed,This.getPositionY());
			}
		};
		
		if(!timerUp)
		{
			timerUp=new Timer(moveUp,global.GAME_SPEED);
		}
		
		if(!timerDown)
		{
			timerDown=new Timer(moveDown,global.GAME_SPEED);
		}
		
		if(!timerLeft)
		{
			timerLeft=new Timer(moveLeft,global.GAME_SPEED);
		}
		
		if(!timerRight)
		{
			timerRight=new Timer(moveRight,global.GAME_SPEED);
		}
		
		switch(direction.toUpperCase())
		{
			case "UP":
				timerUp.start();
				timerDown.stop();
				break;
				
			case "DOWN":
				timerDown.start();
				timerUp.stop();
				break;
				
			case "LEFT":
				timerLeft.start();
				timerRight.stop();
				break;
				
			case "RIGHT":
				timerRight.start();
				timerLeft.stop();
				break;
		}
	};
	
	this.stop=function(direction)
	{
		switch(direction.toUpperCase())
		{
			case "UP":
				if(timerUp)
				{
					timerUp.stop();
				}
				break;
				
			case "DOWN":
				if(timerDown)
				{
					timerDown.stop();
				}
				break;
				
			case "LEFT":
				if(timerLeft)
				{
					timerLeft.stop();
				}
				break;
				
			case "RIGHT":
				if(timerRight)
				{
					timerRight.stop();
				}
				break;

		}
	};
	
	this.forward=function()
	{
		function goForward()
		{
			if(This.getPositionY()>oScreen.elementMoveArea.top-This.height)
			{
				This.isConcentrated=false;
				This.stop("UP");
				This.stop("DOWN");
				This.stop("LEFT");
				This.stop("RIGHT");
				This.setPosition(This.getPositionX(),This.getPositionY()-This.speed*4);
			}
			else
			{
				timerForward.dispose();
				timerForward=null;
			}
		};
		var timerForward=new Timer(goForward,global.GAME_SPEED);
		timerForward.start();
	};
	
	this.setPosition=function(x,y)
	{
		for(var i=0;i<This.emplacements.length;i++)
		{
			This.emplacements[i].left=This.emplacements[i].left+(x-This.getPositionX());
			This.emplacements[i].top=This.emplacements[i].top+(y-This.getPositionY());
		}
		
		for(var i=0;i<This.concentrationEmplacements.length;i++)
		{
			This.concentrationEmplacements[i].left=This.concentrationEmplacements[i].left+(x-This.getPositionX());
			This.concentrationEmplacements[i].top=This.concentrationEmplacements[i].top+(y-This.getPositionY());
		}
		
		for(var i=0;i<This.subPlanes.length;i++)
		{
			This.subPlanes[i].setPosition(This.subPlanes[i].getPositionX()+(x-This.getPositionX()),
															 This.subPlanes[i].getPositionY()+(y-This.getPositionY()));
		}
		
		This.entity.style.left=x+"px";
		This.entity.style.top=y+"px";
		
		This.updateConcentrationAnimaion();
		
		This.updateBeOverlapArea();
	};
	
	this.shot=function()
	{
		var args=new Array();
		for(var i=0;i<arguments.length;i++)
		{
			args.push(arguments[i]);
		}
		for(var i=0;i<This.emplacements.length;i++)
		{
			This.emplacements[i].shot(This.bulletSpeed,args);
		}
	};
	
	this.addSubPlane=function(subPlane,x,y)
	{
		x=x?x:This.getPositionX();
		y=y?y:This.getPositionY();
		subPlane.setPosition(x,y);
		This.subPlanes.push(subPlane);
	};
	
	this.addEmplacement=function(emplacement,x,y)
	{
		x=x?x:This.getPositionX();
		y=y?y:This.getPositionY();
		emplacement.left=x;
		emplacement.top=y;
		emplacement.containerId=This.id;
		emplacement.containerBulletPower=This.bulletPowerValue;
		This.emplacements.push(emplacement);
	};
	
	this.addConcentrationEmplacement=function(concentrationEmplacement,x,y)
	{
		x=x?x:This.getPositionX();
		y=y?y:This.getPositionY();
		concentrationEmplacement.left=x;
		concentrationEmplacement.top=y;
		concentrationEmplacement.containerId=This.id;
		This.concentrationEmplacements.push(concentrationEmplacement);
	};
	
	this.throwBomb=function()
	{
		if(bombs.length>0)
		{
			This.isThrowingBomb=true;
			bombs.pop().beThrowed(This);
			oScreen.updateBombState(This.id,bombs.length);
		}
	};
	
	this.addBomb=function(bomb)
	{
		bombs.push(bomb);
		bomb.beCatched=true;
		oScreen.updateBombState(This.id,bombs.length);
	};

	
	this.updatePower=function(powerValue)
	{
		This.bulletPowerValue=powerValue;
		This.updateEmplacementsBulletPowerValue();
	};
	
	this.updateScore=function(scoreValue)
	{
		for(var i=0;i<This.lifeUpScores.length;i++)
		{
			if(scoreValue>=This.lifeUpScores[i])
			{
				This.life+=1;
				oScreen.updatePlaneState(This.id,This.life-1);
				This.lifeUpScores.splice(i,1);
				break;
			}
		}
		This.score=scoreValue;
		oScreen.updatePlaneScore(This.id,This.score);
	};
	
	this.updateEmplacementsBulletPowerValue=function()
	{
		for(var i=0;i<This.emplacements.length;i++)
		{
			This.emplacements[i].containerBulletPower=This.bulletPowerValue;
			eval("This.emplacements[i].bulletFeature=global.entity.planeBullet"+This.emplacements[i].containerBulletPower);
			This.emplacements[i].left=This.getPositionX()+This.width/2-This.emplacements[i].bulletFeature.width/2;
		}
	};
	
	this.concentratingPower=function()
	{
		if(!This.isShottingConcentrationPower)
		{
			function updateConcentrationValue()
			{
				if(++This.concentrationValue==This.concentrationTime)
				{
					This.isConcentrated=true;
					This.isShottingConcentrationPower=true;
					This.canShot=false;
					beforeConcentrateSpeed=This.speed;
					This.speed-=This.speed>4?4:This.speed;
					This.concentrationValue=0;
					This.concentrationTimer.stop();
					
					This.updateConcentrationAnimaion();
					This.concertartionAnimation.play();
				}
			};
			
			This.concentrationTimer=new Timer(updateConcentrationValue,1000);
			This.concentrationTimer.start();
		}
	};
	
	this.updateConcentrationAnimaion=function()
	{
		This.concertartionAnimation.setPosition(This.getPositionX()+This.width/2-This.concertartionAnimation.width/2,
																						This.getPositionY()-This.concertartionAnimation.height+15);
	};
	
	this.shotConcentratedPower=function()
	{
		This.concentrationValue=0;
		if(This.concentrationTimer)
		{
			This.concentrationTimer.stop();
		}
		if(This.isConcentrated)
		{
			This.speed=beforeConcentrateSpeed;
			This.isConcentrated=false;
			This.concertartionAnimation.hidden();
			var planeObject=This;
			var concentrationPower=new ConcentrationPower("concentrationPowerType1");
			eval("concentrationPower."+This.concentrationPowerType+"Shot(planeObject,This.concentrationIsFixed);");
		}
	};
	
	this.beAttacked=function()
	{
		var enemyBullet=arguments[0];
		This.HP-=enemyBullet.power;
		enemyBullet.destroy();
		
		if(This.HP<=0)
		{
			This.destroy();
		}
		enemyBullet=null;
	};
	
	this.destroy=function()
	{
		This.isShottingConcentrationPower=false;
		This.concertartionAnimation.hidden();
		if(This.isConcentrated)
		{
			This.canShot=true;
			This.speed=beforeConcentrateSpeed;
		}
		
		This.stop("UP");
		This.stop("DOWN");
		This.stop("LEFT");
		This.stop("RIGHT");
		
		This.updatePower(1);
		
		This.concentrationValue=0;
		This.isConcentrated=false;
		if(This.concentrationTimer)
		{
			This.concentrationTimer.stop();
		}
		
		var destroied=new Animation("destroy2",8,100,0,0,4500);
		destroied.setPosition(This.getPositionX()+This.width/2-destroied.width/2,
													This.getPositionY()+This.height/2-destroied.height/2);
		destroied.loop=false;
		destroied.play();
		destroied=null;

		if(--This.life!=0)
		{
			var powerBonus=new Power();
			powerBonus.appear(This.getPositionX()+This.width/2-powerBonus.width/2,
														 This.getPositionY()+This.height/2-powerBonus.height/2);
			This.appear();
			powerBonus=null;
		}
		else
		{
			This.dispose();
		}

	};
	
	this.dispose=function()
	{
		for(var i=This.subPlanes.length-1;i>=0;i--)
		{
			This.subPlanes[i].destroy();
			objDisposition.dispose(This.subPlanes[i]);
			This.subPlanes.splice(i,1);
		}
		
		for(var i=This.emplacements.length-1;i>=0;i--)
		{
			if(This.emplacements[i])
			{
				objDisposition.dispose(This.emplacements[i]);
				This.emplacements.splice(i,1);
			}
		}
		
		for(var i=This.concentrationEmplacements.length-1;i>=0;i--)
		{
			if(This.concentrationEmplacements[i])
			{
				objDisposition.dispose(This.concentrationEmplacements[i]);
				This.concentrationEmplacements.splice(i,1);
			}
		}
		
		for(var i=global.planes.length-1;i>=0;i--)
		{
			if(This.id==global.planes[i].id)
			{
				global.planes.splice(i,1);
			}
		}
		
		This.removeCustomsEvent("onBeAttack");
		oScreen.removeElement(This.entity);
		This.concertartionAnimation.dispose();
		screenOffset=null;
		
		if(timerUp)
		{
			timerUp.dispose();
			objDisposition.dispose(timerUp);
		}
		if(timerDown)
		{ 
			timerDown.dispose();
			objDisposition.dispose(timerDown);
		}
		if(timerLeft)
		{
			timerLeft.dispose();
			objDisposition.dispose(timerLeft);
		}
		
		if(timerRight)
		{
			timerRight.dispose();
			objDisposition.dispose(timerRight);
		}

		bombs=null;
		objDisposition.dispose(This);
	};
	//-------------------------
	
	Constructor();
};