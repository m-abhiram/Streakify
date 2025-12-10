import React from 'react'
import "./groq.css"
import { useState } from 'react'

function Chatbar() {
  const [query,setQuery] = useState("");
  return (
    <div className = "chatContainer">
      <div className="heading">Chat with our AI</div>
      <div className="chat">
        <p className = "groqMessage">This is the message of groq</p>
        <p className = "myMessage">This is the message of me</p>
      </div>
      <div className="bar">
        <input type="text" id="user-query" value = {query}/>
      </div>
    </div>
  )
}

export default Chatbar