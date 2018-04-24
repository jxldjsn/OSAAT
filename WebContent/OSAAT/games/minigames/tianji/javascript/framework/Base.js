function Base()
{
	//---------- Attributes ----------
	this.entity=new Image();
	this.width=0;
	this.height=0;
	this.beOverlapArea={};
	this.beOverlapAreaLeftOffset=0;
	this.beOverlapAreaRightOffset=0;
	this.beOverlapAreaTopOffset=0;
	this.beOverlapAreaBottomOffset=0;
	
	var This=this;
	var opacityValue=0;
	//--------------------------------
	
	function Constructor()
	{
		This.entity.style.position="absolute";
		This.entity.style.left=0;
		This.entity.style.top=0;
	};
	
	//---------- Methods ----------
	this.getPositionX=function()
	{
		return parseInt(This.entity.style.left);
	};
	
	this.getPositionY=function()
	{
		return parseInt(This.entity.style.top);
	};
	
	this.setPosition=function(x,y)
	{
		This.entity.style.left=x+"px";
		This.entity.style.top=y+"px";
		This.updateBeOverlapArea();
	};
	
	this.setFeature=function(feature)
	{
		This.entity.src=feature.src;
		This.width=feature.width;
		This.height=feature.height;
		This.entity.style.zIndex=This.zIndex;
		This.updateBeOverlapArea();
		oScreen.addElement(This.entity);
	};
	
	this.setOpacity=function(value)
	{
		opacityValue=parseInt(value)%101;
		if(isNaN(opacityValue))
		{
			throw new Error("Function Base:The opacity value must be a number!");
		}
		else
		{
			This.entity.style.MozOpacity=opacityValue/100;
			This.entity.style.filter="alpha(opacity="+opacityValue+")";
		}
	};
	
	this.getOpacityValue=function()
	{
		return opacityValue;
	};
	
	this.move=function(typeName)
	{
		typeName=typeName?typeName:this.moveType;
		var moveController=new MoveController();
		var args=new Array();
		var obj=this;
		for(var i=1;i<arguments.length;i++)
		{
			args.push(arguments[i]);
		}
		moveController.moveObject(obj,typeName,args);
		obj=null;
		moveController=null;
		args=null;
	};
	
	this.updateBeOverlapArea=function()
	{
		This.beOverlapArea.left=This.getPositionX()+This.beOverlapAreaLeftOffset;
		This.beOverlapArea.right=This.getPositionX()+This.width-This.beOverlapAreaRightOffset;
		This.beOverlapArea.top=This.getPositionY()+This.beOverlapAreaTopOffset;
		This.beOverlapArea.bottom=This.getPositionY()+This.height-This.beOverlapAreaBottomOffset;
	};
	//------------------------------

	Constructor();
};