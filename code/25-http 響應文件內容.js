
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    res.setHeader('content-type','text/html;charset=utf-8');
    
    let {pathname} = new URL(req.url, 'http://127.0.0.1');
    if(pathname === '/'){
        let html = fs.readFileSync(__dirname+'/24-table.html');
    
        res.end(html);
    }else if(pathname === '/25-css.css'){
        let css = fs.readFileSync(__dirname+'/index.css');
        res.end(css);
    }else if(pathname === '/25-js.js'){
        let js = fs.readFileSync(__dirname+'/25-js.js');
        res.end(js);
    }else{
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
    
});

server.listen(9000, () => {
    console.log('服務啟動');
});