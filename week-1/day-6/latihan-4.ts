enum ArahMataAngin {
    Utara,
    Timur,
    Selatan,
    Barat
};

const navigasi = (arah: ArahMataAngin) => {
    if (arah === ArahMataAngin.Utara) {
        console.log("Bergerak ke arah: Utara")
    } else if (arah === ArahMataAngin.Timur) {
        console.log("Bergerak ke arah: Timur")
    } else if (arah === ArahMataAngin.Selatan) {
        console.log("Bergerak ke arah: Selatan")
    } else if (arah === ArahMataAngin.Barat) {
        console.log("Bergerak ke arah: Barat")
    }
};

navigasi(ArahMataAngin.Utara);
navigasi(ArahMataAngin.Timur);
navigasi(ArahMataAngin.Selatan);
navigasi(ArahMataAngin.Barat);