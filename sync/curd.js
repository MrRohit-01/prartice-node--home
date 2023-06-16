const fs = require('fs')


// fs.mkdirSync('rohit');
// fs.renameSync('rohit/bio.txt','rohit/main.txt')
fs.writeFileSync('rohit/main.txt', 'console.log(\'hello world try curd\')\n')
fs.appendFileSync('rohit/main.txt','main charachter😂😂😂')
const txt = fs.readFileSync('rohit/main.txt','utf8')
console.log(txt)
fs.renameSync('rohit/main.txt','rohit/bio.txt')
fs.unlinkSync('rohit/bio.txt')
fs.unlinkSync('rohit/main.js')
fs.rmdirSync('rohit');