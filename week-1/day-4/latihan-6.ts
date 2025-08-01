// Berikut soal latihan lanjutan dengan destructuring dan method find():
type Koleksi = {
  judul: string;
  penulis: string;
  tahun: number;
};

const koleksiBuku: Koleksi[] = [
  { judul: "Atomic Habits", penulis: "James Clear", tahun: 2018 },
  { judul: "Deep Work", penulis: "Cal Newport", tahun: 2016 },
  { judul: "The Alchemist", penulis: "Paulo Coelho", tahun: 1988 },
];

const bukuDitemukan = koleksiBuku.find((koleksi: Koleksi) => koleksi.judul === "Deep Work");

if (bukuDitemukan) {
    const { penulis, tahun } = bukuDitemukan
    console.log(`Buku "Deep Work" ditulis oleh ${penulis} pada tahun ${tahun}`)
} else {
    console.log("buku tidak ditemukan")
}