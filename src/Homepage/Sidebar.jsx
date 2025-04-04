import "./Homepage.css";
import React from 'react';
import { Link } from "react-router-dom";


function Sidebar() {
  
  return (
    //remove sidebar and put like navbar
    <div className='homepage-sidebar'>
      <Link  className="sidebarButton" to="/profile"><span>Profile</span></Link>
      <Link className="sidebarButton" to="/meditate"><span>Meditate</span></Link>
      <Link className="sidebarButton" to="/journal"><span>Journal</span></Link>
      <Link className="sidebarButton" to="/leaderboard"><span>Leaderboard</span></Link>
      <Link className="sidebarButton" to="/pomodoro"><span>Pomodoro</span></Link>
      <Link className="sidebarButton" to="/add-friends"><span>Add Friends</span></Link>
      <Link className="sidebarButton" to="/faq"><span>FAQ</span></Link>
      <Link className="sidebarButton" to="/about"><span>About</span></Link>
      <Link className="sidebarButton" to="/contact-us"><span>Contact US</span></Link>
    </div>
  )
}

export default Sidebar