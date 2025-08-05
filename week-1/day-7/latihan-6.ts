type Mahasiswa = [string, number, boolean];

const mhs2: Mahasiswa = ["Labiq", 3, true];

console.log(`Nama: ${mhs2[0]}, Semester: ${mhs2[1]}, Status: ${mhs2[2] === true ? "Aktif" : "Nonaktif"}`);