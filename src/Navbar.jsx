import logo from "./assets/logo.png"
import { Link } from "react-router-dom";

function Navbar(){
  return(
    <div className = "navbar">
        <div className="left">
          <img src={logo} alt="" className ="logoImg"/>
          <button className = "navButtons">FAQs</button>
        </div>
        <div className="right">
          <Link className = "navButtons" to = "/about"><p>About</p></Link>
          <Link className = "navButtons" to = "/contact"><p>Contact Us</p></Link>
          <button className = "navButtons" >UserLogo</button>
        </div>
    </div>
  )
}

export default Navbar;