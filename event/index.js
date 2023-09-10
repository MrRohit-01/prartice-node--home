const EventEmitter = require('events')
const event = new EventEmitter();
event.on('hello bro',(src,code)=>{
  console.log(`hello ${src} ${code}`)
})
event.emit('hello bro',200,'ok')