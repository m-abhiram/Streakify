import React, {useEffect, useState} from 'react'
import {Bars} from "react-loader-spinner"
import Leaderboardnamecard from './Leaderboardnamecard';

function Leaderboard () {
  const [listOfUsers, setListOfUsers] = useState(null);
  
  useEffect(()=>{
    // console.log("Get request was sent to backend")
    fetch("http://localhost:3000/api/getAllUsers",{
      method : "GET"
    })
    .then(async(res)=>{
      const jsonResponse = await res.json()
      return jsonResponse
    }).then((data)=>{
      // console.log("data :",data)
      setListOfUsers(data)
      console.log("listOfUsers :",listOfUsers)
    })

  },[])
  
  return (
    <div className='leaderboard'>
      <div className="leaderboardHeading">
        Leaderboard - Our top performers
      </div>
      <div className="leaderboardContent">
        {(listOfUsers === null) ? <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          />: 
          listOfUsers?.map((ele) => <Leaderboardnamecard ele = {ele}/>)
        }
      </div>
    </div>
  )
}

export default Leaderboard