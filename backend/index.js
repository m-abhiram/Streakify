import dotenv from "dotenv"
dotenv.config()

import express from "express"
import mongoose from "mongoose"
import userSchema from "./models/user.model.js"
import authModel from "./models/auth.model.js"
import cors from "cors"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const app = express()

app.use(express.json())
app.use(cors())



app.post("/api/register", async (req, res) => {
  try {
    const { email, password,username } = req.body;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const usernameExists = await authModel.findOne({username : username})
    const emailExists = await authModel.findOne({ email : email });
    if (emailExists) {
      return res.json({ message: "Email already in use!" });
    }
    if (usernameExists) {
      return res.json({ message: "Username already in use!" });
    }

    await authModel.create({ email: email, password: hash ,username : username});
    
    fetch ("http://localhost:3000/api/addNewUser",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username : username, email : email})
      }
    ).then(async(response) => {
      response = await response.json()
      if (response.user){
        console.log("response :",response)
        console.log("response.user :",response.user)
          const payload = {_id : response.user._id.toString()}
          const token = jwt.sign(payload,process.env.SECRET_KEY)
          return res.json({ message: "User created successfully!",user : response.user ,token : token});
        }
      })
  } catch (error) {
    return res.json({ message: error.message || error });
  }
});

app.post("/api/login",async(req,res)=>{
  try {
    const {email,password} = req.body
    const user = await authModel.find({email : email})
    if (!user){
      return res.json({message : "No such user exists!"})
    }
    bcrypt.compare(password, user[0].password,async (err, result) => {
      if (err) {
          return res.json({message : err.message});
        }
        if (result) {
          const userData = await userSchema.findOne({email : email})
          const payload = {_id : userData._id.toString()}
          const token = jwt.sign(payload,process.env.SECRET_KEY)

          return res.json({message : "Login successful",user : userData,token : token});
        } else {
          return res.json({message : "Login Failed"});
      }
    })


  } catch (error) {
    return res.json({message : error.message || error})
  }
})

app.get("/api/getAllAuth",async (req,res)=>{
  try {
    const listOfAuths = await authModel.find()
    res.json(listOfAuths)
  } catch (error) {
    res.json(error)
  }
})

app.post("/api/addDailyHabit",async(req,res)=>{
  const newDailyList = req.body.newDailyList
  const token = req.body.token
  try{
    jwt.verify(token,process.env.SECRET_KEY,async (error,data)=>{
      const userUpdate = await userSchema.findByIdAndUpdate(data._id,{dailyHabits : newDailyList})
      res.json({user : userUpdate._update});
    })
  }
  catch(error){
    console.log("error :",error)
  }
})

app.post("/api/addPomocoins",async (req,res)=>{
  try {
    const {token ,increment} = req.body
    jwt.verify(token,process.env.SECRET_KEY,async(error,data)=>{
      const user = await userSchema.findOne({_id : data._id})
      await userSchema.findByIdAndUpdate(data._id,{pomocoins : user.pomocoins + increment})
      res.sendStatus(200)
    })
  } catch (error) {
   res.json({"message" : error.message}) 
  }
})


app.post("/api/getUserByID",async (req,res)=>{
  const token = req.body.token
  try { 
    jwt.verify(token,process.env.SECRET_KEY,async (error,data)=>{
      const user = await userSchema.findOne({_id : data._id})
      res.json(user)
    })
    return 
   } catch (error) {
    res.json({message : error.message})
  }
})

app.get("/api/getAllUsers/",async (req,res)=>{
  try {
    const listOfUsers = await userSchema.find({}).sort({pomocoins : -1}).limit(10)
    res.json(listOfUsers)
  } catch (error) {
    res.json({"message" : error.messsage})
   }  
})



app.post("/api/addNewUser",async(req,res)=>{
  try {
    const addUser = await userSchema.create(req.body)
    res.json({"message" : "Details updated successfully!",user : addUser})
  } catch (error) {
    res.json({"message" : error.message})
  }
})


app.delete("/api/deleteUser/:name",async (req,res) =>{
  try {
    const {name} = req.params
    const listOfUsersWithValidNames = await userSchema.find({"name" : name})
    if (listOfUsersWithValidNames.length !== 0){
      const id = listOfUsersWithValidNames[0]._id
      const deleteUser = await userSchema.findByIdAndDelete(id)
    }
    res.json({"message" : "User deleted successfully!"})
  } catch (error) {
    res.json({"message" : error.message})
  }
})


