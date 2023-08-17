const mongoose=require('mongoose')
const itemadjustSchema=new mongoose.Schema(
    {
        modeofadjust:{
            type:Number,
            required:[true,'Please add an Item name']
        },
        refnumber:{
            type:Number,
            required:true,
        },
        date:{
            type:String,
            required:true,
        },
        reason:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        itemdetails:{
            type:String,
            required:true,
        },
        filepath:{
            type:String,
            required:true,
        }
        
    }
)

const itemadjustModel=mongoose.model('Itemadjust', itemadjustSchema)

module.exports=itemadjustModel