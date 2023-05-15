function hitungTahunKabisat(input) {
  if (tahun % 4 == 0) {
    return `${tahun} adalah tahun kabisat`;
  } else {
    return `${tahun} bukan tahun kabisat`;
  }
}
console.log(hitungTahunKabisat(2021));
console.log(hitungTahunKabisat(2024)); 
