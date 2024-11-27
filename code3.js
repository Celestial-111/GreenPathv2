gdjs.Level_321Code = {};
gdjs.Level_321Code.localVariables = [];
gdjs.Level_321Code.GDNewPanelSpriteObjects1= [];
gdjs.Level_321Code.GDNewPanelSpriteObjects2= [];
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDCar1Objects1= [];
gdjs.Level_321Code.GDCar1Objects2= [];
gdjs.Level_321Code.GDGreenGrass9patchObjects1= [];
gdjs.Level_321Code.GDGreenGrass9patchObjects2= [];
gdjs.Level_321Code.GDPollution1Objects1= [];
gdjs.Level_321Code.GDPollution1Objects2= [];
gdjs.Level_321Code.GDCar2Objects1= [];
gdjs.Level_321Code.GDCar2Objects2= [];
gdjs.Level_321Code.GDPollution2Objects1= [];
gdjs.Level_321Code.GDPollution2Objects2= [];
gdjs.Level_321Code.GDPollution3Objects1= [];
gdjs.Level_321Code.GDPollution3Objects2= [];
gdjs.Level_321Code.GDPollution4Objects1= [];
gdjs.Level_321Code.GDPollution4Objects2= [];
gdjs.Level_321Code.GDCar3Objects1= [];
gdjs.Level_321Code.GDCar3Objects2= [];
gdjs.Level_321Code.GDCar4Objects1= [];
gdjs.Level_321Code.GDCar4Objects2= [];
gdjs.Level_321Code.GDSmoke1Objects1= [];
gdjs.Level_321Code.GDSmoke1Objects2= [];
gdjs.Level_321Code.GDScoreTextObjects1= [];
gdjs.Level_321Code.GDScoreTextObjects2= [];
gdjs.Level_321Code.GDBrick3Objects1= [];
gdjs.Level_321Code.GDBrick3Objects2= [];
gdjs.Level_321Code.GDHouseTallBackgroundObjects1= [];
gdjs.Level_321Code.GDHouseTallBackgroundObjects2= [];
gdjs.Level_321Code.GDCar5Objects1= [];
gdjs.Level_321Code.GDCar5Objects2= [];
gdjs.Level_321Code.GDFlatDarkJoystickObjects1= [];
gdjs.Level_321Code.GDFlatDarkJoystickObjects2= [];
gdjs.Level_321Code.GDLeftArrowRoundButtonObjects1= [];
gdjs.Level_321Code.GDLeftArrowRoundButtonObjects2= [];
gdjs.Level_321Code.GDRightArrowRoundButtonObjects1= [];
gdjs.Level_321Code.GDRightArrowRoundButtonObjects2= [];
gdjs.Level_321Code.GDLaunchRoundButtonObjects1= [];
gdjs.Level_321Code.GDLaunchRoundButtonObjects2= [];


gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRightArrowRoundButtonObjects1Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.Level_321Code.GDRightArrowRoundButtonObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLeftArrowRoundButtonObjects1Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.Level_321Code.GDLeftArrowRoundButtonObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLaunchRoundButtonObjects1Objects = Hashtable.newFrom({"LaunchRoundButton": gdjs.Level_321Code.GDLaunchRoundButtonObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSmoke1Objects1Objects = Hashtable.newFrom({"Smoke1": gdjs.Level_321Code.GDSmoke1Objects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDCar2Objects1Objects = Hashtable.newFrom({"Car2": gdjs.Level_321Code.GDCar2Objects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDCar1Objects1Objects = Hashtable.newFrom({"Car1": gdjs.Level_321Code.GDCar1Objects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDCar3Objects1Objects = Hashtable.newFrom({"Car3": gdjs.Level_321Code.GDCar3Objects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDCar4Objects1Objects = Hashtable.newFrom({"Car4": gdjs.Level_321Code.GDCar4Objects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSmoke1Objects1Objects = Hashtable.newFrom({"Smoke1": gdjs.Level_321Code.GDSmoke1Objects1});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "many-cars-honking-celebrating-sound-effect-124463855_nw_prev.mp3", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Walking Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Walking Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Level_321Code.GDRightArrowRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDRightArrowRoundButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Level_321Code.GDLeftArrowRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLeftArrowRoundButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LaunchRoundButton"), gdjs.Level_321Code.GDLaunchRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLaunchRoundButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Smoke1"), gdjs.Level_321Code.GDSmoke1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSmoke1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDSmoke1Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDSmoke1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSmoke1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Level_321Code.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDScoreTextObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car1"), gdjs.Level_321Code.GDCar1Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDCar1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCar1Objects1[i].setX((gdjs.Level_321Code.GDCar1Objects1[i].getPointX("")) + 3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car1"), gdjs.Level_321Code.GDCar1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDCar1Objects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDCar1Objects1[i].getX() > 1280 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDCar1Objects1[k] = gdjs.Level_321Code.GDCar1Objects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDCar1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDCar1Objects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDCar1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCar1Objects1[i].setPosition(-((gdjs.Level_321Code.GDCar1Objects1[i].getWidth())),502);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car1"), gdjs.Level_321Code.GDCar1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pollution1"), gdjs.Level_321Code.GDPollution1Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPollution1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPollution1Objects1[i].setPosition((( gdjs.Level_321Code.GDCar1Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCar1Objects1[0].getPointX("")),(( gdjs.Level_321Code.GDCar1Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCar1Objects1[0].getPointY("")) + 30);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car2"), gdjs.Level_321Code.GDCar2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pollution2"), gdjs.Level_321Code.GDPollution2Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPollution2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPollution2Objects1[i].setPosition((( gdjs.Level_321Code.GDCar2Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCar2Objects1[0].getPointX("")),(( gdjs.Level_321Code.GDCar2Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCar2Objects1[0].getPointY("")) + 30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car2"), gdjs.Level_321Code.GDCar2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDCar2Objects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDCar2Objects1[i].getX() > 1280 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDCar2Objects1[k] = gdjs.Level_321Code.GDCar2Objects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDCar2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDCar2Objects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDCar2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCar2Objects1[i].setPosition(-((gdjs.Level_321Code.GDCar2Objects1[i].getWidth())),502);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car2"), gdjs.Level_321Code.GDCar2Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDCar2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCar2Objects1[i].setX((gdjs.Level_321Code.GDCar2Objects1[i].getPointX("")) + 3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car3"), gdjs.Level_321Code.GDCar3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDCar3Objects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDCar3Objects1[i].getX() > 1280 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDCar3Objects1[k] = gdjs.Level_321Code.GDCar3Objects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDCar3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDCar3Objects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDCar3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCar3Objects1[i].setPosition(-((gdjs.Level_321Code.GDCar3Objects1[i].getWidth())),502);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car3"), gdjs.Level_321Code.GDCar3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pollution3"), gdjs.Level_321Code.GDPollution3Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPollution3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPollution3Objects1[i].setPosition((( gdjs.Level_321Code.GDCar3Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCar3Objects1[0].getPointX("")),(( gdjs.Level_321Code.GDCar3Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCar3Objects1[0].getPointY("")) + 30);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car3"), gdjs.Level_321Code.GDCar3Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDCar3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCar3Objects1[i].setX((gdjs.Level_321Code.GDCar3Objects1[i].getPointX("")) + 3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car4"), gdjs.Level_321Code.GDCar4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDCar4Objects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDCar4Objects1[i].getX() > 1280 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDCar4Objects1[k] = gdjs.Level_321Code.GDCar4Objects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDCar4Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car2"), gdjs.Level_321Code.GDCar2Objects1);
/* Reuse gdjs.Level_321Code.GDCar4Objects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDCar4Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCar4Objects1[i].setPosition(-((( gdjs.Level_321Code.GDCar2Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCar2Objects1[0].getWidth())),502);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car4"), gdjs.Level_321Code.GDCar4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pollution4"), gdjs.Level_321Code.GDPollution4Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPollution4Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPollution4Objects1[i].setPosition((( gdjs.Level_321Code.GDCar4Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCar4Objects1[0].getPointX("")),(( gdjs.Level_321Code.GDCar4Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCar4Objects1[0].getPointY("")) + 30);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car4"), gdjs.Level_321Code.GDCar4Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDCar4Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCar4Objects1[i].setX((gdjs.Level_321Code.GDCar4Objects1[i].getPointX("")) + 3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car2"), gdjs.Level_321Code.GDCar2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDCar2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car1"), gdjs.Level_321Code.GDCar1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDCar1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car3"), gdjs.Level_321Code.GDCar3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDCar3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car4"), gdjs.Level_321Code.GDCar4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDCar4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") > 2;
if (isConditionTrue_0) {
gdjs.Level_321Code.GDSmoke1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSmoke1Objects1Objects, gdjs.randomInRange(28, 1250), gdjs.randomInRange(330, 470), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Smoke1"), gdjs.Level_321Code.GDSmoke1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDSmoke1Objects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSmoke1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDSmoke1Objects1[k] = gdjs.Level_321Code.GDSmoke1Objects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSmoke1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Level_321Code.GDScoreTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDScoreTextObjects1.length;i<l;++i) {
    if ( (gdjs.Level_321Code.GDScoreTextObjects1[i].getBehavior("Text").getText()).includes("10") ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDScoreTextObjects1[k] = gdjs.Level_321Code.GDScoreTextObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDScoreTextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2 Instructions", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Level_321Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDCar1Objects1.length = 0;
gdjs.Level_321Code.GDCar1Objects2.length = 0;
gdjs.Level_321Code.GDGreenGrass9patchObjects1.length = 0;
gdjs.Level_321Code.GDGreenGrass9patchObjects2.length = 0;
gdjs.Level_321Code.GDPollution1Objects1.length = 0;
gdjs.Level_321Code.GDPollution1Objects2.length = 0;
gdjs.Level_321Code.GDCar2Objects1.length = 0;
gdjs.Level_321Code.GDCar2Objects2.length = 0;
gdjs.Level_321Code.GDPollution2Objects1.length = 0;
gdjs.Level_321Code.GDPollution2Objects2.length = 0;
gdjs.Level_321Code.GDPollution3Objects1.length = 0;
gdjs.Level_321Code.GDPollution3Objects2.length = 0;
gdjs.Level_321Code.GDPollution4Objects1.length = 0;
gdjs.Level_321Code.GDPollution4Objects2.length = 0;
gdjs.Level_321Code.GDCar3Objects1.length = 0;
gdjs.Level_321Code.GDCar3Objects2.length = 0;
gdjs.Level_321Code.GDCar4Objects1.length = 0;
gdjs.Level_321Code.GDCar4Objects2.length = 0;
gdjs.Level_321Code.GDSmoke1Objects1.length = 0;
gdjs.Level_321Code.GDSmoke1Objects2.length = 0;
gdjs.Level_321Code.GDScoreTextObjects1.length = 0;
gdjs.Level_321Code.GDScoreTextObjects2.length = 0;
gdjs.Level_321Code.GDBrick3Objects1.length = 0;
gdjs.Level_321Code.GDBrick3Objects2.length = 0;
gdjs.Level_321Code.GDHouseTallBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDHouseTallBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDCar5Objects1.length = 0;
gdjs.Level_321Code.GDCar5Objects2.length = 0;
gdjs.Level_321Code.GDFlatDarkJoystickObjects1.length = 0;
gdjs.Level_321Code.GDFlatDarkJoystickObjects2.length = 0;
gdjs.Level_321Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Level_321Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Level_321Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Level_321Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.Level_321Code.GDLaunchRoundButtonObjects1.length = 0;
gdjs.Level_321Code.GDLaunchRoundButtonObjects2.length = 0;

gdjs.Level_321Code.eventsList0(runtimeScene);
gdjs.Level_321Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Level_321Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDCar1Objects1.length = 0;
gdjs.Level_321Code.GDCar1Objects2.length = 0;
gdjs.Level_321Code.GDGreenGrass9patchObjects1.length = 0;
gdjs.Level_321Code.GDGreenGrass9patchObjects2.length = 0;
gdjs.Level_321Code.GDPollution1Objects1.length = 0;
gdjs.Level_321Code.GDPollution1Objects2.length = 0;
gdjs.Level_321Code.GDCar2Objects1.length = 0;
gdjs.Level_321Code.GDCar2Objects2.length = 0;
gdjs.Level_321Code.GDPollution2Objects1.length = 0;
gdjs.Level_321Code.GDPollution2Objects2.length = 0;
gdjs.Level_321Code.GDPollution3Objects1.length = 0;
gdjs.Level_321Code.GDPollution3Objects2.length = 0;
gdjs.Level_321Code.GDPollution4Objects1.length = 0;
gdjs.Level_321Code.GDPollution4Objects2.length = 0;
gdjs.Level_321Code.GDCar3Objects1.length = 0;
gdjs.Level_321Code.GDCar3Objects2.length = 0;
gdjs.Level_321Code.GDCar4Objects1.length = 0;
gdjs.Level_321Code.GDCar4Objects2.length = 0;
gdjs.Level_321Code.GDSmoke1Objects1.length = 0;
gdjs.Level_321Code.GDSmoke1Objects2.length = 0;
gdjs.Level_321Code.GDScoreTextObjects1.length = 0;
gdjs.Level_321Code.GDScoreTextObjects2.length = 0;
gdjs.Level_321Code.GDBrick3Objects1.length = 0;
gdjs.Level_321Code.GDBrick3Objects2.length = 0;
gdjs.Level_321Code.GDHouseTallBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDHouseTallBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDCar5Objects1.length = 0;
gdjs.Level_321Code.GDCar5Objects2.length = 0;
gdjs.Level_321Code.GDFlatDarkJoystickObjects1.length = 0;
gdjs.Level_321Code.GDFlatDarkJoystickObjects2.length = 0;
gdjs.Level_321Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Level_321Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Level_321Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Level_321Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.Level_321Code.GDLaunchRoundButtonObjects1.length = 0;
gdjs.Level_321Code.GDLaunchRoundButtonObjects2.length = 0;


return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
