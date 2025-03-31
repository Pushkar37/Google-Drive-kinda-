const express=require("express");
const Router=express.Router();
const {body,validationResult}=require("express-validator");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
Router.get("/register",(req,res)=>{
    res.render("register.ejs")
})

Router.post("/register",body('email').trim().isEmail().isLength({min:11}) 
,body('password').trim().isLength({min:5}),
body('username').trim().isLength({min:3}),
async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.sendStatus(400).json({
            errors:errors.array(),
            message:"invalid details"
     } )
    }
    const hashPassword= await bcrypt.hash(password,10);
    const {username,email,password}=body.req
    const user= await Usermodel.create({
        username:username,
        email:email,
        password:hashPassword
    })
    
    res.json(user);
})
Router.get("/login",(req,res)=>{
    res.render("login.ejs");
})
Router.post("/login",body("username").trim().isLength({min:3}))
,body("password").trim().isLength({min:5}),
async(req,res)=>{
    const{username,password}=body.req
    const user=await Usermodel.find({
        username:username
    })
    if(!user){
        res.sendStatus(400).json({
            message:"username or password is incorrect"
        })
    }
    if(password!=bcrypt.compare(user.password)){
        res.sendStatus(400).json({
            message:"Username or password is incorrect"
        })
    }
}

module.exports=Router;