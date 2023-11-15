const fs = require('fs');

// fs.appendFile('./座右銘.txt',' 宗逸唱歌',err => {
//     if(err){
//         console.log('寫入失敗');
//         return;
//     }

//     console.log('寫入成功');
// });

// fs.appendFileSync('./座右銘.txt',' \r\n真的好聽')

fs.writeFile('./座右銘.txt',' \r\n聽你在屁', {flag: 'a'}, err => {
    if(err){
        console.log('寫入失敗');
        return;
    }

    console.log('寫入成功');
});