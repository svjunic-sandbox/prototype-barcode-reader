import Quagga from 'quagga';

console.log(document.querySelector('#live'));

if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
  console.log('enable');
} else {
  console.log('disable');
}

Quagga.init(
  {
    inputStream: {
      name: 'Live',
      type: 'LiveStream',
      target: document.querySelector('#live') // Or '#yourElement' (optional)
    },
    decoder: {
      readers: ['ean_reader']
    }
  },
  function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Initialization finished. Ready to start');
    Quagga.start();
  }
);

Quagga.onDetected(success => {
  const code = success.codeResult.code;
  if (calc(code)) alert(code);
});
