gdjs.AuthenticatePlayerCode = {};
gdjs.AuthenticatePlayerCode.localVariables = [];
gdjs.AuthenticatePlayerCode.GDPlayerControllerObjects1= [];
gdjs.AuthenticatePlayerCode.GDPlayerControllerObjects2= [];
gdjs.AuthenticatePlayerCode.GDPlayerControllerObjects3= [];
gdjs.AuthenticatePlayerCode.GDGroundMaskObjects1= [];
gdjs.AuthenticatePlayerCode.GDGroundMaskObjects2= [];
gdjs.AuthenticatePlayerCode.GDGroundMaskObjects3= [];
gdjs.AuthenticatePlayerCode.GDBGObjects1= [];
gdjs.AuthenticatePlayerCode.GDBGObjects2= [];
gdjs.AuthenticatePlayerCode.GDBGObjects3= [];
gdjs.AuthenticatePlayerCode.GDRoomGenObjects1= [];
gdjs.AuthenticatePlayerCode.GDRoomGenObjects2= [];
gdjs.AuthenticatePlayerCode.GDRoomGenObjects3= [];
gdjs.AuthenticatePlayerCode.GDEnemyObjects1= [];
gdjs.AuthenticatePlayerCode.GDEnemyObjects2= [];
gdjs.AuthenticatePlayerCode.GDEnemyObjects3= [];
gdjs.AuthenticatePlayerCode.GDCoinObjects1= [];
gdjs.AuthenticatePlayerCode.GDCoinObjects2= [];
gdjs.AuthenticatePlayerCode.GDCoinObjects3= [];
gdjs.AuthenticatePlayerCode.GDCoinPickEffectObjects1= [];
gdjs.AuthenticatePlayerCode.GDCoinPickEffectObjects2= [];
gdjs.AuthenticatePlayerCode.GDCoinPickEffectObjects3= [];
gdjs.AuthenticatePlayerCode.GDFadeBGObjects1= [];
gdjs.AuthenticatePlayerCode.GDFadeBGObjects2= [];
gdjs.AuthenticatePlayerCode.GDFadeBGObjects3= [];
gdjs.AuthenticatePlayerCode.GDJumpButtonObjects1= [];
gdjs.AuthenticatePlayerCode.GDJumpButtonObjects2= [];
gdjs.AuthenticatePlayerCode.GDJumpButtonObjects3= [];
gdjs.AuthenticatePlayerCode.GDGround_9595ThruMaskObjects1= [];
gdjs.AuthenticatePlayerCode.GDGround_9595ThruMaskObjects2= [];
gdjs.AuthenticatePlayerCode.GDGround_9595ThruMaskObjects3= [];
gdjs.AuthenticatePlayerCode.GDFlagUIObjects1= [];
gdjs.AuthenticatePlayerCode.GDFlagUIObjects2= [];
gdjs.AuthenticatePlayerCode.GDFlagUIObjects3= [];
gdjs.AuthenticatePlayerCode.GDCoinUIObjects1= [];
gdjs.AuthenticatePlayerCode.GDCoinUIObjects2= [];
gdjs.AuthenticatePlayerCode.GDCoinUIObjects3= [];
gdjs.AuthenticatePlayerCode.GDPauseButtonObjects1= [];
gdjs.AuthenticatePlayerCode.GDPauseButtonObjects2= [];
gdjs.AuthenticatePlayerCode.GDPauseButtonObjects3= [];
gdjs.AuthenticatePlayerCode.GDCoinsCollectedObjects1= [];
gdjs.AuthenticatePlayerCode.GDCoinsCollectedObjects2= [];
gdjs.AuthenticatePlayerCode.GDCoinsCollectedObjects3= [];
gdjs.AuthenticatePlayerCode.GDDistanceMadeObjects1= [];
gdjs.AuthenticatePlayerCode.GDDistanceMadeObjects2= [];
gdjs.AuthenticatePlayerCode.GDDistanceMadeObjects3= [];
gdjs.AuthenticatePlayerCode.GDDeathAnimationObjects1= [];
gdjs.AuthenticatePlayerCode.GDDeathAnimationObjects2= [];
gdjs.AuthenticatePlayerCode.GDDeathAnimationObjects3= [];
gdjs.AuthenticatePlayerCode.GDChar_9595AbdullahObjects1= [];
gdjs.AuthenticatePlayerCode.GDChar_9595AbdullahObjects2= [];
gdjs.AuthenticatePlayerCode.GDChar_9595AbdullahObjects3= [];
gdjs.AuthenticatePlayerCode.GDChar_9595FatimaObjects1= [];
gdjs.AuthenticatePlayerCode.GDChar_9595FatimaObjects2= [];
gdjs.AuthenticatePlayerCode.GDChar_9595FatimaObjects3= [];


