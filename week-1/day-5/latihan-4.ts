const validasiInput = (input: string | number) => {
    if (typeof input === "string") {
        console.log(`Panjang teks: ${input.length}`);
    } else if (input >= 0) {
        console.log(`Angka valid: ${input}`);
    } else {
        console.log(`Angka tidak valid: ${input}`);
    }
}

validasiInput("halo");
validasiInput(10);
validasiInput(-5);