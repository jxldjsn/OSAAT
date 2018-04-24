var enemyFactory=new EnemyFactory();
function EnemyFactory()
{
	//---------- Attributes ----------
	var This=this;
	//---------------------------------
	
	function Constructor()
	{
		
	};
	
	//---------- Methods ----------
	this.create=function(enemyType,x,y)
	{
		var enemyObj=new Enemy();
		switch(enemyType)
		{
			case "boss1":
				enemyObj.zIndex=1500;
				enemyObj.beOverlapAreaLeftOffset=45;
				enemyObj.beOverlapAreaRightOffset=45;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=50;
				enemyObj.setFeature(global.entity.boss1);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="bossMoveType1";
				enemyObj.speed=3;
				enemyObj.bulletSpeed=13-global.stagesCount+2*(global.level-1);
				enemyObj.HP=400+(global.level-1)*50+(4-global.stagesCount)*25;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=10000+(global.level-1)*1000;
				break;
				
				
			case "boss2":
				enemyObj.zIndex=1490;
				enemyObj.beOverlapAreaLeftOffset=10;
				enemyObj.beOverlapAreaRightOffset=10;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=150;
				enemyObj.setFeature(global.entity.boss2);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="bossMoveType1";
				enemyObj.speed=2;
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=400+(global.level-1)*50+(4-global.stagesCount)*25;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=10000+(global.level-1)*1000;
				break;
				
			case "boss2Left":
				enemyObj.zIndex=1495;
				enemyObj.beOverlapAreaLeftOffset=10;
				enemyObj.beOverlapAreaRightOffset=20;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=50;
				enemyObj.setFeature(global.entity.boss2Left);
				enemyObj.setPosition(x,y);
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=100+(global.level-1)*50+(4-global.stagesCount)*25;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=3000+(global.level-1)*1000;
				break;
				
			case "boss2Right":
				enemyObj.zIndex=1495;
				enemyObj.beOverlapAreaLeftOffset=20;
				enemyObj.beOverlapAreaRightOffset=10;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=50;
				enemyObj.setFeature(global.entity.boss2Right);
				enemyObj.setPosition(x,y);
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=100+(global.level-1)*50+(4-global.stagesCount)*25;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=3000+(global.level-1)*1000;
				break;
				
				
				case "boss3":
				enemyObj.zIndex=1480;
				enemyObj.beOverlapAreaLeftOffset=30;
				enemyObj.beOverlapAreaRightOffset=30;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=30;
				enemyObj.setFeature(global.entity.boss3);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="bossMoveType1";
				enemyObj.speed=7;
				enemyObj.bulletSpeed=15-global.stagesCount+2*(global.level-1);
				enemyObj.HP=400+(global.level-1)*50+(4-global.stagesCount)*25;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=10000+(global.level-1)*1000;
				break;
				
			case "boss3Left":
				enemyObj.zIndex=1485;
				enemyObj.beOverlapAreaLeftOffset=20;
				enemyObj.beOverlapAreaRightOffset=10;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=8;
				enemyObj.setFeature(global.entity.boss3Left);
				enemyObj.setPosition(x,y);
				enemyObj.bulletSpeed=17-global.stagesCount+2*(global.level-1);
				enemyObj.HP=100+(global.level-1)*50+(4-global.stagesCount)*25;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=3000+(global.level-1)*1000;
				break;
				
			case "boss3Right":
				enemyObj.zIndex=1485;
				enemyObj.beOverlapAreaLeftOffset=20;
				enemyObj.beOverlapAreaRightOffset=10;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=8;
				enemyObj.setFeature(global.entity.boss3Right);
				enemyObj.setPosition(x,y);
				enemyObj.bulletSpeed=17-global.stagesCount+2*(global.level-1);
				enemyObj.HP=100+(global.level-1)*50+(4-global.stagesCount)*25;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=3000+(global.level-1)*1000;
				break;
				
			case "boss4":
				enemyObj.zIndex=1475;
				enemyObj.beOverlapAreaLeftOffset=30;
				enemyObj.beOverlapAreaRightOffset=30;
				enemyObj.beOverlapAreaTopOffset=100;
				enemyObj.beOverlapAreaBottomOffset=80;
				enemyObj.setFeature(global.entity.boss4);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="bossMoveType1";
				enemyObj.speed=3;
				enemyObj.bulletSpeed=12-global.stagesCount+2*(global.level-1);
				enemyObj.HP=400+(global.level-1)*50+(4-global.stagesCount)*25;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=10000+(global.level-1)*1000;
				break;
				
				
				
			case "enemy1":
				enemyObj.zIndex=2590;
				enemyObj.setFeature(global.entity.enemy1);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType3";
				enemyObj.speed=4;
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=1;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=1;
				enemyObj.shotErrorValue=5;
				enemyObj.scoreValue=400+(global.level-1)*100;
				break;
				
			case "enemy2":
				enemyObj.zIndex=2585;
				enemyObj.setFeature(global.entity.enemy2);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType1";
				enemyObj.speed=2;
				enemyObj.bulletSpeed=9-global.stagesCount+2*(global.level-1);
				enemyObj.HP=25+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=5;
				enemyObj.beOverlapAreaRightOffset=5;
				enemyObj.beOverlapAreaTopOffset=10;
				enemyObj.beOverlapAreaBottomOffset=72;
				enemyObj.shotErrorValue=3;
				enemyObj.scoreValue=1200+(global.level-1)*100;
				break;
			
			case "enemy3":
				enemyObj.zIndex=2580;
				enemyObj.setFeature(global.entity.enemy3);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType2";
				enemyObj.speed=1;
				enemyObj.bulletSpeed=8-global.stagesCount+2*(global.level-1);
				enemyObj.HP=30+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=30;
				enemyObj.beOverlapAreaRightOffset=30;
				enemyObj.beOverlapAreaTopOffset=10;
				enemyObj.beOverlapAreaBottomOffset=30;
				enemyObj.shotErrorValue=3;
				enemyObj.scoreValue=1200+(global.level-1)*100;
				break;
			
			case "enemy4":
				enemyObj.zIndex=2595;
				enemyObj.setFeature(global.entity.enemy4);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType3";
				enemyObj.speed=5;
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=2;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=1;
				enemyObj.shotErrorValue=4;
				enemyObj.scoreValue=500+(global.level-1)*100;
				break;
				
			case "enemy5":
				enemyObj.zIndex=2575;
				enemyObj.setFeature(global.entity.enemy5);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType4";
				enemyObj.speed=10;
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=1;
				enemyObj.beOverlapAreaLeftOffset=5;
				enemyObj.beOverlapAreaRightOffset=5;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=10;
				enemyObj.shotErrorValue=6;
				enemyObj.scoreValue=300+(global.level-1)*100;
				break;
				
			case "enemy6":
				enemyObj.zIndex=1000;
				enemyObj.setFeature(global.entity.enemy6);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType3";
				enemyObj.speed=1;
				enemyObj.bulletSpeed=13-global.stagesCount+2*(global.level-1);
				enemyObj.HP=15+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=10;
				enemyObj.shotErrorValue=0;
				enemyObj.canBeOverlapedToAttackPlane=false;
				enemyObj.scoreValue=600+(global.level-1)*100;
				break;
				
			case "enemy7":
				enemyObj.zIndex=2570;
				enemyObj.setFeature(global.entity.enemy7);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType1";
				enemyObj.speed=2;
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=35+global.level*3+(4-global.stagesCount)*2;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=40;
				enemyObj.shotErrorValue=3;
				enemyObj.scoreValue=600+(global.level-1)*100;
				break;
				
			case "enemy8":
				enemyObj.zIndex=2565;
				enemyObj.setFeature(global.entity.enemy8);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType3";
				enemyObj.speed=2;
				enemyObj.bulletSpeed=12-global.stagesCount+2*(global.level-1);
				enemyObj.HP=5+global.level*3+(4-global.stagesCount)*2;
				enemyObj.beOverlapAreaLeftOffset=5;
				enemyObj.beOverlapAreaRightOffset=5;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=40;
				enemyObj.shotErrorValue=0;
				enemyObj.scoreValue=700+(global.level-1)*100;
				break;
				
			case "enemy9":
				enemyObj.zIndex=2560;
				enemyObj.setFeature(global.entity.enemy9);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType2";
				enemyObj.speed=1;
				enemyObj.displayTime=1000;
				enemyObj.bulletSpeed=13-global.stagesCount+2*(global.level-1);
				enemyObj.HP=180+global.level*50;
				enemyObj.beOverlapAreaLeftOffset=20;
				enemyObj.beOverlapAreaRightOffset=20;
				enemyObj.beOverlapAreaTopOffset=10;
				enemyObj.beOverlapAreaBottomOffset=55;
				enemyObj.shotErrorValue=2;
				enemyObj.scoreValue=5000+(global.level-1)*300;
				break;
				
			case "enemy10":
				enemyObj.zIndex=2555;
				enemyObj.setFeature(global.entity.enemy10);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType3";
				enemyObj.speed=6;
				enemyObj.bulletSpeed=12-global.stagesCount+2*(global.level-1);
				enemyObj.HP=3;
				enemyObj.beOverlapAreaLeftOffset=2;
				enemyObj.beOverlapAreaRightOffset=2;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=2;
				enemyObj.shotErrorValue=3;
				enemyObj.scoreValue=600+(global.level-1)*100;
				break;
				
			case "enemy11":
				enemyObj.zIndex=2550;
				enemyObj.setFeature(global.entity.enemy11);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType3";
				enemyObj.speed=2;
				enemyObj.bulletSpeed=10-global.stagesCount+2*(global.level-1);
				enemyObj.HP=2;
				enemyObj.beOverlapAreaLeftOffset=2;
				enemyObj.beOverlapAreaRightOffset=2;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=2;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=600+(global.level-1)*100;
				break;
				
			case "enemy12":
				enemyObj.zIndex=1005;
				enemyObj.setFeature(global.entity.enemy12);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType5";
				enemyObj.speed=1;
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=5+(global.level-1)*3+(4-global.stagesCount)*2;
				enemyObj.beOverlapAreaLeftOffset=5;
				enemyObj.beOverlapAreaRightOffset=5;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=5;
				enemyObj.shotErrorValue=0;
				enemyObj.canBeOverlapedToAttackPlane=false;
				enemyObj.scoreValue=500+(global.level-1)*100;
				break;
				
			case "enemy13":
				enemyObj.zIndex=1010;
				enemyObj.setFeature(global.entity.enemy13);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType5";
				enemyObj.speed=1;
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=5+(global.level-1)*3+(4-global.stagesCount)*2;
				enemyObj.beOverlapAreaLeftOffset=5;
				enemyObj.beOverlapAreaRightOffset=5;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=5;
				enemyObj.shotErrorValue=0;
				enemyObj.canBeOverlapedToAttackPlane=false;
				enemyObj.scoreValue=500+(global.level-1)*100;
				break;
				
			case "enemy14":
				enemyObj.zIndex=1015;
				enemyObj.setFeature(global.entity.enemy14);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType5";
				enemyObj.speed=3;
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=10;
				enemyObj.beOverlapAreaLeftOffset=5;
				enemyObj.beOverlapAreaRightOffset=10;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=5;
				enemyObj.shotErrorValue=0;
				enemyObj.canBeOverlapedToAttackPlane=false;
				enemyObj.scoreValue=500+(global.level-1)*100;
				break;
				
			case "enemy15":
				enemyObj.zIndex=1020;
				enemyObj.setFeature(global.entity.enemy15);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType5";
				enemyObj.speed=3;
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=10;
				enemyObj.beOverlapAreaLeftOffset=10;
				enemyObj.beOverlapAreaRightOffset=5;
				enemyObj.beOverlapAreaTopOffset=5;
				enemyObj.beOverlapAreaBottomOffset=5;
				enemyObj.shotErrorValue=0;
				enemyObj.canBeOverlapedToAttackPlane=false;
				enemyObj.scoreValue=500+(global.level-1)*100;
				break;
				
			case "enemy16":
				enemyObj.zIndex=2545;
				enemyObj.setFeature(global.entity.enemy16);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType6";
				enemyObj.speed=6;
				enemyObj.HP=1;
				enemyObj.scoreValue=300+(global.level-1)*100;
				break;
				
			case "enemy17":
				enemyObj.zIndex=2540;
				enemyObj.setFeature(global.entity.enemy17);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType6";
				enemyObj.speed=6;
				enemyObj.HP=1;
				enemyObj.scoreValue=300+(global.level-1)*100;
				break;
				
			case "enemy18":
				enemyObj.zIndex=2535;
				enemyObj.setFeature(global.entity.enemy18);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType7";
				enemyObj.speed=5;
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=15;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=1;
				enemyObj.shotErrorValue=2;
				enemyObj.scoreValue=500+(global.level-1)*100;
				break;
				
			case "enemy19":
				enemyObj.zIndex=2530;
				enemyObj.setFeature(global.entity.enemy19);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType1";
				enemyObj.speed=3;
				enemyObj.bulletSpeed=15-(global.stagesCount*2)+2*(global.level-1);
				enemyObj.HP=45+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=30;
				enemyObj.shotErrorValue=2;
				enemyObj.scoreValue=800+(global.level-1)*100;
				break;
	
				
			case "enemy20":
				enemyObj.zIndex=1025;
				enemyObj.setFeature(global.entity.enemy20);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType3";
				enemyObj.speed=1;
				enemyObj.bulletSpeed=13-(global.stagesCount*2)+2*(global.level-1);
				enemyObj.HP=10+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=5;
				enemyObj.shotErrorValue=2;
				enemyObj.canBeOverlapedToAttackPlane=false;
				enemyObj.scoreValue=500+(global.level-1)*100;
				break;
				
			case "enemy21":
				enemyObj.zIndex=2520;
				enemyObj.setFeature(global.entity.enemy21);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType3";
				enemyObj.speed=3;
				enemyObj.bulletSpeed=12-(global.stagesCount*2)+2*(global.level-1);
				enemyObj.HP=1;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=3;
				enemyObj.shotErrorValue=2;
				enemyObj.scoreValue=500+(global.level-1)*100;
				break;
				
			case "enemy22":
				enemyObj.zIndex=2515;
				enemyObj.setFeature(global.entity.enemy22);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType1";
				enemyObj.speed=4;
				enemyObj.bulletSpeed=12-(global.stagesCount*2)+2*(global.level-1);
				enemyObj.HP=50+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=30;
				enemyObj.shotErrorValue=2;
				enemyObj.scoreValue=700+(global.level-1)*100;
				break;
				
		case "enemy23":
				enemyObj.zIndex=2510;
				enemyObj.setFeature(global.entity.enemy23);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType2";
				enemyObj.speed=2;
				enemyObj.bulletSpeed=14-global.stagesCount+2*(global.level-1);
				enemyObj.HP=25+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=20;
				enemyObj.beOverlapAreaBottomOffset=10;
				enemyObj.shotErrorValue=2;
				enemyObj.scoreValue=1000+(global.level-1)*100;
				break;
				
		case "enemy24":
				enemyObj.zIndex=2505;
				enemyObj.setFeature(global.entity.enemy24);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType4";
				enemyObj.speed=7;
				enemyObj.bulletSpeed=10-global.stagesCount+2*(global.level-1);
				enemyObj.HP=1;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=5;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=300+(global.level-1)*100;
				break;
				
		case "enemy25":
				enemyObj.zIndex=2500;
				enemyObj.setFeature(global.entity.enemy25);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType3";
				enemyObj.speed=7;
				enemyObj.bulletSpeed=10-global.stagesCount+2*(global.level-1);
				enemyObj.HP=1;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=5;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=400+(global.level-1)*100;
				break;
				
		case "enemy26":
				enemyObj.zIndex=2495;
				enemyObj.setFeature(global.entity.enemy26);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType2";
				enemyObj.speed=5;
				enemyObj.bulletSpeed=10-global.stagesCount+2*(global.level-1);
				enemyObj.HP=10+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=5;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=350+(global.level-1)*100;
				break;
				
		case "enemy27":
				enemyObj.zIndex=2490;
				enemyObj.setFeature(global.entity.enemy27);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType3";
				enemyObj.speed=2;
				enemyObj.bulletSpeed=12-global.stagesCount+2*(global.level-1);
				enemyObj.HP=30+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=15;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=550+(global.level-1)*100;
				break;
				
		case "enemy28":
				enemyObj.zIndex=2485;
				enemyObj.setFeature(global.entity.enemy28);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType7";
				enemyObj.speed=3;
				enemyObj.bulletSpeed=13-global.stagesCount+2*(global.level-1);
				enemyObj.HP=25+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=1;
				enemyObj.beOverlapAreaRightOffset=1;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=20;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=800+(global.level-1)*100;
				break;
				
		case "enemy29":
				enemyObj.zIndex=2480;
				enemyObj.setFeature(global.entity.enemy29);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType1";
				enemyObj.speed=2;
				enemyObj.bulletSpeed=14-global.stagesCount+2*(global.level-1);
				enemyObj.HP=50+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=10;
				enemyObj.beOverlapAreaRightOffset=10;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=30;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=1000+(global.level-1)*100;
				break;
				
		case "enemy30":
				enemyObj.zIndex=2475;
				enemyObj.setFeature(global.entity.enemy30);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType1";
				enemyObj.speed=4;
				enemyObj.bulletSpeed=15-global.stagesCount+2*(global.level-1);
				enemyObj.HP=45+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=20;
				enemyObj.beOverlapAreaRightOffset=20;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=20;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=800+(global.level-1)*100;
				break;
				
		case "enemy31":
				enemyObj.zIndex=2470;
				enemyObj.setFeature(global.entity.enemy31);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType2";
				enemyObj.speed=5;
				enemyObj.bulletSpeed=14-global.stagesCount+2*(global.level-1);
				enemyObj.HP=25+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=10;
				enemyObj.beOverlapAreaRightOffset=10;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=10;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=500+(global.level-1)*100;
				break;
				
		case "enemy32":
				enemyObj.zIndex=2465;
				enemyObj.setFeature(global.entity.enemy32);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType2";
				enemyObj.speed=2;
				enemyObj.bulletSpeed=10-global.stagesCount+2*(global.level-1);
				enemyObj.HP=80+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=50;
				enemyObj.beOverlapAreaRightOffset=50;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=130;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=1000+(global.level-1)*100;
				break;
				
		case "enemy33":
				enemyObj.zIndex=2460;
				enemyObj.setFeature(global.entity.enemy33);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType2";
				enemyObj.speed=3;
				enemyObj.bulletSpeed=11-global.stagesCount+2*(global.level-1);
				enemyObj.HP=40+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=20;
				enemyObj.beOverlapAreaRightOffset=20;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=50;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=850+(global.level-1)*100;
				break;
				
		case "enemy34":
				enemyObj.zIndex=2455;
				enemyObj.setFeature(global.entity.enemy34);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType3";
				enemyObj.speed=6+global.level;
				enemyObj.bulletSpeed=10-global.stagesCount+2*(global.level-1);
				enemyObj.HP=1;
				enemyObj.beOverlapAreaLeftOffset=10;
				enemyObj.beOverlapAreaRightOffset=10;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=5;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=550+(global.level-1)*100;
				break;
				
		case "enemy35":
				enemyObj.zIndex=2450;
				enemyObj.setFeature(global.entity.enemy35);
				enemyObj.setPosition(x,y);
				enemyObj.moveType="entityMoveType1";
				enemyObj.speed=2;
				enemyObj.bulletSpeed=15-global.stagesCount+2*(global.level-1);
				enemyObj.HP=40+global.level*5+(4-global.stagesCount)*5;
				enemyObj.beOverlapAreaLeftOffset=10;
				enemyObj.beOverlapAreaRightOffset=10;
				enemyObj.beOverlapAreaTopOffset=2;
				enemyObj.beOverlapAreaBottomOffset=40;
				enemyObj.shotErrorValue=1;
				enemyObj.scoreValue=650+(global.level-1)*100;
				break;
				
				
		}
		
		try
		{
			return enemyObj;
		}
		finally
		{
			enemyObj=null;
		}
	};
	//-------------------------
	
	Constructor();
};