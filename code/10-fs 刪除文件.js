
const fs = require('fs');

// 取消鏈結
// fs.unlink('./data/airplane.MP4', err => {
//     if(err){
//         console.log('刪除失敗');
//         return;
//     }
//     console.log('刪除成功');
// });

// rm 方法

fs.rm('./data/airplane.MP4', err => {
    if(err){
        console.log('刪除失敗');
        return;
    }
    console.log('刪除成功');
});