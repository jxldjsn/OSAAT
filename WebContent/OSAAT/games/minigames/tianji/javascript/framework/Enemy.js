function Enemy(id)
{
	Base.call(this);
	//---------- Attributes -----------
	this.id=id?id:"enemy";
	this.currentId;
	this.speed=3;
	this.bulletSpeed=5;
	this.HP=15;
	this.bulletPowerValue=1;
	this.moveType="entityMoveType1";
	this.bulletFature=global.entity.enemyBullet1;
	this.scoreValue=200;
	this.canBeAttack=true;
	this.subEnemies=new Array();
	this.emplacements=new Array();
	this.zIndex=1000;
	this.entityBright=new Image();
	this.shotErrorValue=0;
	this.canBeOverlapedToAttackPlane=true;
	
	var This=this;
	var powerBonuses=new Array();
	var bombBonuses=new Array();
	var goldBonuses=new Array();
	//---------------------------------
	
	function Constructor()
	{
		if(global.planes.length==0)
		{
			throw new Error("Create Enemy Error:Plane objects not existed!");
		}
		
		if(global.enemies.length==0)
		{
			This.currentId=1;
		}
		else
		{
			This.currentId=global.enemies[global.enemies.length-1].currentId+1;
			if(This.currentId>global.MAX_NUMBER)
			{
				throw new Error("The value of currentId which is a enemy object's attribute is overflow");
			}
		}
		global.enemies.push(This);
	};
	
	//------------ Methods ------------
	this.originalAppear=function()
	{
		This.addCustomsEvent("onBeAttack",This.beAttacked,global.planeBullets);
		This.addCustomsEvent("onBeAttackWithPlane",This.bumpintoPlane);
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
	
	this.setFeature=function(feature)
	{
		This.entity.src=feature.src;
		This.width=feature.width;
		This.height=feature.height;
		This.entity.style.zIndex=This.zIndex;
		This.updateBeOverlapArea();
		
		This.entityBright.src=feature.src.substring(0,feature.src.lastIndexOf("."))+"Bright"+feature.src.substring(feature.src.lastIndexOf("."));
		This.entityBright.style.position="absolute";
		This.entityBright.style.zIndex=This.entity.style.zIndex-1;
		
		oScreen.addElement(This.entity);
		oScreen.addElement(This.entityBright);
	};
	
	this.setPosition=function(x,y)
	{
		for(var i=0;i<This.emplacements.length;i++)
		{
			if(This.emplacements[i])
			{
				This.emplacements[i].left=This.emplacements[i].left+(x-This.getPositionX());
				This.emplacements[i].top=This.emplacements[i].top+(y-This.getPositionY());
			}
		}
		for(var i=0;i<This.subEnemies.length;i++)
		{
			if(This.subEnemies[i].entity)
			{
				This.subEnemies[i].setPosition(This.subEnemies[i].getPositionX()+(x-This.getPositionX()),
																 This.subEnemies[i].getPositionY()+(y-This.getPositionY()));
			}
		}
		This.entity.style.left=x+"px";
		This.entity.style.top=y+"px";
		This.entityBright.style.left=This.entity.style.left;
		This.entityBright.style.top=This.entity.style.top;

		This.updateBeOverlapArea();
	};
	
	this.addSubEnemy=function(subEnemy,x,y)
	{
		x=x?x:This.getPositionX();
		y=y?y:This.getPositionY();
		subEnemy.setPosition(x,y);
		This.subEnemies.push(subEnemy);
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
	
	this.addPower=function(power)
	{
		powerBonuses.push(power);
	};
	
	this.addBomb=function(bomb)
	{
		bombBonuses.push(bomb);
	};
	
	this.addGold=function(gold)
	{
		goldBonuses.push(gold);
	};
	
	this.bumpintoPlane=function(planeObject)
	{
		planeObject.HP-=This.bulletPowerValue;
		This.HP-=planeObject.bulletPowerValue*10;
		if(This.HP<=0)
		{
			This.destroy();
		}
		if(planeObject.HP<=0)
		{
			planeObject.destroy();
		}
		planeObject=null;
	}
	
	this.beAttacked=function(planeBullet,planeObject)
	{
		var bulletParentId;
		var bulletPower;
		if(planeObject)
		{
			bulletParentId=planeObject.id;
			bulletPower=1;
		}
		else
		{
			bulletParentId=planeBullet.parentId;
			bulletPower=planeBullet.power;
			planeBullet.destroy();
		}

		This.HP-=bulletPower;
		
		This.entity.style.display="none";
		function bright()
		{
			if(This.entity)
			{
				This.entity.style.display="block";
			}
			brightTimer.dispose();
			brightTimer=null;
		}
		var brightTimer=new Timer(bright,50);
		brightTimer.start();
		
		if(This.HP<=0)
		{
			//update plane's score
			for(var i=0;i<global.planes.length;i++)
			{
				if(bulletParentId==global.planes[i].id)
				{
					global.planes[i].updateScore(global.planes[i].score+This.scoreValue);
				}
			}
			This.destroy();
		}
		planeBullet=null;
		bulletParentId=null;
	};
	
	this.destroy=function()
	{
		for(var i=0;i<powerBonuses.length;i++)
		{
			powerBonuses[i].appear(This.getPositionX()+This.width/2-powerBonuses[i].width/2,
														 This.getPositionY()+This.height/2-powerBonuses[i].height/2);
		}
		for(var i=0;i<bombBonuses.length;i++)
		{
			bombBonuses[i].appear(This.getPositionX()+This.width/2-bombBonuses[i].width/2,
														This.getPositionY()+This.height/2-bombBonuses[i].height/2);
		}
		for(var i=0;i<goldBonuses.length;i++)
		{
			goldBonuses[i].appear(This.getPositionX()+This.width/2-goldBonuses[i].width/2,
														This.getPositionY()+This.height/2-goldBonuses[i].height/2);
		}
		
		for(var i=This.emplacements.length-1;i>=0;i--)
		{
			if(This.emplacements[i])
			{
				objDisposition.dispose(This.emplacements[i]);
				This.emplacements.splice(i,1);
			}
		}
		
		for(var i=This.subEnemies.length-1;i>=0;i--)
		{
			if(This.subEnemies[i].entity)
			{
				This.subEnemies[i].destroy();
				objDisposition.dispose(This.subEnemies[i]);
				This.subEnemies.splice(i,1);
			}
		}
		
		var destroied=new Animation("destroy1",9,100,0,0,4500);
		destroied.setPosition(This.getPositionX()+This.width/2-destroied.width/2,
													This.getPositionY()+This.height/2-destroied.height/2);
		destroied.loop=false;
		destroied.play();
		destroied=null;
		This.dispose();
	};
	
	this.dispose=function()
	{
		for(var i=global.enemies.length-1;i>=0;i--)
		{
			if(global.enemies[i].currentId==This.currentId)
			{
				global.enemies.splice(i,1);
			}
		}

		This.removeCustomsEvent("onBeAttack");
		This.removeCustomsEvent("onBeAttackWithPlane");
		oScreen.removeElement(This.entityBright);
		oScreen.removeElement(This.entity);
		powerBonuses=null;
		bombBonuses=null;
		goldBonuses=null;
		objDisposition.dispose(This);
	};
	//---------------------------------
	
	Constructor();

};