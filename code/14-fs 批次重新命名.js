
const fs = require('fs');

const files = fs.readdirSync('../data');
// const length = files.length;

files.forEach(item => {
    
    let data = item.split('-');
    let [num, name] = data;
    
    // 判斷第一位是否小於10
    if(Number(num) < 10){
        num = '0'+num;
    }

    let newName = num + '-' + name;
    
    fs.renameSync(`../data/${item}`,`../data/${newName}`);
});