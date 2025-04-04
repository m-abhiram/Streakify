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

import { createBrowserRouter,Router,RouterProvider,Link } from "react-router-dom";

function App() {
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
      element : <div className="flex"><Sidebar/><Profile/></div>
    },
    {
      path : "/meditate",
      element : <div className="flex"><Sidebar/><Meditate/></div>
    },
    {
      path : "/journal",
      element : <div className="flex"><Sidebar/><Journal/></div>
    },
    {
      path : "/leaderboard",
      element : <div className="flex"><Sidebar/><Leaderboard/></div>
    },
    {
      path : "/pomodoro",
      element : <Pomodoro/>
    }
  ])
  // console.log("this is the router :",router)
  return(
    <>
      {/* <Homepage router = {router}/> */}
      {/* <HeaderComponent />
      <Features listOfFeatures = {listOfFeatures}/>
      <Footer /> */}
      {/* <Pomodoro />   */}
      {/* <MostUsedTemplates/> */}
      <RouterProvider router={router}/>
    </>
  )
}

export const router = true;
export default App