const fs = require('fs')
const readline = require('readline');
const { json } = require('stream/consumers');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//membauat folder data
const dirPath = './data'
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat contact json
const dataPath = './data/contacts.json' 
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (object) => {
            if (!pertanyaan) reject
            resolve(object)
        })
    })
}

const simpanContacts = (nama, email, noHP) => {
    const contact = { nama, email, noHP};
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log("berhasil memasukkan data");
    console.log(`data dimasukkan nama: ${contact.nama}, email: ${contact.email} noHP: ${contact.noHP}`);
}

module.exports = { tulisPertanyaan, simpanContacts, rl }