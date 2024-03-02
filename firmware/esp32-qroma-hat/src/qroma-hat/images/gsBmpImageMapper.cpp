#include <string.h>
#include "qroma/qroma.h"
#include "gsBmpImageMapper.h"

bool mapGsBmpImageToHatData(HatGsBmpImageDef * gsBmpImageDef, HatImageData * hatImageData) {
  logInfo("mapGsBmpImageToHatData");

  hatImageData->imageHeight = gsBmpImageDef->imageHeight;
  hatImageData->imageWidth = gsBmpImageDef->imageWidth;
  hatImageData->imageLabel = gsBmpImageDef->imageLabel;

  uint32_t imageMemSize = (gsBmpImageDef->imageWidth * gsBmpImageDef->imageHeight) / 2;

  memcpy(hatImageData->imageData, gsBmpImageDef->imageData, imageMemSize);

  return true;
}
