const http = require('http')

http
    .createServer((req, res) => {
        res.writeHead(200, {
            'content-type' : 'text/html'
        })

        const url = req.url
        console.log(url)

        res.write('./index.html')
    })
    .listen(3000, () => {
        console.log('port 3000')
    })