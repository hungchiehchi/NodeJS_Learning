// 導入 fs
const fs = require('fs');

filename = '座右銘.txt';
content = '我很有錢'

// 非同步寫入
// 程式由上往下跑，跑到 writeFile 會另外開一個線程 要進行寫入I/O
// 原先的JS 線程會繼續往下跑，不會等 writeFile 結束才往下跑
fs.writeFile(filename, content, err => {
    // 如果失敗，err 會有錯誤資料；如果成功，err 會是 null
    if(err){
        console.log('寫入失敗');
        return;
    }
    console.log('寫入成功');
});

// 同步寫入
// 會等 writeFileSync 寫入I/O 完畢後才往下跑
fs.writeFileSync(filename, content);

console.log(88888888);