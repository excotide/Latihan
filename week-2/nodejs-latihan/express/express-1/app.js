const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname})

})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root: __dirname})

})

app.get('/product/:id', (req, res) => {
    res.send('Produk id: ' + req.params.id)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>Eror 404 not found</>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




























// const http = require('http')
// const fs = require('fs')
// const port = 3000;

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err) {
//             res.writeHead(404);
//             res.write('error 404')
//         } else {
//             res.write(data);
//         }

//         res.end()
//     });
// }

// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'content-type' : 'text/html'
//         });

//         const url = req.url;
//         console.log(url);

//         if (url === '/about') {
//             renderHTML('./about.html', res);
//         } else if (url === '/contact') {
//             renderHTML('./contact.html', res);
//         } else {
//             renderHTML('./index.html', res);
//         };
//     })

//     .listen(3000, () => {
//     console.log(`server is listening on port ${port}..`)
//     });