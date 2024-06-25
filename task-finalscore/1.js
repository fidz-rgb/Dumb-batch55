// 1. Seorang investor menginvestasikan modalnya sebesar 1 miliar ke beberapa
// instrumen keuangan. 350 juta ditempatkan ke deposito bank dengan
// keuntungan 3,5% per tahun, sedangkan 650 juta ditempatkan di obligasi
// negara sebesar 30% dengan keuntungan 13% per tahun, 35% ditempatkan
// di saham A dengan keuntungan 14,5% per tahun, dan sisanya ditempatkan
// di saham B dengan keuntungan 12,5% per tahun. Buatlah sebuah fungsi
// yang menghitung dan mencetak total uang investor setelah dua tahun.

// modal 1milyar
// investasi 1 = 350jt > depo bank dgn untung 3.5% / th = 0.035
// investasi 2 = 650jt > 30% ke obligasi dgn untung 13% / th = 0.13
//                     > 35% lagi ke saham A dgn untung 14.5% / th = 0.145
//                           sisanya ke saham B dgn untung 12.5% / th = 0.125
// prtanyaan :berapa total uang investor stlah 2tahun ?

// jawab =
// investasi 1 stlah 2 tahun total keuntungan : 350.000.000 x 0.035 = 12.250.000
//                                            : 12.250.000 x 2 = 24.500.000
// investasi 2 stlah 2 tahun total keuntungan :
// A. 30% / 0.3 x 650.000.000 = 195.000.000
//    195.000.000 x 0.13 = 25.350.000 x 2 = 50.700.000
// B. saham a: 35% / 0.35 x 650.000.000 = 227.500.000
//           : 227.500.000 x 0.145 = 32.987.500 x 2 = 65.975.000
//    saham b: 195.000.000 + 227.500.000 - 650.000.000 = 227.500.000
//           : 227.500.000 x 0.125 = 28.437.500 x 2 = 56.875.000
// total uang investasi stlah 2 tahun :
// keuntungan > 24.500.000 + 50.700.000 + 65.975.000 + 56.875.000 = 198.050.000
// total uang akhir > 1.000.000.000 + 198.150.000 = 1.198.150.000


// program:
const modalawal = 1000000000;

const investasi1 = 350000000;
const keuntungan1 = investasi1 * ( 0.035 * 2);
let rupiah1 = keuntungan1.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
console.log(rupiah1);

let sisaModal = modalawal - investasi1;

const investasi2 = sisaModal * 0.30;
const keuntungan2 = investasi2 * (0.13 * 2);
let rupiah2 = keuntungan2.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
console.log(rupiah2);

sisaModal -= investasi2;

const investasi3 = sisaModal * 0.35;
const keuntungan3 = investasi3 * (0.142 * 2);
let rupiah3 = keuntungan3.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
console.log(rupiah3);

sisaModal -= investasi3;

const investasi4 = sisaModal;
const keuntungan4 = investasi4 * (0.125 * 2);
let rupiah4 = keuntungan4.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
console.log(rupiah4);

const totalKeuntungan = keuntungan1 + keuntungan2 + keuntungan3 + keuntungan4;
let rpttluntung = totalKeuntungan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
const ttlkseluruhan = modalawal + totalKeuntungan;
let rpttlseluruh = ttlkseluruhan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
console.log("Total Keuntungan setelah 2 tahun adalah: Rp " + rpttluntung);
console.log("Total uang keseluruhan stlah 2 tahun: Rp "+ rpttlseluruh);