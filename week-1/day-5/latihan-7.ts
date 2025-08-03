type Respon = string | number;

const tampilkanRespon = (respon: Respon) => {
    typeof respon === "string"
        ? console.log(`Pesan: ${respon}`)
        : console.log(`Kode: ${respon}`);
}

tampilkanRespon("Berhasil");
tampilkanRespon(200);