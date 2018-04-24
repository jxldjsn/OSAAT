function stage2Define()
{
	var stage2=new StageEntity("stage2");
	
	stage2.addEnemy21(15-global.stagesCount*2,10);
	
	stage2.addEnemy19(oScreen.elementMoveArea.left-227,
												oScreen.elementMoveArea.top+100,
												oScreen.elementMoveArea.left+200,
												"left",
												"top",
												100);
												
	stage2.addEnemy18(oScreen.elementMoveArea.left+50,
										oScreen.elementMoveArea.top-100,
										"right",
										50,
										oScreen.elementMoveArea.top+50+(4-global.stagesCount)*50,
										400);
												
	stage2.addEnemy18(oScreen.elementMoveArea.left+90,
										oScreen.elementMoveArea.top-100,
										"right",
										50,
										oScreen.elementMoveArea.top+120+(4-global.stagesCount)*50,
										450);
												
	stage2.addEnemy18(oScreen.elementMoveArea.left+150,
										oScreen.elementMoveArea.top-100,
										"right",
										50,
										oScreen.elementMoveArea.top+250+(4-global.stagesCount)*50,
										500);
												
stage2.addEnemy18(oScreen.elementMoveArea.right-200,
										oScreen.elementMoveArea.top-100,
										"left",
										50,
										oScreen.elementMoveArea.top+160+(4-global.stagesCount)*50,
										550);
												
stage2.addEnemy18(oScreen.elementMoveArea.right-250,
										oScreen.elementMoveArea.top-100,
										"left",
										50,
										oScreen.elementMoveArea.top+280+(4-global.stagesCount)*50,
										600);
												
stage2.addEnemy18(oScreen.elementMoveArea.right-350,
										oScreen.elementMoveArea.top-100,
										"left",
										50,
										oScreen.elementMoveArea.top+390+(4-global.stagesCount)*50,
										650);
												
stage2.addEnemy20(oScreen.elementMoveArea.left+270,
									oScreen.elementMoveArea.top-120,
									535);
									
stage2.addEnemy20(oScreen.elementMoveArea.left+130,
									oScreen.elementMoveArea.top-200,
									535);
									
stage2.addEnemy20(oScreen.elementMoveArea.left+370,
									oScreen.elementMoveArea.top-120,
									635);
									
stage2.addEnemy20(oScreen.elementMoveArea.left+230,
									oScreen.elementMoveArea.top-200,
									635);
									
stage2.addEnemy20(oScreen.elementMoveArea.left+470,
									oScreen.elementMoveArea.top-120,
									735);
									
stage2.addEnemy20(oScreen.elementMoveArea.left+330,
									oScreen.elementMoveArea.top-200,
									735);
									
stage2.addEnemy21(15-global.stagesCount*2,800);
									
stage2.addEnemy23(oScreen.elementMoveArea.left+100,
									oScreen.elementMoveArea.top-150,
									oScreen.elementMoveArea.top+250,
									60,
									"bottom",
									1050);	
									
																		
stage2.addEnemy23(oScreen.elementMoveArea.left+300,
									oScreen.elementMoveArea.top-150,
									oScreen.elementMoveArea.top+350,
									60,
									"bottom",
									1150);	
									
stage2.addEnemy19(oScreen.elementMoveArea.right+50,
									oScreen.elementMoveArea.top+100,
									oScreen.elementMoveArea.left+300,
									"right",
									"top",
									1300);
									
stage2.addEnemy18(oScreen.elementMoveArea.right-200,
										oScreen.elementMoveArea.top-100,
										"left",
										50,
										oScreen.elementMoveArea.top+160+(4-global.stagesCount)*50,
										1350);
												
stage2.addEnemy18(oScreen.elementMoveArea.right-250,
										oScreen.elementMoveArea.top-100,
										"left",
										50,
										oScreen.elementMoveArea.top+280+(4-global.stagesCount)*50,
										1400);
												
stage2.addEnemy18(oScreen.elementMoveArea.right-350,
										oScreen.elementMoveArea.top-100,
										"left",
										50,
										oScreen.elementMoveArea.top+390+(4-global.stagesCount)*50,
										1500);
										
stage2.addEnemy24(8-global.stagesCount,1450);
									
stage2.addEnemy22(oScreen.elementMoveArea.left-227,
									oScreen.elementMoveArea.top+200,
									oScreen.elementMoveArea.left+100,
									"left",
									"bottom",
									1600);
									
stage2.addEnemy24(30-global.stagesCount*2,1900);


stage2.addEnemy21(15-global.stagesCount*2,2400);


var boss2=enemyFactory.create("boss2",
																oScreen.elementMoveArea.left+10+parseInt(Math.random()*1000)%(oScreen.width-334),
																oScreen.elementMoveArea.top-300);
	boss2.appear=function()
	{
		boss2.originalAppear();
		boss2.move(boss2.moveType,100);
		enemyShot.boss2Shot(boss2);
	};
	
	var boss2Left=enemyFactory.create("boss2Left",0,0);
	boss2Left.appear=function()
	{
		boss2Left.originalAppear();
		enemyShot.boss2LeftShot(boss2Left);
	};
	var boss2Right=enemyFactory.create("boss2Right",0,0);
	boss2Right.appear=function()
	{
		boss2Right.originalAppear();
		enemyShot.boss2RightShot(boss2Right);
	};
	
	boss2.addSubEnemy(boss2Left,boss2.getPositionX()-35,boss2.getPositionY()+50);
	boss2.addSubEnemy(boss2Right,boss2.getPositionX()+200,boss2.getPositionY()+50);
	stage2.addStageEnemy(boss2Left,0);
	stage2.addStageEnemy(boss2Right,0);
	stage2.addStageEnemy(boss2,2300);

	
global.currentStage=stage2;

};