type Buku = {
    judul: string,
    penulis: string,
    tahunTerbit: number
}

const tampilkanBuku = (buku: Buku) => {
    console.log(`Judul: "${buku.judul}"`);
    console.log(`Penulis: "${buku.penulis}"`);
    console.log(`Tahun: ${buku.tahunTerbit}`);
}

tampilkanBuku({
  judul: "Clean Architecture",
  penulis: "Robert C. Martin",
  tahunTerbit: 2017,
});