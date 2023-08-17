const mongoose=require('mongoose')
const SalesReturnSchema=new mongoose.Schema(
    {
        returnid:{
            type:String,
            required:[true,'Please give first name']
        },
        returndate:{
            type:String,
            required:true,
        },
        reason:{
            type:String,
          
        },
    }
)

const salesreturnModel=mongoose.model('SalesReturn', SalesReturnSchema)

module.exports=salesreturnModel