// fs.write('文件名'，‘内容’，‘func(err)’) //存在就覆盖，不存在就创建
// fs.unlink() 删除文件目录
let fs = require('fs');
fs.writeFile('test.txt', '我是写入的内容', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('写入成功')
    }
})

setTimeout(() => {
    fs.unlink('test.txt', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('删除成功')
        }
    })
}, 1000)