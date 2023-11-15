
const fs = require('fs');

// NOTE 創建資料夾
// let dir1 = './html';
// if(fs.existsSync(dir1)){
//     console.log('資料夾已經存在');
// }else{
//     fs.mkdir(dir1, err => {
//         if(err){
//             console.log('新增資料夾失敗');
//             return;
//         }
//         console.log('新增資料夾成功');
//     });
// }

// NOTE 創建多層資料夾 (./a/b/c)
// let dir2 = '../a/b/c';
// fs.mkdir(dir2, {recursive: true},err => {
//     if(err){
//         console.log('新增資料夾失敗');
//         return;
//     }
//     console.log('新增資料夾成功');
// });

// NOTE 讀取資料夾
// fs.readdir('../file/', (err, data) => {
//     if(err){
//         console.log('讀取失敗');
//         return;
//     }
//     console.log(data);
// });

// NOTE 刪除資料夾
// fs.rmdir('../data', err => {
//     if(err){
//         console.log('刪除失敗');
//         return;
//     }
//     console.log('刪除成功')
// });

// NOTE 階層式刪除資料夾
fs.rm('../a',{recursive: true}, err => {
    if(err){
        console.log(err);
        return;
    }
    console.log('刪除成功')
});