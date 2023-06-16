const fs = require("fs")

fs.writeFileSync('hello.js','console.log(\'hello world\')\n');

fs.appendFileSync('hello.js','console.log(\'hello king\')');
const buf_rol = fs.readFileSync('hello.js')

// const stg_rol = buf_rol.toString()


console.log(buf_rol.toString());
fs.renameSync('hello.js','hellobro.js')