const http = require('http')
const fs = require('fs')
const port = 3000;

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404);
            res.write('error 404')
        } else {
            res.write(data);
        }

        res.end()
    });
}

http
    .createServer((req, res) => {
        res.writeHead(200, {
            'content-type' : 'text/html'
        });

        const url = req.url;
        console.log(url);

        if (url === '/about') {
            renderHTML('./about.html', res);
        } else if (url === '/contact') {
            renderHTML('./contact.html', res);
        } else {
            renderHTML('./index.html', res);
        };
    })

    .listen(3000, () => {
    console.log(`server is listening on port ${port}..`)
    });