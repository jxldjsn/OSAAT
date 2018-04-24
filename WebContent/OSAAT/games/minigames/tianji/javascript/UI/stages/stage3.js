function stage3Define()
{
	var stage3=new StageEntity("stage3");
	
	stage3.addEnemy26(oScreen.elementMoveArea.left+50,
												oScreen.elementMoveArea.top-150,
												oScreen.elementMoveArea.top+300,
												20+(4-global.stagesCount)*20,
												"top",
												10);
												
	stage3.addEnemy26(oScreen.elementMoveArea.left+220,
												oScreen.elementMoveArea.top-150,
												oScreen.elementMoveArea.top+100,
												20+(4-global.stagesCount)*20,
												"top",
												50);
												
	stage3.addEnemy26(oScreen.elementMoveArea.left+390,
												oScreen.elementMoveArea.top-150,
												oScreen.elementMoveArea.top+250,
												20+(4-global.stagesCount)*20,
												"top",
												150);
												
	
	stage3.addEnemy25(10-global.stagesCount*2,300);
	
	stage3.addEnemy28(oScreen.elementMoveArea.left+100,
										oScreen.elementMoveArea.top-100,
										"right",
										60,
										oScreen.elementMoveArea.top+100,
										500);
										
stage3.addEnemy28(oScreen.elementMoveArea.left+290,
										oScreen.elementMoveArea.top-100,
										"left",
										70,
										oScreen.elementMoveArea.top+220,
										550);
										
stage3.addEnemy28(oScreen.elementMoveArea.left+350,
										oScreen.elementMoveArea.top-100,
										"left",
										80,
										oScreen.elementMoveArea.top+40,
										600);
										
stage3.addEnemy28(oScreen.elementMoveArea.left+50,
										oScreen.elementMoveArea.top-100,
										"right",
										90,
										oScreen.elementMoveArea.top+250,
										680);
										

		var enemy29_1=enemyFactory.create("enemy29",oScreen.elementMoveArea.left-227,oScreen.elementMoveArea.top+100);
		var gold1=new Gold();
		var power1=new Power();
		enemy29_1.addGold(gold1);
		enemy29_1.addPower(power1);
		enemy29_1.appear=function()
		{
			enemy29_1.originalAppear();
			enemy29_1.move(enemy29_1.moveType,oScreen.elementMoveArea.left+340,"left","bottom");
			enemyShot.enemy29Shot(enemy29_1);
		};
		stage3.addStageEnemy(enemy29_1,850);

											
		var enemy29_2=enemyFactory.create("enemy29",oScreen.elementMoveArea.right+10,oScreen.elementMoveArea.top+180);
		var gold1=new Gold();
		var bomb1=new Bomb();
		enemy29_2.addGold(gold1);
		enemy29_2.addBomb(bomb1);
		enemy29_2.appear=function()
		{
			enemy29_2.originalAppear();
			enemy29_2.move(enemy29_2.moveType,oScreen.elementMoveArea.left+80,"right","bottom");
			enemyShot.enemy29Shot(enemy29_2);
		};
		stage3.addStageEnemy(enemy29_2,1050);									
		
											
stage3.addEnemy25(15-global.stagesCount*2,1250);

stage3.addEnemy27(oScreen.elementMoveArea.left+70,
										oScreen.elementMoveArea.top-120,
										1350);
										
stage3.addEnemy27(oScreen.elementMoveArea.left+230,
										oScreen.elementMoveArea.top-120,
										1350);
										
stage3.addEnemy27(oScreen.elementMoveArea.left+160,
										oScreen.elementMoveArea.top-120,
										1500);
										
stage3.addEnemy27(oScreen.elementMoveArea.left+110,
										oScreen.elementMoveArea.top-120,
										1700);
										
stage3.addEnemy27(oScreen.elementMoveArea.left+370,
										oScreen.elementMoveArea.top-120,
										1800);
										
stage3.addEnemy27(oScreen.elementMoveArea.left+290,
										oScreen.elementMoveArea.top-120,
										1900);
										
stage3.addEnemy25(15-global.stagesCount*2,2050);


	stage3.addEnemy31(oScreen.elementMoveArea.left+40,
												oScreen.elementMoveArea.top-150,
												oScreen.elementMoveArea.top+250,
												30,
												"bottom",
												2080);
												
	stage3.addEnemy31(oScreen.elementMoveArea.left+140,
												oScreen.elementMoveArea.top-150,
												oScreen.elementMoveArea.top+100,
												30,
												"bottom",
												2150);
												
stage3.addEnemy31(oScreen.elementMoveArea.left+380,
												oScreen.elementMoveArea.top-150,
												oScreen.elementMoveArea.top+50,
												30,
												"bottom",
												2350);
												
stage3.addEnemy30(oScreen.elementMoveArea.left-227,
											oScreen.elementMoveArea.top+100,
											oScreen.elementMoveArea.left+100,
											"left",
											"top",
											2450);
											
stage3.addEnemy30(oScreen.elementMoveArea.right+100,
											oScreen.elementMoveArea.top+220,
											oScreen.elementMoveArea.left+380,
											"right",
											"top",
											2600);
											
stage3.addEnemy30(oScreen.elementMoveArea.left-227,
											oScreen.elementMoveArea.top+100,
											oScreen.elementMoveArea.left+300,
											"left",
											"top",
											2800);
											
											
stage3.addEnemy30(oScreen.elementMoveArea.right+100,
											oScreen.elementMoveArea.top+300,
											oScreen.elementMoveArea.left+50,
											"right",
											"top",
											3000);


var boss3=enemyFactory.create("boss3",
																oScreen.elementMoveArea.left+10+parseInt(Math.random()*1000)%(oScreen.width-334),
																oScreen.elementMoveArea.top-300);
	boss3.appear=function()
	{
		boss3.originalAppear();
		boss3.move(boss3.moveType,100);
		enemyShot.boss3Shot(boss3);
	};
	
	var boss3Left=enemyFactory.create("boss3Left",0,0);
	boss3Left.appear=function()
	{
		boss3Left.originalAppear();
		enemyShot.boss3LeftShot(boss3Left);
	};
	var boss3Right=enemyFactory.create("boss3Right",0,0);
	boss3Right.appear=function()
	{
		boss3Right.originalAppear();
		enemyShot.boss3RightShot(boss3Right);
	};
	
	boss3.addSubEnemy(boss3Left,boss3.getPositionX()-89,boss3.getPositionY()-15);
	boss3.addSubEnemy(boss3Right,boss3.getPositionX()+88,boss3.getPositionY()-13);
	stage3.addStageEnemy(boss3Left,0);
	stage3.addStageEnemy(boss3Right,0);
	
	stage3.addStageEnemy(boss3,3400);
										
	
	global.currentStage=stage3;

};