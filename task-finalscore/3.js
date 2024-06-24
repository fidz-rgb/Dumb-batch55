// 3.Buatlah sebuah function yang akan mencetak pola segitiga terbalik yang
// terdiri atas karakter # dan + seperti berikut:
// cetakPola(5)
// # + # + #
//  + + + +
//   + # +
//    + +
//     #


function SegitigaSamaKakiTerbalik(n) {
  for (let i = 0; i < n; i++) {
    let baris = "";

    for (let j = 0; j < i; j++) {
      baris += " ";
    }

    for (let k = 0; k < 2 * (n - i) - 1; k++) {
      if (k % 2 === 0) {
        baris += "#";
      } else {
        baris += "+";
      }
    }
    console.log(baris);
  }
}
SegitigaSamaKakiTerbalik(5);
