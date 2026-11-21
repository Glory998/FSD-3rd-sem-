import express from 'express'
const app=express()
app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Home Page")
})
app.listen(8000,()=>{
    console.log("Server is running...")
})
