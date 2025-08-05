# Rangkuman TypeScript Hari ke-7: Tuple

Pada hari ke-7, kita mempelajari konsep **Tuple** dalam TypeScript. Tuple memungkinkan kita menyimpan beberapa nilai dengan tipe yang berbeda dalam satu array tetap (fixed-length).

## 📘 1. Tuple Dasar

```ts
type Buku = [string, number]; // [judul, jumlahHalaman]

const buku1: Buku = ["TypeScript Dasar", 120];
console.log(`Judul: ${buku1[0]}, Halaman: ${buku1[1]}`);
```

## 👨‍🎓 2. Tuple Mahasiswa

```ts
type Mahasiswa = [string, number, boolean]; // [nama, semester, aktif]

const mhs1: Mahasiswa = ["Labiq", 3, true];
console.log(`Nama: ${mhs1[0]}, Semester: ${mhs1[1]}, Aktif: ${mhs1[2]}`);
```

## 🔒 3. Readonly Tuple

```ts
const koordinat: readonly [number, number] = [100, 200];
console.log(`Koordinat: x=${koordinat[0]}, y=${koordinat[1]}`);
// koordinat[0] = 300; // ❌ Error karena readonly
```

## 🏷️ 4. Tuple dengan Label (Named Tuple)

```ts
type Ukuran = [lebar: number, tinggi: number];

const layar: Ukuran = [1920, 1080];
console.log(`Resolusi: ${layar[0]}x${layar[1]}`);
```

---

Seluruh latihan di atas membantu memahami penggunaan tuple dalam situasi nyata seperti data buku, mahasiswa, ukuran layar, dan koordinat.