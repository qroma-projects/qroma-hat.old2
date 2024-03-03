#ifndef QROMA_COMMANDS_H
#define QROMA_COMMANDS_H

#include <qroma-proto/my-project-messages.pb.h>

void onMyProjectCommand(MyProjectCommand * message, MyProjectResponse * response);

void populateGetHatDetailsResponse(HatDetailsResponse * response);
void populateGetFirmwareDetailsResponse(FirmwareDetailsResponse * response);

extern UpdateConfiguration updateConfiguration;
extern HatConfiguration hatConfiguration;

#endif