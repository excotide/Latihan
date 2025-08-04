
# 📘 TypeScript Hari ke-6 – Rangkuman Materi

## 1. Intersection Types (`&`)
Digunakan untuk menggabungkan beberapa tipe menjadi satu tipe gabungan.

```ts
type Alamat = { jalan: string; kota: string; };
type Kontak = { email: string; noHP: string; };

type Pengguna = Alamat & Kontak;
```

## 2. Enum (Enumerations)
Enum digunakan untuk mendefinisikan sekumpulan nilai tetap.

```ts
enum ArahMataAngin {
  Utara,
  Timur,
  Selatan,
  Barat
}

enum StatusProyek {
  Selesai = "Selesai",
  Proses = "Dalam Proses",
  Ditunda = "Ditunda"
}
```

## 3. Literal Types
Digunakan untuk membatasi nilai pada variabel atau parameter hanya pada nilai tertentu.

```ts
type ModeTampilan = "terang" | "gelap";
type Hari = "senin" | "selasa" | "rabu";
type JenisKelamin = "pria" | "wanita";
```
