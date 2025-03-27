const express=require("express");
const Router=express.Router();
const {body,validationResult}=require("express-validator");
Router.get("/register",(req,res)=>{
    res.render("register.ejs")
})

Router.post("/register",body('email').trim().isEmail().isLength({min:11}) 
,body('password').trim().isLength({min:5}),
body('username').trim().isLength({min:3}),
(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.sendStatus(400).json({
            errors:errors.array(),
            message:"invalid details"
     } )
    }
    res.send("user registered");
})

module.exports=Router;