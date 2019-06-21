// 1. 判断服务器上面有没有 upload 目录，没有就创建这个目录
let fs = require('fs');
// fs.stat('upload',(err,stats)=>{
//     if(err){
//         fs.mkdir('upload',(error)=>{
//             if(error){
//                 console.log(error);

//             }else{
//                 console.log("创建upload目录成功")
//             }
//         })
//     }else{
//         console.log(stats.isDirectory())
//     }
// })


// 读取目录全部文件
fs.readdir('testdir', (err, files) => {
    if(err) {
      console.log(err);
      return false;
    } else {
      // 判断是目录还是文件夹
      console.log(files);
  
      let filesArr = [];
  
      (function getFile(i) {
        
        // 循环结束
        if(i == files.length) {
          // 打印出所有目录
          console.log("目录：");
          console.log(filesArr);
          return false;
        }
  
        // 判断目录是文件还是文件夹
        fs.stat('testdir/' + files[i], (error, stats) => {
  
          if(stats.isDirectory()) {
            filesArr.push(files[i]);
          }
  
          // 递归调用
          getFile(i+1);
          
        })
      })(0)
    }
  })
