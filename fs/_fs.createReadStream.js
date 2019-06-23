// fs.createReadStream('_fsstat.js') 创建流
// fileReadStream.on('data', (chunk)）开始读取流
// fileReadStream.on('end', (chunk) => ) 读取完成



// 新建fs
const fs = require('fs');

// 流的方式读取文件
const fileReadStream = fs.createReadStream('_fsstat.js')

// 读取次数
let count = 0;

// 保存数据
let str = '';

//  开始读取
fileReadStream.on('data', (chunk) => {
    console.log(`${++count}接收到:${chunk.length}`);
    str += chunk;
})

// 读取完成
fileReadStream.on('end', () => {
    console.log('结束');
    console.log(count);
    console.log(str);
    let Stream = fs.createWriteStream('fswritetest.js');
    Stream.write(str, 'utf8');
    // 写入完成
    Stream.end();
    Stream.on('finish', () => {
        console.log('写入完成');
    })
})

// 读取失败
fileReadStream.on('error', (error) => {
    console.log(error);
})