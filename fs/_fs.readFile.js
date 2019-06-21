// fs.readFile('文件名',func(err,(data)=>)) 
let fs = require('fs');
fs.readFile('1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('读取文件成功');
        console.log(data)
    }
})