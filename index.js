const express = require("express")
const mongoose = require("mongoose")
const app = express();
const PORT = process.env.PORT||5000;
const userModel = require("./user/user")
const DBURI = "mongodb+srv://saqibfisalofficial:saqibfaisal22@cluster0.ovp0b0x.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DBURI)
.then((res)=>console.log("connect"))
.catch((err)=>console.log(err))


app.use(express.json())
app.get("/:userid",(req,res)=>{
    console.log(req.params,"param");
})
app.post("/",(req,res)=>{
    const {firstname,lastname,email,password} = req.body||{};

    if(!firstname || !lastname || !email || !password){
        res.json({
            message:"field is requried",
            status:false,
        })
    }
    const objTosend={
        first_name :firstname,
        last_name :lastname,
        email :email,
        password :password,
    }
    userModel.create(objTosend,(err,data)=>{
        if(err){
            res.json({
                message:`Internal error:${err}`,
                status:false,
            })
        }else{
            res.json({
                message:"user create ",
                data:data,
                status:true,
            })
        }
    })
    console.log(req.body);
    // res.send("create user")
})

app.listen(PORT,()=>console.log(`server is running http://localhost:${PORT}`))