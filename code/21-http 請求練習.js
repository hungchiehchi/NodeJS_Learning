
const http = require('http');

const server = http.createServer((request, response) => {

    response.writeHead(200, {
        'content-type' : 'text/html;charset=utf-8',
    });

    // 請求的方法
    let {method} = request;
    // 請求的URL
    let {pathname} = new URL(request.url,'http://127.0.0.1');
    // console.log(method, pathname);

    if(method == 'GET' && pathname === '/login'){
        response.end('登入頁面');
    }else if(method == 'GET' && pathname === '/reg'){
        response.end('註冊頁面');
    }else{
        response.end('Not Found');
    }
});

server.listen(9000, () => {
    console.log('服務啟動，9000 Port 監聽中');
});