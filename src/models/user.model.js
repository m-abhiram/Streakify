import mongoose from "mongoose"

const UserSchema = mongoose.Schema(
  {
    username : {
      type : String,
      required : [true , "Please enter the name of the user!!"]
    },
    dailyHabits : {
      type : Array,
      required : [true, "Please enter atleast one daily habit!!"]
    },
    email : {
      type : String,
      required : [true, "Please enter email id!"]
    },
    streak:{
      type:Number,
      required:true,
      default : 0
    },
    pomocoins:{
      type:Number,
      required:false,
      default : 0
    },
    image :{
      type : String,
      required : false,
      default : ""
    }
  },
  {
    timestamps : true,
  }
);

const User = mongoose.model("User",UserSchema);

export default User