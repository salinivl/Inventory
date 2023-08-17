const mongoose=require('mongoose')
const vendorcreditnoteSchema=new mongoose.Schema({
    vendorcreditid:{
        type: String,
        required: true
    },
    vendor:{
        type: String,
        required: true
    },
    item:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }
})

const  vendorcreditnoteModel=mongoose.model(' vendorcreditnote',  vendorcreditnoteSchema)
module.exports= vendorcreditnoteModel