// 在Node中，模块分为两类
// 1、Node提供的模块
// 2、用户编写的模块
const utils = require('./utils')
const http = require('http')
const multiple = require('DongwenjiesModuls')
http.createServer((req,res)=>{
    res.writeHead(200, {
        "Content-type":"text/html;charset:UTF8"
   })
    res.write(utils.add(2,5))
    res.write(multiple.multiple(5,2))
    res.end()
}).listen(3000)