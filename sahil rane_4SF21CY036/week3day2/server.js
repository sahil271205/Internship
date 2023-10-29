//console.log("hello world");

const express=require("express");
const mongoose= require("mongoose");
const app=express();
const routes = require("./routes/route")

app.use(express.json());
app.use("/",routes);

mongoose
.connect("mongodb+srv://sahil271:sahil271@cluster0.mu8chea.mongodb.net/")
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>{
    console.log(err,"something went wrong");
})


app.get("/test",(req,res)=>
{
    res.send("test api")
});
app.listen(4000,()=>{
    console.log("server is connected");
});