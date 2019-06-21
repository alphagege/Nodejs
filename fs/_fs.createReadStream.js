// 新建fs
const fs = require('fs');

// 流的方式读取文件
const fileReadStream = fs.createReadStream('_fs.readdir.js')

// 读取次数
let count = 0;

// 保存数据
let str = '';

//  开始读取
fileReadStream.on('data',)