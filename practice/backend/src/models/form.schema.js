const mongoose=require("mongoose")

const formSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
    
    },
    password:{
        type:String,
        required:true
    }


},{timestamps:true})

const FormModel = mongoose.model('Form', formSchema)
module.exports = FormModel;