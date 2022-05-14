const express = require('express');
const Admin = require('../models/Admin');
const router = express.Router();

router.post('/signup',async(req,res)=>{
    // const {name,email,password} = req.body;
    const admin = await Admin.create(req.body);
    res.json(admin)
})
router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    const admin = await Admin.findOne({email})
    if(!admin){
        res.status(404).send('Not found')
    }
    if(password === admin.password){
        res.json(admin)
    } else{
        res.status(404).send('Not found')
    }
})

module.exports =  router