gdjs.AuthenticatePlayerCode.asyncCallback9942804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AuthenticatePlayerCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SidrIntro", false);
}gdjs.AuthenticatePlayerCode.localVariables.length = 0;
}
gdjs.AuthenticatePlayerCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.AuthenticatePlayerCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.AuthenticatePlayerCode.asyncCallback9942804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AuthenticatePlayerCode.asyncCallback9942916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AuthenticatePlayerCode.localVariables);

{ //Subevents
gdjs.AuthenticatePlayerCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AuthenticatePlayerCode.localVariables.length = 0;
}
gdjs.AuthenticatePlayerCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AuthenticatePlayerCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene), (runtimeScene) => (gdjs.AuthenticatePlayerCode.asyncCallback9942916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AuthenticatePlayerCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.AuthenticatePlayerCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.AuthenticatePlayerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AuthenticatePlayerCode.GDPlayerControllerObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDPlayerControllerObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDPlayerControllerObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDGroundMaskObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDGroundMaskObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDGroundMaskObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDBGObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDBGObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDBGObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDRoomGenObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDRoomGenObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDRoomGenObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDEnemyObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDEnemyObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDEnemyObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinPickEffectObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinPickEffectObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinPickEffectObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDFadeBGObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDFadeBGObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDFadeBGObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDJumpButtonObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDJumpButtonObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDJumpButtonObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDGround_9595ThruMaskObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDFlagUIObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDFlagUIObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDFlagUIObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinUIObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinUIObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinUIObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDPauseButtonObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDPauseButtonObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDPauseButtonObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinsCollectedObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinsCollectedObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinsCollectedObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDDistanceMadeObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDDistanceMadeObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDDistanceMadeObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDDeathAnimationObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDDeathAnimationObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDDeathAnimationObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595AbdullahObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595FatimaObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595FatimaObjects3.length = 0;

gdjs.AuthenticatePlayerCode.eventsList2(runtimeScene);
gdjs.AuthenticatePlayerCode.GDPlayerControllerObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDPlayerControllerObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDPlayerControllerObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDGroundMaskObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDGroundMaskObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDGroundMaskObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDBGObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDBGObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDBGObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDRoomGenObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDRoomGenObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDRoomGenObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDEnemyObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDEnemyObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDEnemyObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinPickEffectObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinPickEffectObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinPickEffectObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDFadeBGObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDFadeBGObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDFadeBGObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDJumpButtonObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDJumpButtonObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDJumpButtonObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDGround_9595ThruMaskObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDGround_9595ThruMaskObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDGround_9595ThruMaskObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDFlagUIObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDFlagUIObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDFlagUIObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinUIObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinUIObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinUIObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDPauseButtonObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDPauseButtonObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDPauseButtonObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinsCollectedObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinsCollectedObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDCoinsCollectedObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDDistanceMadeObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDDistanceMadeObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDDistanceMadeObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDDeathAnimationObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDDeathAnimationObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDDeathAnimationObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595AbdullahObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595AbdullahObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595AbdullahObjects3.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595FatimaObjects1.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595FatimaObjects2.length = 0;
gdjs.AuthenticatePlayerCode.GDChar_9595FatimaObjects3.length = 0;


return;

}

gdjs['AuthenticatePlayerCode'] = gdjs.AuthenticatePlayerCode;
