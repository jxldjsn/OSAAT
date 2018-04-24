function Emplacement(shotType,bulletFeature)
{
	//---------- Attributes ----------
	this.left=0;
	this.top=0;
	this.width=0;
	this.height=0;
	this.containerId="";
	this.containerBulletPower=1;
	this.shotType=shotType?shotType:"enemyShot1";
	this.bulletFeature=bulletFeature?bulletFeature:global.entity.enemyBullet1;
	
	var This=this;
	var timerBuffer;
	var bulletCollection;
	//---------------------------------
	
	function Constructor()
	{
		bulletCollection=new BulletCollection(This.shotType,This.bulletFeature,This.containerId,This.containerBulletPower);
		This.width=bulletCollection.getBulletWidth(This.shotType);
		This.height=bulletCollection.getBulletHeight(This.shotType);
	};
	
	//---------- Methods ----------
	this.shot=function(speed,args)
	{
		bulletCollection=new BulletCollection(This.shotType,This.bulletFeature,This.containerId,This.containerBulletPower);
		eval("bulletCollection."+This.shotType+"(This.left,This.top,speed,args)");
	};
	//-------------------------
	
	Constructor();
};