/*
	there have three steps to add bullet shot type:
		step1:define shot bullets array;
		step2:initialize shot type bullets;
		step3:define shot type which use to move bullet;
*/
function BulletCollection(shotTypeName,bulletFeature,containerId,bulletPower)
{
	//---------- Attributes ----------
	var This=this;
	var bufferTimer=new Array();
	
	var enemyShot1Bullets=new Array();
	
	var planeShot1Bullets=new Array();
	var planeShot2Bullets=new Array();
	//---------------------------------
	
	function Constructor()
	{
		eval("if(!This."+shotTypeName+")"+
					"{"+
						"throw new Error(\"Function BulletCollection:BulletCollection haven't assigned shot type:\\\""+shotTypeName+"\\\"\");"+
					"}"+
					"else"+
					"{"+
						shotTypeName+"Initialize(bulletFeature);"+
					"}");

	};
	
	//---------- Methods ----------
	this.getBulletWidth=function(shotTypeName)
	{
		try
		{
			var width=0;
			eval("if("+shotTypeName+"Bullets.length>0)width="+shotTypeName+"Bullets[0].width;");
			return width;
		}
		finally
		{
			width=null;
		}
	};
	this.getBulletHeight=function(shotTypeName)
	{
		try
		{
			var height=0;
			eval("if("+shotTypeName+"Bullets.length>0)height="+shotTypeName+"Bullets[0].height;");
			return height;
		}
		finally
		{
			height=null;
		}
	};
	
	function enemyShot1Initialize(bulletFeature)
	{
		enemyShot1Bullets[0]=new Bullet(global.bulletType.ENEMY);
		enemyShot1Bullets[0].moveType="enityMoveByAngle";
		enemyShot1Bullets[0].setFeature(bulletFeature);
		bulletFeature=null;
	};
	this.enemyShot1=function(x,y,speed,args)
	{
		var bulletCount=args[0];
		var angleDistance=args[1];
		var baseAngle=args[2];
		
		if((bulletCount-1)*angleDistance>360)
		{
			bulletCount=parseInt(360/angleDistance);
		}
		
		enemyShot1Bullets[0].angle=baseAngle-(bulletCount-1)/2*angleDistance;
		enemyShot1Bullets[0].power=bulletPower;
		enemyShot1Bullets[0].parentId=containerId;
		enemyShot1Bullets[0].speed=speed;
		enemyShot1Bullets[0].setPosition(x,y);
		enemyShot1Bullets[0].move(enemyShot1Bullets[0].moveType,enemyShot1Bullets[0].angle);
		for(var i=1;i<bulletCount;i++)
		{
			enemyShot1Bullets[i]=new Bullet(global.bulletType.ENEMY);
			enemyShot1Bullets[i].moveType="enityMoveByAngle";
			enemyShot1Bullets[i].setFeature(bulletFeature);
			enemyShot1Bullets[i].angle=enemyShot1Bullets[i-1].angle+angleDistance;
			enemyShot1Bullets[i].power=bulletPower;
			enemyShot1Bullets[i].parentId=containerId;
			enemyShot1Bullets[i].speed=speed;
			enemyShot1Bullets[i].setPosition(x,y);
			enemyShot1Bullets[i].move(enemyShot1Bullets[i].moveType,enemyShot1Bullets[i].angle);
		}
		x=null;
		y=null;
		speed=null;
		containerId=null;
		bulletPower=null;
	};
	

	
	
	
	function planeShot1Initialize(bulletFeature)
	{
		planeShot1Bullets[0]=new Bullet(global.bulletType.PLANE);
		planeShot1Bullets[0].moveType="planeBulletMoveType1";
		planeShot1Bullets[0].setFeature(bulletFeature);
		bulletFeature=null;
	};
	this.planeShot1=function(x,y,speed)
	{
		for(var i=0;i<planeShot1Bullets.length;i++)
		{
			planeShot1Bullets[i].power=bulletPower;
			planeShot1Bullets[i].parentId=containerId;
			planeShot1Bullets[i].speed=speed;
			planeShot1Bullets[i].setPosition(x,y);
			planeShot1Bullets[i].move();
		}
		x=null;
		y=null;
		speed=null;
		containerId=null;
		bulletPower=null;
	};
	
	function planeShot2Initialize(bulletFeature)
	{
		planeShot2Bullets[0]=new Bullet(global.bulletType.PLANE);
		planeShot2Bullets[0].moveType="enityMoveByAngle";
		planeShot2Bullets[0].setFeature(bulletFeature);
		bulletFeature=null;
	};
	this.planeShot2=function(x,y,speed)
	{
		for(var i=0;i<planeShot2Bullets.length;i++)
		{
			planeShot2Bullets[i].power=bulletPower;
			planeShot2Bullets[i].parentId=containerId;
			planeShot2Bullets[i].speed=speed;
			planeShot2Bullets[i].setPosition(x,y);
			planeShot2Bullets[i].move(planeShot2Bullets[i].moveType,270);
		}
		x=null;
		y=null;
		speed=null;
		angle=null;
		containerId=null;
		bulletPower=null;
	};
	//-------------------------
	
	Constructor();
};