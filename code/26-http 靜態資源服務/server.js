
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    res.setHeader('content-type','text/html;charset=utf-8');

    let {pathname} = new URL(req.url, 'http://127.0.0.1');

    let filePath = __dirname+'/page'+pathname;

    fs.readFile(filePath, (err,data) => {
        if(err){
            res.statusCode = 500;
            res.end('文件讀取失敗');
            return;
        }

        if(pathname.includes('css')){
            res.setHeader('content-type','text/css;charset=utf-8');
        }else{
            res.setHeader('content-type','text/html;charset=utf-8');
        }
        res.end(data);
    });
});

server.listen(9000, () => {
    console.log('服務啟動');
});