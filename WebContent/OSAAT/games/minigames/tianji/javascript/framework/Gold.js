function Gold()
{
	Base.call(this);
	//---------- Attribute ----------
	this.scoreValue=500;
	this.moveType="bonusMoveType2";
	this.currentId;
	this.screenOffset=10;
	this.speed=1;
	
	this.animation;
		
	var This=this;
	//-------------------------------
	function Constructor()
	{
		This.animation=new Animation("gold1",9,100,0,0,1800);
		This.animation.hidden();
		This.width=This.animation.width;
		This.height=This.animation.height;
	};
	
	//----------- Methods -----------
	this.appear=function(x,y)
	{
		
		This.animation.play();
		
		This.setPosition(x,y);
		
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
		//get current score value
		This.animation.stop();
		var currentValueSeed=Math.abs((This.animation.totalLoad-1)/2-This.animation.currentFrame);
		if(currentValueSeed<=3)
		{
			This.scoreValue=4000/Math.pow(2,currentValueSeed);
		}
		else
		{
			This.scoreValue=500;
		}
		
		planeObject.updateScore(planeObject.score+This.scoreValue);
		This.showScore(This.scoreValue);
		This.dispose();
		planeObject=null;
		currentValueSeed=null;
	};
	
	this.setPosition=function(x,y)
	{
		This.entity.style.left=x+"px";
		This.entity.style.top=y+"px";
		This.animation.setPosition(x,y);
		This.updateBeOverlapArea();
	};
	
	this.updateBeOverlapArea=function()
	{
		This.beOverlapArea.left=This.animation.getPositionX();
		This.beOverlapArea.right=This.animation.getPositionX()+This.animation.width;
		This.beOverlapArea.top=This.animation.getPositionY();
		This.beOverlapArea.bottom=This.animation.getPositionY()+This.animation.height;
	};
	
	this.showScore=function(scoreValue)
	{
		eval("var scoreDisplay=new Animation('score"+scoreValue+"',2,100,0,0,1800);");
		scoreDisplay.setPosition(This.getPositionX()+This.animation.width/2-scoreDisplay.width/2,This.getPositionY()+This.animation.height/2-scoreDisplay.height/2);
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
		This.animation.dispose();
		objDisposition.dispose(This);
	};
	//-------------------------------
	
	Constructor();
};