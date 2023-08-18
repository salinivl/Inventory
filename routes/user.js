const express=require('express')
const path=require('path')
const cors=require('cors')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')


const router=express.Router()
const registerModel = require('../model/registerModel')
const UserModel = require('../model/usermodel')

    router.post("/api/newuser", async(req,res)=>{
        try {
            console.log(req.body);
            const hashedPassword=await bcrypt.hash(req.body.password, 10)
            let data=new UserModel({firstname:req.body.firstname, lastname:req.body.lastname, email:req.body.email, username:req.body.username, password:hashedPassword})
            const result=await data.save()
            console.log(result);
            res.status(200).json({"status":"success", "data":result})
            
        } catch (error) {
            console.log("Password was not hashed successfully"); 
            console.log(error);
            res.status(404).json(error)
        }
    })

    router.post("/api/userlogin", async(req,res)=>{
        try { 
            console.log(req.body);    
           const user= await UserModel.findOne({username:req.body.username})
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




module.exports=router

