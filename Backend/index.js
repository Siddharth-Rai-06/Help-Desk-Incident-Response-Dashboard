import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import axios from "axios";
import dotenv from 'dotenv';


dotenv.config();
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


// Setting up DB connection
const start = async() => {
  await mongoose.connect(process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  );
  const port=process.env.PORT;
  app.listen(port , () => {
    console.log(`BE started port ${port} `)
  });
};
start();



// Creating User Schema for DB
const userSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  empid: {
    type:String,
    required:true
  },
  email: {
    type:String,
    required:true
  },
  age: {
    type:String,
    required:true
  },
  city: {
    type:String,
    required:true
  },
  phone: {
    type:String,
    required:true
  }
})

// User Routes
const UserModel =  mongoose.model("User" , userSchema)
app.post("/form" , async (req, res) => {
  const newUser=new UserModel(req.body);

  await newUser.save();
  await axios
  .post(process.env.NEW_USER_URL,
   {text:"Hey "+req.body.name+", Welcome to the team !!"})
  .then(()=>{
    res.send("Posted axios successfully")
  })
});

// Creating Alerts Schema for DB
const alertSchema = new mongoose.Schema({
  id: {
    type:String,
    required:false
  },
  name: {
    type:String,
    required:true
  },
  
  Severity: {
    type:String,
    required:true
  },
  Descrip: {
    type:String,
    required:true
  },
  date: {
    type:String,
    required:true,    
  },
})

// Alert Routes
const AlertModel =  mongoose.model("Alert" , alertSchema)
app.post("/alerts" , async (req, res) => {
  const newAlert=new AlertModel(req.body);

  await newAlert.save();
  await axios
  .post(process.env.NEW_ALERT_URL,
   {text:"New Issue : "+req.body.Descrip})
  .then(()=>{
    res.send(newAlert)
  })
});


//-----GETTING DATA FROM DB---------

app.get("/getUsers", async(req,res)=>{
  const allUsers= await UserModel.find();
  res.send({status:200,data:allUsers})
  
})
app.get("/getalerts", async(req,res)=>{
  const alertincident= await AlertModel.find();
  res.send({status:200,data:alertincident})
  
})