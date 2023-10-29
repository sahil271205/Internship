const mongoose = require("mongoose");
let studentSchema = new mongoose.Schema({
student_name:{
    type:String,
    required:true
},
Email:{
    type:String,
    required:true,
    unique:true,
},
usn:{
    type:String,
    required:true,
    unique:true
},
gender:{
    type:String,
    required:true
},
Mobile:{
    type:Number,
required: true,
unique: true,

},
password:{
    type:String,
    required:true,
}
},{timestamps:true});
module.exports=new mongoose.model("student",studentSchema);