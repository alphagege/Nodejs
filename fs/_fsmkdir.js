// fs.mkdir(文件名,fun(err)) 创建文件夹
// fs.rmdir(文件名,fun(err)) 删除文件夹
let fs = require('fs');
fs.mkdir('创建文件夹', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("目录创建成功");
    }
})

setTimeout(() => {
    fs.rmdir('创建文件夹', err => {
        if (err) console.log(err)
        else {
            console.log('文件删除成功')
        }
    })
}, 1000);