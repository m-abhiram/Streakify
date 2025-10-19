import "./Header.css"
import Login from "./Login";
import logo from "./assets/logo.png"
import Navbar from "./NavBar";

function HeaderComponent(props){
  console.log("currentUSEr in headercomponent :",props.currentUser)
  return(
    <>
      <div className = "header">
        <Navbar />
        <div className="component2">
          <div className="website">
            <h1 className = "website-name">Track. Streak. Thrive.</h1>
          </div>
          <div className="login">
            <Login currentUser = {props.currentUser}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderComponent;