const express=require('express')
const multer=require('multer')
const path=require('path')
const router=express.Router()


const itemModel = require('../model/itemModel');
const itemgroupModel=require('../model/itemgroupModel')
const itemadjustModel=require('../model/itemadjustModel')

//  upload image(multer)
const storage=multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,'./upload')
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+(file.originalname))
    },
})

const upload=multer({storage:storage})

router.post('/api/newitem',upload.single('file'), async (req, res) => {
    console.log(req.file);
    // itemModel.create({file:req.file.filename})
    const data = new itemModel(req.body)
    const file=req.file.filename
console.log(data);
    try {
        const result = await data.save();
        result.file=file
        console.log(result);
        res.status(200).json({"status":"success","data":result})
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.post("/api/viewitem", async(req,res)=>{
    try {
        let data=await itemModel.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
       res.status(400).json(error)
    }
    
})

router.post('/api/newitemgroup', async (req, res) => {
    const data = new itemgroupModel(req.body)

    try {
        const result = await data.save();
        res.status(200).json({"status":"success","data":result})
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.post("/api/viewitemgroup", async(req,res)=>{
    try {
        let data=await itemgroupModel.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
       res.status(400).json(error)
    }
    
})

router.post('/api/newitemadjust', async (req, res) => {
    const data = new itemadjustModel(req.body)

    try {
        const result = await data.save();
        res.status(200).json({"status":"success","data":result})
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
router.post("/api/viewitemadjust", async(req,res)=>{
    try {
        let data=await itemadjustModel.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
       res.status(400).json(error)
    }
    
})




module.exports = router;