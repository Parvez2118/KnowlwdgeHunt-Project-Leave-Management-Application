const mongoose=require('mongoose');
const jwt= require("jsonwebtoken");
const userSchema = mongoose.Schema({
   
    studentname: {
        type: String,
        required: true,
    },
    startdate: {
        type: String,
        required: true,      
    },
    enddate: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    Studentid:{
        type: String,
        required: true
    },
    wardenstatus: {
        type: String,
        required: true
    },
    hodstatus: {
        type: String,
        required: true
    }
})


const User1 = mongoose.model('StudentLeaveApplication', userSchema);


module.exports=User1;