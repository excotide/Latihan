type Film = {
    judul: string,
    sutradara: string,
    tahunRilis: number
};

const daftarFilm: Film[] = [
    {judul: "Inception", sutradara: "Cristoper Nolan", tahunRilis: 2010},
    {judul: "Interstellar", sutradara: "Cristoper Nolan", tahunRilis: 2014},
    {judul: "Oppenheimer", sutradara: "Cristoper Nolan", tahunRilis: 2023}
];

daftarFilm.forEach((film) => {
    console.log(`Judul: ${film.judul}, Sutradara: ${film.sutradara}, Tahun: ${film.tahunRilis}`);
});

const cariFIlmTerbaru = () => {
    let dataFilm = daftarFilm[0];
    daftarFilm.forEach((filmTerbaru) => {
        if (filmTerbaru.tahunRilis > dataFilm.tahunRilis) {
            dataFilm = filmTerbaru
        }
    })

    return dataFilm;
}

const filmTerbaru = cariFIlmTerbaru();
console.log(`Film terbaru: ${filmTerbaru.judul} (${filmTerbaru.tahunRilis})`);