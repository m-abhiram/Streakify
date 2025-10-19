import logo from "./assets/logo.png"
import { Link } from "react-router-dom";

function Navbar(){
  return(
    <div className = "navbar">
        <div className="left">
          <img src={logo} alt="" className ="logoImg"/>
          <Link className = "navButtons" to = "/faq" style={{"padding-top" : "10px"}}>FAQ</Link>
        </div>
        <div className="right">
          <Link className = "navButtons" to = "/about"><p>About</p></Link>
          <Link className = "navButtons" to = "/contact-us"><p>Contact Us</p></Link>
          <button className = "navButtons" >UserLogo</button>
        </div>
    </div>
  )
}

export default Navbar;