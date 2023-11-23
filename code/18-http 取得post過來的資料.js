// NOTE 導入 http
const http = require('http');

// NOTE 創建服務對象
const server = http.createServer( function(req, res){
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });
    
    req.on('end', () => {
        console.log(body);
        res.end('Good');
    });
});

server.listen(9000, () => {
    console.log('服務啟動');
});