function Power(value)
{
	Base.call(this);
	//---------- Attribute ----------
	this.value=value?value:1;
	this.moveType="bonusMoveType1";
	this.currentId;
	this.displayTime=1000;
	this.screenOffset=10;
	this.xDirection=1;
	this.yDirection=1;
	this.speed=4;
	this.zIndex=5000;
	this.maxPowerScore=4000;
	
	var This=this;
	//-------------------------------
	
	function Constructor()
	{
			
	};
	
	//----------- Methods -----------
	this.appear=function(x,y)
	{
		This.setFeature(global.entity.powerBonus1);
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
		if(planeObject.bulletPowerValue<planeObject.maxBulletPowerValue)
		{
			planeObject.updatePower(planeObject.bulletPowerValue+This.value);
			This.showPowerUp();
		}
		else
		{
			planeObject.updateScore(planeObject.score+This.maxPowerScore);
			This.showScore(This.maxPowerScore);
		}
		
		planeObject=null;
		This.dispose();
	};
	
	this.showPowerUp=function()
	{
		var powerUpDisplay=new Animation("powerUp1",2,100,0,0,1800);
		powerUpDisplay.setPosition(This.getPositionX()+This.width/2-powerUpDisplay.width/2,This.getPositionY()+This.height/2-powerUpDisplay.height/2);
		powerUpDisplay.loopCount=10;
		powerUpDisplay.play();
	};
	
	this.showScore=function(scoreValue)
	{
		eval("var scoreDisplay=new Animation('score"+scoreValue+"',2,100,0,0,1800);");
		scoreDisplay.setPosition(This.getPositionX()+This.width/2-scoreDisplay.width/2,This.getPositionY()+This.height/2-scoreDisplay.height/2);
		scoreDisplay.loopCount=10;
		scoreDisplay.play();
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
		
		This.removeCustomsEvent("onOverlapWithPlane");
		oScreen.removeElement(This.entity);
		objDisposition.dispose(This);
	};
	//-------------------------------
	
	Constructor();
};