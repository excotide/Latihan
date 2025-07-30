type Mahasiswa = {
    nama: string;
    nilai: number;
};

const mahasiswa: Mahasiswa[] = [
    { nama: "Labiq", nilai: 90 },
    { nama: "Dino", nilai: 85 },
    { nama: "Rani", nilai: 95 },
];

const infoMahasiswa = () => {
    let totalNilai = 0;
    let nilaiTertinggi = mahasiswa[0]
    mahasiswa.forEach((mhs) => {
        totalNilai += mhs.nilai;
    })

    mahasiswa.forEach((mhsTertinggi) => {
        if (mhsTertinggi.nilai > nilaiTertinggi.nilai) {
            nilaiTertinggi = mhsTertinggi
        }
    })

    let rataRata = totalNilai / mahasiswa.length;

    return ({totalNilai, nilaiTertinggi, rataRata})
}

const hasilInfoMahasiswa = infoMahasiswa()
console.log("Total Nilai ", hasilInfoMahasiswa.totalNilai)
console.log("Rata-rata nilai: ", hasilInfoMahasiswa.rataRata)
console.log("Nilai Tertinggi oleh: ", hasilInfoMahasiswa.nilaiTertinggi.nama)