const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

//gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'labiq',
      umur: 20
    },
    {
      nama: 'riski',
      umur: 21
    },
    {
      nama: 'febri',
      umur: 21
    },
    {
      nama: 'juli',
      umur: 29
    }
  ]
  res.render('index', {
    layout: 'layouts/main-layouts',
    nama: 'labiq',
    title: 'Home',
    mahasiswa,
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layouts',
    title: 'About',
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main-layouts',
    title: 'Contact'
  })
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