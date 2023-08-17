const mongoose=require('mongoose')
const RegisterSchema=new mongoose.Schema(
    {
        firstname:{
            type:String,
            required:[true,'Please give first name']
        },
        lastname:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        zip:{
            type:Number,
            required:true,
        },
        username:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
       
        
    }
)

const registerModel=mongoose.model('Register', RegisterSchema)

module.exports=registerModel