const mongoose=require('mongoose')
const invoiceSchema=new mongoose.Schema(
    {
        customername:{
            type:String,
            required:[true,'Please give a name']
        },
        billingaddress:{
            type:String,
            required:true,
        },
        shippingaddress:{
            type:String,
            required:true,
        },
        invoiceno:{
            type:String,
            required:true,
        },
        date:{
            type:String,
           
        },
        warehousename:{
            type:String,
           
        },
        duedate:{
            type:String,
           
        },
        salesperson:{
            type:String,
           
        },
    }
)

const invoiceModel=mongoose.model('Invoice', invoiceSchema)

module.exports=invoiceModel