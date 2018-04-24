function stageStart()
{
	global.stagesCount=4;
	
	for(var i=1;i<=global.stagesCount;i++)
	{
		global.stagesIndexs.push(i);
	}
	var stageIndex=global.stagesIndexs.splice(parseInt(global.stagesIndexs.length*Math.random()),1);
	eval("stage"+stageIndex+"Define();");
	global.stagesCount--;
	global.currentStage.start();
};