import React from 'react'
import guestImg from "../assets/unknown-user.png"
import {useState,useEffect} from 'react'
import pomocoin from "../assets/pomocoin.png"
import DailyTodo from './DailyTodo'
import Sidebar from './Sidebar'
import { ColorRing } from 'react-loader-spinner'
import Logout from './Logout'
import active_streak from "../assets/active-streak.png"
import inactive_streak from "../assets/inactive-streak.png"

function Profile(props) {
  const [user,setUser] = useState(null)
  const handleSetUser = (data)=>{
    setUser({...data})
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/getUserByID`,{
      method : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({token : token})
    }).then(async(response)=>{
      response = await response.json()
      return response
    }).then((data)=>{
      handleSetUser(data)
    })
  }, [])

  const [listOfDailyItems,setListOfDailyItems] = useState([])
  let userImg = null
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
              <div className="flexi">
                <p className='pomo-info'>{user?.pomocoins} <img src={pomocoin} className = "pomo-icon" alt="" /></p>
                <div className="streakDataAndImage">
                  <p className = 'pomo-info streak-data' style={{fontSize : "30x"}}>{user?.streak}</p>
                  <img style = {{marginLeft : "7px" ,width : "15px",height : "20px"}}className = "streak-image" src={user.streak > 0 ? active_streak : inactive_streak} alt="streak-image" />
                </div>
              </div>
            </div>
            <div className="profileImage">
              <img src={user?.image === "" ? guestImg : userImg} className = "profileImage" alt="" />
              <button className="uploadProfileImg" onClick={handleImageUpload}>Update Image!</button>
            </div>
          </div>
          <div className="dailyItems">
            <h1>Below are your <i style={{fontSize: "2rem",background: "linear-gradient(135deg, #34f82eff, #40ad0dff)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",display: "inline-block"}}
 >Streakify</i> target habits</h1>
            <div className="dailyToDo">
              <DailyTodo dailyHabits = {user?.dailyHabits}/>
            </div>

          </div>
          <div className="logoutDiv">
            <Logout />
          </div>
        </div>
        : <div style={{color : "white",display: "flex",justifyContent : "center",alignItems : "center",width : "100%",fontSize : "70px"}}>You need to login first!</div>}
      </>
  )
}

export default Profile