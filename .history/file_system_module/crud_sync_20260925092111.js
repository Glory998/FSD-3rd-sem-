// import fs from 'fs'
const fs= require("fs");
fs.writeFileSync("notes.txt","Hello World")
// const data=fs.readFileSync("notes.txt",{encoding:"utf8"})
const data=fs.readFileSync("notes.txt","utf8")
console.log(data)
// update operation
fs.appendFileSync("notes.txt","Hello Node.js")
// Delete operation
fs.rmSync("notes.txt")
