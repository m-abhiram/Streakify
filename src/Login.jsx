import React , {useState} from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

function Login(){

  const [loginBtn,setLoginBtn] = useState(true);
  const [signupBtn,setSignupBtn] = useState(false);
  
  const handleLoginClick = ()=>{
    setLoginBtn(true);
    setSignupBtn(false);
  }
  const handleSignupClick = ()=>{
    setLoginBtn(false);
    setSignupBtn(true);
  }

  return (
    <>
      <div className="loginOrSignup">
        <div className="buttons">
          <button className = "formBtn" onClick = {handleLoginClick}>Login</button>
          |
          <button className = "formBtn" onClick = {handleSignupClick}>SignUp</button>
        </div>

        <div className="form">
          <div className="inputs">
            <input type="text" className = "inputField" placeholder='Enter Username or email'/>
            <input type="text" className = "inputField" placeholder='Enter password'/>
          </div>
        </div>
        <div className="submit">
          {loginBtn ? <Link to = "/profile" className="loginBtn">Login</Link> : <Link to = "/profile" className="loginBtn">Signup</Link>} 
        </div>
      </div>
    </>
  )
}

export default Login;