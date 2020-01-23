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
    this.$stage = document.querySelector(`#${stage}`);
    this.codeReader = new BrowserMultiFormatReader();
    this.isLisning = false;
  }

  listen() {
    return new Promise(async (resolve, reject) => {
      if (this.isLisning) {
        reject('already listening');
        return;
      }

      this.$stage.hidden = false;
      this.isLisning = true;

      let result;

      try {
        // undefined で environment facing
        result = await this.codeReader.decodeFromInputVideoDevice(undefined, this.stage);
      } catch (e) {
        console.log(e);
      }

      this.$stage.hidden = true;
      if (this.isLisning) {
        resolve(result);
        this.isLisning = false;
      } else {
        reject('処理が中断されました');
      }
    });
  }

  unlisten() {
    console.log('unlisten');
    console.log(this.codeReader);
    this.isLisning = false;
    window.codeReader = this.codeReader;
    this.codeReader.stopStreams();
  }
}
