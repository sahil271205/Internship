const coursemodel1 = require("../Models/studentmodel1");
let createcourse = async (req,res)=>{
    try{
let data = req.body
let create = await coursemodel1.create(data)
return res.status(201).send({
    sttus:true,
    msg:"course created sucessfully",
    data:register,


});
    
    }catch (error){
        return res
        .status(500)
        .send({status:false,msg:"internal server error"});



    }
};
module.exports ={createstudent}