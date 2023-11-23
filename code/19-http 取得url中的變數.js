const http = require('http');

const url = require('url');

const server = http.createServer((request, response) => {

    let res = url.parse(request.url, true);
    
    let pathname = res.pathname;
    console.log(res.query);

    response.end('url');
});

server.listen(9000, () => {
    console.log('服務啟動');
})