const fs = require('fs');
let data = '我是董文杰想要存储的数据'

// 创建一个可以写入的流，写入到文件test.txt中
let stream = fs.createWriteStream('test.txt');
// 开始写入
stream.write(data, 'utf8');
// 写入完成
stream.end();
stream.on('finish', () => {
    console.log('写入完成');
})