var ce=new CustomsEvent();
Object.prototype.addCustomsEvent=ce.addEvent;
Object.prototype.removeCustomsEvent=ce.removeEvent;

var oScreen=new Screen(530,700);

String.prototype.charPadForLeft=function(padChar,maxWidth)
{
	var str=this;
	if(!isNaN(maxWidth) && this.length<maxWidth && padChar.toString().length==1)
	{
		for(var i=0;i<maxWidth-this.length;i++)
		{
			str=padChar+str;
		}
	}
	return str;
};
