import { BrowserMultiFormatReader } from '@zxing/library';

/**
 * quaggaのラッパー
 * @class
 * @classdesc description
 */
export default class Reader {
  /** @constructs */
  constructor($reader) {
    this.$stage = $reader;
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
      const result = await this.codeReader.decodeFromInputVideoDevice(undefined, 'reader');

      resolve(result);

      this.isLisning = false;
    });
  }
}
