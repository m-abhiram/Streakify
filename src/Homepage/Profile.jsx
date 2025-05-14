// import "./Homepage.css"
import React from 'react'
import guestImg from "../assets/unknown-user.png"
import {useState,useEffect} from 'react'
import pomocoin from "../assets/pomocoin.png"
import DailyTodo from './DailyTodo'
import Sidebar from './Sidebar'
import { ColorRing } from 'react-loader-spinner'

function Profile(props) {
  const [user,setUser] = useState(null)
  const handleSetUser = (data)=>{
    setUser({...data})
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    // console.log("token in profile is :",token)
    fetch("http://localhost:3000/api/getUserByID",{
      method : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({token : token})
    }).then(async(response)=>{
      // console.log("response :",response)
      response = await response.json()
      return response
    }).then((data)=>{
      handleSetUser(data)
    })
  }, [])

  const [listOfDailyItems,setListOfDailyItems] = useState([])
  let userImg = null
  // console.log("user is :",user)
  function handleImageUpload(){
    console.log("Handle profile image upload")
  }

  return (
    <> 
      {user ? 
        <div className='profile'>
          <div className="profileNameAndImage">
            <div className='user-details'> 
              <p className="profileName">{user?.username}<br/></p>
              <p className='pomo-info'>{user?.pomocoins} <img src={pomocoin} className = "pomo-icon" alt="" /></p>
            </div>
            <div className="profileImage">
              <img src={user?.image === "" ? guestImg : userImg} className = "profileImage" alt="" />
              <button className="uploadProfileImg" onClick={handleImageUpload}>Update Image!</button>
            </div>
          </div>
          <div className="streakMonthMap">
            {/* streakMonthMap */}
          </div>
          <div className="dailyItems">
            <h1>Below are your <i style={{fontSize:"2rem"}}>Streakify</i> target habits</h1>
            <div className="dailyToDo">
              <DailyTodo dailyHabits = {user?.dailyHabits}/>
            </div>

          </div>
        </div>
        : <div style={{color : "white",display: "flex",justifyContent : "center",alignItems : "center",width : "100%",fontSize : "70px"}}>You need to login first!</div>}
      </>
  )
}

export default Profile