const rataRata = (nilai: number[]) => {
    return nilai.reduce((acc, curr) => acc + curr, 0) / nilai.length;
}

const rata = rataRata([80, 90, 70]);
console.log(rata);