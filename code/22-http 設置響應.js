const http = require('http');

const server = http.createServer((req,res) => {
    // 設置響應狀態碼
    res.statusCode = 203;
    // 設置響應描述
    res.statusMessage = 'Good';
    // 設置響應頭
    res.setHeader('content-type','text/html;charset=utf-8');
    res.setHeader('test',[1,2,3,4,5]);

    // 設置響應體
    res.write('Love');
    
    res.end();
});

server.listen(9000, () => {
    
});