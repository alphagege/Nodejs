const fs = require('fs')
fs.readdir('testdir',(err,data)=>{
    if(err){
        console.log(err)
        
    }else{
        console.log(data)
        //[ '1.txt', '2.txt', '3.txt' ]
        console.log("目录读取成功")
    }
})