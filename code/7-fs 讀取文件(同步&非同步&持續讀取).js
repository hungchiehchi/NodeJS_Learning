
const fs = require('fs');

// 非同步讀取
// fs.readFile('./file/持續寫入.txt',(err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// 同步讀取
// let data = fs.readFileSync('./file/持續寫入.txt');
// console.log(data.toString());

// 持續讀取

const rs = fs.createReadStream('./file/1609745611660.mp4');

rs.on('data',chunk => {
    console.log(chunk.length);
    // result : 
    // 65536 => 64KB (一段一段都是 64KB)
    // 24892 => 
});

rs.on('end', () => {
    console.log('影片讀取完畢');
});