import fs from 'fs'

// Create operation
fs.writeFile("notes.txt","Hello World",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("File created");
})

// Read operation
fs.readFile("notes.txt",{"encoding":"utf8"},(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Data:",data);
})

// Update operation
fs.appendFile("notes.txt","Deep Learning is the subfield of AI",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("File updated");
})

// Delete operation
fs.rm("notes.txt",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("File deleted");
})