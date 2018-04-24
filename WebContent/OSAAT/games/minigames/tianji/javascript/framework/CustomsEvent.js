function CustomsEvent()
{
	//---------- Attributes ----------
	var This=this;
	var eventCollection=new Array();
	var timers=new Array();
	//var toggleObjects=new Array();
	var customsEventsDefines=new Array();
	//--------------------------------
	
	function Constructor()
	{

	};
	
	//---------- Methods ----------
	this.addEvent=function(eventName,func)
	{
		//if(This.haveSameNameEvent(eventName))
		//{
			//throw new Error("Function CustomsEvent:CustomsEvent \""+eventName+"\"alreay existed!");
			//return;
		//}
		
		//toggleObjects.push(this);
		var toggleObj=this;
		var args=new Array();
		for(var i=2;i<arguments.length;i++)
		{
			args.push(arguments[i]);
		}
		customsEventsDefines.push(new CustomsEventsDefine(args));
		var cEventsDefine=customsEventsDefines[customsEventsDefines.length-1];
		if(eval("cEventsDefine.ce_"+eventName))
		{
			eval("timers.push(new Timer(function(){cEventsDefine.ce_"+eventName+"(func,toggleObj);},global.GAME_SPEED))");
			timers[timers.length-1].start();
			customsEventsDefines[customsEventsDefines.length-1].id=timers[timers.length-1].intervalId;
			eventCollection.push(
			{
				eventId:timers[timers.length-1].intervalId,
				eventName:eventName,
				toggleObj:toggleObj,
				isTriggled:false
			});
		}
		else
		{
			cEventsDefine=null;
			throw new Error("Function CustomsEvent:CustomsEvent \""+eventName+"\" is undefined!");
		}
		
	};
	
	this.removeEvent=function(eventName)
	{
		var toggleObj=this;
		for(var i=eventCollection.length-1;i>=0;i--)
		{
			if(eventCollection[i].eventName==eventName && eventCollection[i].toggleObj==toggleObj)
			{
				//dispose timer objects
				for(var j=timers.length-1;j>=0;j--)
				{
					if(timers[j].intervalId==eventCollection[i].eventId)
					{
						timers[j].dispose();
						objDisposition.dispose(timers[j]);
						timers.splice(j,1);
						break;
					}
				}
				
				//dispose customsEventsDefine objects
				for(var j=customsEventsDefines.length-1;j>=0;j--)
				{
					if(customsEventsDefines[j].id==eventCollection[i].eventId)
					{ 
						objDisposition.dispose(customsEventsDefines[j]);
						customsEventsDefines.splice(j,1);
						break;
					}
				}
				objDisposition.dispose(eventCollection.splice(i,1));
			}
		}
		toggleObj=null;
	};
	
	this.haveSameNameEvent=function(eventName)
	{
		for(var i=0;i<eventCollection.length;i++)
		{
			if(eventCollection[i].eventName==eventName)
			{
				return true;
			}
		}
		return false;
	}
	//-----------------------------
	
	Constructor();
};