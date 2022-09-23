const http = require('http')

const fs = require('fs')

const server = http.createServer((req, res) => {
    const { url, method, headers } = req;
    console.log(url);
    if(url === '/favicon.ico' && method === 'GET') {
        res.end('12')
    } else if(url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    
    } else if(url === '/users' && method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'applicant/json'
        })
        res.end(JSON.stringify({
            name: 'wangyi'
        }))
    } else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
        fs.createReadStream('./'+url).pipe(res)
    
    }
})

server.listen(3000, () => {
    console.log('server at localhost:3000');
})