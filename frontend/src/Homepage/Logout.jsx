import React from 'react'

function Logout() {

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    setTimeout(()=>{
      window.location = "/";
    },1000)
  }

  return (
    <div>
      <button className='logoutBtn' onClick={handleLogout}> Logout </button>
    </div>
  )
}

export default Logout