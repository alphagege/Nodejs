// 加载http模块
var http = require('http')

// 虚拟sql读出来的数据
var items = [];

// 创建http服务
http.createServer((req, res) => {
    // // 设置跨域的域名，*代表允许任意域名跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // // 设置Header类型
    res.setHeader('Access-Control-Allow-Headers', 'Content-type');
    // // 允许跨域请求方式
    res.setHeader('Content-Type', 'application/json')
        // 判断请求
    switch (req.method) {
        case 'OPTIONS':
            res.statusCode = 200;
            res.end();
            break;
        case 'GET':
            let data = JSON.stringify(items);
            res.write(data);
            res.end();
            break;
        case 'POST':
            let item = '';
            req.on('data', (chunk) => {
                item += chunk;
            })
            req.on('end', () => {
                item = JSON.parse(item);
                items.push(item.item);
                let data = JSON.stringify(items);
                res.write(data);
                res.end();
            })
            break;
    }
}).listen(3000)