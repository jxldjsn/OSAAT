var enemyShot=new EnemyShot();
function EnemyShot()
{
	//---------- Attributes ----------
	var This=this;
	//---------------------------------
	
	function Constructor()
	{

	};
	
	//---------- Methods ----------
	this.boss1Shot=function(boss1)
	{
		var shotInterval1=30+global.stagesCount*3;
		var shotEachTimeCount1=global.stagesCount<2?2:1;
		var shotStateValue1=shotEachTimeCount1;
		var shotDelay1=20;
		
		var em1_1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em1_2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		boss1.addEmplacement(em1_1,
												 boss1.getPositionX()+50,
												 boss1.getPositionY()+80);
													
		boss1.addEmplacement(em1_2,
												 boss1.getPositionX()+boss1.width-55,
												 boss1.getPositionY()+80);
		function shot1()
		{
			if(shotDelay1==0)
			{
				if(shotStateValue1--<=shotEachTimeCount1)
				{
					if(boss1.entity)
					{
							boss1.emplacements[0].shot(boss1.bulletSpeed+global.level*2,[20,18,270]);
							boss1.emplacements[1].shot(boss1.bulletSpeed+global.level*2,[20,18,270]);
					}
					else
					{
						shotTimer1.dispose();
						objDisposition.dispose(shotTimer1);
						shotTimer1=null;
						shotDelay1=null;
						em1_1=null;
						em1_2=null;
					}
				}
			}
			else
			{
				shotDelay1--;
			}
			shotStateValue1=shotStateValue1==0?shotInterval1:shotStateValue1;
		};
		
		
		var shotInterval2=30;
		var shotEachTimeCount2=6-global.stagesCount;
		var shotStateValue2=shotEachTimeCount2;
		var angleDistance=30/(shotEachTimeCount2-1);
		var angleDirection=1;
		var currentAngle=270-(shotEachTimeCount2-1)/2*angleDistance;
		var shotDelay2=10;
		
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet2);

		boss1.addEmplacement(em2,
												 boss1.getPositionX()+boss1.width/2-em2.width/2,
												 boss1.getPositionY()+150);

		function shot2()
		{
			if(shotDelay2==0)
			{
				if(shotStateValue2--<=shotEachTimeCount2)
				{
					if(boss1.entity)
					{
							boss1.emplacements[2].shot(boss1.bulletSpeed+global.level*2,[1,0,currentAngle]);
							
							currentAngle+=angleDistance*angleDirection;
							if(currentAngle>270+(shotEachTimeCount2-1)/2*angleDistance
							|| currentAngle<270-(shotEachTimeCount2-1)/2*angleDistance)
							{
								angleDirection=-angleDirection;
							}
					}
					else
					{
						shotTimer2.dispose();
						objDisposition.dispose(shotTimer2);
						shotTimer2=null;
						em2=null;
					}
				}
			}
			else
			{
				shotDelay2--;
			}
			shotStateValue2=shotStateValue2==0?shotInterval2:shotStateValue2;
		};
		
		var shotInterval3=12+global.stagesCount*3;
		var shotEachTimeCount3=4-global.stagesCount;
		var shotStateValue3=shotEachTimeCount3;
		var shotDelay3=5;
		
		var em3_1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		var em3_2=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss1.addEmplacement(em3_1,
												 boss1.getPositionX()+65,
												 boss1.getPositionY()+boss1.height-20);
													
		boss1.addEmplacement(em3_2,
												 boss1.getPositionX()+boss1.width-75,
												 boss1.getPositionY()+boss1.height-20);
		function shot3()
		{
			if(shotDelay3==0)
			{
				if(shotStateValue3--<=shotEachTimeCount3)
				{
					if(boss1.entity)
					{
							boss1.emplacements[3].shot(boss1.bulletSpeed+global.level,[5,40,300]);
							boss1.emplacements[4].shot(boss1.bulletSpeed+global.level,[5,40,240]);
					}
					else
					{
						shotTimer3.dispose();
						objDisposition.dispose(shotTimer3);
						shotTimer3=null;
						em3_1=null;
						em3_2=null;
					}
				}
			}
			else
			{
				shotDelay3--;
			}
			shotStateValue3=shotStateValue3==0?shotInterval3:shotStateValue3;
		};
		
		
		
		var shotInterval4=15;
		var shotEachTimeCount4=4-global.stagesCount;
		var shotStateValue4=shotEachTimeCount4;
		var shotDelay4=5;
		var currentAngleDistance4;
		
		var em4_1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em4_2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		boss1.addEmplacement(em4_1,
												 boss1.getPositionX()+130,
												 boss1.getPositionY()+108);
													
		boss1.addEmplacement(em4_2,
												 boss1.getPositionX()+boss1.width-142,
												 boss1.getPositionY()+108);
		function shot4()
		{
			if(shotDelay4==0)
			{
				if(shotStateValue4--<=shotEachTimeCount4)
				{
					var angle4_1;
					var angle4_2;
					var errorDirection4;
					var errorValue4;
					
					if(boss1.entity)
					{
						if(global.currentAttackPlane && global.currentAttackPlane.entity)
						{
							currentAngleDistance4=shotStateValue4%2==0?20:40;
							
							angle4_1=global.getAngle(em4_1.left,
																		 em4_1.top,
																		 global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																		 global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
					
							angle4_2=global.getAngle(em4_2.left,
																		 em4_2.top,
																		 global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																		 global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
																
							errorDirection4=parseInt(Math.random()*10)%2==0?1:-1;
							errorValue4=parseInt(Math.random()*10)%boss1.shotErrorValue*errorDirection4;
							
							boss1.emplacements[5].shot(boss1.bulletSpeed+global.level*2,[3,currentAngleDistance4,angle4_1+errorValue4]);
							boss1.emplacements[6].shot(boss1.bulletSpeed+global.level*2,[3,currentAngleDistance4,angle4_2+errorValue4]);
						}
					}
					else
					{
						shotTimer4.dispose();
						objDisposition.dispose(shotTimer4);
						shotTimer4=null;
						em4_1=null;
						em4_2=null;
					}
				}
			}
			else
			{
				shotDelay4--;
			}
			shotStateValue4=shotStateValue4==0?shotInterval4:shotStateValue4;
		};
		
		var shotTimer1=new Timer(shot1,650-(global.level-1)*50);
		shotTimer1.start();
		
		var shotTimer2=new Timer(shot2,200-(global.level-1)*50);
		shotTimer2.start();
		
		var shotTimer3=new Timer(shot3,500-(global.level-1)*50);
		shotTimer3.start();
		
		var shotTimer4=new Timer(shot4,700-(global.level-1)*50);
		shotTimer4.start();
	};
	
	this.boss2Shot=function(boss2)
	{
		var shotInterval1=20-global.level*2;
		var shotEachTimeCount1=6-global.stagesCount;
		var shotStateValue1=shotEachTimeCount1;
		var shotDelay1=10;
		
		var em1_1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		var em1_2=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss2.addEmplacement(em1_1,
												 boss2.getPositionX()+105,
												 boss2.getPositionY()+170);
													
		boss2.addEmplacement(em1_2,
												 boss2.getPositionX()+boss2.width-125,
												 boss2.getPositionY()+170);
		function shot1()
		{
			if(shotDelay1==0)
			{
				if(shotStateValue1--<=shotEachTimeCount1)
				{
					if(boss2.entity)
					{
							boss2.emplacements[0].shot(boss2.bulletSpeed+global.level*2,[1,0,270]);
							boss2.emplacements[1].shot(boss2.bulletSpeed+global.level*2,[1,0,270]);
					}
					else
					{
						shotTimer1.dispose();
						objDisposition.dispose(shotTimer1);
						shotTimer1=null;
						shotDelay1=null;
						em1_1=null;
						em1_2=null;
					}
				}
			}
			else
			{
				shotDelay1--;
			}
			shotStateValue1=shotStateValue1==0?shotInterval1:shotStateValue1;
		};
		
		
		var shotInterval2=50-(4-global.stagesCount);
		var shotEachTimeCount2=10-global.stagesCount*2;
		var shotStateValue2=shotEachTimeCount2;
		var angleDistance=100/(shotEachTimeCount2-1);
		var angleDirection=1;
		var currentAngle=270-(shotEachTimeCount2-1)/2*angleDistance;
		var shotDelay2=20;
		
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet2);

		boss2.addEmplacement(em2,
												 boss2.getPositionX()+boss2.width/2-em2.width/2,
												 boss2.getPositionY()+90);

		function shot2()
		{
			if(shotDelay2==0)
			{
				if(shotStateValue2--<=shotEachTimeCount2)
				{
					if(boss2.entity)
					{
							boss2.emplacements[2].shot(boss2.bulletSpeed+global.level*2+(4-global.stagesCount),[global.level,30,currentAngle]);
							
							currentAngle+=angleDistance*angleDirection;
							if(currentAngle>270+(shotEachTimeCount2-1)/2*angleDistance
							|| currentAngle<270-(shotEachTimeCount2-1)/2*angleDistance)
							{
								angleDirection=-angleDirection;
							}
					}
					else
					{
						shotTimer2.dispose();
						objDisposition.dispose(shotTimer2);
						shotTimer2=null;
						shotInterval2=null;
						shotEachTimeCount2=null;
						shotStateValue2=null;
						angleDistance=null;
						angleDirection=null;
						currentAngle=null;
						shotDelay2=null;
						em2=null;
					}
				}
			}
			else
			{
				shotDelay2--;
			}
			shotStateValue2=shotStateValue2==0?shotInterval2:shotStateValue2;
		};
		
		
		
		var shotInterval3=20-(global.level-1)*2;
		var shotEachTimeCount3=4-global.stagesCount;
		var shotStateValue3=shotEachTimeCount3;
		var shotDelay3=5;
		
		var em3_1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		var em3_2=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss2.addEmplacement(em3_1,
												 boss2.getPositionX()+15,
												 boss2.getPositionY()+45);
													
		boss2.addEmplacement(em3_2,
												 boss2.getPositionX()+boss2.width-20,
												 boss2.getPositionY()+45);
		function shot3()
		{
			if(shotDelay3==0)
			{
				if(shotStateValue3--<=shotEachTimeCount3)
				{
					if(boss2.entity)
					{
							boss2.emplacements[3].shot(boss2.bulletSpeed+global.level+(4-global.stagesCount),[5,50,300]);
							boss2.emplacements[4].shot(boss2.bulletSpeed+global.level+(4-global.stagesCount),[5,50,240]);
					}
					else
					{
						shotTimer3.dispose();
						objDisposition.dispose(shotTimer3);
						shotTimer3=null;
						shotDelay3=null;
						em3_1=null;
						em3_2=null;
					}
				}
			}
			else
			{
				shotDelay3--;
			}
			shotStateValue3=shotStateValue3==0?shotInterval3:shotStateValue3;
		};
		
		
		
		var shotInterval4=12+global.stagesCount;
		var shotEachTimeCount4=3-global.stagesCount;
		var shotStateValue4=shotEachTimeCount4;
		var shotDelay4=0;
		var currentAngleDistance4;
		
		var em4_1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em4_2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		boss2.addEmplacement(em4_1,
												 boss2.getPositionX()+130,
												 boss2.getPositionY()+140);
													
		boss2.addEmplacement(em4_2,
												 boss2.getPositionX()+boss2.width-142,
												 boss2.getPositionY()+140);
		function shot4()
		{
			if(shotDelay4==0)
			{
				if(shotStateValue4--<=shotEachTimeCount4)
				{
					var angle4_1;
					var angle4_2;
					var errorDirection4;
					var errorValue4;
					
					if(boss2.entity)
					{
						if(global.currentAttackPlane && global.currentAttackPlane.entity)
						{
							currentAngleDistance4=shotStateValue4%2==0?15:30;
							
							angle4_1=global.getAngle(em4_1.left,
																		 em4_1.top,
																		 global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																		 global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
					
							angle4_2=global.getAngle(em4_2.left,
																		 em4_2.top,
																		 global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																		 global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
																
							errorDirection4=parseInt(Math.random()*10)%2==0?1:-1;
							errorValue4=parseInt(Math.random()*10)%boss2.shotErrorValue*errorDirection4;
							
							boss2.emplacements[5].shot(boss2.bulletSpeed+(4-global.stagesCount),[3,currentAngleDistance4,angle4_1+errorValue4]);
							boss2.emplacements[6].shot(boss2.bulletSpeed+(4-global.stagesCount),[3,currentAngleDistance4,angle4_2+errorValue4]);
						}
					}
					else
					{
						shotTimer4.dispose();
						objDisposition.dispose(shotTimer4);
						shotTimer4=null;
						shotDelay4=null;
						em4_1=null;
						em4_2=null;
					}
					angle4_1=null;
					angle4_2=null;
					errorDirection4=null;
					errorValue4=null;
					currentAngleDistance4=null;
				}
			}
			else
			{
				shotDelay4--;
			}
			shotStateValue4=shotStateValue4<=0?shotInterval4:shotStateValue4;
		};
		
		var shotTimer1=new Timer(shot1,650-(global.level-1)*200);
		shotTimer1.start();
		
		var shotTimer2=new Timer(shot2,200-(global.level-1)*50);
		shotTimer2.start();
		
		var shotTimer3=new Timer(shot3,500-(global.level-1)*50);
		shotTimer3.start();
		
		var shotTimer4=new Timer(shot4,700-(global.level-1)*50);
		shotTimer4.start();
	};
	this.boss2LeftShot=function(boss2Left)
	{
		var shotInterval1=8;
		var shotEachTimeCount1=4-global.stagesCount;
		var shotStateValue1=shotEachTimeCount1;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss2Left.addEmplacement(em1,
													boss2Left.getPositionX()+6,
													boss2Left.getPositionY()+boss2Left.height-10);

		function shot1()
		{
			if(shotStateValue1--<=shotEachTimeCount1)
			{
				if(boss2Left.entity)
				{
					boss2Left.emplacements[0].shot(boss2Left.bulletSpeed+4-(global.stagesCount),[1,0,270]);
				}
				else
				{
					shotTimer1.dispose();
					objDisposition.dispose(shotTimer1);
					shotTimer1=null;
					em1=null;
				}
			}
			shotStateValue1=shotStateValue1==0?shotInterval1:shotStateValue1;
		};
		
		var shotTimer1=new Timer(shot1,350);
		shotTimer1.start();
		
		
		
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		boss2Left.addEmplacement(em2,
													boss2Left.getPositionX()+boss2Left.width/2-em2.width/2,
													boss2Left.getPositionY()+100);
		function shot2()
		{
			var angle2;
			var errorDirection2;
			var errorValue2;
			if(boss2Left.entity)
			{
				if(global.currentAttackPlane && global.currentAttackPlane.entity)
				{
					angle2=global.getAngle(em2.left,
																em2.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
					errorDirection2=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue2=parseInt(Math.random()*10)%boss2Left.shotErrorValue*errorDirection2;
					boss2Left.emplacements[1].shot(boss2Left.bulletSpeed,[3,20,angle2+errorValue2]);
				}
			}
			else
			{
				shotTimer2.dispose();
				objDisposition.dispose(shotTimer2);
				shotTimer2=null;
				em2=null;
			}
			errorDirection2=null;
			errorValue2=null;
			angle2=null;
		};
		var shotTimer2=new Timer(shot2,1800-(global.level-1)*200);
		shotTimer2.start();
		
	};
	this.boss2RightShot=function(boss2Right)
	{
		var shotInterval1=8;
		var shotEachTimeCount1=4-global.stagesCount;
		var shotStateValue1=shotEachTimeCount1;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss2Right.addEmplacement(em1,
													boss2Right.getPositionX()+boss2Right.width-23,
													boss2Right.getPositionY()+boss2Right.height-10);

		function shot1()
		{
			if(shotStateValue1--<=shotEachTimeCount1)
			{
				if(boss2Right.entity)
				{
					boss2Right.emplacements[0].shot(boss2Right.bulletSpeed+4-(global.stagesCount),[1,0,270]);
				}
				else
				{
					shotTimer1.dispose();
					objDisposition.dispose(shotTimer1);
					shotTimer1=null;
					em1=null;
				}
			}
			shotStateValue1=shotStateValue1==0?shotInterval1:shotStateValue1;
		};
		
		var shotTimer1=new Timer(shot1,350);
		shotTimer1.start();
		
		
		
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		boss2Right.addEmplacement(em2,
													boss2Right.getPositionX()+boss2Right.width/2-em2.width/2,
													boss2Right.getPositionY()+100);
		function shot2()
		{
			var angle2;
			var errorDirection2;
			var errorValue2;
			if(boss2Right.entity)
			{
				if(global.currentAttackPlane && global.currentAttackPlane.entity)
				{
					angle2=global.getAngle(em2.left,
																em2.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
					errorDirection2=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue2=parseInt(Math.random()*10)%boss2Right.shotErrorValue*errorDirection2;
					boss2Right.emplacements[1].shot(boss2Right.bulletSpeed,[3,20,angle2+errorValue2]);
				}
			}
			else
			{
				shotTimer2.dispose();
				objDisposition.dispose(shotTimer2);
				shotTimer2=null;
				em2=null;
			}
			errorDirection2=null;
			errorValue2=null;
			angle2=null;
		};
		var shotTimer2=new Timer(shot2,1800-(global.level-1)*200);
		shotTimer2.start();
		
	};
	
	this.boss3Shot=function(boss3)
	{
		var shotInterval1=40;
		var shotEachTimeCount1=4-global.stagesCount;
		var shotStateValue1=shotEachTimeCount1;
		var shotDelay1=20;
		
		var em1_1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		boss3.addEmplacement(em1_1,
												 boss3.getPositionX()+boss3.width/2-em1_1.width/2,
												 boss3.getPositionY()+15);
		function shot1()
		{
			if(shotDelay1==0)
			{
				if(shotStateValue1--<=shotEachTimeCount1)
				{
					if(boss3.entity)
					{
							boss3.emplacements[0].shot(boss3.bulletSpeed+global.level*2,[20,18,270]);
					}
					else
					{
						shotTimer1.dispose();
						objDisposition.dispose(shotTimer1);
						shotTimer1=null;
						shotDelay1=null;
						em1_1=null;
					}
				}
			}
			else
			{
				shotDelay1--;
			}
			shotStateValue1=shotStateValue1==0?shotInterval1:shotStateValue1;
		};
		
		
		var shotInterval2=30;
		var shotEachTimeCount2=3+(4-global.stagesCount);
		var shotStateValue2=shotEachTimeCount2;
		var angleDistance=100/(shotEachTimeCount2-1);
		var angleDirection=1;
		var currentAngle=270-(shotEachTimeCount2-1)/2*angleDistance;
		var shotDelay2=10;
		
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet2);

		boss3.addEmplacement(em2,
												 boss3.getPositionX()+boss3.width/2-em2.width/2,
												 boss3.getPositionY()+50);

		function shot2()
		{
			if(shotDelay2==0)
			{
				if(shotStateValue2--<=shotEachTimeCount2)
				{
					if(boss3.entity)
					{
							boss3.emplacements[1].shot(boss3.bulletSpeed+global.level*3,[3,15,currentAngle]);
							
							currentAngle+=angleDistance*angleDirection;
							if(currentAngle>270+(shotEachTimeCount2-1)/2*angleDistance
							|| currentAngle<270-(shotEachTimeCount2-1)/2*angleDistance)
							{
								angleDirection=-angleDirection;
							}
					}
					else
					{
						shotTimer2.dispose();
						objDisposition.dispose(shotTimer2);
						shotTimer2=null;
						shotInterval2=null;
						shotEachTimeCount2=null;
						shotStateValue2=null;
						angleDistance=null;
						angleDirection=null;
						currentAngle=null;
						shotDelay2=null;
						em2=null;
					}
				}
			}
			else
			{
				shotDelay2--;
			}
			shotStateValue2=shotStateValue2==0?shotInterval2:shotStateValue2;
		};
		
		
		
		var shotInterval3=35;
		var shotEachTimeCount3=4-global.stagesCount;
		var shotStateValue3=shotEachTimeCount3;
		var shotDelay3=15;
		
		var em3_1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		var em3_2=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss3.addEmplacement(em3_1,
												 boss3.getPositionX()+65,
												 boss3.getPositionY()+boss3.height-20);
													
		boss3.addEmplacement(em3_2,
												 boss3.getPositionX()+boss3.width-75,
												 boss3.getPositionY()+boss3.height-20);
		function shot3()
		{
			if(shotDelay3==0)
			{
				if(shotStateValue3--<=shotEachTimeCount3)
				{
					if(boss3.entity)
					{
							boss3.emplacements[2].shot(boss3.bulletSpeed+global.level*2,[5,50,300]);
							boss3.emplacements[3].shot(boss3.bulletSpeed+global.level*2,[5,50,240]);
					}
					else
					{
						shotTimer3.dispose();
						objDisposition.dispose(shotTimer3);
						shotTimer3=null;
						shotDelay3=null;
						em3_1=null;
						em3_2=null;
					}
				}
			}
			else
			{
				shotDelay3--;
			}
			shotStateValue3=shotStateValue3==0?shotInterval3:shotStateValue3;
		};
		
		
		
		var shotInterval4=15-(4-global.stagesCount)*2;
		var shotEachTimeCount4=global.level+2;
		var shotStateValue4=shotEachTimeCount4;
		var shotDelay4=5;
		var currentAngleDistance4;
		
		var em4_1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em4_2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		boss3.addEmplacement(em4_1,
												 boss3.getPositionX()+boss3.width/2-60,
												 boss3.getPositionY()+25);
													
		boss3.addEmplacement(em4_2,
												 boss3.getPositionX()+boss3.width/2+55,
												 boss3.getPositionY()+25);
		function shot4()
		{
			if(shotDelay4==0)
			{
				if(shotStateValue4--<=shotEachTimeCount4)
				{
					var angle4_1;
					var angle4_2;
					var errorDirection4;
					var errorValue4;
					
					if(boss3.entity)
					{
						if(global.currentAttackPlane && global.currentAttackPlane.entity)
						{
							currentAngleDistance4=shotStateValue4%2==0?30:15;
							
							angle4_1=global.getAngle(em4_1.left,
																		 em4_1.top,
																		 global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																		 global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
					
							angle4_2=global.getAngle(em4_2.left,
																		 em4_2.top,
																		 global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																		 global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
																
							errorDirection4=parseInt(Math.random()*10)%2==0?1:-1;
							errorValue4=parseInt(Math.random()*10)%boss3.shotErrorValue*errorDirection4;
							
							boss3.emplacements[4].shot(boss3.bulletSpeed,[3,currentAngleDistance4,angle4_1+errorValue4]);
							boss3.emplacements[5].shot(boss3.bulletSpeed,[3,currentAngleDistance4,angle4_2+errorValue4]);
						}
					}
					else
					{
						shotTimer4.dispose();
						objDisposition.dispose(shotTimer4);
						shotTimer4=null;
						shotDelay4=null;
						em4_1=null;
						em4_2=null;
					}
					angle4_1=null;
					angle4_2=null;
					errorDirection4=null;
					errorValue4=null;
					currentAngleDistance4=null;
				}
			}
			else
			{
				shotDelay4--;
			}
			shotStateValue4=shotStateValue4==0?shotInterval4:shotStateValue4;
		};
		
		var shotTimer1=new Timer(shot1,550-(global.level-1)*100);
		shotTimer1.start();
		
		var shotTimer2=new Timer(shot2,200-(global.level-1)*50);
		shotTimer2.start();
		
		var shotTimer3=new Timer(shot3,500-(global.level-1)*50);
		shotTimer3.start();
		
		var shotTimer4=new Timer(shot4,600-(4-global.stagesCount)*50);
		shotTimer4.start();
	};
	this.boss3LeftShot=function(boss3Left)
	{
		var shotInterval1=50+global.stagesCount*5;
		var shotEachTimeCount1=4-global.stagesCount;
		var shotStateValue1=shotEachTimeCount1;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss3Left.addEmplacement(em1,
													boss3Left.getPositionX()+15,
													boss3Left.getPositionY()+boss3Left.height-5);
													
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss3Left.addEmplacement(em2,
													boss3Left.getPositionX()+35,
													boss3Left.getPositionY()+boss3Left.height-15);
													
		var em3=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss3Left.addEmplacement(em3,
													boss3Left.getPositionX()+55,
													boss3Left.getPositionY()+boss3Left.height-25);
													
		var em4=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss3Left.addEmplacement(em4,
													boss3Left.getPositionX()+75,
													boss3Left.getPositionY()+boss3Left.height-35);

		function shot1()
		{
			if(shotStateValue1--<=shotEachTimeCount1)
			{
				if(boss3Left.entity)
				{
					for(var i=0;i<4;i++)
					{
						boss3Left.emplacements[i].shot(boss3Left.bulletSpeed+i*5,[global.level>2?3:2,15,210+i*30]);
					}
					
				}
				else
				{
					shotTimer1.dispose();
					objDisposition.dispose(shotTimer1);
					shotTimer1=null;
					em1=null;
				}
			}
			shotStateValue1=shotStateValue1==0?shotInterval1:shotStateValue1;
		};
		
		var shotTimer1=new Timer(shot1,250);
		shotTimer1.start();
		
	};
	this.boss3RightShot=function(boss3Right)
	{
		var shotInterval1=50+global.stagesCount*5;
		var shotEachTimeCount1=4-global.stagesCount;
		var shotStateValue1=shotEachTimeCount1;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss3Right.addEmplacement(em1,
													boss3Right.getPositionX()+105,
													boss3Right.getPositionY()+boss3Right.height-5);
													
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss3Right.addEmplacement(em2,
													boss3Right.getPositionX()+85,
													boss3Right.getPositionY()+boss3Right.height-15);
													
		var em3=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss3Right.addEmplacement(em3,
													boss3Right.getPositionX()+65,
													boss3Right.getPositionY()+boss3Right.height-25);
													
		var em4=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss3Right.addEmplacement(em4,
													boss3Right.getPositionX()+45,
													boss3Right.getPositionY()+boss3Right.height-35);

		function shot1()
		{
			if(shotStateValue1--<=shotEachTimeCount1)
			{
				if(boss3Right.entity)
				{
					for(var i=0;i<4;i++)
					{
						boss3Right.emplacements[i].shot(boss3Right.bulletSpeed+i*5,[global.level>2?3:2,15,330-i*30]);
					}
					
				}
				else
				{
					shotTimer1.dispose();
					objDisposition.dispose(shotTimer1);
					shotTimer1=null;
					em1=null;
				}
			}
			shotStateValue1=shotStateValue1==0?shotInterval1:shotStateValue1;
		};
		
		var shotTimer1=new Timer(shot1,250);
		shotTimer1.start();
	};
	
	this.boss4Shot=function(boss4)
	{
		var shotInterval1=30+global.stagesCount*2;
		var shotEachTimeCount1=4-global.stagesCount;
		var shotStateValue1=shotEachTimeCount1;
		var shotDelay1=20;
		
		var em1_1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em1_2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		boss4.addEmplacement(em1_1,
												 boss4.getPositionX()+125,
												 boss4.getPositionY()+160);
													
		boss4.addEmplacement(em1_2,
												 boss4.getPositionX()+boss4.width-135,
												 boss4.getPositionY()+160);
		function shot1()
		{
			if(shotDelay1==0)
			{
				if(shotStateValue1--<=shotEachTimeCount1)
				{
					if(boss4.entity)
					{
							boss4.emplacements[0].shot(boss4.bulletSpeed+global.level*2,[10,15,240]);
							boss4.emplacements[1].shot(boss4.bulletSpeed+global.level*2,[10,15,300]);
					}
					else
					{
						shotTimer1.dispose();
						objDisposition.dispose(shotTimer1);
						shotTimer1=null;
						shotDelay1=null;
						em1_1=null;
						em1_2=null;
					}
				}
			}
			else
			{
				shotDelay1--;
			}
			shotStateValue1=shotStateValue1==0?shotInterval1:shotStateValue1;
		};
		
		
		var shotInterval2=20+global.stagesCount*2;
		var shotEachTimeCount2=6-global.stagesCount;
		var shotStateValue2=shotEachTimeCount2;
		var angleDistance=70/(shotEachTimeCount2-1);
		var angleDirection=1;
		var currentAngle=270-(shotEachTimeCount2-1)/2*angleDistance;
		var shotDelay2=10;
		
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet2);

		boss4.addEmplacement(em2,
												 boss4.getPositionX()+boss4.width/2-em2.width/2,
												 boss4.getPositionY()+125);

		function shot2()
		{
			if(shotDelay2==0)
			{
				if(shotStateValue2--<=shotEachTimeCount2)
				{
					if(boss4.entity)
					{
							boss4.emplacements[2].shot(boss4.bulletSpeed+2+global.level*2,[1,0,currentAngle]);
							
							currentAngle+=angleDistance*angleDirection;
							if(currentAngle>270+(shotEachTimeCount2-1)/2*angleDistance
							|| currentAngle<270-(shotEachTimeCount2-1)/2*angleDistance)
							{
								angleDirection=-angleDirection;
							}
					}
					else
					{
						shotTimer2.dispose();
						objDisposition.dispose(shotTimer2);
						shotTimer2=null;
						shotInterval2=null;
						shotEachTimeCount2=null;
						shotStateValue2=null;
						angleDistance=null;
						angleDirection=null;
						currentAngle=null;
						shotDelay2=null;
						em2=null;
					}
				}
			}
			else
			{
				shotDelay2--;
			}
			shotStateValue2=shotStateValue2==0?shotInterval2:shotStateValue2;
		};
		
		
		
		var shotInterval3=12+(global.stagesCount)*3;
		var shotEachTimeCount3=global.level;
		var shotStateValue3=shotEachTimeCount3;
		var shotDelay3=5;
		
		var em3_1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em3_2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		boss4.addEmplacement(em3_1,
												 boss4.getPositionX()+40,
												 boss4.getPositionY()+260);
													
		boss4.addEmplacement(em3_2,
												 boss4.getPositionX()+280,
												 boss4.getPositionY()+260);
		function shot3()
		{
			if(shotDelay3==0)
			{
				if(shotStateValue3--<=shotEachTimeCount3)
				{
					if(boss4.entity)
					{
							boss4.emplacements[3].shot(boss4.bulletSpeed,[9,40,300]);
							boss4.emplacements[4].shot(boss4.bulletSpeed,[9,40,240]);
					}
					else
					{
						shotTimer3.dispose();
						objDisposition.dispose(shotTimer3);
						shotTimer3=null;
						shotDelay3=null;
						em3_1=null;
						em3_2=null;
					}
				}
			}
			else
			{
				shotDelay3--;
			}
			shotStateValue3=shotStateValue3==0?shotInterval3:shotStateValue3;
		};
		
		
		
		var shotInterval4=15;
		var shotEachTimeCount4=5-global.stagesCount;
		var shotStateValue4=shotEachTimeCount4;
		var shotDelay4=5;
		var currentAngleDistance4;
		
		var em4_1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em4_2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		boss4.addEmplacement(em4_1,
												 boss4.getPositionX()+42,
												 boss4.getPositionY()+158);
													
		boss4.addEmplacement(em4_2,
												 boss4.getPositionX()+280,
												 boss4.getPositionY()+158);
		function shot4()
		{
			if(shotDelay4==0)
			{
				if(shotStateValue4--<=shotEachTimeCount4)
				{
					var angle4_1;
					var angle4_2;
					var errorDirection4;
					var errorValue4;
					
					if(boss4.entity)
					{
						if(global.currentAttackPlane && global.currentAttackPlane.entity)
						{
							currentAngleDistance4=shotStateValue4%2==0?20:40;
							
							angle4_1=global.getAngle(em4_1.left,
																		 em4_1.top,
																		 global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																		 global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									

							angle4_2=global.getAngle(em4_2.left,
																		 em4_2.top,
																		 global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																		 global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
	
							errorDirection4=parseInt(Math.random()*10)%2==0?1:-1;
							errorValue4=parseInt(Math.random()*10)%boss4.shotErrorValue*errorDirection4;

							boss4.emplacements[5].shot(boss4.bulletSpeed,[3,currentAngleDistance4,angle4_1+errorValue4]);
							boss4.emplacements[6].shot(boss4.bulletSpeed,[3,currentAngleDistance4,angle4_2+errorValue4]);
						}
					}
					else
					{
						shotTimer4.dispose();
						objDisposition.dispose(shotTimer4);
						shotTimer4=null;
						shotDelay4=null;
						em4_1=null;
						em4_2=null;
					}
					angle4_1=null;
					angle4_2=null;
					errorDirection4=null;
					errorValue4=null;
					currentAngleDistance4=null;
				}
			}
			else
			{
				shotDelay4--;
			}
			shotStateValue4=shotStateValue4==0?shotInterval4:shotStateValue4;
		};
		
		
		var shotInterval5=25+(global.stagesCount)*3;
		var shotEachTimeCount5=4-global.stagesCount;
		var shotStateValue5=shotEachTimeCount5;
		var shotDelay5=12;
		
		var em5_1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		var em5_2=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		boss4.addEmplacement(em5_1,
												 boss4.getPositionX()+100,
												 boss4.getPositionY()+260);

		boss4.addEmplacement(em5_2,
												 boss4.getPositionX()+210,
												 boss4.getPositionY()+260);
		function shot5()
		{
			if(shotDelay5==0)
			{
				if(shotStateValue5--<=shotEachTimeCount5)
				{
					if(boss4.entity)
					{
							boss4.emplacements[7].shot(boss4.bulletSpeed+5,[global.level,45,270]);
							boss4.emplacements[8].shot(boss4.bulletSpeed+5,[global.level,45,270]);
					}
					else
					{
						shotTimer5.dispose();
						objDisposition.dispose(shotTimer5);
						shotTimer5=null;
						em5_1=null;
						em5_2=null;
					}
				}
			}
			else
			{
				shotDelay5--;
			}
			shotStateValue5=shotStateValue5==0?shotInterval5:shotStateValue5;
		};
		
		
		var shotTimer1=new Timer(shot1,650-(global.level-1)*50);
		shotTimer1.start();
		
		var shotTimer2=new Timer(shot2,200-(global.level-1)*50);
		shotTimer2.start();
		
		var shotTimer3=new Timer(shot3,500-(global.level-1)*50);
		shotTimer3.start();
		
		var shotTimer4=new Timer(shot4,700-(global.level-1)*50);
		shotTimer4.start();
		
		var shotTimer5=new Timer(shot5,200-(global.level-1)*50);
		shotTimer5.start();
	};
	
	
	
	this.enemy1Shot=function(enemy1)
	{
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		enemy1.addEmplacement(em1,
													enemy1.getPositionX()+enemy1.width/2-em1.width/2,
													enemy1.getPositionY()+enemy1.height-10);
		function shot()
		{
			var angle;
			var errorDirection;
			var errorValue;
			if(enemy1.entity)
			{
				if(global.currentAttackPlane && global.currentAttackPlane.entity)
				{
					angle=global.getAngle(em1.left,
																em1.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
					errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue=parseInt(Math.random()*10)%enemy1.shotErrorValue*errorDirection;
					enemy1.shot(1,0,angle+errorValue);
				}
			}
			else
			{
				shotTimer.dispose();
				objDisposition.dispose(shotTimer);
				shotTimer=null;
				em1=null;
			}
			errorDirection=null;
			errorValue=null;
			angle=null;
		};
		var shotTimer=new Timer(shot,2000-(global.level-1)*200);
		shotTimer.start();
	};
	
	this.enemy2Shot=function(enemy2)
	{
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em3=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		enemy2.addEmplacement(em1,
													enemy2.getPositionX()+20,
													enemy2.getPositionY()+50);
													
		enemy2.addEmplacement(em2,
													enemy2.getPositionX()+enemy2.width-20,
													enemy2.getPositionY()+50);
													
		enemy2.addEmplacement(em3,
													enemy2.getPositionX()+enemy2.width/2-10,
													enemy2.getPositionY()+enemy2.height-20);
		function shot1()
		{
			var angle1,angle2;
			var errorDirection;
			var errorValue;
			if(enemy2.entity)
			{
				if(global.currentAttackPlane && global.currentAttackPlane.entity)
				{
					angle1=global.getAngle(em1.left,
																em1.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
					
					angle2=global.getAngle(em2.left,
																em2.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
																
					errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue=parseInt(Math.random()*10)%enemy2.shotErrorValue*errorDirection;
	
					enemy2.emplacements[0].shot(enemy2.bulletSpeed,[1,0,angle1+errorValue]);
					enemy2.emplacements[1].shot(enemy2.bulletSpeed,[1,0,angle2+errorValue]);
				}
			}
			else
			{
				shotTimer1.dispose();
				objDisposition.dispose(shotTimer1);
				shotTimer1=null;
				em1=null;
				em2=null;
			}
			errorDirection=null;
			errorValue=null;
			angle1=null;
			angle2=null;
		};
		
		function shot2()
		{
			if(enemy2.entity)
			{
				enemy2.emplacements[2].shot(enemy2.bulletSpeed,[2,30,270]);
			}
			else
			{
				shotTimer2.dispose();
				objDisposition.dispose(shotTimer2);
				shotTimer2=null;
				em3=null;
			}
		};
		var shotTimer1=new Timer(shot1,1900-(global.level-1)*100);
		shotTimer1.start();
		
		var shotTimer2=new Timer(shot2,2000-(global.level-1)*200);
		if(global.stagesCount<2)
		{
			shotTimer2.start();
		}
	};
	
	this.enemy3Shot=function(enemy3)
	{
		var shotInterval=15-global.level*2;
		var shotEachTimeCount=6-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		
		enemy3.addEmplacement(em1,
													enemy3.getPositionX()+68,
													enemy3.getPositionY()+enemy3.height-10);
													
		enemy3.addEmplacement(em2,
													enemy3.getPositionX()+enemy3.width-77,
													enemy3.getPositionY()+enemy3.height-10);

		function shot()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				var angle1,angle2;
				var errorDirection;
				var errorValue;
				if(enemy3.entity)
				{
					if(global.currentAttackPlane && global.currentAttackPlane.entity)
					{
						angle1=global.getAngle(em1.left,
																	em1.top,
																	global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																	global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
						
						angle2=global.getAngle(em2.left,
																	em2.top,
																	global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																	global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
																	
						errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
						errorValue=parseInt(Math.random()*10)%enemy3.shotErrorValue*errorDirection;
		
						enemy3.emplacements[0].shot(enemy3.bulletSpeed,[global.level,(global.level-1)*15,angle1+errorValue]);
						enemy3.emplacements[1].shot(enemy3.bulletSpeed,[global.level,(global.level-1)*15,angle2+errorValue]);
					}
				}
				else
				{
					shotTimer.dispose();
					objDisposition.dispose(shotTimer);
					shotTimer=null;
					
					shotInterval=null;
					shotEachTimeCount=null;
					shotStateValue=null;
					em1=null;
					em2=null;
				}
				errorDirection=null;
				errorValue=null;
				angle1=null;
				angle2=null;
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer=new Timer(shot,300);
		shotTimer.start();
	};
	
	this.enemy4Shot=this.enemy1Shot;
	
	this.enemy5Shot=this.enemy1Shot;
	
	this.enemy6Shot=function(enemy6)
	{
		var shotInterval=10-global.level;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		enemy6.addEmplacement(em1,
													enemy6.getPositionX()+enemy6.width/2-em1.width/2,
													enemy6.getPositionY()+enemy6.height-10);

		function shot()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				if(enemy6.entity)
				{
					enemy6.shot(1,0,270);
				}
				else
				{
					shotTimer.dispose();
					objDisposition.dispose(shotTimer);
					shotTimer=null;
					em1=null;
				}
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer=new Timer(shot,350);
		shotTimer.start();
	};
	
	this.enemy7Shot=function(enemy7)
	{
		var shotInterval=parseInt(Math.random()*10)%6+14;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		enemy7.addEmplacement(em1,
													enemy7.getPositionX()+enemy7.width/2-em1.width/2,
													enemy7.getPositionY()+enemy7.height-10);

		function shot()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				var angle;
				var errorDirection;
				var errorValue;
				if(enemy7.entity)
				{
					if(global.currentAttackPlane && global.currentAttackPlane.entity)
					{
						angle=global.getAngle(em1.left,
																	em1.top,
																	global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																	global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
						errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
						errorValue=parseInt(Math.random()*10)%enemy7.shotErrorValue*errorDirection;
						enemy7.shot(5,25,angle+errorValue);
					}
				}
				else
				{
					shotTimer.dispose();
					objDisposition.dispose(shotTimer);
					shotTimer=null;
					em1=null;
				}
				errorDirection=null;
				errorValue=null;
				angle=null;
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer=new Timer(shot,350-(global.level-1)*50);
		shotTimer.start();
	};
	
	this.enemy8Shot=function(enemy8)
	{
		var shotInterval=8;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		
		enemy8.addEmplacement(em1,
													enemy8.getPositionX()+enemy8.width/2-35,
													enemy8.getPositionY()+enemy8.height-10);
		enemy8.addEmplacement(em2,
													enemy8.getPositionX()+enemy8.width/2+20,
													enemy8.getPositionY()+enemy8.height-10);

		function shot()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				if(enemy8.entity)
				{
					enemy8.emplacements[0].shot(enemy8.bulletSpeed,[1,0,270]);
					enemy8.emplacements[1].shot(enemy8.bulletSpeed,[1,0,270]);
				}
				else
				{
					shotTimer.dispose();
					objDisposition.dispose(shotTimer);
					shotTimer=null;
					em1=null;
				}
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer=new Timer(shot,300);
		shotTimer.start();
	};
	
	this.enemy9Shot=function(enemy9)
	{
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em3=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		enemy9.addEmplacement(em1,
													enemy9.getPositionX()+50,
													enemy9.getPositionY()+50);
													
		enemy9.addEmplacement(em2,
													enemy9.getPositionX()+enemy9.width-50,
													enemy9.getPositionY()+50);
													
		enemy9.addEmplacement(em3,
													enemy9.getPositionX()+enemy9.width/2-10,
													enemy9.getPositionY()+enemy9.height-20);
		function shot1()
		{
			var angle1,angle2;
			var errorDirection;
			var errorValue;
			if(enemy9.entity)
			{
				if(global.currentAttackPlane && global.currentAttackPlane.entity)
				{
					angle1=global.getAngle(em1.left,
																em1.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
					
					angle2=global.getAngle(em2.left,
																em2.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
																
					errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue=parseInt(Math.random()*10)%enemy9.shotErrorValue*errorDirection;
	
					enemy9.emplacements[0].shot(enemy9.bulletSpeed-2,[global.level,20,angle1+errorValue]);
					enemy9.emplacements[1].shot(enemy9.bulletSpeed-2,[global.level,20,angle2+errorValue]);
				}
			}
			else
			{
				shotTimer1.dispose();
				objDisposition.dispose(shotTimer1);
				shotTimer1=null;
				em1=null;
				em2=null;
			}
			errorDirection=null;
			errorValue=null;
			angle1=null;
			angle2=null;
		};
		
		
		var shotInterval2=12;
		var shotEachTimeCount2=4-global.stagesCount;
		var shotStateValue2=shotEachTimeCount2;
		function shot2()
		{
			if(shotStateValue2--<=shotEachTimeCount2)
			{
				if(enemy9.entity)
				{
					enemy9.emplacements[2].shot(enemy9.bulletSpeed,[8-global.stagesCount,25-global.stagesCount*3,270]);
				}
				else
				{
					shotTimer2.dispose();
					objDisposition.dispose(shotTimer2);
					shotTimer2=null;
					em3=null;
				}
			}
			shotStateValue2=shotStateValue2==0?shotInterval2:shotStateValue2;
			
		};
		var shotTimer1=new Timer(shot1,2000-(global.level-1)*100);
		shotTimer1.start();
		
		var shotTimer2=new Timer(shot2,450-(global.level-1)*50);
		shotTimer2.start();

	};
	
	this.enemy10Shot=function(enemy10)
	{
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		enemy10.addEmplacement(em1,
													enemy10.getPositionX()+enemy10.width/2-em1.width/2,
													enemy10.getPositionY()+enemy10.height-10);
		function shot()
		{
			var angle;
			var errorDirection;
			var errorValue;
			if(enemy10.entity)
			{
				if(global.currentAttackPlane && global.currentAttackPlane.entity)
				{
					angle=global.getAngle(em1.left,
																em1.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
					errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue=parseInt(Math.random()*10)%enemy10.shotErrorValue*errorDirection;
					enemy10.shot(2,10,angle+errorValue);
				}
			}
			else
			{
				shotTimer.dispose();
				objDisposition.dispose(shotTimer);
				shotTimer=null;
				em1=null;
			}
			errorDirection=null;
			errorValue=null;
			angle=null;
		};
		var shotTimer=new Timer(shot,1400+(global.stagesCount)*100);
		shotTimer.start();
	};
	
	this.enemy11Shot=function(enemy11)
	{
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		enemy11.addEmplacement(em1,
													enemy11.getPositionX()+enemy11.width/2-em1.width/2,
													enemy11.getPositionY()+enemy11.height-10);
		function shot()
		{
			var angle;
			var errorDirection;
			var errorValue;
			if(enemy11.entity)
			{
				if(global.currentAttackPlane && global.currentAttackPlane.entity)
				{
					angle=global.getAngle(em1.left,
																em1.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
					errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue=parseInt(Math.random()*10)%enemy11.shotErrorValue*errorDirection;
					enemy11.shot(4-global.stagesCount,10,angle+errorValue);
				}
			}
			else
			{
				shotTimer.dispose();
				objDisposition.dispose(shotTimer);
				shotTimer=null;
				em1=null;
			}
			errorDirection=null;
			errorValue=null;
			angle=null;
		};
		var shotTimer=new Timer(shot,2000-(global.level-1)*200);
		shotTimer.start();
	};
	
	this.enemy12Shot=function(enemy12)
	{
		var shotInterval=parseInt(Math.random()*10)%6+10;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		
		enemy12.addEmplacement(em1,
													enemy12.getPositionX()+enemy12.width/2-15,
													enemy12.getPositionY()+enemy12.height-15);
		enemy12.addEmplacement(em2,
													enemy12.getPositionX()+enemy12.width/2+5,
													enemy12.getPositionY()+enemy12.height-15);

		function shot()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				if(enemy12.entity)
				{
					enemy12.emplacements[0].shot(enemy12.bulletSpeed,[1,0,270]);
					enemy12.emplacements[1].shot(enemy12.bulletSpeed,[1,0,270]);
				}
				else
				{
					shotTimer.dispose();
					objDisposition.dispose(shotTimer);
					shotTimer=null;
					em1=null;
				}
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer=new Timer(shot,350);
		shotTimer.start();
	};
	
	this.enemy13Shot=this.enemy12Shot;
	
	this.enemy14Shot=function(enemy14)
	{
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		enemy14.addEmplacement(em1,
													enemy14.getPositionX()-em1.width,
													enemy14.getPositionY()+enemy14.height);
		function shot()
		{
			if(enemy14.entity)
			{
				enemy14.shot(1,0,225);
			}
			else
			{
				shotTimer.dispose();
				objDisposition.dispose(shotTimer);
				shotTimer=null;
				em1=null;
			}
		};
		var shotTimer=new Timer(shot,2500-(global.level-1)*300);
		shotTimer.start();
	};
	
	this.enemy15Shot=function(enemy15)
	{
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		enemy15.addEmplacement(em1,
													enemy15.getPositionX()+enemy15.width,
													enemy15.getPositionY()+enemy15.height);
		function shot()
		{
			if(enemy15.entity)
			{
				enemy15.shot(1,0,315);
			}
			else
			{
				shotTimer.dispose();
				objDisposition.dispose(shotTimer);
				shotTimer=null;
				em1=null;
			}
		};
		var shotTimer=new Timer(shot,2500-(global.level-1)*300);
		shotTimer.start();
	};
	
	this.enemy18Shot=this.enemy11Shot;
	
	this.enemy19Shot=function(enemy19)
	{
		var shotInterval=12;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		
		enemy19.addEmplacement(em1,
													enemy19.getPositionX()+7,
													enemy19.getPositionY()+enemy19.height-30);
		enemy19.addEmplacement(em2,
													enemy19.getPositionX()+enemy19.width-25,
													enemy19.getPositionY()+enemy19.height-30);

		function shot1()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				if(enemy19.entity)
				{
					enemy19.emplacements[0].shot(enemy19.bulletSpeed,[global.level,10,270]);
					enemy19.emplacements[1].shot(enemy19.bulletSpeed,[global.level,10,270]);
				}
				else
				{
					shotTimer1.dispose();
					objDisposition.dispose(shotTimer1);
					shotTimer1=null;
					em1=null;
					em2=null;2
				}
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer1=new Timer(shot1,400);
		shotTimer1.start();
		
		var em3=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		enemy19.addEmplacement(em3,
													enemy19.getPositionX()+enemy19.width/2-em3.width/2,
													enemy19.getPositionY()+60);
		function shot2()
		{
			var errorDirection;
			var errorValue;
			if(enemy19.entity)
			{
					errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue=parseInt(Math.random()*10)%enemy19.shotErrorValue*errorDirection;
					enemy19.emplacements[2].shot(enemy19.bulletSpeed+3,[3,15,270]);
			}
			else
			{
				shotTimer2.dispose();
				objDisposition.dispose(shotTimer2);
				shotTimer2=null;
				em3=null;
			}
		};
		var shotTimer2=new Timer(shot2,1400+(global.stagesCount)*100);
		shotTimer2.start();
	};
	
	this.enemy20Shot=function(enemy20)
	{
		var shotInterval=8;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		enemy20.addEmplacement(em1,
													enemy20.getPositionX()+enemy20.width/2-em1.width/2,
													enemy20.getPositionY()+enemy20.height-45);

		function shot()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				if(enemy20.entity)
				{
					enemy20.shot(1,0,270);
				}
				else
				{
					shotTimer.dispose();
					objDisposition.dispose(shotTimer);
					shotTimer=null;
					em1=null;
				}
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer=new Timer(shot,350+global.stagesCount*100);
		shotTimer.start();
	};
	
	this.enemy21Shot=this.enemy1Shot;
	
	this.enemy22Shot=this.enemy19Shot;
	
	this.enemy23Shot=function(enemy23)
	{
		var shotInterval=10;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		
		enemy23.addEmplacement(em1,
													enemy23.getPositionX()+7,
													enemy23.getPositionY()+enemy23.height-30);
		enemy23.addEmplacement(em2,
													enemy23.getPositionX()+enemy23.width-25,
													enemy23.getPositionY()+enemy23.height-30);

		function shot1()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				if(enemy23.entity)
				{
					enemy23.emplacements[0].shot(enemy23.bulletSpeed,[global.level,15,270]);
					enemy23.emplacements[1].shot(enemy23.bulletSpeed,[global.level,15,270]);
				}
				else
				{
					shotTimer1.dispose();
					objDisposition.dispose(shotTimer1);
					shotTimer1=null;
					em1=null;
					em2=null;2
				}
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer1=new Timer(shot1,350);
		shotTimer1.start();
	};
	
	this.enemy24Shot=function(enemy24)
	{
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		enemy24.addEmplacement(em1,
													enemy24.getPositionX()+enemy24.width/2-em1.width/2,
													enemy24.getPositionY()+enemy24.height-10);
		function shot()
		{
			var angle;
			var errorDirection;
			var errorValue;
			if(enemy24.entity)
			{
				if(global.currentAttackPlane && global.currentAttackPlane.entity)
				{
					angle=global.getAngle(em1.left,
																em1.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
					errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue=parseInt(Math.random()*10)%enemy24.shotErrorValue*errorDirection;
					enemy24.shot(1-global.stagesCount,0,angle+errorValue);
				}
			}
			else
			{
				shotTimer.dispose();
				objDisposition.dispose(shotTimer);
				shotTimer=null;
				em1=null;
			}
			errorDirection=null;
			errorValue=null;
			angle=null;
		};
		var shotTimer=new Timer(shot,1500);
		shotTimer.start();
	};
	
	this.enemy25Shot=this.enemy24Shot;
	
	this.enemy26Shot=function(enemy26)
	{
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		enemy26.addEmplacement(em1,
													enemy26.getPositionX()+enemy26.width/2-em1.width/2,
													enemy26.getPositionY()+enemy26.height-10);
		function shot()
		{
			var angle;
			var errorDirection;
			var errorValue;
			if(enemy26.entity)
			{
				if(global.currentAttackPlane && global.currentAttackPlane.entity)
				{
					angle=global.getAngle(em1.left,
																em1.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);
					errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue=parseInt(Math.random()*10)%enemy26.shotErrorValue*errorDirection;
					enemy26.shot(2,15,angle+errorValue);
				}
			}
			else
			{
				shotTimer.dispose();
				objDisposition.dispose(shotTimer);
				shotTimer=null;
				em1=null;
			}
			errorDirection=null;
			errorValue=null;
			angle=null;
		};
		var shotTimer=new Timer(shot,1300+global.stagesCount*100);
		shotTimer.start();
	};
	
	this.enemy27Shot=function(enemy27)
	{
		var shotInterval=10;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		
		enemy27.addEmplacement(em1,
													enemy27.getPositionX()+7,
													enemy27.getPositionY()+enemy27.height-30);
		enemy27.addEmplacement(em2,
													enemy27.getPositionX()+enemy27.width-25,
													enemy27.getPositionY()+enemy27.height-30);

		function shot1()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				if(enemy27.entity)
				{
					enemy27.emplacements[0].shot(enemy27.bulletSpeed,[2,15,300]);
					enemy27.emplacements[1].shot(enemy27.bulletSpeed,[2,15,240]);
				}
				else
				{
					shotTimer1.dispose();
					objDisposition.dispose(shotTimer1);
					shotTimer1=null;
					em1=null;
					em2=null;2
				}
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer1=new Timer(shot1,500);
		shotTimer1.start();
		
		var em3=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		enemy27.addEmplacement(em3,
													enemy27.getPositionX()+enemy27.width/2-em3.width/2,
													enemy27.getPositionY()+50);
		function shot2()
		{
			var angle;
			var errorDirection;
			var errorValue;
			if(enemy27.entity)
			{
				if(global.currentAttackPlane && global.currentAttackPlane.entity)
				{
					angle=global.getAngle(em3.left,
																em3.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);
					errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue=parseInt(Math.random()*10)%enemy27.shotErrorValue*errorDirection;
					enemy27.emplacements[2].shot(enemy27.bulletSpeed+2,[1,0,angle]);
				}
			}
			else
			{
				shotTimer2.dispose();
				objDisposition.dispose(shotTimer2);
				shotTimer2=null;
				em3=null;
			}
		};
		var shotTimer2=new Timer(shot2,1400+(global.stagesCount)*100);
		if(global.level>=3)
		{
			shotTimer2.start();
		}
	};
	
	this.enemy28Shot=function(enemy28)
	{
		var shotInterval=8;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		enemy28.addEmplacement(em1,
													enemy28.getPositionX()+enemy28.width/2-em1.width/2,
													enemy28.getPositionY()+enemy28.height-5);

		function shot()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				if(enemy28.entity)
				{
					enemy28.shot(global.level+2,15,270);
				}
				else
				{
					shotTimer.dispose();
					objDisposition.dispose(shotTimer);
					shotTimer=null;
					em1=null;
				}
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer=new Timer(shot,350+global.stagesCount*100);
		shotTimer.start();
	};
	
	this.enemy29Shot=function(enemy29)
	{
		var shotInterval=10;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		
		enemy29.addEmplacement(em1,
													enemy29.getPositionX()+enemy29.width/2-em1.width/2,
													enemy29.getPositionY()+enemy29.height-80);

		function shot1()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				if(enemy29.entity)
				{
					enemy29.emplacements[0].shot(enemy29.bulletSpeed,[global.level+2,15,270]);
				}
				else
				{
					shotTimer1.dispose();
					objDisposition.dispose(shotTimer1);
					shotTimer1=null;
					em1=null;
				}
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer1=new Timer(shot1,600);
		shotTimer1.start();
		
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		enemy29.addEmplacement(em2,
													enemy29.getPositionX()+enemy29.width/2-em2.width/2,
													enemy29.getPositionY()+enemy29.height-30);
		function shot2()
		{
			var angle;
			var errorDirection;
			var errorValue;
			if(enemy29.entity)
			{
				if(global.currentAttackPlane && global.currentAttackPlane.entity)
				{
					angle=global.getAngle(em2.left,
																em2.top,
																global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);
					errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue=parseInt(Math.random()*10)%enemy29.shotErrorValue*errorDirection;
					enemy29.emplacements[1].shot(enemy29.bulletSpeed+2,[1,0,angle]);
				}
			}
			else
			{
				shotTimer2.dispose();
				objDisposition.dispose(shotTimer2);
				shotTimer2=null;
				em2=null;
			}
		};
		var shotTimer2=new Timer(shot2,800+(global.stagesCount)*100);
		if(global.level>=2)
		{
			shotTimer2.start();
		}
	};
	
	this.enemy30Shot=function(enemy30)
	{
		var shotInterval=12-global.level*2;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);
		enemy30.addEmplacement(em1,
													enemy30.getPositionX()+enemy30.width/2-em1.width/2,
													enemy30.getPositionY()+enemy30.height-10);

		function shot()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				var angle;
				var errorDirection;
				var errorValue;
				if(enemy30.entity)
				{
					if(global.currentAttackPlane && global.currentAttackPlane.entity)
					{
						angle=global.getAngle(em1.left,
																	em1.top,
																	global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																	global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
						errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
						errorValue=parseInt(Math.random()*10)%enemy30.shotErrorValue*errorDirection;
						enemy30.shot(1,0,angle+errorValue);
					}
				}
				else
				{
					shotTimer.dispose();
					objDisposition.dispose(shotTimer);
					shotTimer=null;
					em1=null;
				}
				errorDirection=null;
				errorValue=null;
				angle=null;
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer=new Timer(shot,450-(global.level-1)*50);
		shotTimer.start();
	};
	
	this.enemy31Shot=function(enemy31)
	{
		var shotInterval=15-global.level*2;
		var shotEachTimeCount=4-global.stagesCount;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		
		enemy31.addEmplacement(em1,
													enemy31.getPositionX()+45,
													enemy31.getPositionY()+enemy31.height-10);
													
		enemy31.addEmplacement(em2,
													enemy31.getPositionX()+enemy31.width-50,
													enemy31.getPositionY()+enemy31.height-10);

		function shot()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				var angle1,angle2;
				var errorDirection;
				var errorValue;
				if(enemy31.entity)
				{
					if(global.currentAttackPlane && global.currentAttackPlane.entity)
					{
						angle1=global.getAngle(em1.left,
																	em1.top,
																	global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																	global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
						
						angle2=global.getAngle(em2.left,
																	em2.top,
																	global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																	global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
																	
						errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
						errorValue=parseInt(Math.random()*10)%enemy31.shotErrorValue*errorDirection;
		
						enemy31.emplacements[0].shot(enemy31.bulletSpeed,[global.level,15,angle1+errorValue]);
						enemy31.emplacements[1].shot(enemy31.bulletSpeed,[global.level,15,angle2+errorValue]);
					}
				}
				else
				{
					shotTimer.dispose();
					objDisposition.dispose(shotTimer);
					shotTimer=null;
					
					shotInterval=null;
					shotEachTimeCount=null;
					shotStateValue=null;
					em1=null;
					em2=null;
				}
				errorDirection=null;
				errorValue=null;
				angle1=null;
				angle2=null;
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer=new Timer(shot,300);
		shotTimer.start();
	};
	
	this.enemy32Shot=function(enemy32)
	{
		var shotInterval1=13+global.stagesCount*2;
		var shotEachTimeCount1=10-global.stagesCount*2;
		var shotStateValue1=shotEachTimeCount1;
		var angleDistance=30/(shotEachTimeCount1-1);
		var angleDirection=1;
		var currentAngle=270-(shotEachTimeCount1-1)/2*angleDistance;
		var shotDelay1=1;
		
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);

		enemy32.addEmplacement(em1,
												 enemy32.getPositionX()+enemy32.width/2-em1.width/2,
												 enemy32.getPositionY()+180);

		function shot1()
		{
			if(shotDelay1==0)
			{
				if(shotStateValue1--<=shotEachTimeCount1)
				{
					if(enemy32.entity)
					{
							enemy32.emplacements[0].shot(enemy32.bulletSpeed+global.level*2,[1,0,currentAngle]);
							
							currentAngle+=angleDistance*angleDirection;
							if(currentAngle>270+(shotEachTimeCount1-1)/2*angleDistance
							|| currentAngle<270-(shotEachTimeCount1-1)/2*angleDistance)
							{
								angleDirection=-angleDirection;
							}
					}
					else
					{
						shotTimer1.dispose();
						objDisposition.dispose(shotTimer1);
						shotTimer1=null;
						em1=null;
					}
				}
			}
			else
			{
				shotDelay1--;
			}
			shotStateValue1=shotStateValue1==0?shotInterval1:shotStateValue1;
		};
		
		var shotTimer1=new Timer(shot1,650-(global.level-1)*50);
		shotTimer1.start();
		
		
		
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		enemy32.addEmplacement(em2,
													enemy32.getPositionX()+enemy32.width/2-em2.width/2,
													enemy32.getPositionY()+20);
		function shot2()
		{
			var errorDirection;
			var errorValue;
			if(enemy32.entity)
			{
					errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
					errorValue=parseInt(Math.random()*10)%enemy32.shotErrorValue*errorDirection;
					enemy32.emplacements[1].shot(enemy32.bulletSpeed+3,[global.level+2,20,270]);
			}
			else
			{
				shotTimer2.dispose();
				objDisposition.dispose(shotTimer2);
				shotTimer2=null;
				em2=null;
			}
		};
		var shotTimer2=new Timer(shot2,1400+(global.stagesCount)*100);
		shotTimer2.start();
	};

	this.enemy33Shot=function(enemy33)
	{
		var shotInterval=16-(4-global.stagesCount)*2;
		var shotEachTimeCount=2+global.level;
		var shotStateValue=shotEachTimeCount;
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		
		enemy33.addEmplacement(em1,
													enemy33.getPositionX()+20,
													enemy33.getPositionY()+enemy33.height-70);
													
		enemy33.addEmplacement(em2,
													enemy33.getPositionX()+enemy33.width-30,
													enemy33.getPositionY()+enemy33.height-70);

		function shot()
		{
			if(shotStateValue--<=shotEachTimeCount)
			{
				var angle1,angle2;
				var errorDirection;
				var errorValue;
				if(enemy33.entity)
				{
					if(global.currentAttackPlane && global.currentAttackPlane.entity)
					{
						angle1=global.getAngle(em1.left,
																	em1.top,
																	global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																	global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
						
						angle2=global.getAngle(em2.left,
																	em2.top,
																	global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																	global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
																	
						errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
						errorValue=parseInt(Math.random()*10)%enemy33.shotErrorValue*errorDirection;
		
						enemy33.emplacements[0].shot(enemy33.bulletSpeed,[1,0,angle1+errorValue]);
						enemy33.emplacements[1].shot(enemy33.bulletSpeed,[1,0,angle2+errorValue]);
					}
				}
				else
				{
					shotTimer.dispose();
					objDisposition.dispose(shotTimer);
					shotTimer=null;
					
					shotInterval=null;
					shotEachTimeCount=null;
					shotStateValue=null;
					em1=null;
					em2=null;
				}
				errorDirection=null;
				errorValue=null;
				angle1=null;
				angle2=null;
			}
			shotStateValue=shotStateValue==0?shotInterval:shotStateValue;
		};
		
		var shotTimer=new Timer(shot,300);
		shotTimer.start();
	};
	
	this.enemy34Shot=this.enemy1Shot;
	
	this.enemy35Shot=function(enemy35)
	{
		var shotInterval1=11+global.stagesCount*2;
		var shotEachTimeCount1=8-global.stagesCount*2;
		var shotStateValue1=shotEachTimeCount1;
		var angleDistance=30/(shotEachTimeCount1-1);
		var angleDirection=1;
		var currentAngle=270-(shotEachTimeCount1-1)/2*angleDistance;
		var shotDelay1=1;
		
		var em1=new Emplacement("enemyShot1",global.entity.enemyBullet2);

		enemy35.addEmplacement(em1,
												 enemy35.getPositionX()+enemy35.width/2-em1.width/2,
												 enemy35.getPositionY()+enemy35.height-10);

		function shot1()
		{
			if(shotDelay1==0)
			{
				if(shotStateValue1--<=shotEachTimeCount1)
				{
					if(enemy35.entity)
					{
							enemy35.emplacements[0].shot(enemy35.bulletSpeed+global.level*2,[1,0,currentAngle]);
							
							currentAngle+=angleDistance*angleDirection;
							if(currentAngle>270+(shotEachTimeCount1-1)/2*angleDistance
							|| currentAngle<270-(shotEachTimeCount1-1)/2*angleDistance)
							{
								angleDirection=-angleDirection;
							}
					}
					else
					{
						shotTimer1.dispose();
						objDisposition.dispose(shotTimer1);
						shotTimer1=null;
						em1=null;
					}
				}
			}
			else
			{
				shotDelay1--;
			}
			shotStateValue1=shotStateValue1==0?shotInterval1:shotStateValue1;
		};
		
		var shotTimer1=new Timer(shot1,650-(global.level-1)*50);
		shotTimer1.start();
		
		
		var shotInterval2=17-(4-global.stagesCount)*2;
		var shotEachTimeCount2=4-global.stagesCount;
		var shotStateValue2=shotEachTimeCount2;
		var em2=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		var em3=new Emplacement("enemyShot1",global.entity.enemyBullet1);
		
		enemy35.addEmplacement(em2,
													enemy35.getPositionX()+3,
													enemy35.getPositionY()+enemy35.height-56);
													
		enemy35.addEmplacement(em3,
													enemy35.getPositionX()+enemy35.width-11,
													enemy35.getPositionY()+enemy35.height-56);

		function shot2()
		{
			if(shotStateValue2--<=shotEachTimeCount2)
			{
				var angle1,angle2;
				var errorDirection;
				var errorValue;
				if(enemy35.entity)
				{
					if(global.currentAttackPlane && global.currentAttackPlane.entity)
					{
						angle1=global.getAngle(em2.left,
																	em2.top,
																	global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																	global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
						
						angle2=global.getAngle(em3.left,
																	em3.top,
																	global.currentAttackPlane.getPositionX()+global.currentAttackPlane.width/2,
																	global.currentAttackPlane.getPositionY()+global.currentAttackPlane.height/2);									
																	
						errorDirection=parseInt(Math.random()*10)%2==0?1:-1;
						errorValue=parseInt(Math.random()*10)%enemy35.shotErrorValue*errorDirection;
		
						enemy35.emplacements[1].shot(enemy35.bulletSpeed,[1,0,angle1+errorValue]);
						enemy35.emplacements[2].shot(enemy35.bulletSpeed,[1,0,angle2+errorValue]);
					}
				}
				else
				{
					shotTimer2.dispose();
					objDisposition.dispose(shotTimer2);
					shotTimer2=null;
					
					shotInterval2=null;
					shotEachTimeCount2=null;
					shotStateValue2=null;
					em2=null;
					em3=null;
				}
				errorDirection=null;
				errorValue=null;
				angle1=null;
				angle2=null;
			}
			shotStateValue2=shotStateValue2==0?shotInterval2:shotStateValue2;
		};
		
		var shotTimer2=new Timer(shot2,300);
		shotTimer2.start();
	};
	
	//-------------------------
	
	Constructor();
}