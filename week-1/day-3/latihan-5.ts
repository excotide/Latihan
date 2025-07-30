const tampilkanNilai = (nilai: number[]) => {
    nilai.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`)
    })
}

tampilkanNilai([80, 90, 70])
