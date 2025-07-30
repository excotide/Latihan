const salam = (nama: string, pesan?: string): string => {
    if (!pesan) {
        return (`Halo ${nama}, selamat belajar TypeScript`);
    } else {
        return (`Halo ${nama}, ${pesan}`);
    }
}

console.log(salam("labiq"));
console.log(salam("Doni", "semangat ya!"));