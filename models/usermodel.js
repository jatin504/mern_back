const mongoose  = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    }
},{timestamps:true});

//model

const user = mongoose.model("user",userSchema);

module.exports = user