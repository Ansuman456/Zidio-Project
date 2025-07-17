const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const JWT_SECRET=process.env.JWT_SECRET;

exports.register=async(req,res)=>{
    const {name,email,password,role}=req.body;
    try{
        const existing=await User.findOne({email});
        if(existing)return res.status(400).json({message:'User already exists'})


        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await User.create({name,email,password:hashedPassword,role});
        
        res.status(201).json({message:'User registered'});
}
catch (err){
    res.status(500).json({error:err.message});
}
    };

 exports.login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const foundUser=await User.findOne({email});
        if(!foundUser) return res.status(400).json({message:'Invalid credentials'});

        const isMatch=await bcrypt.compare(password,foundUser.password);
        if(!isMatch)return res.status(400).json({message:'Invalid credentials'});

        const token=jwt.sign({id:foundUser._id,role:foundUser.role},JWT_SECRET,{
            expiresIn:'1d',
        });

        res.json({token,user:{
            id:foundUser._id,name:foundUser.name,role:foundUser.role}});
        }
        catch(err){
            res.status(500).json({error:err.message});
        }
    };


    
  


    
  
