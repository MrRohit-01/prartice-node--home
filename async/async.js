const fs = require('fs')

// fs.writeFile('read.txt','hello world\n',(err) => {
//   console.log("done")
//   console.log(err)

// });
// fs.appendFile('read.txt',"hello buddies",(err)=>{
//   console.log("again!")
//   console.log(err)
// });
// fs.readFile('read.txt','utf8',(err,data)=>{
//   console.log(data)
// });
// fs.rename('async/myBio.txt','async/bio.txt',(err)=>{

// })
fs.mkdir('async',(err)=> {
  console.log('done')
});
fs.writeFile('async/bio.txt','new file hello world',(err)=>{
  console.log('bio.txt file has been created succesfully')
  console.log(err+' errors has found')
  
});
fs.appendFile('async/bio.txt',' new line added',(err)=>{
  console.log('a new line has been appended')
  console.log(err+' errors has found')
  
});
fs.readFile('async/bio.txt','utf-8',(err,data)=>{
  console.log(data)
  console.log(err+' errors has found')

})
fs.rename('async/bio.txt','async/myBio.txt',(err)=>{
  console.log('renamed')
})
