const cekStatus = (input: boolean | string) => {
    if (typeof input === "string") {
        console.log(`Status pengguna: ${input}`);
    } else if (input === true) {
        console.log("Pengguna aktif");
    } else {
        console.log("pengguna tidak aktif");
    }
}

cekStatus("Sedang login");
cekStatus(true);
cekStatus(false);