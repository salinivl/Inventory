const express=require('express')
const path=require('path')
const cors=require('cors')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
const vendorModel = require('../model/vendorModel')
const purchaseorderModel = require('../model/purchaseorderModel')
const billModel = require('../model/billModel')
const vendorcreditnoteModel = require('../model/vendorcreditModel')


const router=express.Router()

router.post('/api/newvendor', async (req, res) => {
    console.log(req.file);
    const data = new vendorModel(req.body)
   
  console.log(data);
    try {
        const result = await data.save();
      
        console.log(result);
        res.status(200).json({"status":"success","data":result})
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
  })

router.post('/api/vendordashboard', async(req,res)=>{
    try{
      const dashboarddata=await vendorModel.find()
    res.status(200).json(dashboarddata)
    }
    catch(error){
      console.log(error);
      res.status(400).json(error)
    }
    
  })
  
  
    router.put("/api/editvendor/:id", async(req,res)=>{
      try {
        let item=req.body
    let updatedata={$set:item}
    let updatedVendor=await vendorModel.findByIdAndUpdate({_id:req.params.id}, updatedata)
    res.status(200).json({"status":"success", "data":"vendor updated successfully"})
        
    } catch (error) {
        console.log(error);
        res.json('Error in updating data!')  
    }
    
    })

    router.post('/api/newpurchaseorder', async (req, res) => {
        console.log(req.file);
        const data = new purchaseorderModel(req.body)
       
      console.log(data);
        try {
            const result = await data.save();
          
            console.log(result);
            res.status(200).json({"status":"success","data":result})
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
      })
    
    router.post('/api/purchaseorderdashboard', async(req,res)=>{
        try{
          const dashboarddata=await purchaseorderModel.find()
        res.status(200).json(dashboarddata)
        }
        catch(error){
          console.log(error);
          res.status(400).json(error)
        }
        
      })

      router.post('/api/newbill', async (req, res) => {
        console.log(req.file);
        const data = new billModel(req.body)
       
      console.log(data);
        try {
            const result = await data.save();
          
            console.log(result);
            res.status(200).json({"status":"success","data":result})
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
      })
    
    router.post('/api/billdashboard', async(req,res)=>{
        try{
          const dashboarddata=await billModel.find()
        res.status(200).json(dashboarddata)
        }
        catch(error){
          console.log(error);
          res.status(400).json(error)
        }
        
      })

      router.post('/api/newvendorcredit', async (req, res) => {
        console.log(req.file);
        const data = new vendorcreditnoteModel(req.body)
       
      console.log(data);
        try {
            const result = await data.save();
          
            console.log(result);
            res.status(200).json({"status":"success","data":result})
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
      })
    
    router.post('/api/vendorcreditdashboard', async(req,res)=>{
        try{
          const dashboarddata=await vendorcreditnoteModel.find()
        res.status(200).json(dashboarddata)
        }
        catch(error){
          console.log(error);
          res.status(400).json(error)
        }
        
      })


    module.exports=router
    