import React from 'react'
import "./Leaderboardnamecard.css"
import streakImage from "../assets/streakImage.png"

function Leaderboardnamecard(props) {
  console.log("ele :",props.ele)
  return (
    <div className="namecardFlex">
      <div className="leaderboard-name">{props.ele.username}</div>
      <div className="streak-info">
        <div><img className = "streak-icon"src= {streakImage} alt="streak-icon" /></div>
        <div className="streak">{props.ele.streak}</div>
      </div>
      <div className="leaderboardpomocoins">{props.ele.pomocoins}</div>

    </div>
  )
}

export default Leaderboardnamecard