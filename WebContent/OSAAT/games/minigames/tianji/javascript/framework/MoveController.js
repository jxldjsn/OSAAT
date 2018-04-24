function MoveController()
{
	var timer;
	var This=this;
	
	this.moveObject=function(obj,typeName,args)
	{
		eval("timer=new Timer(function(){"+typeName+"(obj,args);},global.GAME_SPEED)");
		timer.start();
	};
	
	function bossMoveType1(obj,args)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}
		if(obj.curnodeStopTime==undefined)
		{
			obj.curnodeStopTime=args[0]?args[0]:150;
			obj.currentCurnodeStopTime=obj.curnodeStopTime;
			obj.currentDirectionTo="bottom";
			obj.fromDirection="middle";
		}
		
		if(obj.currentDirectionTo=="bottom")
		{
			if(obj.getPositionY()<oScreen.elementMoveArea.bottom-obj.height-420+(4-global.stagesCount)*30)
			{
				obj.setPosition(obj.getPositionX(),obj.getPositionY()+obj.speed*3);
			}
			else
			{
				if(--obj.currentCurnodeStopTime==0)
				{
					obj.currentDirectionTo="middle";
					obj.fromDirection="bottom";
					obj.currentCurnodeStopTime=obj.curnodeStopTime;
				}
			}
		}
		
		if(obj.currentDirectionTo=="middle")
		{
			if(obj.fromDirection=="bottom")
			{
				condition="obj.getPositionY()>oScreen.elementMoveArea.top+60";
				implement="obj.setPosition(obj.getPositionX(),obj.getPositionY()-obj.speed);";
			}
			else if(obj.fromDirection=="left")
			{
				condition="obj.getPositionX()<oScreen.elementMoveArea.left+oScreen.width/2-obj.width/2";
				implement="obj.setPosition(obj.getPositionX()+obj.speed,obj.getPositionY());";
			}
			else if(obj.fromDirection=="right")
			{
				condition="obj.getPositionX()>oScreen.elementMoveArea.left+oScreen.width/2-obj.width/2";
				implement="obj.setPosition(obj.getPositionX()-obj.speed,obj.getPositionY());";
			}
			
			if(eval(condition))
			{
				eval(implement);
			}
			else
			{
				if(--obj.currentCurnodeStopTime==0)
				{
					if(obj.fromDirection=="bottom")
					{
						obj.currentDirectionTo="left";
					}
					
					if(obj.fromDirection=="left")
					{
						obj.currentDirectionTo="right";
					}
					
					if(obj.fromDirection=="right")
					{
						obj.currentDirectionTo="bottom";
					}
					
					obj.currentCurnodeStopTime=obj.curnodeStopTime;
				}
			}
		}
		
		if(obj.currentDirectionTo=="left")
		{
			if(obj.getPositionX()>oScreen.elementMoveArea.left)
			{
				obj.setPosition(obj.getPositionX()-obj.speed,obj.getPositionY());
			}
			else
			{
				if(--obj.currentCurnodeStopTime==0)
				{
					obj.currentDirectionTo="middle";
					obj.fromDirection="left";
					obj.currentCurnodeStopTime=obj.curnodeStopTime;
				}
			}
		}
		
		if(obj.currentDirectionTo=="right")
		{
			if(obj.getPositionX()<oScreen.elementMoveArea.right-obj.width)
			{
				obj.setPosition(obj.getPositionX()+obj.speed,obj.getPositionY());
			}
			else
			{
				if(--obj.currentCurnodeStopTime==0)
				{
					obj.currentDirectionTo="middle";
					obj.fromDirection="right";
					obj.currentCurnodeStopTime=obj.curnodeStopTime;
				}
			}
		}

		obj=null;
	}
	
	function entityMoveType1(obj,args)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}

		if(obj.displayTime==undefined)
		{
			obj.displayTime=800;
			obj.stopX=args[0]?args[0]:oScreen.elementMoveArea.left+obj.width;
			obj.xDirectionFrom=args[1]?args[1]:"left";
			obj.yDirectionTo=args[2]?args[2]:"top";
		}

		if(obj.getPositionY()>oScreen.elementMoveArea.top-obj.height
		&& obj.getPositionY()<oScreen.elementMoveArea.bottom)
		{	
			if(obj.xDirectionFrom.toLowerCase()=="left")
			{
				if(obj.getPositionX()<=obj.stopX)
				{
						obj.setPosition(obj.getPositionX()+obj.speed,obj.getPositionY());
				}
				else if(--obj.displayTime<=0)
				{
					if(obj.yDirectionTo.toLowerCase()=="top")
					{
						obj.setPosition(obj.getPositionX(),obj.getPositionY()-obj.speed);
					}
					else if(obj.yDirectionTo.toLowerCase()=="bottom")
					{
						obj.setPosition(obj.getPositionX(),obj.getPositionY()+obj.speed+1);
					}
				}
			}
			else if(obj.xDirectionFrom.toLowerCase()=="right")
			{
				if(obj.getPositionX()>=obj.stopX)
				{
					obj.setPosition(obj.getPositionX()-obj.speed,obj.getPositionY());
				}
				else if(--obj.displayTime<=0)
				{
					if(obj.yDirectionTo.toLowerCase()=="top")
					{
						obj.setPosition(obj.getPositionX(),obj.getPositionY()-obj.speed);
					}
					else if(obj.yDirectionTo.toLowerCase()=="bottom")
					{
						obj.setPosition(obj.getPositionX(),obj.getPositionY()+obj.speed+1);
					}
				}
			}
		}
		else
		{
			timer.dispose();
			obj.destroy();
		}
		obj=null;
		stopX=null;
	};
	
	function entityMoveType2(obj,args)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}
		
		if(obj.stopY==undefined)
		{
			obj.displayTime=obj.displayTime?obj.displayTime:650;
			obj.stopY=args[0]?args[0]:oScreen.elementMoveArea.top+obj.height;
			obj.librateValue=args[1]?args[1]:50;
			obj.librateDirection=(Math.random()*10)%2==0?1:-1;
			obj.librateAreaLeft=obj.getPositionX()-obj.librateValue;
			obj.librateAreaRight=obj.getPositionX()+obj.librateValue;
			obj.yDirectionTo=args[2]?args[2]:"bottom";
			obj.isRetire=false;
		}
		
		if(obj.getPositionY()<oScreen.elementMoveArea.bottom)
		{
			if(obj.getPositionY()<obj.stopY && !obj.isRetire)
			{
				obj.setPosition(obj.getPositionX(),obj.getPositionY()+obj.speed+2);
			}
			else
			{
				if(obj.displayTime>0)
				{
					obj.displayTime--;
					obj.librateDirection=obj.getPositionX()<=obj.librateAreaLeft||obj.getPositionX()>=obj.librateAreaRight?-obj.librateDirection:obj.librateDirection;
					obj.setPosition(obj.getPositionX()+obj.speed*obj.librateDirection,obj.getPositionY());
				}
				else
				{
					obj.isRetire=true;
					if(obj.yDirectionTo.toLowerCase()=="bottom")
					{
						obj.setPosition(obj.getPositionX(),obj.getPositionY()+obj.speed+1);
					}
					else if(obj.yDirectionTo.toLowerCase()=="top")
					{
						obj.setPosition(obj.getPositionX(),obj.getPositionY()-obj.speed);
					}
					
					if(obj.getPositionY()>oScreen.elementMoveArea.bottom
					|| obj.getPositionY()<oScreen.elementMoveArea.top-obj.height)
					{
						timer.dispose();
						obj.destroy();
					}
				}
			}
		}
		else
		{
			timer.dispose();
			obj.destroy();
		}
		obj=null;
	};

	function entityMoveType3(obj)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}
		
		if(obj.getPositionY()<oScreen.elementMoveArea.bottom)
		{
			obj.setPosition(obj.getPositionX(),obj.getPositionY()+obj.speed);
		}
		else
		{
			timer.dispose();
			obj.destroy();
		}
		obj=null;
	};
	
	function entityMoveType4(obj,args)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}
		
		if(obj.librateDirection==undefined)
		{
			obj.librateValue=args[0]?args[0]:10;
			obj.librateDirection=(Math.random()*10)%2==0?1:-1;
			obj.librateAreaLeft=obj.getPositionX()-obj.librateValue;
			obj.librateAreaRight=obj.getPositionX()+obj.librateValue;
		}
		
		if(obj.getPositionY()<oScreen.elementMoveArea.bottom)
		{
			obj.librateDirection=obj.getPositionX()<=obj.librateAreaLeft||obj.getPositionX()>=obj.librateAreaRight?-obj.librateDirection:obj.librateDirection;
			obj.setPosition(obj.getPositionX()+2*obj.librateDirection,obj.getPositionY()+obj.speed);
		}
		else
		{
			timer.dispose();
			obj.destroy();
		}
		obj=null;
	};
	
	
	function entityMoveType5(obj,args)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}
		
		if(obj.xDirectionFrom==undefined)
		{
			obj.stopX=args[0]?args[0]:oScreen.elementMoveArea+oScreen.width/2-obj.width/2;
			obj.xDirectionFrom=args[1]?args[1]:"left";
		}

		if(obj.getPositionY()<oScreen.elementMoveArea.bottom)
		{
			if(obj.xDirectionFrom.toLowerCase()=="left")
			{
				if(obj.getPositionX()<obj.stopX)
				{
					obj.setPosition(obj.getPositionX()+obj.speed,obj.getPositionY()+obj.speed);
				}
				obj.setPosition(obj.getPositionX(),obj.getPositionY()+1);
			}
			else if(obj.xDirectionFrom.toLowerCase()=="right")
			{
				if(obj.getPositionX()>obj.stopX)
				{
					obj.setPosition(obj.getPositionX()-obj.speed,obj.getPositionY()+obj.speed);
				}
				obj.setPosition(obj.getPositionX(),obj.getPositionY()+1);
			}
		}
		else
		{
			timer.dispose();
			obj.destroy();
		}
		obj=null;
	};
	
	function entityMoveType6(obj,args)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}
		
		if(obj.xDirectionFrom==undefined)
		{
			obj.xDirectionFrom=args[0]?args[0]:"left";
		}
		
		if(obj.getPositionY()<oScreen.elementMoveArea.bottom)
		{
			if(obj.xDirectionFrom=="left")
			{
				obj.setPosition(obj.getPositionX()+obj.speed,obj.getPositionY()+obj.speed);
			}
			else if(obj.xDirectionFrom=="right")
			{
				obj.setPosition(obj.getPositionX()-obj.speed,obj.getPositionY()+obj.speed);
			}
		}
		else
		{
			timer.dispose();
			obj.destroy();
		}
		obj=null;
	};
	
	//figure "L" 
	function entityMoveType7(obj,args)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}
		
		if(obj.xDirectionTo==undefined)
		{
			obj.xDirectionTo=args[0]?args[0]:"left";
			obj.stopTime=args[1]?args[1]:1000;
			obj.stopY=args[2]?args[2]:250;
		}
		
		if(obj.getPositionX()<oScreen.elementMoveArea.right 
		&& obj.getPositionX()>oScreen.elementMoveArea.left-obj.width)
		{
			if(obj.getPositionY()<oScreen.elementMoveArea.top+obj.stopY)
			{
				obj.setPosition(obj.getPositionX(),obj.getPositionY()+obj.speed);
			}
			else
			{
				if(obj.stopTime--<0)
				{
					if(obj.xDirectionTo=="left")
					{
						obj.setPosition(obj.getPositionX()-obj.speed,obj.getPositionY());
					}
					else if(obj.xDirectionTo=="right")
					{
						obj.setPosition(obj.getPositionX()+obj.speed,obj.getPositionY());
					}
				}
			}
		}
		else
		{
			timer.dispose();
			obj.destroy();
		}
		obj=null;
	};
	
	function enityMoveByAngle(obj,args)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}
		var angle=args[0];
		if(obj.getPositionX()>oScreen.elementMoveArea.left-obj.width
		&& obj.getPositionX()<oScreen.elementMoveArea.right
		&& obj.getPositionY()>oScreen.elementMoveArea.top-obj.height
		&& obj.getPositionY()<oScreen.elementMoveArea.bottom)
		{
			var newX,newY;
			var xAngle=angle*(2*Math.PI/360);
			var xDirection=Math.abs(Math.cos(xAngle))/Math.cos(xAngle);
			var yDirection=Math.abs(Math.sin(xAngle))/Math.sin(xAngle);

			if(Math.abs(Math.tan(xAngle))<=1)
			{
				var deltaX=Math.abs(obj.speed*Math.cos(xAngle))*xDirection;
				newX=obj.getPositionX()+deltaX;
				newY=-(newX-obj.getPositionX())*Math.tan(xAngle)+obj.getPositionY();
			}
			else
			{
				var deltaY=Math.abs(obj.speed*Math.sin(xAngle))*yDirection;
				newY=obj.getPositionY()-deltaY;
				newX=-(newY-obj.getPositionY())/Math.tan(xAngle)+obj.getPositionX();
			}
			obj.setPosition(newX,newY);
			newX=null;
			newY=null;
			xAngle=null;
			xDirection=null;
			yDirection=null;
		}
		else
		{
			timer.dispose();
			obj.destroy();
			obj=null;
			angle=null
			args=null;
		}
	};
	
	function enemyBulletMoveType1(obj)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}
		
		if(obj.getPositionY()<oScreen.elementMoveArea.bottom)
		{
			obj.setPosition(obj.getPositionX(),obj.getPositionY()+obj.speed);
		}
		else
		{
			timer.dispose();
			obj.destroy();
			obj=null;
		}
	};
	
	function planeBulletMoveType1(obj)
	{
		if(!obj || !obj.entity)
		{
			timer.dispose();
			return;
		}
		
		if(obj.getPositionY()>-obj.height)
		{
			obj.setPosition(obj.getPositionX(),obj.getPositionY()-obj.speed);
		}
		else
		{
			timer.dispose();
			obj.destroy();
			obj=null;
		}
	};
	
	
	function bonusMoveType1(obj)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}

		if(obj.getPositionX()>oScreen.elementMoveArea.left-obj.width
		&& obj.getPositionX()<oScreen.elementMoveArea.right
		&& obj.getPositionY()>oScreen.elementMoveArea.top-obj.height
		&& obj.getPositionY()<oScreen.elementMoveArea.bottom)
		{
			if(obj.displayTime-->0)
			{
				if((obj.getPositionX()<=oScreen.elementMoveArea.left+obj.screenOffset && obj.xDirection<0)
				|| (obj.getPositionX()>=oScreen.elementMoveArea.right-obj.width-obj.screenOffset && obj.xDirection>0))
				{
					obj.xDirection=-obj.xDirection;
				}
				if((obj.getPositionY()<=oScreen.elementMoveArea.top+obj.screenOffset && obj.yDirection<0)
				|| (obj.getPositionY()>=oScreen.elementMoveArea.bottom-300 && obj.yDirection>0))
				{
					obj.yDirection=-obj.yDirection;
				}
			}
			
			obj.setPosition(obj.getPositionX()+obj.xDirection*obj.speed,
											obj.getPositionY()+obj.yDirection*obj.speed);
			
		}
		else
		{
			timer.dispose();
			obj.dispose();
			obj=null;
		}
	};
	
	function bonusMoveType2(obj)
	{
		if(!obj.entity)
		{
			timer.dispose();
			return;
		}
		
		if(obj.getPositionX()>oScreen.elementMoveArea.left-obj.width
		&& obj.getPositionX()<oScreen.elementMoveArea.right
		&& obj.getPositionY()>oScreen.elementMoveArea.top-obj.height
		&& obj.getPositionY()<oScreen.elementMoveArea.bottom)
		{
			obj.setPosition(obj.getPositionX(),obj.getPositionY()+obj.speed);
		}
		else
		{
			timer.dispose();
			obj.dispose();
			obj=null;
		}
	};
};