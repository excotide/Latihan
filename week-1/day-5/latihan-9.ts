type Nilai = "A" | "B" | "C" | "D" | "E";

const konversiNilai = (input: Nilai) => {
    if (input === "A") {
        console.log("Sangat Baik");
    } else if (input === "B") {
        console.log("Baik");
    } else if (input === "C") {
        console.log("Cukup")
    } else if (input === "D") {
        console.log("kurang")
    } else if (input === "E") {
        console.log("Sangat Kurang")
    } else {
        console.log("Input Tidak Valid")
    }
}

konversiNilai("A");
konversiNilai("B");
konversiNilai("C");
konversiNilai("D");
konversiNilai("E");