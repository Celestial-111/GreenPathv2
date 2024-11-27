gdjs.FinaleCode = {};
gdjs.FinaleCode.localVariables = [];
gdjs.FinaleCode.GDNewPanelSpriteObjects1= [];
gdjs.FinaleCode.GDNewPanelSpriteObjects2= [];
gdjs.FinaleCode.GDINObjects1= [];
gdjs.FinaleCode.GDINObjects2= [];
gdjs.FinaleCode.GDDefaultPanel11Objects1= [];
gdjs.FinaleCode.GDDefaultPanel11Objects2= [];
gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects2= [];


gdjs.FinaleCode.eventsList0 = function(runtimeScene) {

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


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame"), gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects1.length;i<l;++i) {
    if ( gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects1[k] = gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects1[i];
        ++k;
    }
}
gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.FinaleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinaleCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.FinaleCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.FinaleCode.GDINObjects1.length = 0;
gdjs.FinaleCode.GDINObjects2.length = 0;
gdjs.FinaleCode.GDDefaultPanel11Objects1.length = 0;
gdjs.FinaleCode.GDDefaultPanel11Objects2.length = 0;
gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects2.length = 0;

gdjs.FinaleCode.eventsList0(runtimeScene);
gdjs.FinaleCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.FinaleCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.FinaleCode.GDINObjects1.length = 0;
gdjs.FinaleCode.GDINObjects2.length = 0;
gdjs.FinaleCode.GDDefaultPanel11Objects1.length = 0;
gdjs.FinaleCode.GDDefaultPanel11Objects2.length = 0;
gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.FinaleCode.GDRedButtonWithGoldFrameObjects2.length = 0;


return;

}

gdjs['FinaleCode'] = gdjs.FinaleCode;
