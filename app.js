const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(8080,()=>{
    console.log("server started")
})