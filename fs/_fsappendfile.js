// fs.appendFile(文件名,fun(err)) 删除文件夹
const fs = require('fs')
setInterval(() => {
    
    fs.appendFile('1.txt','1',(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('写入成功')
        }
    })
}, 1000);