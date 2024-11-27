gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.GDNewPanelSpriteObjects1= [];
gdjs.Main_32MenuCode.GDNewPanelSpriteObjects2= [];
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDPlay_9595MenuObjects1= [];
gdjs.Main_32MenuCode.GDPlay_9595MenuObjects2= [];
gdjs.Main_32MenuCode.GDQuit_9595MenuObjects1= [];
gdjs.Main_32MenuCode.GDQuit_9595MenuObjects2= [];
gdjs.Main_32MenuCode.GDInstructions_9595MenuObjects1= [];
gdjs.Main_32MenuCode.GDInstructions_9595MenuObjects2= [];


gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPlay_95959595MenuObjects1Objects = Hashtable.newFrom({"Play_Menu": gdjs.Main_32MenuCode.GDPlay_9595MenuObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDQuit_95959595MenuObjects1Objects = Hashtable.newFrom({"Quit_Menu": gdjs.Main_32MenuCode.GDQuit_9595MenuObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDInstructions_95959595MenuObjects1Objects = Hashtable.newFrom({"Instructions_Menu": gdjs.Main_32MenuCode.GDInstructions_9595MenuObjects1});
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Menu"), gdjs.Main_32MenuCode.GDPlay_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPlay_95959595MenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1 Instructions", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit_Menu"), gdjs.Main_32MenuCode.GDQuit_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDQuit_95959595MenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instructions_Menu"), gdjs.Main_32MenuCode.GDInstructions_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDInstructions_95959595MenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlay_9595MenuObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlay_9595MenuObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuit_9595MenuObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuit_9595MenuObjects2.length = 0;
gdjs.Main_32MenuCode.GDInstructions_9595MenuObjects1.length = 0;
gdjs.Main_32MenuCode.GDInstructions_9595MenuObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlay_9595MenuObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlay_9595MenuObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuit_9595MenuObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuit_9595MenuObjects2.length = 0;
gdjs.Main_32MenuCode.GDInstructions_9595MenuObjects1.length = 0;
gdjs.Main_32MenuCode.GDInstructions_9595MenuObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
