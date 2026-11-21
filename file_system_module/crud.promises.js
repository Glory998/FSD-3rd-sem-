import fs from "fs/promises"
fs.writeFile("notes.txt", "FS module")
.then((response)=>{
    console.log("response:", response);
})
.catch((error)=>{
    console.log(error);
})
fs.readFile("notes,txt",{enconding:"utf8"})
.then((response)=>{
    console.log("response: ",response);
})
.catch((error)=>{
    console.log("error: ",error.message);
})
async function updatedFile(filename){
    await fs.appendFile(filename,"Convolution Nueral Networld")
    console.log("File updated successfully");
}
updatedFile("notes.txt")
