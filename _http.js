// 1.引入http模块
const http =require('http');

// 2.用http模块创建服务
/**
 * req 获取 url信息 （request）
 * res 返回相应信息  （response）
 */

 http.createServer((req,res)=>{
    // 设置http头部，状态码是200， 文件类型是html，字符集是UTF8
    res.writeHead(200, {
         "Content-type":"text/html;charset:UTF8"
    })

    // 往页面打印
    res.write("<h1>My name is Dongwenjie</h1>");
     
    // 结束响应
    res.end();
 }).listen(3000)

