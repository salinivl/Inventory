const mongoose=require('mongoose')
const billSchema=new mongoose.Schema(
    {
        vendorname:{
            type:String,
            required:[true,'Please give a name']
        },
        billno:{
            type:String,
            required:true,
        },
        date:{
            type:String,
            required:true,
        },
        amount:{
            type:Number,
           
        },
        duedate:{
            type:String,
           
        },
        status:{
            type:String
        },
       
    }
)

const billModel=mongoose.model('Bill', billSchema)

module.exports= billModel