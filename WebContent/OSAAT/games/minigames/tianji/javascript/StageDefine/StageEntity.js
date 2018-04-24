function StageEntity(stageName)
{
	//---------- Attributes ----------
	this.stage=new Stage(stageName);
	
	var This=this;
	//---------------------------------
	
	function Constructor()
	{

	};
	
	//---------- Methods ----------
	function addEnemyConllection(enemyId)
	{
		return function(count,timeValue)
		{
			for(var i=0;i<count;i++)
			{
				eval("var "+enemyId+"_"+i+"=enemyFactory.create('"+enemyId+"',oScreen.elementMoveArea.left+10+parseInt(Math.random()*1000)%(oScreen.width-global.entity."+enemyId+".width-10),"+(-100-i*100)+");");
				eval(enemyId+"_"+i+".appear=function(){"+enemyId+"_"+i+".originalAppear();"+enemyId+"_"+i+".move();enemyShot."+enemyId+"Shot("+enemyId+"_"+i+");};");
				eval("This.stage.addEnemy("+enemyId+"_"+i+",timeValue);");
			}
		};
	};
	
	this.addEnemy1=addEnemyConllection("enemy1");
	this.addEnemy4=addEnemyConllection("enemy4");
	this.addEnemy5=addEnemyConllection("enemy5");
	this.addEnemy10=addEnemyConllection("enemy10");
	this.addEnemy11=addEnemyConllection("enemy11");
	this.addEnemy21=addEnemyConllection("enemy21");
	this.addEnemy24=addEnemyConllection("enemy24");
	this.addEnemy25=addEnemyConllection("enemy25");
	this.addEnemy34=addEnemyConllection("enemy34");
	
	this.addEnemy2=function(x,y,stopX,xDirectionFrom,yDirectionTo,timeValue)
	{
		var enemy2=enemyFactory.create("enemy2",x,y);
		var gold1=new Gold();
		enemy2.addGold(gold1);
		enemy2.appear=function()
		{
			enemy2.originalAppear();
			enemy2.move(enemy2.moveType,stopX,xDirectionFrom,yDirectionTo);
			enemyShot.enemy2Shot(enemy2);
		};
		This.stage.addEnemy(enemy2,timeValue);
	};
	
	this.addEnemy3=function(x,y,stopY,librateValue,yDirectionTo,timeValue)
	{
		var enemy3=enemyFactory.create("enemy3",x,y);
		var gold1=new Gold();
		enemy3.addGold(gold1);
		enemy3.appear=function()
		{
			enemy3.originalAppear();
			enemy3.move(enemy3.moveType,stopY,librateValue,yDirectionTo);
			enemyShot.enemy3Shot(enemy3);
		};
		This.stage.addEnemy(enemy3,timeValue);
	};
	
	this.addEnemy6=function(x,y,timeValue)
	{
		var enemy6=enemyFactory.create("enemy6",x,y);
		var gold1=new Gold();
		enemy6.addGold(gold1);
		enemy6.appear=function()
		{
			enemy6.originalAppear();
			enemy6.move();
			enemyShot.enemy6Shot(enemy6);
		};
		This.stage.addEnemy(enemy6,timeValue);
	};
	
	this.addEnemy7=function(x,y,stopX,xDirectionFrom,yDirectionTo,timeValue)
	{
		var enemy7=enemyFactory.create("enemy7",x,y);
		var gold1=new Gold();
		enemy7.addGold(gold1);
		enemy7.appear=function()
		{
			enemy7.originalAppear();
			enemy7.move(enemy7.moveType,stopX,xDirectionFrom,yDirectionTo);
			enemyShot.enemy7Shot(enemy7);
		};
		This.stage.addEnemy(enemy7,timeValue);
	};
	
	this.addEnemy8=function(x,y,timeValue)
	{
		var enemy8=enemyFactory.create("enemy8",x,y);
		var gold1=new Gold();
		enemy8.addGold(gold1);
		enemy8.appear=function()
		{
			enemy8.originalAppear();
			enemy8.move();
			enemyShot.enemy8Shot(enemy8);
		};
		This.stage.addEnemy(enemy8,timeValue);
	};
	
	this.addEnemy9=function(x,y,stopY,librateValue,yDirectionTo,timeValue)
	{
		var enemy9=enemyFactory.create("enemy9",x,y);
		var gold1=new Gold();
		var bomb1=new Bomb();
		enemy9.addGold(gold1);
		enemy9.addBomb(bomb1);
		enemy9.appear=function()
		{
			enemy9.originalAppear();
			enemy9.move(enemy9.moveType,stopY,librateValue,yDirectionTo);
			enemyShot.enemy9Shot(enemy9);
		};
		This.stage.addEnemy(enemy9,timeValue);
	};
	
	this.addEnemy12=function(x,y,stopX,xDirectionFrom,timeValue)
	{
		var enemy12=enemyFactory.create("enemy12",x,y);
		var gold1=new Gold();
		enemy12.addGold(gold1);
		enemy12.appear=function()
		{
			enemy12.originalAppear();
			enemy12.move(enemy12.moveType,stopX,xDirectionFrom);
			enemyShot.enemy12Shot(enemy12);
		};
		This.stage.addEnemy(enemy12,timeValue);
	};
	
	this.addEnemy13=function(x,y,stopX,xDirectionFrom,timeValue)
	{
		var enemy13=enemyFactory.create("enemy13",x,y);
		var gold1=new Gold();
		enemy13.addGold(gold1);
		enemy13.appear=function()
		{
			enemy13.originalAppear();
			enemy13.move(enemy13.moveType,stopX,xDirectionFrom);
			enemyShot.enemy13Shot(enemy13);
		};
		This.stage.addEnemy(enemy13,timeValue);
	};
	
	this.addEnemy14=function(x,y,stopX,xDirectionFrom,timeValue)
	{
		var enemy14=enemyFactory.create("enemy14",x,y);
		var gold1=new Gold();
		enemy14.addGold(gold1);
		enemy14.appear=function()
		{
			enemy14.originalAppear();
			enemy14.move(enemy14.moveType,stopX,xDirectionFrom);
			enemyShot.enemy14Shot(enemy14);
		};
		This.stage.addEnemy(enemy14,timeValue);
	};
	
	this.addEnemy15=function(x,y,stopX,xDirectionFrom,timeValue)
	{
		var enemy15=enemyFactory.create("enemy15",x,y);
		var gold1=new Gold();
		enemy15.addGold(gold1);
		enemy15.appear=function()
		{
			enemy15.originalAppear();
			enemy15.move(enemy15.moveType,stopX,xDirectionFrom);
			enemyShot.enemy15Shot(enemy15);
		};
		This.stage.addEnemy(enemy15,timeValue);
	};
	
	this.addEnemy16=function(x,y,xDirectionFrom,timeValue)
	{
		var enemy16=enemyFactory.create("enemy16",x,y);
		enemy16.appear=function()
		{
			enemy16.originalAppear();
			enemy16.move(enemy16.moveType,xDirectionFrom);
		};
		This.stage.addEnemy(enemy16,timeValue);
	};
	
	this.addEnemy17=function(x,y,xDirectionFrom,timeValue)
	{
		var enemy17=enemyFactory.create("enemy17",x,y);
		enemy17.appear=function()
		{
			enemy17.originalAppear();
			enemy17.move(enemy17.moveType,xDirectionFrom);
		};
		This.stage.addEnemy(enemy17,timeValue);
	};
	
	this.addEnemy18=function(x,y,xDirectionTo,stopTime,stopY,timeValue)
	{
		var enemy18=enemyFactory.create("enemy18",x,y);
		enemy18.appear=function()
		{
			enemy18.originalAppear();
			enemy18.move(enemy18.moveType,xDirectionTo,stopTime,stopY);
			enemyShot.enemy18Shot(enemy18);
		};
		This.stage.addEnemy(enemy18,timeValue);
	};
	
	this.addEnemy19=function(x,y,stopX,xDirectionFrom,yDirectionTo,timeValue)
	{
		var enemy19=enemyFactory.create("enemy19",x,y);
		var gold1=new Gold();
		var power1=new Power();
		enemy19.addGold(gold1);
		enemy19.addPower(power1);
		enemy19.appear=function()
		{
			enemy19.originalAppear();
			enemy19.move(enemy19.moveType,stopX,xDirectionFrom,yDirectionTo);
			enemyShot.enemy19Shot(enemy19);
		};
		This.stage.addEnemy(enemy19,timeValue);
	};
	
	this.addEnemy20=function(x,y,timeValue)
	{
		var enemy20=enemyFactory.create("enemy20",x,y);
		var gold1=new Gold();
		enemy20.addGold(gold1);
		enemy20.appear=function()
		{
			enemy20.originalAppear();
			enemy20.move();
			enemyShot.enemy20Shot(enemy20);
		};
		This.stage.addEnemy(enemy20,timeValue);
	};
	
	this.addEnemy22=function(x,y,stopX,xDirectionFrom,yDirectionTo,timeValue)
	{
		var enemy22=enemyFactory.create("enemy22",x,y);
		var gold1=new Gold();
		var bomb1=new Bomb();
		enemy22.addBomb(bomb1);
		enemy22.addGold(gold1);
		enemy22.appear=function()
		{
			enemy22.originalAppear();
			enemy22.move(enemy22.moveType,stopX,xDirectionFrom,yDirectionTo);
			enemyShot.enemy22Shot(enemy22);
		};
		This.stage.addEnemy(enemy22,timeValue);
	};
	
	this.addEnemy23=function(x,y,stopY,librateValue,yDirectionTo,timeValue)
	{
		var enemy23=enemyFactory.create("enemy23",x,y);
		var gold1=new Gold();
		enemy23.addGold(gold1);
		enemy23.appear=function()
		{
			enemy23.originalAppear();
			enemy23.move(enemy23.moveType,stopY,librateValue,yDirectionTo);
			enemyShot.enemy23Shot(enemy23);
		};
		This.stage.addEnemy(enemy23,timeValue);
	};
	
	this.addEnemy26=function(x,y,stopY,librateValue,yDirectionTo,timeValue)
	{
		var enemy26=enemyFactory.create("enemy26",x,y);
		var gold1=new Gold();
		enemy26.addGold(gold1);
		enemy26.appear=function()
		{
			enemy26.originalAppear();
			enemy26.move(enemy26.moveType,stopY,librateValue,yDirectionTo);
			enemyShot.enemy26Shot(enemy26);
		};
		This.stage.addEnemy(enemy26,timeValue);
	};
	
	this.addEnemy27=function(x,y,timeValue)
	{
		var enemy27=enemyFactory.create("enemy27",x,y);
		var gold1=new Gold();
		enemy27.addGold(gold1);
		enemy27.appear=function()
		{
			enemy27.originalAppear();
			enemy27.move();
			enemyShot.enemy27Shot(enemy27);
		};
		This.stage.addEnemy(enemy27,timeValue);
	};
	
	this.addEnemy28=function(x,y,xDirectionTo,stopTime,stopY,timeValue)
	{
		var enemy28=enemyFactory.create("enemy28",x,y);
		enemy28.appear=function()
		{
			enemy28.originalAppear();
			enemy28.move(enemy28.moveType,xDirectionTo,stopTime,stopY);
			enemyShot.enemy28Shot(enemy28);
		};
		This.stage.addEnemy(enemy28,timeValue);
	};
	
	this.addEnemy29=function(x,y,stopX,xDirectionFrom,yDirectionTo,timeValue)
	{
		var enemy29=enemyFactory.create("enemy29",x,y);
		var gold1=new Gold();
		enemy29.addGold(gold1);
		enemy29.appear=function()
		{
			enemy29.originalAppear();
			enemy29.move(enemy29.moveType,stopX,xDirectionFrom,yDirectionTo);
			enemyShot.enemy29Shot(enemy29);
		};
		This.stage.addEnemy(enemy29,timeValue);
	};
	
	this.addEnemy30=function(x,y,stopX,xDirectionFrom,yDirectionTo,timeValue)
	{
		var enemy30=enemyFactory.create("enemy30",x,y);
		var gold1=new Gold();
		enemy30.addGold(gold1);
		enemy30.appear=function()
		{
			enemy30.originalAppear();
			enemy30.move(enemy30.moveType,stopX,xDirectionFrom,yDirectionTo);
			enemyShot.enemy30Shot(enemy30);
		};
		This.stage.addEnemy(enemy30,timeValue);
	};
	
	this.addEnemy31=function(x,y,stopY,librateValue,yDirectionTo,timeValue)
	{
		var enemy31=enemyFactory.create("enemy31",x,y);
		var gold1=new Gold();
		enemy31.addGold(gold1);
		enemy31.appear=function()
		{
			enemy31.originalAppear();
			enemy31.move(enemy31.moveType,stopY,librateValue,yDirectionTo);
			enemyShot.enemy31Shot(enemy31);
		};
		This.stage.addEnemy(enemy31,timeValue);
	};
	
	this.addEnemy32=function(x,y,stopY,librateValue,yDirectionTo,timeValue)
	{
		var enemy32=enemyFactory.create("enemy32",x,y);
		var gold1=new Gold();
		var power1=new Power();
		enemy32.addGold(gold1);
		enemy32.addPower(power1);
		enemy32.appear=function()
		{
			enemy32.originalAppear();
			enemy32.move(enemy32.moveType,stopY,librateValue,yDirectionTo);
			enemyShot.enemy32Shot(enemy32);
		};
		This.stage.addEnemy(enemy32,timeValue);
	};
	
	this.addEnemy33=function(x,y,stopY,librateValue,yDirectionTo,timeValue)
	{
		var enemy33=enemyFactory.create("enemy33",x,y);
		var gold1=new Gold();
		enemy33.addGold(gold1);
		enemy33.appear=function()
		{
			enemy33.originalAppear();
			enemy33.move(enemy33.moveType,stopY,librateValue,yDirectionTo);
			enemyShot.enemy33Shot(enemy33);
		};
		This.stage.addEnemy(enemy33,timeValue);
	};
	
	this.addEnemy35=function(x,y,stopX,xDirectionFrom,yDirectionTo,timeValue)
	{
		var enemy35=enemyFactory.create("enemy35",x,y);
		var gold1=new Gold();
		enemy35.addGold(gold1);
		enemy35.appear=function()
		{
			enemy35.originalAppear();
			enemy35.move(enemy35.moveType,stopX,xDirectionFrom,yDirectionTo);
			enemyShot.enemy35Shot(enemy35);
		};
		This.stage.addEnemy(enemy35,timeValue);
	};
	
	
	
	this.addStageEnemy=function(enemy,timeValue)
	{
		This.stage.addEnemy(enemy,timeValue);
	}
	
	this.start=function()
	{
		This.stage.scrollBackground();
		This.stage.play();
	};
	
	this.clear=function()
	{
		This.stage.clear();
	};
	//-------------------------
	
	Constructor();
};