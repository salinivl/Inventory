const mongoose=require('mongoose')
const PackageSchema=new mongoose.Schema(
    {
        packageslip:{
            type:String,
            required:[true,'Please give a name']
        },
        date:{
            type:String,
            required:true,
        },
        item:{
            type:String,
            required:true,
        },
        qntyordered:{
            type:Number,
            required:true,
        },
        packagestatus:{
            type:String,
           
        },
    }
)

const packageModel=mongoose.model('Package', PackageSchema)

module.exports=packageModel