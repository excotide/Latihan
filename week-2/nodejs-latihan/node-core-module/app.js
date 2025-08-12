const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'menambahkan contact baru',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'email',
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'no HP',
            demandOption: true,
            type: 'string',
        }
    },

    handler(argv) {
        const contact = {
            nama: argv.nama,
            email: argv.email,
            noHP: argv.noHP,
        }

        console.log(contact)
    }
})

yargs.parse()