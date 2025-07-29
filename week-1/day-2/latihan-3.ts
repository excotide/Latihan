type Tugas = {
    nama: string;
    selesai: boolean;
}

const daftarTugas: Tugas[] = [
    { nama: "matematika", selesai: true },
    { nama: "bahasa inggris", selesai: false },
    { nama: "pemrograman dasar", selesai: false },
]

for (let i = 0; i < daftarTugas.length; i++ ) {
    if (!daftarTugas[i].selesai) {
        console.log(`belum selesai : ${daftarTugas[i].nama}`)
    }
}