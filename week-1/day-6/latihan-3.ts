type InfoProduk = {
    nama: string;
    harga: number;
};

type StokProduk = {
    stok: number;
    tersedia: boolean;
};

type DetailProduk = InfoProduk & StokProduk;

const produk1: DetailProduk = {
    nama: "oreo",
    harga: 10000,
    stok: 10,
    tersedia: true
};

console.log(produk1);