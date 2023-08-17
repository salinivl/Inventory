const mongoose=require('mongoose')
const itemgroupSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please add an Item name']
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
            type:Number,
            required:true,
        },
        weight:{
            type:Number,
            required:true,
        },
        description:{
            type:String,
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
       
    }
)

const itemgroupModel=mongoose.model('Itemgroup', itemgroupSchema)

module.exports=itemgroupModel