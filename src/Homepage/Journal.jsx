import { useState } from 'react'
import React from 'react'
import "./Homepage.css"


function Journal() {
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")

  function handleTitleChange(event){
    setTitle(event.target.value)
  }

  function handleBodyChange(event){
    setBody(event.target.value)
  }

  function handleJournalSave(){
    // finish this function to ensure you can save this into the database
    console.log("This is the title :",title)
    console.log("This is the body : \n",body)
    setTitle("")
    setBody("")
    // once saved provide some pomocoins for the user like 10 or somethng
  }
  return (
    <div className="journal">
      <div className='journal-heading'>
        <h1>Journal &nbsp; to &nbsp; introspect</h1>
      </div>
      <div className="journal-content">
        <div className="journal-title">
          <div className="journal-date">Date : 13 Feb 2025</div>
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
  )
}

export default Journal