import Reader from './reader.js';

if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
  const $try = document.querySelector('#try');
  const $reader = document.querySelector('#reader');
  const $code = document.querySelector('#code');

  let reader;

  $try.addEventListener('click', () => {
    console.log('click');
    if (!reader) reader = new Reader($reader);
    if (reader.isLisning) return;

    $try.innerHTML = '読込中';
    $try.disabled = true;

    reader.listen().then(code => {
      $code.value = code;
      console.log(code);
      $try.innerHTML = '再読み込み';
      $try.disabled = false;
    });
  });
} else {
  console.log('対応してません');
}
