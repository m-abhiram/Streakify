import { useEffect, useState } from 'react'
import React from 'react'
import "./Homepage.css"
import {Bars} from "react-loader-spinner"

function Journal() {
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const [journalCompleted,setJournalCompleted] = useState(false)

  useEffect( ()=>{
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/checkJournalEntry`,{
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({token : token})
    }).then(async (response)=>{
      response = await response.json()
      return response
    }).then(async(data)=>{
      console.log("data :",data.completed)
      setJournalCompleted(data.completed)
    })
    }
    ,[])

  function handleTitleChange(event){
    setTitle(event.target.value)
  }

  function handleBodyChange(event){
    setBody(event.target.value)
  }

  function handleJournalSave(){
    // finish this function to ensure you can save this into the database
    const token = localStorage.getItem("token")
    console.log("This is the title :",title);
    console.log("This is the body : \n",body);
    console.log("this is the token :",token);
    setTitle("")
    setBody("")
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/saveJournalEntry`,{
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({token : token ,title : title, body : body})
    }).then(async (response)=>{
      response = await response.json()
      return response
    }).then((data)=>{
      console.log(data)
    })

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/addPomocoins`,{
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : {token : token, increment : 5}
    }).then(async (response)=>{
      response = await response.json()
      return response
    }).then((data)=>{
      console.log("The data is :",data)
    })
  }

  return (
    <div className = "journal-completed-container">
      {journalCompleted ? 
        <div className = "journal-completed-container">
        <div className="journal-completed">
          <h1 className="journal-title">✅ Journal Completed!</h1>
          <p className="journal-text">You’ve completed your journal for today. Great job! Come back tomorrow .</p>
        </div>
      </div> 
      :
      <div className="journal">
        <div className='journal-heading'>
          <h1>Journal &nbsp; to &nbsp; introspect</h1>
        </div>
        <div className="journal-content">
          <div className="journal-title">
            <div className="journal-date">Date : {new Date().toLocaleDateString()}</div>
            <div className="title"><input type="text" className="title-inp" placeholder='Enter the title' value={title} onChange={handleTitleChange}/></div>
          </div>
          <div className="journal-body">
            <textarea className="body" rows = "11" placeholder='Write away!!' value={body} onChange={handleBodyChange}/>
          </div>
        <div className="journal-save">
          <button className="save-btn" onClick={handleJournalSave}>Save</button>
        </div>
        </div>
      </div>
      } 
    </div>
      
    
  )
}

export default Journal