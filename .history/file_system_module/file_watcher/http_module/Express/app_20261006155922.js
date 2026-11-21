import express from 'express'
import fs from 'fs'
const app=express()
const bookdata=fs.readFileSync("./data/books.json")

app.get("/api/v1/books",(req,res)=>{
    res.status(200).send("Welcome to Home Page")
    status: "Success",
    data: {
    books: bookData
    }
})

app.listen(8000,()=>{
    console.log("Server is running...")
})
