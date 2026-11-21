import fs from 'fs'
fs.stat("notes.txt",(err,stats)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(stats.birthime);
})