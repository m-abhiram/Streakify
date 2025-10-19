import React , {useEffect, useState} from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Login(props){
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")
  const [loginBtn,setLoginBtn] = useState(true);
  const [signupBtn,setSignupBtn] = useState(false);
  
  useEffect(() => {
    if (props.currentUser){
      console.log("State updated:", props.currentUser);
    }
  }, [props.currentUser]);
  

  const handleEmailChange = (e)=>{
    setEmail(email => e.target.value)
  }
  const handlePasswordChange = (e)=>{
    setPassword(password => e.target.value)
  }

  const handleUserLogin = async (e)=>{
    e.preventDefault();
    if (email == "" || password == ""){
      toast("Enter details first!")
      return
    }
    // const token = jwt.sign(body,process.env.SECRET_KEY)

    fetch (`${import.meta.env.VITE_BACKEND_URL}/api/login`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email : email ,password : password})
    }
    ).then(async(response) => {
      response = await response.json()
      return response
    }).then((data)=>{
      localStorage.setItem("token",data.token);
      if (data.message == "Login successful"){
        toast("Successfully Logged In!!")
        setTimeout(()=>{
          window.location = "/profile"
        },3000)
      }
      else{
        toast("Incorrect credentials!")
      }
    }) 
  }

  const handleUserRegister = async (e)=>{
    e.preventDefault();
    if (email == "" || password == ""){
      console.log("Enter details first!")
      return
    }
    try {
      console.log("signin clicked!")
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`,{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email ,password : password,username:username})})
      .then(async(response) => {
          console.log("response :",response)
          response = await response.json()
          return response
      })
      .then((data) => {
        console.log("the user has been created as  :",data.user)
        localStorage.setItem("token",data.token)
        toast(data.message)
        if (data.message == "User created successfully!"){
          window.location = "/profile"
        }
      })
    } catch (error) {
      console.log(error)
    }

  }
  const handleLoginClick = ()=>{
    setLoginBtn(true);
    setSignupBtn(false);
  }
  const handleSignupClick = ()=>{
    setLoginBtn(false);
    setSignupBtn(true);
  }
  const handleUsernameChange = (e)=>{
    setUsername(e.target.value)
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
            <input type="text" className = "inputField" placeholder='Enter email' onChange={handleEmailChange}/>
            <input type="password" className = "inputField" placeholder='Enter password' onChange = {handlePasswordChange}/>
            {!loginBtn && <input type="text" className = "inputField" placeholder='Enter username' onChange = {handleUsernameChange}/>}
          </div>
        </div>
        <ToastContainer />
        <div className="submit">
          {loginBtn ? <button onClick = {handleUserLogin} className="loginBtn">Login</button> : <Link to = "/" className="loginBtn" onClick={handleUserRegister}>Signup</Link>} 
        </div>
      </div>
    </>
  )
}

export default Login;