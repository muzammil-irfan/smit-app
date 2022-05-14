const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,(err,res)=>{
    if(err){
       return console.log({err});
    }
    console.log('Mongodb Connected');
});