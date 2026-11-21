import fs from 'fs'
// create operation
fs.mkdir("./myFolder",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Folder successfully created");
    })_
