gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDIntroIconObjects1= [];
gdjs.IntroCode.GDIntroIconObjects2= [];
gdjs.IntroCode.GDIntroIconObjects3= [];
gdjs.IntroCode.GDPlayerControllerObjects1= [];
gdjs.IntroCode.GDPlayerControllerObjects2= [];
gdjs.IntroCode.GDPlayerControllerObjects3= [];
gdjs.IntroCode.GDGroundMaskObjects1= [];
gdjs.IntroCode.GDGroundMaskObjects2= [];
gdjs.IntroCode.GDGroundMaskObjects3= [];
gdjs.IntroCode.GDBGObjects1= [];
gdjs.IntroCode.GDBGObjects2= [];
gdjs.IntroCode.GDBGObjects3= [];
gdjs.IntroCode.GDRoomGenObjects1= [];
gdjs.IntroCode.GDRoomGenObjects2= [];
gdjs.IntroCode.GDRoomGenObjects3= [];
gdjs.IntroCode.GDEnemyObjects1= [];
gdjs.IntroCode.GDEnemyObjects2= [];
gdjs.IntroCode.GDEnemyObjects3= [];
gdjs.IntroCode.GDCoinObjects1= [];
gdjs.IntroCode.GDCoinObjects2= [];
gdjs.IntroCode.GDCoinObjects3= [];
gdjs.IntroCode.GDCoinPickEffectObjects1= [];
gdjs.IntroCode.GDCoinPickEffectObjects2= [];
gdjs.IntroCode.GDCoinPickEffectObjects3= [];
gdjs.IntroCode.GDFadeBGObjects1= [];
gdjs.IntroCode.GDFadeBGObjects2= [];
gdjs.IntroCode.GDFadeBGObjects3= [];
gdjs.IntroCode.GDJumpButtonObjects1= [];
gdjs.IntroCode.GDJumpButtonObjects2= [];
gdjs.IntroCode.GDJumpButtonObjects3= [];
gdjs.IntroCode.GDGround_9595ThruMaskObjects1= [];
gdjs.IntroCode.GDGround_9595ThruMaskObjects2= [];
gdjs.IntroCode.GDGround_9595ThruMaskObjects3= [];
gdjs.IntroCode.GDFlagUIObjects1= [];
gdjs.IntroCode.GDFlagUIObjects2= [];
gdjs.IntroCode.GDFlagUIObjects3= [];
gdjs.IntroCode.GDCoinUIObjects1= [];
gdjs.IntroCode.GDCoinUIObjects2= [];
gdjs.IntroCode.GDCoinUIObjects3= [];
gdjs.IntroCode.GDPauseButtonObjects1= [];
gdjs.IntroCode.GDPauseButtonObjects2= [];
gdjs.IntroCode.GDPauseButtonObjects3= [];
gdjs.IntroCode.GDCoinsCollectedObjects1= [];
gdjs.IntroCode.GDCoinsCollectedObjects2= [];
gdjs.IntroCode.GDCoinsCollectedObjects3= [];
gdjs.IntroCode.GDDistanceMadeObjects1= [];
gdjs.IntroCode.GDDistanceMadeObjects2= [];
gdjs.IntroCode.GDDistanceMadeObjects3= [];
gdjs.IntroCode.GDDeathAnimationObjects1= [];
gdjs.IntroCode.GDDeathAnimationObjects2= [];
gdjs.IntroCode.GDDeathAnimationObjects3= [];
gdjs.IntroCode.GDChar_9595AbdullahObjects1= [];
gdjs.IntroCode.GDChar_9595AbdullahObjects2= [];
gdjs.IntroCode.GDChar_9595AbdullahObjects3= [];
gdjs.IntroCode.GDChar_9595FatimaObjects1= [];
gdjs.IntroCode.GDChar_9595FatimaObjects2= [];
gdjs.IntroCode.GDChar_9595FatimaObjects3= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.adMob.preventAdmobAutoInitialization();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.adMob.loadInterstitial("ca-app-pub-6257695730616358/9656020166", "ca-app-pub-6257695730616358/9390945211", false);
}{gdjs.adMob.initializeAdmob();
}}

}


};gdjs.IntroCode.asyncCallback9951700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AuthenticatePlayer", false);
}gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.IntroCode.asyncCallback9951700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.asyncCallback9951308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("IntroIcon"), gdjs.IntroCode.GDIntroIconObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDIntroIconObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDIntroIconObjects2[i].getBehavior("Opacity").setOpacity(gdjs.IntroCode.GDIntroIconObjects2[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.IntroCode.asyncCallback9951308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroIcon"), gdjs.IntroCode.GDIntroIconObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDIntroIconObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntroIconObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.IntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDIntroIconObjects1.length = 0;
gdjs.IntroCode.GDIntroIconObjects2.length = 0;
gdjs.IntroCode.GDIntroIconObjects3.length = 0;
gdjs.IntroCode.GDPlayerControllerObjects1.length = 0;
gdjs.IntroCode.GDPlayerControllerObjects2.length = 0;
gdjs.IntroCode.GDPlayerControllerObjects3.length = 0;
gdjs.IntroCode.GDGroundMaskObjects1.length = 0;
gdjs.IntroCode.GDGroundMaskObjects2.length = 0;
gdjs.IntroCode.GDGroundMaskObjects3.length = 0;
gdjs.IntroCode.GDBGObjects1.length = 0;
gdjs.IntroCode.GDBGObjects2.length = 0;
gdjs.IntroCode.GDBGObjects3.length = 0;
gdjs.IntroCode.GDRoomGenObjects1.length = 0;
gdjs.IntroCode.GDRoomGenObjects2.length = 0;
gdjs.IntroCode.GDRoomGenObjects3.length = 0;
gdjs.IntroCode.GDEnemyObjects1.length = 0;
gdjs.IntroCode.GDEnemyObjects2.length = 0;
gdjs.IntroCode.GDEnemyObjects3.length = 0;
gdjs.IntroCode.GDCoinObjects1.length = 0;
gdjs.IntroCode.GDCoinObjects2.length = 0;
gdjs.IntroCode.GDCoinObjects3.length = 0;
gdjs.IntroCode.GDCoinPickEffectObjects1.length = 0;
gdjs.IntroCode.GDCoinPickEffectObjects2.length = 0;
gdjs.IntroCode.GDCoinPickEffectObjects3.length = 0;
gdjs.IntroCode.GDFadeBGObjects1.length = 0;
gdjs.IntroCode.GDFadeBGObjects2.length = 0;
gdjs.IntroCode.GDFadeBGObjects3.length = 0;
gdjs.IntroCode.GDJumpButtonObjects1.length = 0;
gdjs.IntroCode.GDJumpButtonObjects2.length = 0;
gdjs.IntroCode.GDJumpButtonObjects3.length = 0;
gdjs.IntroCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.IntroCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.IntroCode.GDGround_9595ThruMaskObjects3.length = 0;
gdjs.IntroCode.GDFlagUIObjects1.length = 0;
gdjs.IntroCode.GDFlagUIObjects2.length = 0;
gdjs.IntroCode.GDFlagUIObjects3.length = 0;
gdjs.IntroCode.GDCoinUIObjects1.length = 0;
gdjs.IntroCode.GDCoinUIObjects2.length = 0;
gdjs.IntroCode.GDCoinUIObjects3.length = 0;
gdjs.IntroCode.GDPauseButtonObjects1.length = 0;
gdjs.IntroCode.GDPauseButtonObjects2.length = 0;
gdjs.IntroCode.GDPauseButtonObjects3.length = 0;
gdjs.IntroCode.GDCoinsCollectedObjects1.length = 0;
gdjs.IntroCode.GDCoinsCollectedObjects2.length = 0;
gdjs.IntroCode.GDCoinsCollectedObjects3.length = 0;
gdjs.IntroCode.GDDistanceMadeObjects1.length = 0;
gdjs.IntroCode.GDDistanceMadeObjects2.length = 0;
gdjs.IntroCode.GDDistanceMadeObjects3.length = 0;
gdjs.IntroCode.GDDeathAnimationObjects1.length = 0;
gdjs.IntroCode.GDDeathAnimationObjects2.length = 0;
gdjs.IntroCode.GDDeathAnimationObjects3.length = 0;
gdjs.IntroCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.IntroCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.IntroCode.GDChar_9595AbdullahObjects3.length = 0;
gdjs.IntroCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.IntroCode.GDChar_9595FatimaObjects2.length = 0;
gdjs.IntroCode.GDChar_9595FatimaObjects3.length = 0;

gdjs.IntroCode.eventsList3(runtimeScene);
gdjs.IntroCode.GDIntroIconObjects1.length = 0;
gdjs.IntroCode.GDIntroIconObjects2.length = 0;
gdjs.IntroCode.GDIntroIconObjects3.length = 0;
gdjs.IntroCode.GDPlayerControllerObjects1.length = 0;
gdjs.IntroCode.GDPlayerControllerObjects2.length = 0;
gdjs.IntroCode.GDPlayerControllerObjects3.length = 0;
gdjs.IntroCode.GDGroundMaskObjects1.length = 0;
gdjs.IntroCode.GDGroundMaskObjects2.length = 0;
gdjs.IntroCode.GDGroundMaskObjects3.length = 0;
gdjs.IntroCode.GDBGObjects1.length = 0;
gdjs.IntroCode.GDBGObjects2.length = 0;
gdjs.IntroCode.GDBGObjects3.length = 0;
gdjs.IntroCode.GDRoomGenObjects1.length = 0;
gdjs.IntroCode.GDRoomGenObjects2.length = 0;
gdjs.IntroCode.GDRoomGenObjects3.length = 0;
gdjs.IntroCode.GDEnemyObjects1.length = 0;
gdjs.IntroCode.GDEnemyObjects2.length = 0;
gdjs.IntroCode.GDEnemyObjects3.length = 0;
gdjs.IntroCode.GDCoinObjects1.length = 0;
gdjs.IntroCode.GDCoinObjects2.length = 0;
gdjs.IntroCode.GDCoinObjects3.length = 0;
gdjs.IntroCode.GDCoinPickEffectObjects1.length = 0;
gdjs.IntroCode.GDCoinPickEffectObjects2.length = 0;
gdjs.IntroCode.GDCoinPickEffectObjects3.length = 0;
gdjs.IntroCode.GDFadeBGObjects1.length = 0;
gdjs.IntroCode.GDFadeBGObjects2.length = 0;
gdjs.IntroCode.GDFadeBGObjects3.length = 0;
gdjs.IntroCode.GDJumpButtonObjects1.length = 0;
gdjs.IntroCode.GDJumpButtonObjects2.length = 0;
gdjs.IntroCode.GDJumpButtonObjects3.length = 0;
gdjs.IntroCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.IntroCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.IntroCode.GDGround_9595ThruMaskObjects3.length = 0;
gdjs.IntroCode.GDFlagUIObjects1.length = 0;
gdjs.IntroCode.GDFlagUIObjects2.length = 0;
gdjs.IntroCode.GDFlagUIObjects3.length = 0;
gdjs.IntroCode.GDCoinUIObjects1.length = 0;
gdjs.IntroCode.GDCoinUIObjects2.length = 0;
gdjs.IntroCode.GDCoinUIObjects3.length = 0;
gdjs.IntroCode.GDPauseButtonObjects1.length = 0;
gdjs.IntroCode.GDPauseButtonObjects2.length = 0;
gdjs.IntroCode.GDPauseButtonObjects3.length = 0;
gdjs.IntroCode.GDCoinsCollectedObjects1.length = 0;
gdjs.IntroCode.GDCoinsCollectedObjects2.length = 0;
gdjs.IntroCode.GDCoinsCollectedObjects3.length = 0;
gdjs.IntroCode.GDDistanceMadeObjects1.length = 0;
gdjs.IntroCode.GDDistanceMadeObjects2.length = 0;
gdjs.IntroCode.GDDistanceMadeObjects3.length = 0;
gdjs.IntroCode.GDDeathAnimationObjects1.length = 0;
gdjs.IntroCode.GDDeathAnimationObjects2.length = 0;
gdjs.IntroCode.GDDeathAnimationObjects3.length = 0;
gdjs.IntroCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.IntroCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.IntroCode.GDChar_9595AbdullahObjects3.length = 0;
gdjs.IntroCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.IntroCode.GDChar_9595FatimaObjects2.length = 0;
gdjs.IntroCode.GDChar_9595FatimaObjects3.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
