const mongoose=require('mongoose')
const DeliveryChallanSchema=new mongoose.Schema(
    {
        customername:{
            type:String,
            required:[true,'Please give a name']
        },
        palceofsupply:{
            type:String,
            required:true,
        },
        deliverychallanid:{
            type:String,
            required:true,
        },
        date:{
            type:String,
            required:true,
        },
        status:{
            type:String,
           
        },
    }
)

const deliverychallanModel=mongoose.model('Deliverychallan', DeliveryChallanSchema)

module.exports=deliverychallanModel