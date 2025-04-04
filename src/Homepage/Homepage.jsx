import {useState} from 'react';
import Navbar from "../NavBar";
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
          {/* <RouterProvider router = {router}/> */}
          <Profile />
          {/* {sidebarValue === "Profile " ? <Profile /> : ""} */}
          {/* <Meditate /> */}
          {/* {sidebarValue === "Meditate " ? <Meditate /> : ""} */}
          {/* <Journal /> */}
          {/* {sidebarValue === "Journal " ? <Journal /> : ""} */}
          {/* <Leaderboard /> */}
          {/* {sidebarValue === "Leaderboard " ? <Leaderboard /> : ""} */}

        </div>
      </div>
    </>
  )

}

export default Homepage;