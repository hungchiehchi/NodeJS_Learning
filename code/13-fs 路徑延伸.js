
const fs = require('fs');

// NOTE 相對路徑
// fs.writeFileSync('../index.html', 'love');
// fs.writeFileSync('./index.html', 'love');
// fs.writeFileSync('index.html', 'love');

// NOTE 最上層根目錄
// fs.writeFileSync('/index.html', 'love');

// NOTE 相對路徑參照的位置是: 命令行的工作目錄
// fs.writeFileSync('./index.html', 'love');

// NOTE __dirname 指的就是程式碼放置目錄的絕對路徑
// fs.writeFileSync(__dirname+'/index.html', 'love');