const moongose=require("moongose");
const ConnectToDB=()=>{
 moongose.connect(Mongo_Uri).then(()=>{
    console.log("connection established");
})
}
const UserSchema=new moongose.Schema({
    username:{
        type:String,
        unique:true,
        trim:true,
        min:{3:"Username is invalid"}
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        min:{11:"Invalid Email"}

    },
    password:{
        type:String,
        trim:true,
        min:{5:"invalid passowrd"}
    }
});
const Usermodel=moongose.model('user',UserSchema);

module.exports=Usermodel;