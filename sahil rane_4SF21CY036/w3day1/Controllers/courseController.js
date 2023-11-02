const CourseModel = require("../Models/courseModel");
let createCourse = async (req, res)=>{
    try {
        let data = req.body
        let register = await CourseModel.create(data)
        return res.status(201).send({status:true, msg:"Course created succesfully",data: register,});
    } catch (error) {
        return res
        .status(500)
        .send({status:false, msg: "internal server error"});
        
    }
};
module.exports = {createCourse}