function CustomsEventsDefine(args)
{
	//---------- Attributes ----------
	this.id=0;
	
	var This=this;
	var eventTriggers=new Array();
	//--------------------------------
	
	function Constructor()
	{
	};
	
	//---------- Methods -------------
	this.ce_onBeAttack=function(func,toggleObj)
	{
		var beOverlapObjects=args[0];
		if(toggleObj.entity && beOverlapObjects)
		{
			for(var i=0;i<beOverlapObjects.length;i++)
			{
				if(!eventTriggers[i])
				{
						eventTriggers[i]={};
						eventTriggers[i].toggled=false;
						eventTriggers[i].id=beOverlapObjects[i].currentId;
				}
			}
			validateLength();
			for(var i=0;i<beOverlapObjects.length;i++)
			{
				if(toggleObj.entity
				&& toggleObj.canBeAttack
				&& toggleObj.getPositionY()>=oScreen.elementMoveArea.top
				&& toggleObj.beOverlapArea.right>=beOverlapObjects[i].beOverlapArea.left
				&& toggleObj.beOverlapArea.left<=beOverlapObjects[i].beOverlapArea.right
				&& toggleObj.beOverlapArea.bottom>=beOverlapObjects[i].beOverlapArea.top
				&& toggleObj.beOverlapArea.top<=beOverlapObjects[i].beOverlapArea.bottom)
				{
					for(var j=0;j<eventTriggers.length;j++)
					{
						if(eventTriggers[j].id==beOverlapObjects[i].currentId && !eventTriggers[j].toggled)
						{
							eventTriggers[j].toggled=true;
							if(func)
							{
								func(beOverlapObjects[i]);
							}
							validateLength();
							break;
						}
					}
				}
				else
				{
					for(var j=0;j<eventTriggers.length;j++)
					{
						if(eventTriggers[j].id==beOverlapObjects[i].currentId)
						{
							eventTriggers[j].toggled=false;
						}
					}
				}
			}
		}
		beOverlapObjects=null;
		
		//validate the eventTriggers.length equal eventTriggers.length
		function validateLength()
		{
			if(eventTriggers.length!=beOverlapObjects.length)
			{
				for(var i=eventTriggers.length-1;i>=0;i--)
				{
					for(var j=0;j<beOverlapObjects.length;j++)
					{
						if(eventTriggers[i].id==beOverlapObjects[j].currentId)
						{
							break;
						}
						if(j==beOverlapObjects.length-1)
						{
							eventTriggers.splice(i,1);
						}
					}
				}
			}
		};
	};
	
	this.ce_onBeAttackWithPlane=function(func,toggleObj)
	{
		var beOverlapObjects=global.planes;
		if(toggleObj.entity && beOverlapObjects)
		{
			for(var i=0;i<beOverlapObjects.length;i++)
			{
				if(!eventTriggers[i])
				{
						eventTriggers[i]={};
						eventTriggers[i].toggled=false;
						eventTriggers[i].id=beOverlapObjects[i].currentId;
				}
			}
			validateLength();
			for(var i=0;i<beOverlapObjects.length;i++)
			{
				if(toggleObj.entity
				&& toggleObj.canBeOverlapedToAttackPlane
				&& beOverlapObjects[i].canBeAttack
				&& toggleObj.beOverlapArea.right>=beOverlapObjects[i].beOverlapArea.left
				&& toggleObj.beOverlapArea.left<=beOverlapObjects[i].beOverlapArea.right
				&& toggleObj.beOverlapArea.bottom>=beOverlapObjects[i].beOverlapArea.top
				&& toggleObj.beOverlapArea.top<=beOverlapObjects[i].beOverlapArea.bottom)
				{
					for(var j=0;j<eventTriggers.length;j++)
					{
						if(eventTriggers[j].id==beOverlapObjects[i].currentId && !eventTriggers[j].toggled)
						{
							eventTriggers[j].toggled=true;
							if(func)
							{
								func(beOverlapObjects[i]);
							}
							validateLength();
							break;
						}
					}
				}
				else
				{
					for(var j=0;j<eventTriggers.length;j++)
					{
						if(eventTriggers[j].id==beOverlapObjects[i].currentId)
						{
							eventTriggers[j].toggled=false;
						}
					}
				}
			}
		}
		beOverlapObjects=null;
		
		//validate the eventTriggers.length equal eventTriggers.length
		function validateLength()
		{
			if(eventTriggers.length!=beOverlapObjects.length)
			{
				for(var i=eventTriggers.length-1;i>=0;i--)
				{
					for(var j=0;j<beOverlapObjects.length;j++)
					{
						if(eventTriggers[i].id==beOverlapObjects[j].currentId)
						{
							break;
						}
						if(j==beOverlapObjects.length-1)
						{
							eventTriggers.splice(i,1);
						}
					}
				}
			}
		};
	};
	
	this.ce_onOverlapWithPlane=function(func,toggleObj)
	{
		var beOverlapObjects=global.planes;
		if(toggleObj.entity && beOverlapObjects)
		{
			for(var i=0;i<beOverlapObjects.length;i++)
			{
				if(!eventTriggers[i])
				{
						eventTriggers[i]={};
						eventTriggers[i].toggled=false;
						eventTriggers[i].id=beOverlapObjects[i].currentId;
				}
			}
			validateLength();
			for(var i=0;i<beOverlapObjects.length;i++)
			{
				if(toggleObj.entity
				&& toggleObj.beOverlapArea.right>=beOverlapObjects[i].beOverlapArea.left
				&& toggleObj.beOverlapArea.left<=beOverlapObjects[i].beOverlapArea.right
				&& toggleObj.beOverlapArea.bottom>=beOverlapObjects[i].beOverlapArea.top
				&& toggleObj.beOverlapArea.top<=beOverlapObjects[i].beOverlapArea.bottom)
				{
					for(var j=0;j<eventTriggers.length;j++)
					{
						if(eventTriggers[j].id==beOverlapObjects[i].currentId && !eventTriggers[j].toggled)
						{
							eventTriggers[j].toggled=true;
							if(func)
							{
								func(beOverlapObjects[i]);
							}
							validateLength();
							break;
						}
					}
				}
				else
				{
					for(var j=0;j<eventTriggers.length;j++)
					{
						if(eventTriggers[j].id==beOverlapObjects[i].currentId)
						{
							eventTriggers[j].toggled=false;
						}
					}
				}
			}
		}
		beOverlapObjects=null;
		
		//validate the eventTriggers.length equal eventTriggers.length
		function validateLength()
		{
			if(eventTriggers.length!=beOverlapObjects.length)
			{
				for(var i=eventTriggers.length-1;i>=0;i--)
				{
					for(var j=0;j<beOverlapObjects.length;j++)
					{
						if(eventTriggers[i].id==beOverlapObjects[j].currentId)
						{
							break;
						}
						if(j==beOverlapObjects.length-1)
						{
							eventTriggers.splice(i,1);
						}
					}
				}
			}
		};
	};
		
	//--------------------------------
	Constructor();
};