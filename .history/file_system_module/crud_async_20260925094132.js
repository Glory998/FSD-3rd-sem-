import fs from 'fs'
// create operation
fs.writeFile("notes.txt"{encoding: "utf8"},(err,data)=>{
    if(err){
        console.log(err);
        return
    }
console.log("Data:",data);
})
// update operation
fs.appendFile("notes.txt", "Deep Learning is the subfield of AI",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("File updated");
})
