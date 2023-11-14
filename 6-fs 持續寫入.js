// 1. 引用 fs
const fs = require('fs');

// 2. 建立持續寫入的stream
const ws = fs.createWriteStream('./file/持續寫入.txt');

ws.write('你\r\n');
ws.write('好\r\n');
ws.write('嗎\r\n');
ws.write('宗\r\n');
ws.write('逸');

// 3. 關閉 stream (可以加也可以不加)
ws.end();