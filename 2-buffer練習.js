// buffer 字串轉換
// let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf.toString());

let buf = Buffer.from('Felix');
// console.log(buf[0]);

// buf[0] = 92;
// console.log(buf.toString());

// 溢出
let buf2 = Buffer.from('hello');

buf2[0] = 361; 
// 超過 255(1111 1111) 了， 361是 0001 0110 1001
// 超過 的部分會被程式自動捨棄 超過 255的部分 
// 所以只會賦予 0110 1001 給 buf2[0]，也就是 69 

// console.log(buf2.toString());

// 中文
let buf3 = Buffer.from('你好');
console.log(buf3);