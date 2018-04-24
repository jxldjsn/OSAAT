function stage1Define()
{
	var stage1=new StageEntity("stage1");
	
	stage1.addEnemy13(oScreen.elementMoveArea.right-180,
													oScreen.elementMoveArea.top+80,
													oScreen.elementMoveArea.right-180,
													"right",
													1);
	stage1.addEnemy13(oScreen.elementMoveArea.right-260,
													oScreen.elementMoveArea.top+80,
													oScreen.elementMoveArea.right-260,
													"right",
													1);
	stage1.addEnemy13(oScreen.elementMoveArea.right-400,
													oScreen.elementMoveArea.top+180,
													oScreen.elementMoveArea.left-100,
													"right",
													1);
	stage1.addEnemy13(oScreen.elementMoveArea.right-320,
													oScreen.elementMoveArea.top+220,
													oScreen.elementMoveArea.left+100,
													"right",
													1);

	stage1.addEnemy12(oScreen.elementMoveArea.left-50,
													oScreen.elementMoveArea.top-80,
													oScreen.elementMoveArea.left+80,
													"left",
													50);
													
	stage1.addEnemy12(oScreen.elementMoveArea.left-50,
													oScreen.elementMoveArea.top-180,
													oScreen.elementMoveArea.left+130,
													"left",
													60);

	stage1.addEnemy13(oScreen.elementMoveArea.right-50,
													oScreen.elementMoveArea.top-180,
													oScreen.elementMoveArea.left+300,
													"right",
													180);
													
	stage1.addEnemy12(oScreen.elementMoveArea.left+100,
													oScreen.elementMoveArea.top-80,
													oScreen.elementMoveArea.right-150,
													"left",
													435);
													
	stage1.addEnemy1(3+(4-global.stagesCount),300);
	stage1.addEnemy1(3+(4-global.stagesCount),1000);
	stage1.addEnemy1(3+(4-global.stagesCount),2200);
	
	var enemy6=enemyFactory.create("enemy6",oScreen.elementMoveArea.left+80,oScreen.elementMoveArea.top-150);
	enemy6.appear=function()
	{
		enemy6.originalAppear();
		enemy6.move();
		enemyShot.enemy6Shot(enemy6);
	};
	var power1=new Power();
	enemy6.addPower(power1);
	stage1.addStageEnemy(enemy6,490);
	
	var enemy2=enemyFactory.create("enemy2",oScreen.elementMoveArea.left-200,oScreen.elementMoveArea.top+50);
		var gold1=new Gold();
		var bomb1=new Bomb();
		enemy2.addGold(gold1);
		enemy2.addBomb(bomb1);
		enemy2.appear=function()
		{
			enemy2.originalAppear();
			enemy2.move(enemy2.moveType,oScreen.elementMoveArea.left+250,"left","top");
			enemyShot.enemy2Shot(enemy2);
		};
		stage1.addStageEnemy(enemy2,350);	
										
	stage1.addEnemy3(oScreen.elementMoveArea.left+100,
												oScreen.elementMoveArea.top-150,
												oScreen.elementMoveArea.top+250,
												80,
												"bottom",
												550);	
												
	stage1.addEnemy3(oScreen.elementMoveArea.left+300,
												oScreen.elementMoveArea.top-150,
												oScreen.elementMoveArea.top+300,
												60,
												"top",
												1500);
												
	stage1.addEnemy7(oScreen.elementMoveArea.left-227,
												oScreen.elementMoveArea.top+100,
												oScreen.elementMoveArea.left+200,
												"left",
												"bottom",
												900);
	stage1.addEnemy7(oScreen.elementMoveArea.left-127,
												oScreen.elementMoveArea.top+200,
												oScreen.elementMoveArea.left+73,
												"left",
												"bottom",
												900);
	stage1.addEnemy7(oScreen.elementMoveArea.right,
												oScreen.elementMoveArea.top+200,
												oScreen.elementMoveArea.right-200,
												"right",
												"bottom",
												1000);
												
	stage1.addEnemy8(oScreen.elementMoveArea.left+10+parseInt(Math.random()*1000)%(oScreen.width-global.entity.enemy8.width-10),
												-290,
												1380);
												
	stage1.addEnemy8(oScreen.elementMoveArea.left+10+parseInt(Math.random()*1000)%(oScreen.width-global.entity.enemy8.width-10),
												-100,
												1230);
												
	stage1.addEnemy8(oScreen.elementMoveArea.left+10+parseInt(Math.random()*1000)%(oScreen.width-global.entity.enemy8.width-10),
												-180,
												1530);
												
	stage1.addEnemy8(oScreen.elementMoveArea.left+10+parseInt(Math.random()*1000)%(oScreen.width-global.entity.enemy8.width-10),
												-190,
												1520);
												
	stage1.addEnemy8(oScreen.elementMoveArea.left+10+parseInt(Math.random()*1000)%(oScreen.width-global.entity.enemy8.width-10),
												-250,
												1550);
												
	stage1.addEnemy8(oScreen.elementMoveArea.left+10+parseInt(Math.random()*1000)%(oScreen.width-global.entity.enemy8.width-10),
												-290,
												1570);
												
	stage1.addEnemy2(oScreen.elementMoveArea.right,
												oScreen.elementMoveArea.top+50,
												oScreen.elementMoveArea.left+100,
												"right",
												"top",
												1700);
												
	stage1.addEnemy11(6+(4-global.stagesCount),1900);
	
	
	var boss1=enemyFactory.create("boss1",
																oScreen.elementMoveArea.left+10+parseInt(Math.random()*1000)%(oScreen.width-334),
																oScreen.elementMoveArea.top-300);
	boss1.appear=function()
	{
		boss1.originalAppear();
		boss1.move(boss1.moveType,100);
		enemyShot.boss1Shot(boss1);
	};
	
	stage1.addStageEnemy(boss1,2100);
	
	global.currentStage=stage1;

};