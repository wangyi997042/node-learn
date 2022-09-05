

const http = require("http");

const fs = require("fs");


const server = http.createServer((req, res) => {
  const { url, method, headers } = req;
  if(url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    })
  } else if(url === '/users' && method === 'GET') {
    res.writeHead(200, {
      'Content-type': 'application/json'
    })
    res.end(JSON.stringify({
      name: "wangyi"
    }))
  } else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    fs.createReadStream('./' + url).pipe(res)
  }
})

server.listen(3000)