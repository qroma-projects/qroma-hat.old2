#include <Esp.h>
#include <fs.h>
#include "qroma-commands.h"
#include "qroma/qroma.h"
#include "qroma-project.h"
#include "eink/eink-screen.h"
#include "lib_ver.h"


UpdateConfiguration updateConfiguration = UpdateConfiguration_init_zero; 
HatConfiguration hatConfiguration = {
  .rotateImage = true,
};


void handleNoArgCommand(NoArgCommands noArgCommand, MyProjectResponse * response) {
  switch (noArgCommand) {
    case NoArgCommands_Nac_NotSet:
      logError("NoArgCommand not set");
      break;

    case NoArgCommands_Nac_ClearScreenToWhite:
      clearScreenToWhite();
      break;

    case NoArgCommands_Nac_ClearScreenToBlack:
      clearScreenToBlack();
      break;

    case NoArgCommands_Nac_GetHatDetails:
      response->which_response = MyProjectResponse_hatDetailsResponse_tag;
      populateGetHatDetailsResponse(&(response->response.hatDetailsResponse));
      break;

    case NoArgCommands_Nac_GetFirmwareDetails:
      response->which_response = MyProjectResponse_firmwareDetailsResponse_tag;
      populateGetFirmwareDetailsResponse(&(response->response.firmwareDetailsResponse));
      break;
    
    case NoArgCommands_Nac_RestartDevice:
      // no response to be forthcoming
      ESP.restart();
      break;
    
    default:
      logError("Unrecognized NoArgCommand command");
      logError(noArgCommand);
      break;
  }
}


void onMyProjectCommand(MyProjectCommand * message, MyProjectResponse * response) {

  // set this so that handler implementations are flagged if they forget to set
  // the response as part of their logic
  response->which_response = MyProjectResponse_invalidCommandResponse_tag;

  switch (message->which_command) {
    case MyProjectCommand_noArgCommand_tag:
      handleNoArgCommand(message->command.noArgCommand, response);
      break;

    default:
      logError("Unrecognized MyProjectCommand command");
      logError(message->which_command);
      break;
  }

  if (response->which_response == MyProjectResponse_invalidCommandResponse_tag) {
    strncpy(response->response.invalidCommandResponse.message,
      "Unrecognized or unhandled project command",
      sizeof(response->response.invalidCommandResponse.message));
  }
}


void populateGetHatDetailsResponse(HatDetailsResponse * response) {
  response->has_updateConfiguration = true;
  response->updateConfiguration.updateIntervalInMs = updateConfiguration.updateIntervalInMs;
  response->updateConfiguration.updateType = updateConfiguration.updateType;

  response->has_hatConfiguration = true;
  response->hatConfiguration.rotateImage = hatConfiguration.rotateImage;

  strncpy(response->activeImageFile, LIB_VER, sizeof(response->activeImageFile));
  strncpy(response->activeImageLabel, __DATE__ " " __TIME__, sizeof(response->activeImageLabel));
}


void populateGetFirmwareDetailsResponse(FirmwareDetailsResponse * response) {
  strncpy(response->version, LIB_VER, sizeof(response->version));
  strncpy(response->buildTime, __DATE__ " " __TIME__, sizeof(response->buildTime));
}
