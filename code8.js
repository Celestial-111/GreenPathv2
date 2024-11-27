gdjs.Level_324_32InstructionsCode = {};
gdjs.Level_324_32InstructionsCode.localVariables = [];
gdjs.Level_324_32InstructionsCode.GDNewPanelSpriteObjects1= [];
gdjs.Level_324_32InstructionsCode.GDNewPanelSpriteObjects2= [];
gdjs.Level_324_32InstructionsCode.GDINObjects1= [];
gdjs.Level_324_32InstructionsCode.GDINObjects2= [];
gdjs.Level_324_32InstructionsCode.GDDefaultPanel11Objects1= [];
gdjs.Level_324_32InstructionsCode.GDDefaultPanel11Objects2= [];


gdjs.Level_324_32InstructionsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") >= 8;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 4", false);
}}

}


};

gdjs.Level_324_32InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_324_32InstructionsCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Level_324_32InstructionsCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Level_324_32InstructionsCode.GDINObjects1.length = 0;
gdjs.Level_324_32InstructionsCode.GDINObjects2.length = 0;
gdjs.Level_324_32InstructionsCode.GDDefaultPanel11Objects1.length = 0;
gdjs.Level_324_32InstructionsCode.GDDefaultPanel11Objects2.length = 0;

gdjs.Level_324_32InstructionsCode.eventsList0(runtimeScene);
gdjs.Level_324_32InstructionsCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Level_324_32InstructionsCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Level_324_32InstructionsCode.GDINObjects1.length = 0;
gdjs.Level_324_32InstructionsCode.GDINObjects2.length = 0;
gdjs.Level_324_32InstructionsCode.GDDefaultPanel11Objects1.length = 0;
gdjs.Level_324_32InstructionsCode.GDDefaultPanel11Objects2.length = 0;


return;

}

gdjs['Level_324_32InstructionsCode'] = gdjs.Level_324_32InstructionsCode;
