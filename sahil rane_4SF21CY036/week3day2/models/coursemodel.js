const mongoose = require("mongoose");
let courseschema = new mongoose.Schema({
course_name:{
    type:String,
    required:true
},
course_year:{
    type:String,
    required:true,
    
},
course_branch:{
    type:String,
    required:true,
    
},
course_type:{
    type:String,
    required:true
},


},{timestamps:true});
module.exports=new mongoose.model("student",courseschema);