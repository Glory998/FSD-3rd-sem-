import express from 'express'
import fs from 'fs'
const app=express()
const bookData=fs.readFileSync("./data/books.json")

    console.log("Books Data:",bookData);
app.get("/api/v1/books",(req,res)=>{
    res.status(200).json({
    status: "Success",
    data: {
    books: bookData
    }
})
})
app.listen(8000,()=>{
    console.log("Server is running...")
})
