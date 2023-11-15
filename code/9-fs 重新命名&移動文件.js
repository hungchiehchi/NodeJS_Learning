

const fs = require('fs');

// 重新命名
fs.rename('./file/MVI_4792.MP4','./file/airplane.MP4',err => {
    if(err) {
        console.log('重新命名失敗');
        return;
    }
    console.log('重新命名成功');
});

// 文件移動
fs.rename('./file/airplane.MP4','./data/airplane.MP4',err => {
    if(err) {
        console.log('文件移動失敗');
        return;
    }
    console.log('文件移動成功');
});