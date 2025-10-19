import {useState} from 'react';
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Meditate from "./Meditate";
import Journal from "./Journal";
import Leaderboard from "./Leaderboard";
import { router } from '../App';

function Homepage(){
  
  return(
    
    <>
      <div className="homepageContent">
        <Sidebar />
        <div className="content">
          <Profile />
        </div>
      </div>
    </>
  )

}

export default Homepage;