function Bullet(parentType)
{
	Base.call(this);
	//---------- Attributes ----------
	this.currentId;
	this.power=1;
	this.speed=15;
	this.HP=1;
	this.moveType;
	this.parentType=parentType;
	this.parentId="";
	this.zIndex=4000;
	
	var This=this;
	//---------------------------------
	
	function Constructor()
	{
		This.setPosition(-1000,-1000);
		if(This.parentType==global.bulletType.PLANE)
		{
			if(global.planeBullets.length==0)
			{
				This.currentId=1;
			}
			else
			{
				This.currentId=global.planeBullets[global.planeBullets.length-1].currentId+1;
				if(This.currentId>global.MAX_NUMBER)
				{
					throw new Error("The value of currentId which is a bullet object's attribute is overflow");
				}
			}
			global.planeBullets.push(This);
		}
		
		if(This.parentType==global.bulletType.ENEMY)
		{
			if(global.enemyBullets.length==0)
			{
				This.currentId=1;
			}
			else
			{
				This.currentId=global.enemyBullets[global.enemyBullets.length-1].currentId+1;
				if(This.currentId>global.MAX_NUMBER)
				{
					throw new Error("The value of currentId which is a bullet object's attribute is overflow");
				}
			}
			global.enemyBullets.push(This);
		}
	};
	//---------- Methods --------------
	
	this.destroy=function()
	{
		if(This.parentId.toLowerCase().indexOf("enemy")==-1)
		{
			var spark=new Animation("spark1",12,100,0,0,4500);
			spark.setPosition(This.getPositionX()+This.width/2-spark.width/2,
												This.getPositionY()-spark.height*3/4);
			spark.loop=false;
			spark.play();
			spark=null;
		}
		
		This.dispose();
		
	};
	
	this.dispose=function()
	{
		if(This.parentType==global.bulletType.PLANE)
		{
			for(var i=global.planeBullets.length-1;i>=0;i--)
			{
				if(global.planeBullets[i].currentId==This.currentId)
				{
					global.planeBullets.splice(i,1);
				}
			}
		}
		
		if(This.parentType==global.bulletType.ENEMY)
		{
			for(var i=global.enemyBullets.length-1;i>=0;i--)
			{
				if(global.enemyBullets[i].currentId==This.currentId)
				{
					global.enemyBullets.splice(i,1);
				}
			}
		}
		oScreen.removeElement(This.entity);
		objDisposition.dispose(This);
	};
	
	this.copy=function()
	{
		try
		{
			var obj=new Bullet(This.parentType);
			for(var i in This)
			{
				if(i!="entity")
				{
					obj[i]=This[i];
				}
			}
			obj.entity=new Image();
			obj.entity.style.left=This.entity.style.left;
			obj.entity.style.top=This.entity.style.top;
			obj.entity.src=This.entity.src;
			obj.entity.onload=This.entity.onload;
			obj.entity.style.opacity=This.entity.style.opacity;
			obj.entity.style.cssText=This.entity.style.cssText;
			return obj;
		}
		finally
		{
			obj=null;
		}
	};
	
	//---------------------------------
	
	Constructor();
}