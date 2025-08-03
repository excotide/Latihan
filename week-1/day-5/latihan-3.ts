const cekID = (input: number | string) => {
    if (typeof input === "string") {
        console.log(`ID Pengguna: ${input.toUpperCase()}`);
    } else {
        console.log(`ID Angka: ${input}`);
    }
}

cekID("abcd123");
cekID(101);