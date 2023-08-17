const mongoose=require('mongoose')
const SalesOrderSchema=new mongoose.Schema(
    {
        customername:{
            type:String,
            required:[true,'Please give first name']
        },
        salesorder:{
            type:String,
            required:true,
        },
        salesorderdate:{
            type:String,
            required:true,
        },
        expectedshipdate:{
            type:String,
            required:true,
        },
        deliverymethod:{
            type:String,
           
        },
        salesperson:{
            type:String,
           
        },
        orderstatus:{
            type:String,
           
        },
       
        
    }
)

const salesorderModel=mongoose.model('SalesOrder', SalesOrderSchema)

module.exports=salesorderModel