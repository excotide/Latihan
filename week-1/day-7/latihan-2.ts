type Siswa = [string, number, boolean];

const mhs1: Siswa = ["Labiq", 2, true];
console.log(`Nama: ${mhs1[0]}, Semester: ${mhs1[1]}, Status: ${mhs1[2] === true ? "Aktif" : "Nonaktif"} `);