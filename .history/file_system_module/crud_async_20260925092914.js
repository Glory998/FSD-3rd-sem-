import fs from 'fs'
// create operation
fs.writeFile("notes.txt",(err)=>{
    if(err){
        console.log(err);
        return
    }
console.log("File created");
})
