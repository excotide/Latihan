const nama: string = "labiq";
const kelas: string = "Teknik Informatika - A";
const nilai: number = 95;

function nilaiHuruf(): string {
    if (nilai >= 80) {
        return "A"
    } if (nilai >=70) {
        return "b"
    } if (nilai >= 60) {
        return "c"
    } else {
        return "d"
    }
}

function cekLulus(): string {
    return nilai >= 60 ? "lulus" : "tidak lulus"; 
}

console.log(`nama: ${nama}, kelas: ${kelas}, ${cekLulus()} dengan nilai ${nilaiHuruf()}`)