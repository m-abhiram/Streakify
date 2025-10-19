import React from 'react'
import "./groq.css"
import { useState } from 'react'

function Chatbar() {
  const [query,setQuery] = useState("");
  return (
    <div className = "chatContainer">
      <div className="heading">Chat with our AI</div>
      <div className="chat">

      </div>
      <div className="bar">
        <input type="text" id="user-query" value = {query}/>
      </div>
    </div>
  )
}

export default Chatbar