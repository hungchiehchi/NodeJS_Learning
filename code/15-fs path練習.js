
const fs = require('fs');

const path = require('path');

// NOTE resolve 
// console.log(path.resolve(__dirname, './index.html'));
// console.log(path.resolve(__dirname, '/index.html'));
// console.log(path.resolve(__dirname, '/index.html', './t'));

// NOTE sep
// console.log(path.sep); // windows \ ; linux /

// parse 方法 __dirname '全域變數'
// console.log(__filename); //程式的絕對路徑

let str = 'C:\\Users\\WEI\\Desktop\\開發紀錄\\個人練習_NodeJS\\NodeJS_Learning\\code\\15-fs path練習.js';

// console.log(path.parse(str));
// console.log(path.basename(str));
// console.log(path.dirname(str));
console.log(path.extname(str));