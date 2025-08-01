// Soal: Destructuring dan Perhitungan Umur
type Orang = {
  nama: string;
  tahunLahir: number;
};

const daftarOrang: Orang[] = [
  { nama: "Labiq", tahunLahir: 2004 },
  { nama: "Nina", tahunLahir: 2002 },
  { nama: "Adit", tahunLahir: 2005 },
];

const [
    {nama: daftarNama1, tahunLahir: tahunLahir1},
    {nama: daftarNama2, tahunLahir: tahunLahir2}
] = daftarOrang;
console.log(`${daftarNama1} berumur ${2025 - tahunLahir1} tahun`);
console.log(`${daftarNama2} berumur ${2025 - tahunLahir2} tahun`);