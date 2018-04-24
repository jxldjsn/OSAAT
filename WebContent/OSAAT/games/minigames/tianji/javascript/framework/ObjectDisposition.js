var objDisposition=new ObjectDisposition();

function ObjectDisposition()
{
	//---------- Attributes ----------
	var This=this;
	var objectCollection=new Array();
	//---------------------------------
	
	function Constructor()
	{

	};
	
	//---------- Methods ----------
	this.dispose=function(object)
	{
		for(var attribute in object)
		{
			if(attribute && typeof(attribute)=="object")
			{
				arguments.callee(attribute);
			}
			else
			{
				object[attribute]=null;
				delete object[attribute];
			}
		}
		object=null;
	};
	
	this.disposeAll=function()
	{
		for(var i=objectCollection.length-1;i>=0;i--)
		{
			This.dispose(objectCollection[i]);
			objectCollection.splice(i,1);
		}
	};
	
	this.addObject=function(obj)
	{
		objectCollection.push(obj);
	};
	//-------------------------
	
	Constructor();
};