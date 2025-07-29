"use strict";
// tipe data
var nama = "Labiq";
var umur = 20;
var aktif = true;
var nilai = null;
var hobi = ["membaca", "makan", "ngoding"];
// operasi aritmatika
var a = 10;
var b = 5;
console.log("penjumlahan", a + b);
console.log("pnegurangan", a - b);
console.log("perkaalian", a * b);
console.log("pembagian", a / b);
// logika
var lulus = true;
var hadir = false;
console.log("lulus dan hadir", lulus && hadir);
console.log("lulus atau hadir", lulus || hadir);
// latihan cek genap ganjil
function cekGanjilGenap(angka) {
    return angka % 2 === 0 ? "genap" : "ganjil";
}
console.log("apakah 5 ganjil/genap?", cekGanjilGenap(5));
console.log("apakah 6 ganjil/genap?", cekGanjilGenap(6));
// jumlah semua angka dalam array
function TotalArray(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(TotalArray([1, 5, 4, 6]));
function cetakNomor(nomor) {
    for (var i = 1; i <= nomor; i++) {
        console.log(i);
    }
}
cetakNomor(3);
function tesLulus(nilailulus) {
    function cekLulus(lulus) {
        if (lulus >= 60) {
            return "lulus";
        }
        else {
            return "gagal";
        }
    }
    function nilai(lulus) {
        if (lulus >= 80) {
            return "A";
        }
        if (lulus >= 70) {
            return "b";
        }
        if (lulus >= 60) {
            return "c";
        }
        else {
            return "e";
        }
    }
    return "".concat(cekLulus(lulus), ", ").concat(nilai(lulus));
}
console.log(tesLulus(60));
console.log(tesLulus(59));
console.log(tesLulus(79));
console.log(tesLulus(90));
