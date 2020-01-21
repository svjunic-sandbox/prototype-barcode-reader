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

  async init() {
    this.videoInputDevices = await this.codeReader.listVideoInputDevices();
  }

  listen() {
    return new Promise(async (resolve, reject) => {
      if (this.isLisning) {
        reject('already listening');
        return;
      }

      this.isLisning = true;

      // 雑対応
      const firstDeviceId = this.videoInputDevices[0].deviceId;

      const result = await this.codeReader.decodeFromInputVideoDevice(firstDeviceId, 'reader');

      resolve(result);

      this.isLisning = false;
    });
  }
}
