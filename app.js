const express=require("express");
const app=express();
const dotenv=require("dotenv");
const Usermodel=require("./config/database.js")
const ConnectToDB=require("./config/database.js")
const UserRoutes=require("./routes/user.routes.js");
dotenv.config();
ConnectToDB();
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(3000,()=>{
    console.log("server Started sucessfully");
})

app.use("/user",UserRoutes);