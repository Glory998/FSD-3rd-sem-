import fs from 'fs'
fs.statSync("notes.txt",(err,stats)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(starts);
})