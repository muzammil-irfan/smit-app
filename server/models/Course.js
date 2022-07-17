const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    creator_id:{
        type:mongoose.Schema.ObjectId,
        ref:"Admin"
    },
    name: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

const Course = mongoose.model('Course',CourseSchema);
module.exports = Course;