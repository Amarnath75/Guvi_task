const express=require('express')
const mongoose = require('mongoose')
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://amarvijay:Ye9kVnGCrCWtCS89@cluster0.yd0mhlz.mongodb.net/UsersData?retryWrites=true&w=majority').then(()=>{
    console.log("connected");
})
const userSchema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password: String,
    age:Number,
    gender:String
})
const User=new mongoose.model('User',userSchema)

app.get('/profile',async(req,res)=>{
    const data= await User.find()
    res.json(data);
})
app.post('/signIn',async(req,res)=>{
    console.log(req.body)
    try{
    await User.create(req.body)
    res.send("inserted successfully")
    }
    catch(err){
        console.log(err);
    }
})
app.listen(3000)
module.exports = User;