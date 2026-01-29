const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type : String,
        ref : "user",
        required:true,
    },
    email:{
        type : String,
        required:true,
        unique : true
    },
    age:{
        type : Number,
       
    },
    department:{
        type:String,
        default : "Engineering"
    },
    isActive : {
        type :Boolean,
        default:false
    }
})

module.exports = mongoose.model("Student" , studentSchema);