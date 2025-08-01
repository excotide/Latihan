// Soal Praktik: Optional Chaining + Nullish Coalescing
type Produk = {
  nama: string;
  harga: number;
  deskripsi?: string;
};

const katalog: Produk[] = [
  { nama: "Keyboard", harga: 300000, deskripsi: "Keyboard mechanical RGB" },
  { nama: "Mouse", harga: 150000 }, // deskripsi tidak tersedia
  { nama: "Monitor", harga: 2000000, deskripsi: "Monitor 24 inci Full HD" },
];

const cariProduk = katalog.find((produk: Produk) => produk.nama === "Mouse");
console.log(`Desripsi produk: ${cariProduk?.deskripsi ?? "Deskripsi belum tersedia"}`);