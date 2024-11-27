gdjs.InstructionsCode = {};
gdjs.InstructionsCode.localVariables = [];
gdjs.InstructionsCode.GDNewPanelSpriteObjects1= [];
gdjs.InstructionsCode.GDNewPanelSpriteObjects2= [];
gdjs.InstructionsCode.GDNewPanelSprite2Objects1= [];
gdjs.InstructionsCode.GDNewPanelSprite2Objects2= [];
gdjs.InstructionsCode.GDNewTextObjects1= [];
gdjs.InstructionsCode.GDNewTextObjects2= [];
gdjs.InstructionsCode.GDNewPanelSprite3Objects1= [];
gdjs.InstructionsCode.GDNewPanelSprite3Objects2= [];
gdjs.InstructionsCode.GDDefaultTransparentPanel11Objects1= [];
gdjs.InstructionsCode.GDDefaultTransparentPanel11Objects2= [];
gdjs.InstructionsCode.GDMainMenu_9595ButtonObjects1= [];
gdjs.InstructionsCode.GDMainMenu_9595ButtonObjects2= [];


gdjs.InstructionsCode.mapOfGDgdjs_9546InstructionsCode_9546GDMainMenu_95959595ButtonObjects1Objects = Hashtable.newFrom({"MainMenu_Button": gdjs.InstructionsCode.GDMainMenu_9595ButtonObjects1});
gdjs.InstructionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MainMenu_Button"), gdjs.InstructionsCode.GDMainMenu_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_9546InstructionsCode_9546GDMainMenu_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.InstructionsCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.InstructionsCode.GDNewTextObjects1.length = 0;
gdjs.InstructionsCode.GDNewTextObjects2.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.InstructionsCode.GDDefaultTransparentPanel11Objects1.length = 0;
gdjs.InstructionsCode.GDDefaultTransparentPanel11Objects2.length = 0;
gdjs.InstructionsCode.GDMainMenu_9595ButtonObjects1.length = 0;
gdjs.InstructionsCode.GDMainMenu_9595ButtonObjects2.length = 0;

gdjs.InstructionsCode.eventsList0(runtimeScene);
gdjs.InstructionsCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.InstructionsCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.InstructionsCode.GDNewTextObjects1.length = 0;
gdjs.InstructionsCode.GDNewTextObjects2.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.InstructionsCode.GDDefaultTransparentPanel11Objects1.length = 0;
gdjs.InstructionsCode.GDDefaultTransparentPanel11Objects2.length = 0;
gdjs.InstructionsCode.GDMainMenu_9595ButtonObjects1.length = 0;
gdjs.InstructionsCode.GDMainMenu_9595ButtonObjects2.length = 0;


return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
