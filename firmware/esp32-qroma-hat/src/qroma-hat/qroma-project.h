#ifndef QROMA_PROJECT_H
#define QROMA_PROJECT_H

#include <Arduino.h>
#include "qroma-commands.h"


#define QROMA_PROJECT_CONFIG_FILENAME "/qroma-hat.config"

void qromaProjectSetup();

void qromaProjectLoop();

#endif