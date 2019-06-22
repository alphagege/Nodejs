// web服务器
// 最主流的web服务器 ：apache nginx iis

// 1.引入http模块
let http = require('http')

// 2.引入fs模块
let fs = require('fs')

http.createServer((req, res) => {
    // 获取请求路径
    let pathName = req.url;
    let publicPath = 'www'
        // 默认加载路径
    if (pathName == "/") {
        pathName = '/index.html'
    }
    // 过滤/favicon.ico的请求
    if (pathName != '/favicon.ico') {
        console.log(`${publicPath}${pathName}`);

        fs.readFile(`${publicPath}${pathName}`, (errFound, data) => {
            if (errFound) {
                console.log(errFound)
                res.writeHead(404, {
                    "Content-type": "utf8"
                })
                fs.readFile(`${publicPath}/404.html`, (notFoundErr, notFoundData) => {
                    res.write(notFoundData.toString());
                    res.end()
                })
            } else {
                res.writeHead(200, {
                    "Content-type": "utf8"
                })
                res.write(data.toString());
                res.end()
            }
        })
    }
}).listen(3000)