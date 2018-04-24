function Bomb()
{
	Base.call(this);
	//---------- Attributes ----------
	this.bombArea={};
	this.moveType="bonusMoveType1";
	this.currentId;
	this.displayTime=1000;
	this.screenOffset=10;
	this.xDirection=1;
	this.yDirection=1;
	this.speed=4;
	this.zIndex=5000;
	this.bombingTime=60;
	this.beCatched=false;

	var This=this;
	//---------------------------------
	
	function Constructor()
	{
		This.bombArea.left=oScreen.elementMoveArea.left;
		This.bombArea.top=oScreen.elementMoveArea.top;
		This.bombArea.right=oScreen.elementMoveArea.right;
		This.bombArea.bottom=oScreen.elementMoveArea.bottom;
	};
	
	//---------- Methods ----------
	this.appear=function(x,y)
	{
		This.setFeature(global.entity.bombBonus1);
		This.setPosition(x,y);
		This.xDirection=parseInt(Math.random()*10)%2==0?1:-1;
		This.yDirection=parseInt(Math.random()*10)%2==0?1:-1;
		
		This.addCustomsEvent("onOverlapWithPlane",This.overlaped);
		This.move(This.moveType);
		
		if(global.bonuses.length==0)
		{
			This.currentId=1;
		}
		else
		{
			This.currentId=global.bonuses[global.bonuses.length-1].currentId+1;
			if(This.currentId>global.MAX_NUMBER)
			{
				throw new Error("The value of currentId which is a bonus object's attribute is overflow");
			}
		}
		global.bonuses.push(This);
	};
	
	this.overlaped=function(planeObject)
	{
		This.removeCustomsEvent("onOverlapWithPlane");
		planeObject.addBomb(This);
		oScreen.removeElement(This.entity);
	};
	
	this.beThrowed=function(planeObject)
	{
		This.bombing(planeObject);
	};
	
	this.bombing=function(planeObject)
	{
		var oDiv=document.createElement("div");
		oDiv.style.position="absolute";
		oDiv.style.left=oScreen.elementMoveArea.left+"px";
		oDiv.style.top=oScreen.elementMoveArea.top+"px";
		oDiv.style.width=oScreen.width;
		oDiv.style.height=oScreen.height;
		oDiv.style.backgroundColor="#ffdede";
		oDiv.style.zIndex=6000;
		oScreen.addElement(oDiv);
		
		function flash()
		{
			if(--This.bombingTime>0)
			{
				if(This.bombingTime%2==0)
				{
					oDiv.style.display="block";
					
					for(var i=0;i<global.enemies.length;i++)
					{
						if(global.enemies[i].getPositionX()>=oScreen.elementMoveArea.left
						&& global.enemies[i].getPositionX()<=oScreen.elementMoveArea.right
						&& global.enemies[i].getPositionY()>=oScreen.elementMoveArea.top
						&& global.enemies[i].getPositionY()<=oScreen.elementMoveArea.bottom)
						{
							global.enemies[i].beAttacked(null,planeObject);
						}
					}
					
					for(var i=global.enemyBullets.length-1;i>=0;i--)
					{
						global.enemyBullets.pop().destroy();
					}
				}
				else
				{
					oDiv.style.display="none";
				}
				planeObject.canBeAttack=false;
			}
			else
			{
				oScreen.removeElement(oDiv);
				flashTimer.dispose();
				objDisposition.dispose(flashTimer);
				oDiv=null;
				This.dispose();
				planeObject.isThrowingBomb=false;
				planeObject.canBeAttack=true;
			}
		};
		
		var bombing=new Animation("bombing1",21,120,0,0,100);
		bombing.setPosition(planeObject.getPositionX()+planeObject.width/2-bombing.width/2,planeObject.getPositionY()-bombing.height);
		bombing.loop=false;
		bombing.play();
		
		var flashTimer=new Timer(flash,global.GAME_SPEED+10);
		flashTimer.start();
	};
	
	this.dispose=function()
	{
		for(var i=global.bonuses.length-1;i>=0;i--)
		{
			if(global.bonuses[i].currentId==This.currentId)
			{
				global.bonuses.splice(i,1);
			}
		}
		
		if(This.bombingTime!=0)
		{
			oScreen.removeElement(This.entity);
		}
		This.removeCustomsEvent("onOverlapWithPlane");
		objDisposition.dispose(This);
	};
	//-------------------------
	
	Constructor();
};