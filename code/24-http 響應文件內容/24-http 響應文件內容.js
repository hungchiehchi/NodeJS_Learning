
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
    res.setHeader('content-type','text/html;charset=utf-8');
    
    let html = fs.readFileSync(__dirname+'/24-table.html');
    res.end(html);
});

server.listen(9000, () => {
    
});