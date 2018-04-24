function Screen(width,height)
{
	//---------- Attributes ----------
	this.width=width?width:480;
	this.height=height?height:600;
	this.left=0;
	this.top=0;
	this.elementMoveArea={};
	
	var This=this;
	var previousMask=new Array();
	//---------------------------------
	
	function Constructor()
	{
		previousMask.length=4;
	};
	
	//---------- Methods ----------
	this.addElement=function(element,x,y)
	{
		if(element)
		{
			var obj=element.entity?element.entity:element;
			obj.style.left=x?x+"px":obj.style.left;
			obj.style.top=y?y+"px":obj.style.top;
			document.body.appendChild(obj);
			obj=null;
		}
	};
	
	this.removeElement=function(element)
	{
		if(element)
		{
			try
			{
				document.body.removeChild(element);
			}
			catch(ex){}
		}
	};
	
	this.show=function()
	{
		var mask=new Array();
		mask.length=4;
		
		document.body.scroll="no";
		This.left=document.body.clientWidth/2-This.width/2;
		This.top=document.body.clientHeight/2-This.height/2;
		
		for(var i=0;i<4;i++)
		{
			mask[i]=document.createElement("div");
			mask[i].style.position="absolute";
			mask[i].style.backgroundColor="#000";
			mask[i].style.fontSize=1;
			mask[i].style.margin=0;
			mask[i].style.zIndex=6000;
		}

		mask[0].style.left=0;
		mask[0].style.top=0;
		mask[0].style.width=This.left+"px";
		mask[0].style.height=document.body.clientHeight+"px";
		
		mask[1].style.left=This.left+This.width+"px";
		mask[1].style.top=0;
		mask[1].style.width=mask[0].style.width;
		mask[1].style.height=mask[0].style.height;
		
		mask[2].style.left=This.left+"px";
		mask[2].style.top=0;
		mask[2].style.width=This.width+"px";
		mask[2].style.height=This.top<0?0:This.top+"px";
		
		mask[3].style.left=This.left+"px";
		mask[3].style.top=This.top+This.height+"px";
		mask[3].style.width=mask[2].style.width;
		mask[3].style.height=mask[2].style.height;
		
		for(var i=0;i<mask.length;i++)
		{
			previousMask[i]=document.body.appendChild(mask[i]);
		}
		
		This.elementMoveArea.left=This.left;
		This.elementMoveArea.right=This.left+This.width;
		This.elementMoveArea.top=This.top;
		This.elementMoveArea.bottom=This.top+This.height;
	};
	
	this.reLayout=function()
	{
		for(var i=0;i<previousMask.length;i++)
		{
			if(previousMask[i])
			{
				document.body.removeChild(previousMask[i]);
				previousMask[i]=null;
			}
		}
		This.left=document.body.clientWidth/2-This.width/2;
		This.top=document.body.clientHeight/2-This.height/2;
		This.show();
	};
	
	this.updateBombState=function(planeId,bombCount)
	{
		var planeDivchildNodesLength=$(planeId+"BombState").childNodes.length;
		for(var i=planeDivchildNodesLength-1;i>=0;i--)
		{
			$(planeId+"BombState").removeChild($(planeId+"BombState").childNodes[i]);
		}
		
		for(var i=0;i<bombCount;i++)
		{
			eval("var bombImage"+i+"=new Image();");
			eval("bombImage"+i+".src=global.entity.bombStateImage.src;");
			eval("bombImage"+i+".style.marginLeft='5px';")
			eval("$(planeId+'BombState').appendChild(bombImage"+i+");");
		}
	};
	this.updatePlaneState=function(planeId,planeCount)
	{
		var planeDivchildNodesLength=$(planeId+"Count").childNodes.length;
		for(var i=planeDivchildNodesLength-1;i>=0;i--)
		{
			$(planeId+"Count").removeChild($(planeId+"Count").childNodes[i]);
		}
		
		for(var i=0;i<planeCount;i++)
		{
			eval("var planeCountImage"+i+"=new Image();");
			eval("planeCountImage"+i+".src=global.entity."+planeId+"CountImage.src;");
			eval("planeCountImage"+i+".style.marginLeft='5px';")
			eval("$(planeId+'Count').appendChild(planeCountImage"+i+");");
		}
	};
	this.updatePlaneScore=function(planeId,planeScore)
	{
		$(planeId+"Score").innerHTML=planeScore;
	};
	//-------------------------
	
	Constructor();
};