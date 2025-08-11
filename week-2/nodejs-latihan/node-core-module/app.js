
// try {
// fs.writeFileSync('data/test.txt', 'hallo world secara synchronus');
// } catch (e) {
//     console.log(e)
// }

// fs.writeFile('data/test.txt', 'hello world secara asynchronus', (err) => {
//     console.log(err)
// });

// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data)
// })
const fs = require('fs')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan nama anda: ", (nama) => {
    rl.question("masukkan noHP anda: ", (noHP) => {
        const contact = { nama, noHP};
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log("berhasil memasukkan data");
        console.log(`data dimasukkan nama: ${contact.nama}, noHP: ${contact.noHP}`);

        rl.close();
    });
});