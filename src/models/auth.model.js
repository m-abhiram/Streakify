import mongoose from "mongoose"

const authSchema = mongoose.Schema({
  userID :{
    type : String,
    required : false
  },
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  }
})

const authModel = mongoose.model("Auth",authSchema)

export default authModel