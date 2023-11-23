// NOTE 導入 http
const http = require('http');

// NOTE 創建服務對象
const server = http.createServer( function(req, res){
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.httpVersion);
    console.log(req.headers.host);
    res.writeHead(200, {
        'content-type' : 'text/html;charset=utf-8',
    });
    res.end('歡迎來到此服務');
});

server.listen(9000, () => {
    console.log('服務啟動');
});