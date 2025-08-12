const contacts = require('./contacts')

const main = async () => {
    const nama = await contacts.tulisPertanyaan("Masukkan nama: ")
    const email = await contacts.tulisPertanyaan("Masukkan email: ")
    const noHP = await contacts.tulisPertanyaan("Masukkan noHP: ")

    contacts.rl.close() 

    contacts.simpanContacts(nama, email, noHP)
}

main()