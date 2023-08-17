const mongoose=require('mongoose')
const itemSchema=new mongoose.Schema(
    {
       
        name:{
            type:String,
            required:[true,'Please add an Item name']
        },
        itemgroup:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        unit:{
            type:Number,
            required:true,
        },
        brand:{
            type:String,
            required:true,
        },
        manufacturer:{
            type:String,
            required:true,
        },
        dimension:{
            type:String,
            required:true,
        },
        weight:{
            type:Number,
            required:true,
        },
        
        sellingprice:{
            type:Number,
            required:true,
        },
        costprice:{
            type:Number,
            required:true,
        },
        openingstock:{
            type:String,
            required:true,
        },
        preferredvendor:{
            type:String,
            required:true,
        },
        reorderpoint:{
            type:String,
            required:true,
        },
        file:{
            type:String,
           
        },
       
    }
)

const itemModel=mongoose.model('Item', itemSchema)

module.exports=itemModel