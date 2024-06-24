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
function totalinvest (a,b,c,d){
   a = 0.035
   b = 0.13
   c = 0.145
   d = 0.125
    var invA,invB,invC,ttl,ttlAkhir;
    invA = 350000000 * a;
    return invA;
}
console.log(invA);