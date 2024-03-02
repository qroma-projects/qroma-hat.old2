
#include "dgsrImageOps.h"



// enum DgsrOpType {
//   DOT_UNKNOWN     = 0,
//   DOT_PLACE_PIXEL = 1,
//   DOT_SHORT_RUN   = 2,
//   DOT_MEDIUM_RUN  = 3,
//   DOT_LONG_RUN    = 4,
// };

// typedef struct _PixelRunResult {
//   uint8_t pixelGs;
//   uint32_t runLength;
//   uint8_t bytesConsumed;
// } PixelRunResult;


// const uint8_t opPlacePixelData[1] = { 0b00001010 };

// const uint8_t opShortRunData[1] = {
//   0b01100100
// };

// const uint8_t opMediumRunData[2] = {
//   0b10100100,
//   0b01100100,
// };

// const uint8_t opLongRunData[4] = {
//   0b11100100,
//   0b01100100,
//   0b10100100,
//   0b01100100,
// };





DgsrOpType getDgsrOpType(const uint8_t dgsrByte) {
  uint8_t firstTwoBits = (dgsrByte & 0b11000000);
  // Serial.println("dgsrByte");
  // Serial.println(dgsrByte);
  // Serial.println("firstTwoBits");
  // Serial.println(firstTwoBits);

  if (firstTwoBits == 0) {
    return DOT_PLACE_PIXEL;
  }
  if (firstTwoBits == 0b01000000) {
    return DOT_SHORT_RUN;
  }
  if (firstTwoBits == 0b10000000) {
    return DOT_MEDIUM_RUN;
  }
  if (firstTwoBits == 0b11000000) {
    return DOT_LONG_RUN;
  }

  return DOT_UNKNOWN;
}

uint32_t getPlacePixel(const uint8_t dgsrData) {
  // Serial.println("getPlacePixel");
  // const uint8_t byte0 = dgsrData;
  if ((dgsrData & 0b11000000) == 0) {
    return 0b00111111 & dgsrData;
  }
  return 0;
}

uint8_t getShortRunLength(const uint8_t byte0) {
  // Serial.println("getShortRunLength");
  const uint8_t shortRunLength = 0b00111111 & byte0;
  return shortRunLength;
}

uint16_t getMediumRunLength(const uint8_t byte0, const uint8_t byte1) {
  // Serial.println("getMediumRunLength");
  const uint16_t mediumRunLength = ((0b00111111 & byte0) << 8) + byte1;
  // Serial.println(mediumRunLength);
  return mediumRunLength;
}

uint32_t getLongRunLength(const uint8_t byte0, const uint8_t byte1, const uint8_t byte2, const uint8_t byte3) {
  // Serial.println("getLongRunLength");
  const uint32_t longRunLength = ((0b00111111 & byte0) << 24) + 
                                 (byte1 << 16) + 
                                 (byte2 << 8) +
                                 byte3;
  // Serial.println(longRunLength);
  return longRunLength;
}


// bool getPixelRunResult(const uint8_t * dgsrData, PixelRunResult * prr) {
//   const uint8_t firstByte = dgsrData[0];
//   if (getDgsrOpType(firstByte) != DOT_PLACE_PIXEL) {
//     // Serial.println("NOT DOT_PLACE_PIXEL");
//     return false;
//   }

//   prr->pixelGs = getPlacePixel(firstByte);

//   const uint8_t secondByte = dgsrData[1];
//   // Serial.println("secondByte");
//   // Serial.println(secondByte);
//   const DgsrOpType dgsrOpType = getDgsrOpType(secondByte);
//   // Serial.println("DgsrOpType");
//   // Serial.println(dgsrOpType);

//   switch (dgsrOpType) {
//     case DOT_SHORT_RUN:
//       prr->runLength = getShortRunLength(secondByte);
//       prr->bytesConsumed = 2;
//       return true;
//       break;
//     case DOT_MEDIUM_RUN:
//       prr->runLength = getMediumRunLength(secondByte, dgsrData[2]);
//       prr->bytesConsumed = 3;
//       return true;
//       break;
//     case DOT_LONG_RUN:
//       prr->runLength = getLongRunLength(secondByte, dgsrData[2], dgsrData[3], dgsrData[4]);
//       prr->bytesConsumed = 5;
//       return true;
//       break;
//     default:
//       return false;
//   }
// }



// const uint8_t pr1Data[] = {
//   0b00001011,
//   0b01100100,
// };

// const uint8_t pr2Data[] = {
//   0b00001011,
//   0b10100000,
//   0b00000111,
// };

// const uint8_t pr3Data[] = {
//   0b00001011,
//   0b11100000,
//   0b00000111,
//   0b00001000,
//   0b00000010,
// };

// void setup() {
//   // put your setup code here, to run once:
//   Serial.begin(115200);
//   Serial.println("Hello, ESP32!");

//   PixelRunResult prr;
//   const bool success = getPixelRunResult(pr3Data, &prr);
//   Serial.println(success);

//   Serial.println(prr.pixelGs);
//   Serial.println(prr.runLength);
//   Serial.println(prr.bytesConsumed);
//   Serial.println("---------------");

//   // uint8_t placePixel = getPlacePixel(opPlacePixelData[0]);
//   // Serial.println(placePixel);

//   // const uint32_t shortRunLength = getRunLength(opShortRunData);
//   // Serial.println("Short run length");
//   // Serial.println(shortRunLength);

//   // const uint32_t mediumRunLength = getRunLength(opMediumRunData);
//   // Serial.println("Medium run length");
//   // Serial.println(mediumRunLength);

//   // const uint32_t longRunLength = getRunLength(opLongRunData);
//   // Serial.println("Long run length");
//   // Serial.println(longRunLength);

// }

// void loop() {
//   // put your main code here, to run repeatedly:
//   delay(60000); // this speeds up the simulation
//   Serial.println("LOOP");
// }
