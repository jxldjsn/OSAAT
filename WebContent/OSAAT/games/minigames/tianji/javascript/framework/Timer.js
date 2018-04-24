function Timer(func,interval)
{
	//---------- Attributes ----------
	this.interval;
	this.intervalId=0;
	this.isStart=false;
	
	var This=this;
	//---------------------------------
	
	function Constructor()
	{
		This.interval=interval?interval:1000;
	};
	
	//---------- Methods ----------
	
	this.start=function()
	{
		if(This && func && !This.isStart)
		{
			This.isStart=true;
			This.intervalId=window.setInterval(function(){return function(){if(func)func();};}(),This.interval);
		}
	};
	
	this.stop=function()
	{
		if(This && This.isStart)
		{
			This.isStart=false;
			window.clearInterval(This.intervalId);
		}
	};
	
	this.dispose=function()
	{
		if(This && func)
		{
			window.clearInterval(This.intervalId);
			func=null;
			objDisposition.dispose(This);
		}
	};
	//-------------------------
	
	Constructor();
};