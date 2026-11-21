import fs from "fs/promises"
fs.writeFile("notes.txt", "FS module")
.then((response)=>{
    console.log("response:",response);
})
.catch((error)=>{
    console.log(error);
})
