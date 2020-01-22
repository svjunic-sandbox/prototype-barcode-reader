import { BrowserMultiFormatReader } from '@zxing/library';

/**
 * zxing/libraryのラッパー
 * @class
 * @classdesc description
 */
export default class Reader {
  /** @constructs */
  constructor(stage) {
    this.stage = stage;
    this.codeReader = new BrowserMultiFormatReader();
    this.isLisning = false;
  }

  listen() {
    return new Promise(async (resolve, reject) => {
      if (this.isLisning) {
        reject('already listening');
        return;
      }

      this.isLisning = true;

      // undefined で environment facing
      const result = await this.codeReader.decodeFromInputVideoDevice(undefined, this.stage);

      resolve(result);

      this.isLisning = false;
    });
  }
}
