function ConcentrationPower(powerType)
{
	//---------- Attributes ----------
	this.powerType=powerType?powerType:"concentrationPowerType1";
	this.concentrationEmplacements=new Array();
	
	var This=this;
	var shotTimer;
	//---------------------------------
	
	function Constructor()
	{

	};
	
	//---------- Methods ----------
	this.concentrationPowerType1Shot=function(planeObject,isFixed)
	{
		var bulletParameter=
		{
			count:15+planeObject.bulletPowerValue*5,
			speed:30,
			shotInterval:100
		};

		This.concentrationEmplacements[0]=new Emplacement("planeShot1",global.entity.concentrationBullet1);
		This.concentrationEmplacements[0].containerBulletPower=1;

		if(isFixed)
		{
			for(var i=0;i<This.concentrationEmplacements.length;i++)
			{
				This.concentrationEmplacements[i].left=planeObject.getPositionX()+i*planeObject.width;
				This.concentrationEmplacements[i].top=planeObject.getPositionY();
				This.concentrationEmplacements[i].containerId=planeObject.id;
				This.concentrationEmplacements[i].containerBulletPower=planeObject.bulletPowerValue;
			}
		}
		else
		{
			planeObject.addConcentrationEmplacement(This.concentrationEmplacements[0],planeObject.getPositionX()-This.concentrationEmplacements[0].width,planeObject.getPositionY());
		}
		
		shotTimer=new Timer(shotConcentration,bulletParameter.shotInterval);
		shotTimer.start();
		function shotConcentration()
		{
			if(planeObject)
			{
				if(planeObject.isShottingConcentrationPower && bulletParameter.count-->0)
				{
					for(var i=0;i<planeObject.concentrationEmplacements.length;i++)
					{
						if(planeObject.concentrationEmplacements[i])
						{
							planeObject.concentrationEmplacements[i].left=planeObject.getPositionX()+10+parseInt(Math.random()*100)%(planeObject.width-20);
							planeObject.concentrationEmplacements[i].top=planeObject.getPositionY()-planeObject.concentrationEmplacements[i].height;
							planeObject.concentrationEmplacements[i].shot(bulletParameter.speed);
						}
					}
					
					//if is fixed
					for(var i=0;i<This.concentrationEmplacements.length;i++)
					{
						This.concentrationEmplacements[i].shot(bulletParameter.speed);
					}
				}
				else
				{
					shotTimer.dispose();
					objDisposition.dispose(shotTimer);
					planeObject.concentrationEmplacements.length=0;
					concentrationEmplacements=null;
					objDisposition.dispose(bulletParameter);
					planeObject.isShottingConcentrationPower=false;
					planeObject.canShot=true;
					planeObject=null;
					
					for(var i=This.concentrationEmplacements.length-1;i>=0;i--)
					{
						objDisposition.dispose(This.concentrationEmplacements[i]);
						This.concentrationEmplacements.splice(i,1);
					}
				}
			}
		};
	};
	//-------------------------
	
	Constructor();
};