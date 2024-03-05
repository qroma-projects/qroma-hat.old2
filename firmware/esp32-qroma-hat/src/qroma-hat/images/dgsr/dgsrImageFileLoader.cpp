#include "dgsrImageFileLoader.h"
#include <qroma/util/logger.h>
#include <LittleFS.h>
#include <qroma/util/fs.h>
#include "dgsrImageValidator.h"


bool loadFileIntoDgsrImage(const char * filePath, LoadedDgsrImage * loadedImage) {

  // validate image is on file system
  if (!doesFileExist(filePath)) {
    logError("File does not exist";
    logError(filePath);
    return false;
  }

  logInfo("LOADING DGSR FILE");
  logInfo(filePath);

  File file = LittleFS.open(filePath);

  size_t fileSize = file.size();

  logError("PARSE ERROR");

  uint8_t magicBytes[4];
  if (file.read(magicBytes, 4) != 4) {
    logError("ERROR READING MAGIC BYTES");
    return false;
  }

  if (magicBytes[0] != 'd' || 
      magicBytes[1] != 'g' ||
      magicBytes[2] != 's' ||
      magicBytes[3] != 'r')
  {
    logError("INVALID MAGIC BYTES");
    return false;
  }

  if (file.readBytes((char*)&(loadedImage->imageWidth), sizeof(loadedImage->imageWidth)) != sizeof(loadedImage->imageWidth)) {
    logError("Error reading width from file");
    return false;
  }

  uint32_t height;
  if (file.readBytes((char*)&(loadedImage->imageHeight), sizeof(loadedImage->imageHeight)) != sizeof(loadedImage->imageHeight)) {
    logError("Error reading height from file");
    return false;
  }

  size_t dgsrByteCount = fileSize - 12 - 8;
  if (dgsrByteCount > sizeof(loadedImage->dgsrData)) {
    logError("File too large. Too many DGSR bytes");
    logInfoIntWithDescription("Can't handle more than ", sizeof(loadedImage->dgsrData));
    return false;
  }

  if (file.readBytes((char*)&(loadedImage->dgsrData), sizeof(loadedImage->dgsrData)) != sizeof(loadedImage->dgsrData)) {
    logError("Error reading DGSR bytes from file");
    return false;
  }
  
  uint8_t finalBytes[8];
  if (file.readBytes((char*)finalBytes, sizeof(finalBytes)) != sizeof(finalBytes)) {
    logError("Error reading final bytes from file");
    return false;
  }

  if (finalBytes[0] != 0x00 || 
      finalBytes[1] != 0x00 ||
      finalBytes[2] != 0x00 ||
      finalBytes[3] != 0x00 ||
      finalBytes[4] != 0x00 ||
      finalBytes[5] != 0x00 ||
      finalBytes[6] != 0x00 ||
      finalBytes[7] != 0x01)
  {
    logError("INVALID MAGIC BYTES");
    return false;
  }

  return true;
}
