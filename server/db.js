const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mujju:muzamil786.@cluster0.e8aay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',(err,res)=>{
    if(err){
       return console.log({err});
    }
    console.log('Mongodb Connected');
});