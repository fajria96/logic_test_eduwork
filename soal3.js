function printDigitValue(value) {
  let n = value.length;
  let hasil = "";

  for (let i = 0; i < n; i++) {
    if (isNaN(value[i])) {
      continue;
    }
    hasil += value[i];
  }

  console.log(hasil);

  n = hasil.length;

  for (let i = 0; i < n; i++) {
    console.log(hasil[i].padEnd(n - i, '0'));
  }
}

printDigitValue('9.86-A5.321');
