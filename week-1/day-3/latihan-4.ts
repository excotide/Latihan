const sapa = (nama: string, pesan?: string): string => {
    if (pesan) {
        return (`Halo ${nama}, ${pesan}`)
    } else {
        return (`Halo ${nama}, selamat datang!`)
    }
}

console.log(sapa("labiq"));
console.log(sapa("juli", "semangat ya!"));