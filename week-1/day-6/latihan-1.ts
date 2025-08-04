type Alamat = {
    jalan: string;
    kota: string;
};

type Kontak = {
    email: string;
    noHP: string;
};

type Pengguna = Alamat & Kontak;

const data: Pengguna = {
    jalan: "Jalan Pahlawan",
    kota: "lamongan",
    email: "labiqjazz@gmail.com",
    noHP: "081234567890"
};

console.log(data);