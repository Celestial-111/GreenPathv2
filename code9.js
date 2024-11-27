gdjs.Level_324Code = {};
gdjs.Level_324Code.localVariables = [];
gdjs.Level_324Code.GDNewPanelSpriteObjects1= [];
gdjs.Level_324Code.GDNewPanelSpriteObjects2= [];
gdjs.Level_324Code.GDWallBrickFlatObjects1= [];
gdjs.Level_324Code.GDWallBrickFlatObjects2= [];
gdjs.Level_324Code.GDPlayerObjects1= [];
gdjs.Level_324Code.GDPlayerObjects2= [];
gdjs.Level_324Code.GDDoorObjects1= [];
gdjs.Level_324Code.GDDoorObjects2= [];
gdjs.Level_324Code.GDSedanBlueObjects1= [];
gdjs.Level_324Code.GDSedanBlueObjects2= [];
gdjs.Level_324Code.GDVintageCarObjects1= [];
gdjs.Level_324Code.GDVintageCarObjects2= [];
gdjs.Level_324Code.GDPickupTruckRedObjects1= [];
gdjs.Level_324Code.GDPickupTruckRedObjects2= [];
gdjs.Level_324Code.GDFiretruckObjects1= [];
gdjs.Level_324Code.GDFiretruckObjects2= [];
gdjs.Level_324Code.GDTree3Objects1= [];
gdjs.Level_324Code.GDTree3Objects2= [];
gdjs.Level_324Code.GDBird1Objects1= [];
gdjs.Level_324Code.GDBird1Objects2= [];
gdjs.Level_324Code.GDBird2Objects1= [];
gdjs.Level_324Code.GDBird2Objects2= [];
gdjs.Level_324Code.GDBird3Objects1= [];
gdjs.Level_324Code.GDBird3Objects2= [];
gdjs.Level_324Code.GDNewTextObjects1= [];
gdjs.Level_324Code.GDNewTextObjects2= [];
gdjs.Level_324Code.GDTimerObjects1= [];
gdjs.Level_324Code.GDTimerObjects2= [];
gdjs.Level_324Code.GDWallBrickFlat2Objects1= [];
gdjs.Level_324Code.GDWallBrickFlat2Objects2= [];
gdjs.Level_324Code.GDLeftArrowRoundButtonObjects1= [];
gdjs.Level_324Code.GDLeftArrowRoundButtonObjects2= [];
gdjs.Level_324Code.GDLaunchRoundButtonObjects1= [];
gdjs.Level_324Code.GDLaunchRoundButtonObjects2= [];
gdjs.Level_324Code.GDRightArrowRoundButtonObjects1= [];
gdjs.Level_324Code.GDRightArrowRoundButtonObjects2= [];


gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_324Code.GDPlayerObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_324Code.GDDoorObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_324Code.GDPlayerObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_324Code.GDDoorObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_324Code.GDDoorObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_324Code.GDPlayerObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDBird1Objects1Objects = Hashtable.newFrom({"Bird1": gdjs.Level_324Code.GDBird1Objects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_324Code.GDPlayerObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDBird2Objects1Objects = Hashtable.newFrom({"Bird2": gdjs.Level_324Code.GDBird2Objects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_324Code.GDPlayerObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDBird3Objects1Objects = Hashtable.newFrom({"Bird3": gdjs.Level_324Code.GDBird3Objects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_324Code.GDPlayerObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDWallBrickFlatObjects1Objects = Hashtable.newFrom({"WallBrickFlat": gdjs.Level_324Code.GDWallBrickFlatObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDRightArrowRoundButtonObjects1Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.Level_324Code.GDRightArrowRoundButtonObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDLeftArrowRoundButtonObjects1Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.Level_324Code.GDLeftArrowRoundButtonObjects1});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDLaunchRoundButtonObjects1Objects = Hashtable.newFrom({"LaunchRoundButton": gdjs.Level_324Code.GDLaunchRoundButtonObjects1});
gdjs.Level_324Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Walking Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Walking Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_324Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 4;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDDoorObjects1 */
{for(var i = 0, len = gdjs.Level_324Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDDoorObjects1[i].getBehavior("Animation").setAnimationName("Opening");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DoorTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_324Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDDoorObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 4;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDDoorObjects1 */
{for(var i = 0, len = gdjs.Level_324Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDDoorObjects1[i].getBehavior("Animation").setAnimationName("Opening");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DoorTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "DoorTimer") >= 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.clampCamera(runtimeScene, 1, -(195), 4201, 720, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "many-cars-honking-celebrating-sound-effect-124463855_nw_prev.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird1"), gdjs.Level_324Code.GDBird1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDBird1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDBird1Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{for(var i = 0, len = gdjs.Level_324Code.GDBird1Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDBird1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird2"), gdjs.Level_324Code.GDBird2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDBird2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDBird2Objects1 */
{for(var i = 0, len = gdjs.Level_324Code.GDBird2Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDBird2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird3"), gdjs.Level_324Code.GDBird3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDBird3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDBird3Objects1 */
{for(var i = 0, len = gdjs.Level_324Code.GDBird3Objects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDBird3Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level_324Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDNewTextObjects1[i].getBehavior("Text").setText("Birds: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallBrickFlat"), gdjs.Level_324Code.GDWallBrickFlatObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDPlayerObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDWallBrickFlatObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


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
{
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Level_324Code.GDTimerObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDTimerObjects1[i].getBehavior("Text").setText("Time Left: " + gdjs.evtTools.common.toString(Math.floor(30 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Timer"))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") >= 30;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Level_324Code.GDRightArrowRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDRightArrowRoundButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Level_324Code.GDLeftArrowRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDLeftArrowRoundButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LaunchRoundButton"), gdjs.Level_324Code.GDLaunchRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDLaunchRoundButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_324Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_324Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Level_324Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Level_324Code.GDWallBrickFlatObjects1.length = 0;
gdjs.Level_324Code.GDWallBrickFlatObjects2.length = 0;
gdjs.Level_324Code.GDPlayerObjects1.length = 0;
gdjs.Level_324Code.GDPlayerObjects2.length = 0;
gdjs.Level_324Code.GDDoorObjects1.length = 0;
gdjs.Level_324Code.GDDoorObjects2.length = 0;
gdjs.Level_324Code.GDSedanBlueObjects1.length = 0;
gdjs.Level_324Code.GDSedanBlueObjects2.length = 0;
gdjs.Level_324Code.GDVintageCarObjects1.length = 0;
gdjs.Level_324Code.GDVintageCarObjects2.length = 0;
gdjs.Level_324Code.GDPickupTruckRedObjects1.length = 0;
gdjs.Level_324Code.GDPickupTruckRedObjects2.length = 0;
gdjs.Level_324Code.GDFiretruckObjects1.length = 0;
gdjs.Level_324Code.GDFiretruckObjects2.length = 0;
gdjs.Level_324Code.GDTree3Objects1.length = 0;
gdjs.Level_324Code.GDTree3Objects2.length = 0;
gdjs.Level_324Code.GDBird1Objects1.length = 0;
gdjs.Level_324Code.GDBird1Objects2.length = 0;
gdjs.Level_324Code.GDBird2Objects1.length = 0;
gdjs.Level_324Code.GDBird2Objects2.length = 0;
gdjs.Level_324Code.GDBird3Objects1.length = 0;
gdjs.Level_324Code.GDBird3Objects2.length = 0;
gdjs.Level_324Code.GDNewTextObjects1.length = 0;
gdjs.Level_324Code.GDNewTextObjects2.length = 0;
gdjs.Level_324Code.GDTimerObjects1.length = 0;
gdjs.Level_324Code.GDTimerObjects2.length = 0;
gdjs.Level_324Code.GDWallBrickFlat2Objects1.length = 0;
gdjs.Level_324Code.GDWallBrickFlat2Objects2.length = 0;
gdjs.Level_324Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Level_324Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Level_324Code.GDLaunchRoundButtonObjects1.length = 0;
gdjs.Level_324Code.GDLaunchRoundButtonObjects2.length = 0;
gdjs.Level_324Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Level_324Code.GDRightArrowRoundButtonObjects2.length = 0;

gdjs.Level_324Code.eventsList0(runtimeScene);
gdjs.Level_324Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Level_324Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Level_324Code.GDWallBrickFlatObjects1.length = 0;
gdjs.Level_324Code.GDWallBrickFlatObjects2.length = 0;
gdjs.Level_324Code.GDPlayerObjects1.length = 0;
gdjs.Level_324Code.GDPlayerObjects2.length = 0;
gdjs.Level_324Code.GDDoorObjects1.length = 0;
gdjs.Level_324Code.GDDoorObjects2.length = 0;
gdjs.Level_324Code.GDSedanBlueObjects1.length = 0;
gdjs.Level_324Code.GDSedanBlueObjects2.length = 0;
gdjs.Level_324Code.GDVintageCarObjects1.length = 0;
gdjs.Level_324Code.GDVintageCarObjects2.length = 0;
gdjs.Level_324Code.GDPickupTruckRedObjects1.length = 0;
gdjs.Level_324Code.GDPickupTruckRedObjects2.length = 0;
gdjs.Level_324Code.GDFiretruckObjects1.length = 0;
gdjs.Level_324Code.GDFiretruckObjects2.length = 0;
gdjs.Level_324Code.GDTree3Objects1.length = 0;
gdjs.Level_324Code.GDTree3Objects2.length = 0;
gdjs.Level_324Code.GDBird1Objects1.length = 0;
gdjs.Level_324Code.GDBird1Objects2.length = 0;
gdjs.Level_324Code.GDBird2Objects1.length = 0;
gdjs.Level_324Code.GDBird2Objects2.length = 0;
gdjs.Level_324Code.GDBird3Objects1.length = 0;
gdjs.Level_324Code.GDBird3Objects2.length = 0;
gdjs.Level_324Code.GDNewTextObjects1.length = 0;
gdjs.Level_324Code.GDNewTextObjects2.length = 0;
gdjs.Level_324Code.GDTimerObjects1.length = 0;
gdjs.Level_324Code.GDTimerObjects2.length = 0;
gdjs.Level_324Code.GDWallBrickFlat2Objects1.length = 0;
gdjs.Level_324Code.GDWallBrickFlat2Objects2.length = 0;
gdjs.Level_324Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Level_324Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Level_324Code.GDLaunchRoundButtonObjects1.length = 0;
gdjs.Level_324Code.GDLaunchRoundButtonObjects2.length = 0;
gdjs.Level_324Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Level_324Code.GDRightArrowRoundButtonObjects2.length = 0;


return;

}

gdjs['Level_324Code'] = gdjs.Level_324Code;