app.put("/api/updateUser/:name",async(req,res)=>{
  try {
    const {name} = req.params
    const user = await userSchema.findOne({"name" : name})
    const update = await userSchema.findByIdAndUpdate(user._id,req.body)
    res.json({"message" : "data updated successfully"})
  } catch (error) {
    res.json({"message" : error.message})
  }
})


app.post("/api/isStreakActive",(req,res)=>{
  try {
    const {token} = req.body;
    jwt.verify(token,process.env.SECRET_KEY,async (error,data)=>{
      console.log("data :",data);
      const now = new Date();
      const yesterday5am = new Date(now.getFullYear(),now.getMonth(),now.getDate()-1,5,0,0,0);
      const today5am = new Date(now.getFullYear(),now.getMonth(),now.getDate(),5,0,0,0);
      const userData = await userSchema.findOne({_id : data._id});
      console.log("userData :",userData);
      const lastSubmission = userData.completed_dates.length > 0 ? new Date(userData.completed_dates[userData.completed_dates.length - 1]) : 0;
      if (lastSubmission > yesterday5am){
        res.json({active : true,streak : userData.streak})
      }
      else{
        const update = await userSchema.findByIdAndUpdate(data._id,{streak : 0, longestStreak : Math.max(userData.longestStreak,userData.streak)})
        res.json({active : false,streak : 0})
      }
    })
  
  } catch (error) {
    console.log("error :",error.message);
    res.json({error : error.message});
  } 
  
})

app.post("/api/incrementStreak",(req,res) => {
  const token = req.body.token
  try{
    jwt.verify(token,process.env.SECRET_KEY,async (error,data)=>{
      const userData= await userSchema.findOne({_id : data._id})
      const now = new Date();
      const today5am = new Date(now.getFullYear(),now.getMonth(),now.getDate(),5,0,0,0);
      const lastSubmission = userData.completed_dates.length > 0 ? new Date(userData.completed_dates[userData.completed_dates.length - 1]) : 0;
      if (lastSubmission > today5am){
        return res.json({message : "Streak already incremented today!"})
      }
      const userUpdate = await userSchema.findByIdAndUpdate(data._id,{streak : userData.streak + 1,completed_dates : [...userData.completed_dates,new Date()]})
      return res.json({user : userUpdate._update});
    })
  }
  catch(error){
    console.log("error :",error)
  }
})

app.post("/api/saveJournalEntry",(req,res)=>{
  const now = new Date();
  const key = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
  const heading = req.body.heading;
  const body = req.body.body;
  const token = req.body.token;
  try{
    jwt.verify(token,process.env.SECRET_KEY,async (error,data)=>{
      const userData= await userSchema.findOne({_id : data._id})
      const update = await userSchema.findByIdAndUpdate(
        data._id,
       {
        journals : {...userData.journals, [key] : [heading,body]} 
        })
      return res.json({message : "Journal entry saved successfully!",response : update})
    })
  }
  catch(error){ 
    return res.status(500).json({error : error.message});
  }
})

app.post("/api/checkJournalEntry",(req,res)=>{
  console.log("req.body :",req.body)
  const token = req.body.token;
  jwt.verify(token,process.env.SECRET_KEY,async(error,data)=>{
    console.log("userData :",data)
    const userData = await userSchema.findOne({_id : data._id}) 
    console.log("userDAta :",userData)
    const previousUpdate = Object.keys(userData.journals).at(-1)
    console.log("prev :",previousUpdate)
    const today = new Date().toLocaleDateString()
    console.log("today :",today)
    console.log(typeof today)
    console.log(typeof previousUpdate)
    if (today == previousUpdate){
      console.log("it was updated today")
      res.json({message : "todays journal completed", completed : true})
    }
    else{
      console.log("it was not updated ")
      res.json({message : "todays journal pending", completed : false})
    }
   })
})


const password = process.env.PASSWORD;
const encodedPassword = encodeURIComponent(password);


mongoose.connect(`mongodb+srv://Abhirama:${encodedPassword}${process.env.CONNECTION_STRING}`)
.then(()=>{ 
  app.listen(3000,()=>{console.log("successfully connected and running on http://localhost:3000/")})

})
.catch((e)=>{
  console.log(e)
})



