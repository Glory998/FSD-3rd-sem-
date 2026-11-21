import fs from 'fs'
fs.statSync("notes.txt",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(starts);
})