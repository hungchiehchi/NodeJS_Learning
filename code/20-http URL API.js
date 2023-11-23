const http = require('http');

const server = http.createServer((request, response) => {
    let url = new URL('https://www.youtube.com/watch?v=_o2rv35rugM');
    console.log(url.searchParams);
    response.end('url new');
});

server.listen(9000, () => {
    console.log('服務啟動');
})