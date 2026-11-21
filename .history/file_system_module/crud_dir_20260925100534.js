import fs from 'fs'
// create operation
fs.mkdir("./myFolder",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Folder successfully created");
    })
fs.mkdir("./folder1/folder2/folder3",(err)=>{
    if(err){
        console.log(err);
        return
    }
console.log("Folder created successfully");