const express=require("express");
const app=express();
app.set('view engine','ejs');
app.listen(3000,()=>{
    console.log("hello world");
})
app.get("/",(req,res)=>{
    res.send("Hello World");
})