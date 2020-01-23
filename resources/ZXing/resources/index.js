import Reader from './reader.js';

if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
  const $try = document.querySelector('#try');
  const $prev = document.querySelector('#prev');
  const $code = document.querySelector('#code');

  let reader;

  $try.addEventListener('click', async () => {
    console.log('click');
    if (!reader) {
      reader = new Reader('reader');
    }
    if (reader.isLisning) return;

    $try.innerHTML = '読込中';
    $try.disabled = true;

    reader
      .listen()
      .then(code => {
        if (!code) return;
        $code.value = code;
        console.log(code);
      })
      .catch(e => {
        console.log('ahoge');
        console.log(e);
      })
      .finally(() => {
        $try.innerHTML = '再読み込み';
        $try.disabled = false;
      });
  });

  $prev.addEventListener('click', async () => {
    reader.unlisten();
  });
} else {
  console.log('対応してません');
}

/* {{{
//import Reader from './reader.js';
import { BrowserMultiFormatReader } from '@zxing/library';

if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
  const $try = document.querySelector('#try');
  const $reader = document.querySelector('#reader');
  const $code = document.querySelector('#code');

  const codeReader = new BrowserMultiFormatReader();

  codeReader
    .listVideoInputDevices()
    .then(videoInputDevices => {
      videoInputDevices.forEach(device => console.log(`${device.label}, ${device.deviceId}`));
      return videoInputDevices;
    })
    .then(videoInputDevices => {
      // 雑対応
      const firstDeviceId = videoInputDevices[0].deviceId;
      codeReader
        .decodeFromInputVideoDevice(firstDeviceId, 'video')
        .then(result => console.log(result.text))
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));

  //$try.addEventListener('click', () => {
  //  console.log('click');
  //  if (!reader) reader = new Reader($reader);
  //  if (reader.isLisning) return;

  //  $try.innerHTML = '読込中';
  //  $try.disabled = true;

  //  reader.listen().then(code => {
  //    $code.value = code;
  //    console.log(code);
  //    $try.innerHTML = '再読み込み';
  //    $try.disabled = false;
  //  });
  //});
} else {
  console.log('対応してません');
}
}}} */
