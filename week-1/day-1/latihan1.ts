// tipe data
let nama: string = "Labiq";
let umur: number = 20;
let aktif: boolean = true;
let nilai: number | null = null;
let hobi: string[] = ["membaca", "makan", "ngoding"]

// operasi aritmatika
let a: number = 10;
let b: number = 5;
console.log("penjumlahan", a + b);
console.log("pnegurangan", a - b);
console.log("perkaalian", a * b);
console.log("pembagian", a / b);

// logika
let lulus: boolean = true;
let hadir: boolean = false;
console.log("lulus dan hadir", lulus && hadir);
console.log("lulus atau hadir", lulus || hadir);

// latihan cek genap ganjil
function cekGanjilGenap(angka: number): string {
    return angka %2 === 0 ? "genap" : "ganjil";
}

console.log("apakah 5 ganjil/genap?", cekGanjilGenap(5))
console.log("apakah 6 ganjil/genap?", cekGanjilGenap(6))

// jumlah semua angka dalam array
function TotalArray(arr: number[]): number {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total
}

console.log(TotalArray([1, 5, 4, 6]));

function cetakNomor(nomor: number): void {
    for (let i = 1; i <= nomor; i++) {
        console.log(i)
    }
}

cetakNomor(3)

function tesLulus(nilailulus: number): string {
    function cekLulus(lulus: number): string {
        if (lulus >= 60) {
            return "lulus";
        } else {
            return "gagal";
        }
    }

    function nilai(lulus: number): string {
        if (lulus >= 80) {
            return "A"
        } if (lulus >= 70 ) {
            return "b"
        } if (lulus >= 60) {
            return "c"
        } else {
            return "e"
        }
    }

    return `${cekLulus(nilailulus)}, ${nilai(nilailulus)}`
}

console.log(tesLulus(60));
console.log(tesLulus(59));
console.log(tesLulus(79));

console.log(tesLulus(90));