const express = require("express");
const Student = require('../models/student.js')

const router = express.Router();

const createStud = async (req,res) =>{
    try{
        const {name ,email ,age, department} = req.body;

        if(!name || !email || !age || !department){
            return res.status(400).json({message : "All fields are required"});
        }

        const curEmail = await Student.findOne({email});

        if(curEmail){
            return res.status(400).send("User already exist");
        }
        const newStud = new Student({name , email , age, department});

        await newStud.save();

    }catch(e){
        res.status(500).send("Server side error")
        console.log(e)
    }
}

const getStud = async (req , res) =>{
    try{
         
        const studs =await Student.find();
        res.status(200).json({Students : studs});
    }
    catch(e){
        res.status(500).send("server side error");
        console.log(e);
        
    }
}

const updateStud = async (req, res)=>{
    try{
        const {name , email , age , department} = req.body;

        const curStud = await Student.findOne(email);

        if(!curStud){
            return res.status(400).send("User does'nt exist");
        }

        const updatedStud  =  await Student.findOneAndUpdate(email , {name , email , age , department},{new : true})
        res.status(200).send("Updated successfully");
    }   
    catch(e){
        res.status(500).send("Server side error");
    }
}

const deleteStud = async (req, res)=>{
    try{
        const {email} = req.body;

        if(!email){
            return res.status(400).send("User does'nt exist");
        }
        await Student.deleteOne({email});
        res.status(200).send("Deleted successfully");
    }
    catch(e){
        res.status(500).send("Server error")
    }
}
module.exports = {createStud , getStud , updateStud, deleteStud};

