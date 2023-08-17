const mongoose=require('mongoose')
const PaymentReceivedSchema=new mongoose.Schema(
    {
        customername:{
            type:String,
            required:[true,'Please give a name']
        },
        amount:{
            type:Number,
            required:true,
        },
        paymentid:{
            type:String,
            required:true,
        },
        paymentdate:{
            type:String,
            required:true,
        },
        paymentmode:{
            type:String,
           
        },
        depositto:{
            type:String,
           
        },
       
    }
)

const PaymentReceivedModel=mongoose.model('Payment', PaymentReceivedSchema)

module.exports=PaymentReceivedModel