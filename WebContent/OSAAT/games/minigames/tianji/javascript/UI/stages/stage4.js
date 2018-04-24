function stage4Define()
{
	var stage4=new StageEntity("stage4");
	
stage4.addEnemy33(oScreen.elementMoveArea.left+80,
												oScreen.elementMoveArea.top-350,
												oScreen.elementMoveArea.top+80,
												80,
												"bottom",
												50);
												
stage4.addEnemy33(oScreen.elementMoveArea.left+320,
												oScreen.elementMoveArea.top-350,
												oScreen.elementMoveArea.top+220,
												80,
												"bottom",
												150);
												
stage4.addEnemy10(5+(4-global.stagesCount),400);
												
stage4.addEnemy32(oScreen.elementMoveArea.left+30,
												oScreen.elementMoveArea.top-350,
												oScreen.elementMoveArea.top+50,
												120,
												"bottom",
												600);
												
stage4.addEnemy34(5+(10-global.stagesCount),800);

stage4.addEnemy33(oScreen.elementMoveArea.left+180,
												oScreen.elementMoveArea.top-350,
												oScreen.elementMoveArea.top+120,
												80,
												"bottom",
												1000);

stage4.addEnemy34(5+(10-global.stagesCount),1300);

stage4.addEnemy33(oScreen.elementMoveArea.left+320,
												oScreen.elementMoveArea.top-350,
												oScreen.elementMoveArea.top+80,
												80,
												"bottom",
												1400);
												
stage4.addEnemy35(oScreen.elementMoveArea.left-200,
												oScreen.elementMoveArea.top+150,
												oScreen.elementMoveArea.left+90,
												"left",
												"bottom",
												1650);

stage4.addEnemy34(5+(15-global.stagesCount),1800);

stage4.addEnemy35(oScreen.elementMoveArea.right+50,
												oScreen.elementMoveArea.top+100,
												oScreen.elementMoveArea.left+290,
												"right",
												"bottom",
												1900);
												
stage4.addEnemy32(oScreen.elementMoveArea.left+200,
												oScreen.elementMoveArea.top-350,
												oScreen.elementMoveArea.top+140,
												120,
												"bottom",
												2200);
	
	stage4.addEnemy16(oScreen.elementMoveArea.left-100,oScreen.elementMoveArea.top-100,"left",2600);
	stage4.addEnemy16(oScreen.elementMoveArea.left-90,oScreen.elementMoveArea.top-100,"left",2650);
	stage4.addEnemy16(oScreen.elementMoveArea.left-100,oScreen.elementMoveArea.top-80,"left",2700);
	stage4.addEnemy16(oScreen.elementMoveArea.left-100,oScreen.elementMoveArea.top-90,"left",2750);
	stage4.addEnemy16(oScreen.elementMoveArea.left-80,oScreen.elementMoveArea.top-100,"left",2800);
	stage4.addEnemy16(oScreen.elementMoveArea.left-100,oScreen.elementMoveArea.top-85,"left",2850);
	
	stage4.addEnemy17(oScreen.elementMoveArea.right+40,oScreen.elementMoveArea.top-100,"right",2600);
	stage4.addEnemy17(oScreen.elementMoveArea.right+50,oScreen.elementMoveArea.top-100,"right",2650);
	stage4.addEnemy17(oScreen.elementMoveArea.right+40,oScreen.elementMoveArea.top-80,"right",2700);
	stage4.addEnemy17(oScreen.elementMoveArea.right+40,oScreen.elementMoveArea.top-90,"right",2750);
	stage4.addEnemy17(oScreen.elementMoveArea.right+20,oScreen.elementMoveArea.top-100,"right",2800);
	stage4.addEnemy17(oScreen.elementMoveArea.right+40,oScreen.elementMoveArea.top-85,"right",2850);
	
	stage4.addEnemy16(oScreen.elementMoveArea.left-150,oScreen.elementMoveArea.top,"left",2600);
	stage4.addEnemy16(oScreen.elementMoveArea.left-120,oScreen.elementMoveArea.top,"left",2650);
	stage4.addEnemy16(oScreen.elementMoveArea.left-200,oScreen.elementMoveArea.top,"left",2700);
	stage4.addEnemy16(oScreen.elementMoveArea.left-210,oScreen.elementMoveArea.top,"left",2750);
	stage4.addEnemy16(oScreen.elementMoveArea.left-200,oScreen.elementMoveArea.top,"left",2800);
	stage4.addEnemy16(oScreen.elementMoveArea.left-190,oScreen.elementMoveArea.top,"left",2850);
	
	stage4.addEnemy17(oScreen.elementMoveArea.right+140,oScreen.elementMoveArea.top,"right",2600);
	stage4.addEnemy17(oScreen.elementMoveArea.right+100,oScreen.elementMoveArea.top,"right",2650);
	stage4.addEnemy17(oScreen.elementMoveArea.right+120,oScreen.elementMoveArea.top,"right",2700);
	stage4.addEnemy17(oScreen.elementMoveArea.right+80,oScreen.elementMoveArea.top,"right",2750);
	stage4.addEnemy17(oScreen.elementMoveArea.right+90,oScreen.elementMoveArea.top,"right",2800);
	stage4.addEnemy17(oScreen.elementMoveArea.right+110,oScreen.elementMoveArea.top,"right",2850);
	
	stage4.addEnemy9(oScreen.elementMoveArea.left+100,
											oScreen.elementMoveArea.top-300,
											oScreen.elementMoveArea.top+100,
											100,
											"top",
											2550);
											
											
	var boss4=enemyFactory.create("boss4",
																oScreen.elementMoveArea.left+10+parseInt(Math.random()*1000)%(oScreen.width-334),
																oScreen.elementMoveArea.top-350);
	boss4.appear=function()
	{
		boss4.originalAppear();
		boss4.move(boss4.moveType,100);
		enemyShot.boss4Shot(boss4);
	};
	
	stage4.addStageEnemy(boss4,3500);
	
	
	global.currentStage=stage4;

};