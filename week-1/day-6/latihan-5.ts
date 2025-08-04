enum StatusProyek {
    Selesai = "Selesai",
    Proses = "Dalam Proses",
    Ditunda = "Ditunda"
};

const cekStatus = (status: StatusProyek) => {
    console.log(`Status Proyek: ${status}`);
};

cekStatus(StatusProyek.Selesai);
cekStatus(StatusProyek.Ditunda);
cekStatus(StatusProyek.Proses);