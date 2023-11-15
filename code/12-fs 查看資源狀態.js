
const fs = require('fs');

fs.stat('../file/airplane.MP4', (err, data) => {
    if(err){
        console.log('操作失敗');
        return;
    }
    console.log(data.isFile());
    console.log(data.isDirectory());
});