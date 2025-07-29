type Mahasiswa = {
    nama: string;
    nilai: number;
}

const mahasiswa: Mahasiswa[] = [
    {nama: "labiq", nilai: 95},
    {nama: "dono", nilai: 90},
    {nama: "budi", nilai: 90},
]

function dataMahasiswa(): [number, number, string, number] {
    let totalNilai = 0;
    for (let i = 0; i < mahasiswa.length; i++) {
        (totalNilai += mahasiswa[i].nilai);
    }

    let tertinggi = mahasiswa[0]
    for (let i = 0; i < mahasiswa.length; i++) {
        if (mahasiswa[i].nilai > tertinggi.nilai) {
            tertinggi = mahasiswa[i];
        }
    }

    let namaTertinggi = tertinggi.nama
    let rataNilai = totalNilai / mahasiswa.length;
    
    return [totalNilai, rataNilai, namaTertinggi, tertinggi.nilai];
}

const [totalNilai, rataNilai, namaTertinggi, nilaiTertinggi] = dataMahasiswa();
console.log("Total nilai: ", totalNilai);
console.log("Rata-rata : ", rataNilai);
console.log("Nilai tertinggi : ", namaTertinggi, "-", nilaiTertinggi );