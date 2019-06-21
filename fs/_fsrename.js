// fs.rename('文件名','更改后的文件名',(err)=>)  更名或剪切
// let fs = require('fs');
// fs.rename('1.txt','change.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("改名成功")
//     }
// })

let fs = require('fs');
fs.rename('change.txt','node/change.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("修改成功")
    }
})
