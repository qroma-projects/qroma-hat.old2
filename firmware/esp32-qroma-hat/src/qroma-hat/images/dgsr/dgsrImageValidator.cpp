#include "dgsrImageValidator.h"
#include "dgsrImageMapper.h"
#include "dgsrImageFileLoader.h"
#include <cstddef>


bool isValidDgsrFile(const char * filePath, HatImageData * hatImageData) {

  LoadedDgsrImage loadedImage;

  bool loaded = loadFileIntoDgsrImage(filePath, &loadedImage);
  bool mapped = mapLoadedDgsrImageToHatData(&loadedImage, filePath, hatImageData);

  return mapped;
}
