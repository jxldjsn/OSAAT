function Animation(animateName,frameCount,interval,x,y,zIndex)
{
	//---------- Attributes ----------
	this.frame=new Array();
	this.loop=true;
	this.loopCount=-1;
	this.interval=0;
	this.currentLoad=0;
	this.totalLoad=frameCount?frameCount:0;
	this.width=0;
	this.height=0;
	this.interval=interval?interval:1000;
	this.state="stop";
	this.currentFrame=0;
	this.beOverlapArea={};
	
	var This=this;
	var timer=null;
	
	//---------------------------------

	function Constructor()
	{
		
		for(var i=0;i<This.totalLoad;i++)
		{
			This.frame[i]=new Image();
			eval("This.frame[i].src=global.entity."+animateName+"[i].src;");
			This.frame[i].style.position="absolute";
			This.frame[i].style.zIndex=zIndex?zIndex:5000;
			This.frame[i].style.display="none";
			This.frame[i].style.left=x?x+"px":0;
			This.frame[i].style.top=y?y+"px":0;
			oScreen.addElement(This.frame[i]);
			
			if(This.width<parseInt(This.frame[i].width))
			{
				This.width=parseInt(This.frame[i].width);
			}
			if(This.height<parseInt(This.frame[i].height))
			{
				This.height=parseInt(This.frame[i].height);
			}
		}
		This.updateBeOverlapArea();
	};

	//---------- Methods ----------

	this.getPositionX=function()
	{
		if(This.frame.length>0)
		{
			return parseInt(This.frame[0].style.left);
		}
	};
	
	this.getPositionY=function()
	{
		if(This.frame.length>0)
		{
			return parseInt(This.frame[0].style.top);
		}
	};
	
	this.setPosition=function(x,y)
	{
		for(var i=0;i<This.frame.length;i++)
		{
			This.frame[i].style.left=x+"px";
			This.frame[i].style.top=y+"px";
		}
		This.updateBeOverlapArea();
	};

	this.play=function()
	{
		if(This.state=="stop")
		{
			function doPlay()
			{
				This.frame[(This.frame.length+(This.currentFrame-1))%This.frame.length].style.display="none";
				This.frame[This.currentFrame].style.display="block";
				if(++This.currentFrame==This.frame.length)
				{
					This.currentFrame=0;
					if(!This.loop)
					{
						This.dispose();
					}
					else if(This.loopCount==0)
					{
						This.dispose();
					}
					
					if(This.loopCount>0)
					{
						This.loopCount--;
					}
				}
			};
			
			This.state="play";
			timer=new Timer(doPlay,This.interval);
			timer.start();
		}
	};

	this.stop=function()
	{
		if(This.state=="play" && timer)
		{
			This.state="stop";
			timer.stop();
		}
	};
	
	this.hidden=function()
	{
		This.stop();
		for(var i=0;i<This.frame.length;i++)
		{
			This.frame[i].style.display="none";
		}
	};
	
	this.display=function()
	{
		
	};
	
	this.setFrameFeature=function(index,feature)
	{
		if(This.width<parseInt(feature.width))
		{
			This.width=parseInt(feature.width);
		}
		if(This.height<parseInt(feature.height))
		{
			This.height=parseInt(feature.height);
		}
		This.frame[index].src=feature.src;
	};
	
	this.updateBeOverlapArea=function()
	{
		This.beOverlapArea.left=This.getPositionX();
		This.beOverlapArea.right=This.getPositionX()+This.width;
		This.beOverlapArea.top=This.getPositionY();
		This.beOverlapArea.bottom=This.getPositionY()+This.height;
	};
	
	this.dispose=function()
	{
		if(timer)
		{
			timer.dispose();
			objDisposition.dispose(timer);
		}
		animateName=null;
		frameCount=null;
		interval=null;
		zIndex=null;
		
		for(var i=0;i<This.frame.length;i++)
		{
			oScreen.removeElement(This.frame[i]);
		}
		
		objDisposition.dispose(This);
	};
	//-------------------------
	
	Constructor();
};