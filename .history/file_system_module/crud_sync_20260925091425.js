// import fs from 'fs'
const fs= require("fs");
fs.writeFileSync("notes.txt","Hello World")
const data=fs.readFileSync("notes.txt")
console.log(data)