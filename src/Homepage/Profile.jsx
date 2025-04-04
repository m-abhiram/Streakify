// import "./Homepage.css"
import React from 'react'
import guestImg from "../assets/unknown-user.png"
import {useState} from 'react'
import pomocoin from "../assets/pomocoin.png"
import DailyTodo from './DailyTodo'
import Sidebar from './Sidebar'

function Profile() {
  let userImg = null;
  let username = null;
  let pomoCount = null
  //fetch image from database if updated
  //fetch username from database
  //fetch pomocoins count from database
  const [listOfDailyItems,setListOfDailyItems] = useState([])
  function handleImageUpload(){
    console.log("Handle profile image upload")
  }

  return (
    <>
      {/* <div className="flex">
        <Sidebar /> */}
        <div className='profile'>
          <div className="profileNameAndImage">
            <div className='user-details'> 
              <p className="profileName">{username !== null ? username : "Mellacheruvu Abhirama Suryateja"}<br/></p>
              <p className='pomo-info'>{1635} <img src={pomocoin} className = "pomo-icon" alt="" /></p>
              
            </div>
            <div className="profileImage">
              <img src={userImg === null ? guestImg : userImg} className = "profileImage" alt="" />
              <button className="uploadProfileImg" onClick={handleImageUpload}>Update Image!</button>
            </div>
          </div>
          <div className="streakMonthMap">
            {/* streakMonthMap */}
          </div>
          <div className="dailyItems">
            <h1>Below are your <i style={{fontSize:"2rem"}}>Streakify</i> target habits</h1>
            <div className="dailyToDo">
              <DailyTodo/>
            </div>

          </div>
        </div>
        {/* </div> */}
      </>
  )
}

export default Profile