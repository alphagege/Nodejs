// fs.stat 检查一个读取的是文件还是目录
let fs = require('fs');
fs.stat('testFile', (err, stats) => {
    if (err) {
        console.log(err);
    } else {
        // 是目录不是文件
        console.log(stats)
        console.log(stats.isFile()) //false
        console.log(stats.isDirectory()) //true

        // Stats {
        //     dev: 16777220,
        //     mode: 16877,
        //     nlink: 2,
        //     uid: 501,
        //     gid: 20,
        //     rdev: 0,
        //     blksize: 4096,
        //     ino: 1265669,
        //     size: 64,
        //     blocks: 0,
        //     atimeMs: 1561043765276.1907,
        //     mtimeMs: 1561042694485.4602,
        //     ctimeMs: 1561042694485.4602,
        //     birthtimeMs: 1561042694485.4602,
        //     atime: 2019-06-20T15:16:05.276Z,
        //     mtime: 2019-06-20T14:58:14.485Z,
        //     ctime: 2019-06-20T14:58:14.485Z,
        //     birthtime: 2019-06-20T14:58:14.485Z }
    }
})