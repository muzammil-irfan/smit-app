const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
// console.log()
mongoose.connect(MONGODB_URI,(err,res)=>{
    if(err){
       return console.log({err});
    }
    console.log('Mongodb Connected');
});