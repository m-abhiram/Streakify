import { useState } from "react";
import { createBrowserRouter,Router,RouterProvider,Link } from "react-router-dom";
import HeaderComponent from "./HeaderComponent"
import Features from "./Features"
import Footer from "./Footer"
import Homepage from "./Homepage/Homepage";
import Pomodoro from "./pomodoro/Pomodoro";
import MostUsedTemplates from "./MostUsedTemplates/MostUsedTemplates";
import Navbar from "./NavBar";
import Profile from "./Homepage/Profile";
import Meditate from "./Homepage/Meditate";
import Sidebar from "./Homepage/Sidebar";
import Journal from "./Homepage/Journal";
import Leaderboard from "./Homepage/Leaderboard";
import Chatbar from "./GroqChat/Chatbar";
import FAQ from "./Homepage/FAQ";
import About from "./Homepage/About";
import ContactUs from "./Homepage/ContactUs";

function App() {
  const token = localStorage.getItem("token");
  const listOfFeatures = [{heading : "Build Streaks to Break Limits.",
                           description : "Random Shit!!"
                          },
                          {heading : "Turn Your Routine into a Rewarding Adventure!",
                           description : "Random Shit!!"
                          },
                          {heading : "Your Progress, Visualized and Gamified!",
                           description : "Random Shit!!"
                          },
                          {heading : "Your Journey, Your Dashboard, Your Rules.",
                           description : "Random Shit!!"
                          },
                          {heading : "Streaks that Stick, Progress that Lasts!",
                           description : "Random Shit!!"
                          },
                          {heading : "Win Today, Repeat Tomorrow.",
                           description : "Random Shit!!"
                          },
  ]
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><HeaderComponent />  <Features listOfFeatures = {listOfFeatures}/><Footer /></>
    },
    {
      path :"/profile",
      element : <div className="flex">{token?  <><Sidebar/><Profile /></>:<div style={{color : "white",display: "flex",justifyContent : "center",alignItems : "center",width : "100%",fontSize : "70px"}}>You need to login first!</div>}</div>
    },
    {
      path : "/meditate",
      element : <div className="flex">{token? <><Sidebar/><Meditate/></> : <div style={{color : "white",display: "flex",justifyContent : "center",alignItems : "center",width : "100%",fontSize : "70px"}}>You need to login first!</div>}</div>
    },
    {
      path : "/journal",
      element : <div className="flex">{token? <><Sidebar/><Journal/></>:<div style={{color : "white",display: "flex",justifyContent : "center",alignItems : "center",width : "100%",fontSize : "70px"}}>You need to login first!</div>}</div>
    },
    {
      path : "/leaderboard",
      element : <div className="flex">{token? <><Sidebar/><Leaderboard/></>:<div style={{color : "white",display: "flex",justifyContent : "center",alignItems : "center",width : "100%",fontSize : "70px"}}>You need to login first!</div>}</div>
    },
    {
      path : "/pomodoro",
      element : <div className="flex">{token ? <><Sidebar/><Pomodoro/></> : <div style={{color : "white",display: "flex",justifyContent : "center",alignItems : "center",width : "100%",fontSize : "70px"}}>You need to login first!</div>}</div>
    },
    {
      path : "/chatbot",
      element :  <>{token ? <div className="random"><Sidebar/> <div style={{display:"flex",alignItems : "center",justifyContent:"center",width:"100vw",height:"100vh"}}><p style={{color : "white",fontSize : "2rem"}}>This feature wil be available soon!</p></div></div>: <div style={{color : "white",display: "flex",justifyContent : "center",alignItems : "center",width : "100%",fontSize : "70px"}}>You need to login first!</div>}</>
    },
    {
      path : "/faq",
      element : <>{token ? <div style={{display : "flex"}}><Sidebar/> <FAQ /></div> : <div style={{display : "flex"}}> <FAQ /></div>}</>
    },
    {
      path : "/about",
      element : <>{token ? <div style={{display : "flex"}}><Sidebar/> <About /></div> : <div style={{display : "flex"}}> <About /></div>}</>
    },
    {
      path : "/contact-us",
      element : <>{token ? <div style={{display : "flex"}}><Sidebar/> <ContactUs /></div> : <div style={{display : "flex"}}> <ContactUs /></div>}</>
    },
    {
      path : "/add-friends",
      element : <>{token ? <div className="random"><Sidebar/> <div style={{display:"flex",alignItems : "center",justifyContent:"center",width:"100vw",height:"100vh"}}><p style={{color : "white",fontSize : "2rem"}}>This feature wil be available soon!</p></div></div>: <div style={{color : "white",display: "flex",justifyContent : "center",alignItems : "center",width : "100%",fontSize : "70px"}}>You need to login first!</div>}</>
    }
  ])
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export const router = true;
export default App