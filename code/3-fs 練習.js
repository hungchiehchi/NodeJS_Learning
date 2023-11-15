// 導入 fs
const fs = require('fs');

filename = '座右銘.txt';
content = '我很有錢'
fs.writeFile(filename, content, err => {
    // 如果失敗，err 會有錯誤資料；如果成功，err 會是 null
    if(err){
        console.log('寫入失敗');
        return;
    }
    console.log('寫入成功');
});