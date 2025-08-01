type Film = {
  judul: string;
  sutradara: string;
  tahun: number;
};

const daftarFilm: Film[] = [
  { judul: "Inception", sutradara: "Christopher Nolan", tahun: 2010 },
  { judul: "Parasite", sutradara: "Bong Joon-ho", tahun: 2019 },
  { judul: "Interstellar", sutradara: "Christopher Nolan", tahun: 2014 },
];

const [
    { judul: film1, tahun: tahun1},
    { judul: film2, tahun: tahun2}
] = daftarFilm
console.log(`Film 1: ${film1} (${tahun1})`);
console.log(`Film 2: ${film2} (${tahun2})`);