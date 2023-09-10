const fs = require('fs')
const http = require('http')

const data = fs.readFileSync(`${__dirname}/userApi/api.json`,'utf8')
const data1 =JSON.parse(data)
// console.log(data1)
const server =http.createServer((req,res) =>{
  // console.log(req.url);
  if(req.url=='/'){
    res.end('hello world website is live')

  }
  else if(req.url=='/api'){
    res.writeHead(200,{"content-type":"application/json"})
    res.end(data1.image.src)
    
  }
  else if(req.url=='/about'){
    res.end('hello world website is live,this is about page')

  }
  else if(req.url=='/contact'){
    res.end('hello world website is live, this is contact page')

  }
  else if(req.url=='/service'){
    res.end('hello world website is live,this is service page')
  }
  else{
    res.writeHead(400)
    res.end('<h1>404 error</h1>')
}
})
server.listen(3000,'127.0.0.1',()=>{
 console.log('READY')

})