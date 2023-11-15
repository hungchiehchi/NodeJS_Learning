const fs = require('fs');
const process = require('process');

// 方法一 讀取 寫入 (單一做法)
// let data = fs.readFileSync('./file/test.mp4');
// fs.writeFileSync('./file/德安宮.mp4',data);
// console.log(process.memoryUsage()); // rss = 佔用內存的大小 43225088 bits ~= 41MB

// 方法二 建立 read, write stream，再綁定data事件 分批寫入 (更好的做法，每chunk都只讀取64KB，但上面的做法是整個檔案讀取)
const rs = fs.createReadStream('./file/test.mp4');
const ws = fs.createWriteStream('./file/德安宮2.mp4');

rs.on('data',chunk => {
    console.log(chunk.length);
    ws.write(chunk);
});

rs.on('end', () => {
    // console.log(process.memoryUsage()); // rss = 39MB
});