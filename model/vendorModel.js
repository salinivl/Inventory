const mongoose=require('mongoose')
const VendorSchema=new mongoose.Schema(
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
        phoneno:{
            type:Number,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
       
        
    }
)

const vendorModel=mongoose.model('Vendor', VendorSchema)

module.exports=vendorModel