const mongoose=require('mongoose')
const creditnoteSchema=new mongoose.Schema({
    creditnoteid:{
        type: String,
        required: true
    },
    address:{
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

const creditnoteModel=mongoose.model('creditnote', creditnoteSchema)
module.exports=creditnoteModel