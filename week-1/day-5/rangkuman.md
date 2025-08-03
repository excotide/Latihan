
# Rangkuman TypeScript Hari ke-5

## 📚 Materi yang Dipelajari

### 1. Union Types
Union Types memungkinkan sebuah variabel memiliki lebih dari satu jenis tipe data.

```ts
let input: string | number;
```

### 2. Type Narrowing
Type Narrowing digunakan untuk membedakan tipe saat runtime, biasanya dengan `typeof`.

```ts
const tampilkanNilai = (input: string | number) => {
  if (typeof input === "string") {
    console.log("Nama:", input);
  } else {
    console.log("Nilai:", input);
  }
};
```

### 3. Type Alias
Type Alias memberi nama baru untuk tipe data, termasuk union atau object.

```ts
type Nilai = "A" | "B" | "C" | "D" | "E";

type Mahasiswa = {
  nama: string;
  nim: string;
  jurusan: string;
  semester: number;
};
```

---

## ✅ Latihan yang Dikerjakan

- Fungsi dengan parameter union (`string`, `number`, `boolean`)
- Validasi tipe dengan `typeof`
- Literal union type seperti `"login" | "logout" | "guest"`, `"A" | "B" | ..."`
- Penggunaan `type` untuk object (`Buku`, `Film`, `Mahasiswa`)
- `.forEach()` dan logika pencarian data terbaru

---

## 🔜 Materi Hari ke-6

- Enum
- Literal Types
- Intersection Types
- Latihan real-case lagi

Tetap semangat dan konsisten belajar! 💪
