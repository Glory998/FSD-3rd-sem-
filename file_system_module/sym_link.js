import fs from 'fs'
fs.lstat("./link.txt", (err,stats)=>{

    if(err){
        console.log(err);
        return
    }
    console.log("Is Symbolic Link", stats.isSymbolicLink());
})
fs.rename("config.txt","notes.txt",(err)=>)
if(err){
    console.log(err);
    return}
    console.log("File name changed");
})