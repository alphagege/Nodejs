// 引入fs模块
let fs = require('fs')
    // 引入events模块
let events = require('events');

let eventEmitter = new events.EventEmitter()
getExtion = () => {
    fs.readFile('test.txt', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(111)
            eventEmitter.emit('sendData', data)
        }
    })
}
getExtion()
eventEmitter.on('sendData', (data) => {
    console.log(data)
})