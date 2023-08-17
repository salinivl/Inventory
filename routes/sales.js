const express=require('express')
const path=require('path')
const cors=require('cors')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')


const router=express.Router()
const registerModel = require('../model/registerModel')
const { resourceLimits } = require('worker_threads')
const salesorderModel = require('../model/salesorderModel')
const packageModel = require('../model/packageModel')
const deliverychallanModel = require('../model/deliverychallanModel')
const invoiceModel = require('../model/invoiceModel')
const PaymentReceivedModel = require('../model/paymentreceivedModel')
const salesreturnModel = require('../model/salesreturnsModel')
const salesreturnreceiptModel = require('../model/salesretreceiptModel')
const creditnoteModel = require('../model/creditnoteModel')



    router.post("/api/register", async(req,res)=>{
        try {
            console.log(req.body);
            const hashedPassword=await bcrypt.hash(req.body.password, 10)
            let data=new registerModel({firstname:req.body.firstname, lastname:req.body.lastname, city:req.body.city, zip:req.body.zip, username:req.body.username, password:hashedPassword})
            const result=await data.save()
            console.log(result);
            res.status(200).json({"status":"success", "data":result})
            
        } catch (error) {
            console.log("Password was not hashed successfully"); 
            console.log(error);
            res.status(404).json(error)
            
        }


    })

    router.post("/api/login", async(req,res)=>{
        try {     
           const user= await registerModel.findOne({username:req.body.username})
           if (!user){
            return res.json({status: "Unauthorized", message: "Username not found",})
           
           }
    
           const passwordcheck=await bcrypt.compare(req.body.password, user.password)
           if(!passwordcheck){
            return res.json({status:"Unauthorized", message: "Password does not match"})
           }
    
        //    const token=jwt.sign({
        //     userId: user.data._id,
        //     userName: user.data.username,
        //    }, "emptoken",{expiresIn: "1d"})
    
           res.status(200).json({
            status: "Login Successful",
            // username: user.username,
            // token:token,
          });
            
        } catch (error) {
            res.status(500).send({
              message: "Internal Server Error",
              error,
            });
          }
        });

router.post('/api/customerdashboard', async(req,res)=>{
  try{
    const dashboarddata=await registerModel.find()
  res.status(200).json(dashboarddata)
  }
  catch(error){
    console.log(error);
    res.status(400).json(error)
  }
  
})


  router.put("/api/updatecustomer/:id", async(req,res)=>{
    try {
      let item=req.body
  let updatedata={$set:item}
  let updatedCust=await registerModel.findByIdAndUpdate({_id:req.params.id}, updatedata)
  res.status(200).json('Customer is updated successfully')
      
  } catch (error) {
      console.log(error);
      res.json('Error in updating data!')  
  }
  
  })
  


router.delete("/api/deletecustomer/:id", async(req,res)=>{
  try {
    const list= await registerModel.findByIdAndDelete({ _id:req.params.id })
     res.status(200).json('Customer data is deleted successfully')
     
 } catch (error) {
     console.log(error.message);
     res.status(400).json('error.message')
 }
 })

 router.post('/api/newsalesorder', async (req, res) => {
  console.log(req.file);
  const data = new salesorderModel(req.body)
 
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

router.post('/api/salesorderdisplay', async(req,res)=>{
  try{
    const dashboarddata=await salesorderModel.find()
    const salescount=await salesorderModel.aggregate([
      {$group:{
        _id:'$customername',
        totalsalesqnty:{$sum:1}
      }}
    ])
  res.status(200).json({dashboarddata,salescount})
  }
  catch(error){
    console.log(error);
    res.status(400).json(error)
  }
  
})

router.post('/api/newpackage', async (req, res) => {
  console.log(req.file);
  const data = new packageModel(req.body)
 
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

router.post('/api/packagedisplay', async(req,res)=>{
  try{
    const dashboarddata=await packageModel.find()
    const packagecount=dashboarddata.length
    console.log(packagecount);
  res.status(200).json({dashboarddata,packagecount})
  }
  catch(error){
    console.log(error);
    res.status(400).json(error)
  }
  
})

router.post('/api/newdeliverychallan', async (req, res) => {
  console.log(req.file);
  const data = new deliverychallanModel(req.body)
 
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

router.post('/api/deliverychallandisplay', async(req,res)=>{
  try{
    const dashboarddata=await deliverychallanModel.find()
  res.status(200).json(dashboarddata)
  }
  catch(error){
    console.log(error);
    res.status(400).json(error)
  }
  
})

router.post('/api/newinvoice', async (req, res) => {
  console.log(req.file);
  const data = new invoiceModel(req.body)
 
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

router.post('/api/invoicesdisplay', async(req,res)=>{
  try{
    const dashboarddata=await invoiceModel.find()
    const invoicecount=dashboarddata.length
  res.status(200).json({dashboarddata,invoicecount})
  }
  catch(error){
    console.log(error);
    res.status(400).json(error)
  }
  
})

router.post('/api/newpayments', async (req, res) => {
  console.log(req.file);
  const data = new PaymentReceivedModel(req.body)
 
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

router.post('/api/paymentsdisplay', async(req,res)=>{
  try{
    const dashboarddata=await PaymentReceivedModel.find()
  res.status(200).json(dashboarddata)
  }
  catch(error){
    console.log(error);
    res.status(400).json(error)
  }
  
})

router.post('/api/newsalesreturn', async (req, res) => {
  console.log(req.file);
  const data = new salesreturnModel(req.body)
 
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

router.post('/api/salesreturndisplay', async(req,res)=>{
  try{
    const dashboarddata=await salesreturnModel.find()
  res.status(200).json(dashboarddata)
  }
  catch(error){
    console.log(error);
    res.status(400).json(error)
  }
  
})

router.post('/api/salesreturnreceipt/:id', async (req, res) => {
  console.log(req.file);
  const data = new salesreturnreceiptModel(req.body)
 
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

router.post('/api/creditnotedisplay', async(req,res)=>{
  try{
    const dashboarddata=await creditnoteModel.find()
  res.status(200).json(dashboarddata)
  }
  catch(error){
    console.log(error);
    res.status(400).json(error)
  }
  
})

router.post('/api/newcreditnote', async (req, res) => {
  console.log(req.file);
  const data = new creditnoteModel(req.body)
 
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

module.exports=router

