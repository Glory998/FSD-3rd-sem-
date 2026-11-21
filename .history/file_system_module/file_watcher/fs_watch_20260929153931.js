import fs from 'fs'
const watcher=fs.watchFile("notes.txt",(curr,prev)=>{
    console.log(curr);
console.log(prev);
})
setTimeout(()=>{
    watcher.unwatchFile()
},3000)