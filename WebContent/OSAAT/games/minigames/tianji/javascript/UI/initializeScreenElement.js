function initializeScreenElement()
{
	$("plane1BombState").style.zIndex=6000;
	$("plane1BombState").style.left=oScreen.elementMoveArea.left+10+"px";
	$("plane1BombState").style.top=oScreen.elementMoveArea.bottom-40+"px";
	
	/*$("plane2BombState").className="gameText";
	$("plane2BombState").style.zIndex=6000;
	$("plane2BombState").style.left=oScreen.elementMoveArea.right-100+"px";
	$("plane2BombState").style.top=oScreen.elementMoveArea.bottom-40+"px";*/
	
	
	$("plane1Count").style.zIndex=6000;
	$("plane1Count").style.left=oScreen.elementMoveArea.left+10+"px";
	$("plane1Count").style.top=oScreen.elementMoveArea.top+40+"px";
	
	/*$("plane2Count").className="gameText";
	$("plane2Count").style.zIndex=6000;
	$("plane2Count").style.left=oScreen.elementMoveArea.right-100+"px";
	$("plane2Count").style.top=oScreen.elementMoveArea.top+40+"px";*/
	


	$("plane1Score").className="gameText";
	$("plane1Score").style.zIndex=6000;
	$("plane1Score").style.width="100px";
	$("plane1Score").style.textAlign="right";
	$("plane1Score").style.left=oScreen.elementMoveArea.left+60+"px";
	$("plane1Score").style.top=oScreen.elementMoveArea.top+10+"px";
	var p1=document.createElement("div");
	p1.className="gameText";
	p1.id="player1";
	p1.style.color="#ffff00";
	p1.innerHTML="1P:";
	p1.style.zIndex=6000;
	p1.style.left=oScreen.elementMoveArea.left+10+"px";
	p1.style.top=oScreen.elementMoveArea.top+10+"px";
	document.body.appendChild(p1);
	
	
	/*$("plane2Score").className="gameText";
	$("plane2Score").style.zIndex=6000;
	$("plane2Score").style.left=oScreen.elementMoveArea.right-100+"px";
	$("plane2Score").style.top=oScreen.elementMoveArea.top+10+"px";
	var p2=document.createElement("div");
	p2.className="gameText";
	p2.style.color="#ffff00";
	p2.innerHTML="2P:";
	p2.style.zIndex=6000;
	p2.style.left=oScreen.elementMoveArea.right-110+"px";
	p2.style.top=oScreen.elementMoveArea.top+10+"px";
	document.body.appendChild(p2);*/
	
};