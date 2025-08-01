type Mahasiswa = {
  nama: string;
  jurusan: string;
  umur: number;
};

const daftar: Mahasiswa[] = [
  { nama: "Labiq", jurusan: "Informatika", umur: 20 },
  { nama: "Rina", jurusan: "Sistem Informasi", umur: 21 },
  { nama: "Dino", jurusan: "Teknik Komputer", umur: 19 },
];

// menggunkan destructure
const [mhs1, mhs2] = daftar;
const { nama: nama1, jurusan: jurusan1 } = mhs1;
const { nama: nama2, jurusan: jurusan2 } = mhs2;

console.log(`Mahasiswa 1: ${nama1} dari jurusan ${jurusan1}`);
console.log(`Mahasiswa 2: ${nama2} dari jurusan ${jurusan2}`);

// Menggunakan forEach
daftar.forEach((dataMhs, index) => {
    console.log(`Mahasiswa ${index + 1}: ${dataMhs.nama} dari jurusan ${dataMhs.jurusan}`)
})