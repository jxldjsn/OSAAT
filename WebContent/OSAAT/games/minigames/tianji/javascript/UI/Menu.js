function Menu(menuId)
{
	this.currentOption=0;
	this.options=new Array();
	this.width=200;
	this.optionHeight=23;
	this.entity;
	this.optionOpacityValue=30;
	this.maxOptionOpacityValue=80;
	this.subMenu;
	this.subMenuBorder;
	this.subMenuPopSpeed=15;
	this.subMenuWidth=400;
	this.subMenuHeight=400;
	this.canBeChoose=true;
	this.subMenus=new Array();
	this.zIndex=7000;
	this.id=menuId?menuId:"menu";
	
	
	var This=this;
	var canBeCloseSubMenu=false;
	
	function Constructor()
	{
		This.subMenuPopSpeed=This.subMenuPopSpeed%2==0?This.subMenuPopSpeed:This.subMenuPopSpeed+1;
		
		This.entity=document.createElement("div");
		This.entity.style.position="absolute";
		This.entity.style.width=This.width+"px";
		This.entity.style.padding="10px 10px 10px 10px";
		This.entity.className="menuStyle";
		This.entity.style.zIndex=This.zIndex;
		document.body.appendChild(This.entity);
		
		This.subMenu=document.createElement("div");
		This.subMenu.style.position="absolute";
		This.subMenu.style.width=This.subMenuWidth+"px";
		This.subMenu.style.height=This.subMenuHeight+"px";
		This.subMenu.style.padding="10px 10px 10px 10px";
		This.subMenu.style.display="none";
		This.subMenu.style.zIndex=This.zIndex;
		document.body.appendChild(This.subMenu);
		
		This.subMenuBorder=document.createElement("div");
		This.subMenuBorder.style.position="absolute";
		This.subMenuBorder.style.border="1px solid #ffffff";
		This.subMenuBorder.style.left=oScreen.elementMoveArea.left+oScreen.width/2+"px";
		This.subMenuBorder.style.top=oScreen.elementMoveArea.top+oScreen.height/2+"px";
		This.subMenuBorder.style.width="0";
		This.subMenuBorder.style.height="0";
		This.subMenuBorder.style.fontSize="0";
		This.subMenuBorder.style.display="none";
		This.subMenuBorder.style.zIndex=This.zIndex;
		document.body.appendChild(This.subMenuBorder);
	};
	
	this.setPosition=function(x,y)
	{
		if(!isNaN(x) && !isNaN(y))
		{
			This.entity.style.left=x+"px";
			This.entity.style.top=y+"px";
			
		}
	};
	
	this.setWidth=function(width)
	{
		if(!isNaN(width))
		{
			This.entity.style.width=width+"px";
		}
	};
	
	this.addSubMenu=function(subMenu)
	{
		This.subMenus.push(subMenu);
	};
	
	this.removeSubMenu=function(index)
	{
		This.subMenus[index]=null;
		This.subMenus.splice(index,1);
	}
	
	this.moveDown=function()
	{
		if(This.currentOption+1<This.options.length)
		{
			This.setCurrentOption(This.options[++This.currentOption]);
			setLostFocus(This.options[This.currentOption-1]);
		}
	};
	
	this.moveUp=function()
	{
		if(This.currentOption-1>=0)
		{
			This.setCurrentOption(This.options[--This.currentOption]);
			setLostFocus(This.options[This.currentOption+1]);
		}
	};
	
	this.addOption=function(optionId,optionText,functionToDo)
	{
		for(var i=0;i<This.options.length;i++)
		{
			if(This.options[i].id==optionId)
			{
				throw new Error("The option id:\""+optionId+"\" is existed");
				return;
			}
		}
		
		var divOption=document.createElement("div");
		if(navigator.appName.toLowerCase().indexOf("netscape")==-1)
		{
			divOption.style.padding="3px 0 0 0";
		}
		
		divOption.style.width="100%";
		divOption.style.height=This.optionHeight+"px";
		divOption.style.textAlign="center";
		divOption.style.margin="5px 0 5px 0";
		setOpacity(divOption,This.optionOpacityValue);
		divOption.innerHTML=optionText;
		divOption.id=optionId;
		divOption.actived=false;
		divOption.doFunction=functionToDo?functionToDo:function(){};
		This.entity.appendChild(divOption);
		This.options.push(divOption);
		divOption=null;
	};
	
	this.setCurrentOption=function(optionObject)
	{
		optionObject.actived=true;
		optionObject.style.backgroundColor="#ffff88";
		setOpacity(optionObject,This.maxOptionOpacityValue);
		optionObject=null;
	};
	
	this.removeOption=function(optionIndex)
	{
		This.entity.removeChild(This.options[optionIndex]);
		This.options[optionIndex]=null;
		This.options.splice(optionIndex,1);
	};
	
	this.popSubMenu=function(oDiv)
	{
		if(oDiv && oDiv.tagName.toLowerCase()=="div")
		{
			oDiv.style.display="block";
			var isAppend=true;
			for(var i=0;i<This.subMenu.childNodes.length;i++)
			{
				if(This.subMenu.childNodes[i]==oDiv)
				{
					isAppend=false;
				}
			}
			if(isAppend)
			{
				This.subMenu.appendChild(oDiv);
			}
		}
		else
		{
			throw new Error("Menu Error:must be a div object for sub menu content");
		}
		
		This.canBeChoose=false;
		This.subMenuBorder.style.display="block";
		
		function showSubMenuBorder()
		{
			if(parseInt(This.subMenuBorder.style.width)<This.subMenuWidth)
			{
				This.subMenuBorder.style.width=parseInt(This.subMenuBorder.style.width)+This.subMenuPopSpeed+"px";
				This.subMenuBorder.style.height=parseInt(This.subMenuBorder.style.height)+This.subMenuPopSpeed+"px";
				This.subMenuBorder.style.left=parseInt(This.subMenuBorder.style.left)-This.subMenuPopSpeed/2+"px";
				This.subMenuBorder.style.top=parseInt(This.subMenuBorder.style.top)-This.subMenuPopSpeed/2+"px";
			}
			else
			{
				ssmbTimer.dispose();
				ssmbTimer=null;
				This.subMenu.style.left=This.subMenuBorder.style.left;
				This.subMenu.style.top=This.subMenuBorder.style.top;
				
				//set current option to active
				for(var i=0;i<This.subMenus.length;i++)
				{
					if(This.subMenus[i].id==This.options[This.currentOption].id)
					{
						This.subMenus[i].setCurrentOption(This.subMenus[i].options[This.subMenus[i].currentOption]);
					}
				}
				
				This.subMenu.style.display="block";
				canBeCloseSubMenu=true;
				
				for(var i=0;i<This.subMenus.length;i++)
				{
					if(This.subMenus[i].id==This.options[This.currentOption].id)
					{
						This.subMenus[i].canBeChoose=true;
					}
				}
			};
			
		};
		var ssmbTimer=new Timer(showSubMenuBorder,10);
		if(!canBeCloseSubMenu)
		{
			ssmbTimer.start();
		}
	};
	
	this.closeSubMenu=function()
	{
		function closeSM()
		{
			if(parseInt(This.subMenuBorder.style.width)>0)
			{
				This.subMenuBorder.style.width=parseInt(This.subMenuBorder.style.width)-This.subMenuPopSpeed+"px";
				This.subMenuBorder.style.height=parseInt(This.subMenuBorder.style.height)-This.subMenuPopSpeed+"px";
				This.subMenuBorder.style.left=parseInt(This.subMenuBorder.style.left)+This.subMenuPopSpeed/2+"px";
				This.subMenuBorder.style.top=parseInt(This.subMenuBorder.style.top)+This.subMenuPopSpeed/2+"px";
			}
			else
			{
				closeTimer.dispose();
				closeTimer=null;
				This.subMenuBorder.style.display="none";
				canBeCloseSubMenu=false;
				This.canBeChoose=true;
			}
		};
		var closeTimer=new Timer(closeSM,10);
		if(canBeCloseSubMenu)
		{
			
			for(var i=0;i<This.subMenus.length;i++)
			{
				if(This.subMenus[i].id==This.options[This.currentOption].id)
				{
					This.subMenus[i].canBeChoose=false;
					This.subMenus[i].currentOption=0;
					for(var j=0;j<This.subMenus[i].options.length;j++)
					{
						setLostFocus(This.subMenus[i].options[j]);
					}
					break;
				}
			}
			This.subMenu.style.display="none";
			for(var i=0;i<This.subMenu.childNodes.length;i++)
			{
				This.subMenu.childNodes[i].style.display="none";
			}
			closeTimer.start();
			
		}
	};	
	
	var setOpacity=function(obj,opacityValue)
	{
		obj.style.opacity=opacityValue/100;
		obj.style.MozOpacity=opacityValue/100;
		obj.style.filter="alpha(opacity="+opacityValue+")";
		obj=null;
	};
	
	var setLostFocus=function(option)
	{
		var currentOpacityValue=This.maxOptionOpacityValue;
		option.actived=false;
		option.style.backgroundColor="#ffffff";
		function changeOpacity()
		{
			if(This.options.length>0
			&& --currentOpacityValue>This.optionOpacityValue 
			&& option.id!=This.options[This.currentOption].id)
			{
				setOpacity(option,currentOpacityValue);
			}
			else
			{
				timer.dispose();
				timer=null;
				option=null;
			};
		};
		var timer=new Timer(changeOpacity,10);
		timer.start();
	};
	
	this.dispose=function()
	{
		for(var i=This.subMenus.length-1;i>=0;i--)
		{
			for(var j=This.subMenus[i].options.length-1;j>=0;j--)
			{
				This.subMenus[i].removeOption(j);
			}
			This.removeSubMenu(i);
		}
		
		for(var i=This.options.length-1;i>=0;i--)
		{
				This.removeOption(i);
		}
		
		document.body.removeChild(This.subMenuBorder);
		document.body.removeChild(This.subMenu);
		
	};
	
	Constructor();
	
}