import Quagga from 'quagga';

/**
 * quaggaのラッパー
 * @class
 * @classdesc description
 */
export default class description {
  /** @constructs */
  constructor($reader) {
    this.$stage = $reader;

    this.isLisning = false;
    this.Quagga = Quagga;

    this.Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: this.$stage,
          constraints: {
            width: window.innerWidth,
            height: 300,
            facingMode: 'environment'
          }
        },
        locator: {
          patchSize: 'medium',
          halfSample: true
        },
        numOfWorkers: 2,
        decoder: {
          readers: ['ean_reader']
        }
      },
      err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Initialization finished. Ready to start');
        this.Quagga.start();
      }
    );

    this.detectedHandlerBind = this.detectedHandler.bind(this);
  }

  listen() {
    if (this.isLisning) return;
    this.isLisning = true;
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      Quagga.onDetected(this.detectedHandlerBind);
    });
  }

  unlisten() {
    this.resolve = null;
    this.reject = null;
    Quagga.offDetected(this.detectedHandlerBind);
  }

  detectedHandler(success) {
    console.log(success);
    const code = success.codeResult.code;
    this.resolve(code);
    this.isLisning = false;
    this.unlisten();
  }
}
