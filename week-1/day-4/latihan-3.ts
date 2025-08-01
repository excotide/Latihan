type Buku = {
  judul: string;
  penulis: string;
  tahun: number;
};

const daftarBuku: Buku[] = [
  { judul: "Clean Code", penulis: "Robert C. Martin", tahun: 2008 },
  { judul: "The Pragmatic Programmer", penulis: "Andrew Hunt", tahun: 1999 },
  { judul: "You Don’t Know JS", penulis: "Kyle Simpson", tahun: 2014 },
];

const [
    { judul: judul1, penulis: penulis1 },
    { judul: judul2, penulis: penulis2 }
] = daftarBuku;
console.log(`Buku 1: ${judul1} oleh ${penulis1}`);
console.log(`Buku 2: ${judul2} oleh ${penulis2}`);
