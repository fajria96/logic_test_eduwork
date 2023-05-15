let angka = 20;
console.log(konversiBilangan(angka));

function konversiBilangan(nilai) {
  nilai = Math.abs(nilai);
  let huruf = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
  let output = "";
  if (nilai <= 0 || nilai > 100) {
    return "silahkan masukkan bilangan 1-100";
  } else if (nilai < 12) {
    output = " " + huruf[nilai];
  } else if (nilai < 20) {
    output = konversiBilangan(nilai - 10) + " belas";
  } else if (nilai < 100) {
    output = konversiBilangan(Math.floor(nilai / 10)) + " puluh" + konversiBilangan(nilai % 10);
  } else {
    return "seratus";
  }
  
  return output;
}
