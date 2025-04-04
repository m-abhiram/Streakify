import "./Header.css"
import Login from "./Login";
import logo from "./assets/logo.png"
import Navbar from "./NavBar";

function HeaderComponent(){
  return(
    <>
      <div className = "header">
        <Navbar />
        <div className="component2">
          <div className="website">
            <h1 className = "website-name">Track. Streak. Thrive.</h1>
          </div>
          <div className="login">
            <Login />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderComponent;