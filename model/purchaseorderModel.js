const mongoose=require('mongoose')
const purchaseorderSchema=new mongoose.Schema(
    {
        vendorname:{
            type:String,
            required:[true,'Please give a name']
        },
        deliveryaddress:{
            type:String,
            required:true,
        },
        purchaseorderno:{
            type:String,
            required:true,
        },
        date:{
            type:String,
           
        },
        duedate:{
            type:String,
           
        },
        status:{
            type:String
        },
       
    }
)

const purchaseorderModel=mongoose.model('PurchaseOrder', purchaseorderSchema)

module.exports= purchaseorderModel