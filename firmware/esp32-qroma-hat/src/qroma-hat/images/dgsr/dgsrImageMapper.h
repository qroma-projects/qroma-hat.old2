
#ifndef DGSR_IMAGE_MAPPER_H_INCLUDED
#define DGSR_IMAGE_MAPPER_H_INCLUDED

#include "dgsrImageOps.h"


typedef struct _PixelRunResult {
  uint8_t pixelGs;
  uint32_t runLength;
  uint8_t bytesConsumed;
} PixelRunResult;


bool getPixelRunResult(const uint8_t * dgsrData, PixelRunResult * prr);

bool mapDgsrImageToHatData(HatDgsrImageDef * dgsrImageDef, HatImageData * hatImageDef);


#endif
