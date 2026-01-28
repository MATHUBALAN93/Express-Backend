const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email:{
        type :String , 
        required:true,
        unique : true
    },
    password : {
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default : date.now
    },
    updatedAt:{
        type:Date,
        default : date.now
    },
    role:{
        type:String,
        enum: ["user" , "admin"],
        default : "user"
    }
})
module.exports = mongoose.model("User" , userSchema);