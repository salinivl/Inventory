const mongoose=require('mongoose')
const SalesReturnReceiptSchema=new mongoose.Schema(
    {
        
        receiptdate:{
            type:String,
            required:true,
        },
        status:{
            type:String,
            required:true,
        }
       
    }
)

const salesreturnreceiptModel=mongoose.model('SalesReturnReceipt', SalesReturnReceiptSchema)

module.exports=salesreturnreceiptModel