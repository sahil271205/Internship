const studentModel1 = require("../models/studentmodels");
let createstudent = async (req,res)=>{
    try{
let data = req.body
let register = await studentModel1.create(data)
return res.status(201).send({
    sttus:true,
    msg:"student registered sucessfully",
    data:register,


});
    
    }catch (error){
        return res
        .status(500)
        .send({status:false,msg:"internal server error"});



    }
};
module.exports ={createstudent}