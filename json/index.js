const fs = require('fs')
const object ={
  name: "rohit",
  roll:"45",
  service:"student"
}
const json1 = JSON.stringify(object)
console.log(json1)
fs.writeFile('json1.json',json1,(err)=>{
  console.log('file created')
})
fs.readFile('json1.json','utf8',(err,data)=>{
  console.log(data)
})
const newObj = JSON.parse(json1)
console.log(newObj)
