// 1.引入url模块
const url = require('url');

// 2.引入http模块
const http = require('http');

// 3.用http模块创建服务
/**
 * req 请求信息 request
 * res 响应信息 response
 */
http.createServer((req,res)=>{
    if(req.url!='/favicon.ico'){
        let Jsona = url.parse(req.url);
        // 解析url参数
        let Jsonb = url.parse(req.url,true);
        console.log(Jsonb)
        res.writeHead("200",{
            "Content-type":"text/html;charset:UTF8"
        })
        res.write(`${JSON.stringify(Jsona)}\n${JSON.stringify(Jsonb)}`);
        
        // 通过query可以查看传递的参数
        console.log(Jsonb.query.name)
        console.log(Jsonb.query.age)
        res.end()
    }
}).listen(3000)

