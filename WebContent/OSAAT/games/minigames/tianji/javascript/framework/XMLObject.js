
var XMLObject=
{
	createXMLDOM:function()
	{
		var oXmlDom;

 		var xmlSignatures=["MSXML2.DOMDocument.5.0",
 											"MSXML2.DOMDocument.4.0",
 											"MSXML2.DOMDocument.3.0",
 											"MSXML2.DOMDocument",
 											"Microsoft.XmlDom"];
		for(var i=0;i<xmlSignatures.length;i++)
		{
			try
			{
				oXmlDom=new ActiveXObject(xmlSignatures[i]);
			}
			catch(ex){};
		}
		
		if(!oXmlDom)
		{
			if(document.implementation && document.implementation.createDocument)
			{
				oXmlDom=document.implementation.createDocument("","",null);
			}
			else if(document.implementation && document.implementation.createHTMLDocument)
			{
				oXmlDom=document.implementation.createHTMLDocument("","",null);
			}
		}

		try
		{
			return oXmlDom;
		}
		finally
		{
			oXmlDom=null;
		}
	},
	getXMLData:function()
	{
	
	}
}